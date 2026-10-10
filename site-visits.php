<?php
declare(strict_types=1);

function siteVisitsDatabase(): PDO
{
    static $database = null;

    if ($database instanceof PDO) {
        return $database;
    }

    $host = getenv('FLEUTECH_DB_HOST') ?: '127.0.0.1';
    $port = getenv('FLEUTECH_DB_PORT') ?: '3306';
    $databaseName = getenv('FLEUTECH_DB_NAME') ?: 'formation';
    $username = getenv('FLEUTECH_DB_USER') ?: 'root';
    $password = getenv('FLEUTECH_DB_PASSWORD');

    $database = new PDO(
        "mysql:host={$host};port={$port};dbname={$databaseName};charset=utf8mb4",
        $username,
        $password === false ? '' : $password,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_EMULATE_PREPARES => false,
        ]
    );

    $database->exec(
        'CREATE TABLE IF NOT EXISTS `site_monthly_visits` (
            `month_start` DATE NOT NULL,
            `page_views` BIGINT UNSIGNED NOT NULL DEFAULT 0,
            `unique_visits` BIGINT UNSIGNED NOT NULL DEFAULT 0,
            PRIMARY KEY (`month_start`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci'
    );

    return $database;
}

function recordSiteVisit(): void
{
    if (getenv('VERCEL') === '1') {
        return;
    }

    if (session_status() !== PHP_SESSION_ACTIVE) {
        session_set_cookie_params([
            'httponly' => true,
            'secure' => !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off',
            'samesite' => 'Lax',
        ]);
        session_start();
    }

    $timezone = new DateTimeZone('America/Port-au-Prince');
    $monthStart = (new DateTimeImmutable('now', $timezone))->format('Y-m-01');
    $countUniqueVisit = ($_SESSION['site_visit_month'] ?? null) !== $monthStart;

    try {
        $statement = siteVisitsDatabase()->prepare(
            'INSERT INTO `site_monthly_visits` (`month_start`, `page_views`, `unique_visits`)
             VALUES (:month_start, 1, :unique_visit)
             ON DUPLICATE KEY UPDATE
                `page_views` = `page_views` + 1,
                `unique_visits` = `unique_visits` + :unique_increment'
        );
        $statement->execute([
            ':month_start' => $monthStart,
            ':unique_visit' => $countUniqueVisit ? 1 : 0,
            ':unique_increment' => $countUniqueVisit ? 1 : 0,
        ]);
        $_SESSION['site_visit_month'] = $monthStart;
    } catch (PDOException $error) {
        error_log('Impossible d’enregistrer une visite du site : ' . $error->getMessage());
    }
}
