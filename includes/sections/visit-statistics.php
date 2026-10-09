<?php
declare(strict_types=1);

$statisticsError = false;
$timezone = new DateTimeZone('America/Port-au-Prince');
$currentMonth = new DateTimeImmutable('first day of this month', $timezone);
$monthNames = [
    'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
    'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
];
$reportMonth = [
    'label' => ucfirst($monthNames[(int) $currentMonth->format('n') - 1] . ' ' . $currentMonth->format('Y')),
    'page_views' => 0,
    'unique_visits' => 0,
];

try {
    $statement = siteVisitsDatabase()->prepare(
        'SELECT `page_views`, `unique_visits`
         FROM `site_monthly_visits`
         WHERE `month_start` = :month_start'
    );
    $statement->execute([':month_start' => $currentMonth->format('Y-m-d')]);
    $monthTotals = $statement->fetch(PDO::FETCH_ASSOC);
    if ($monthTotals !== false) {
        $reportMonth['page_views'] = (int) $monthTotals['page_views'];
        $reportMonth['unique_visits'] = (int) $monthTotals['unique_visits'];
    }
} catch (PDOException $error) {
    error_log('Impossible de charger le relevé mensuel des visites : ' . $error->getMessage());
    $statisticsError = true;
}

$barWidth = $reportMonth['page_views'] > 0 ? 100 : 0;
?>
<section id="statistiques" class="visit-statistics-section">
    <div class="container">
        <div class="section-header">
            <h<?= $sectionHeadingLevel ?> class="section-title">Fréquentation du site</h<?= $sectionHeadingLevel ?>>
            <p class="section-subtitle">Relevé des visites et des pages consultées pour <?= htmlspecialchars($reportMonth['label'], ENT_QUOTES, 'UTF-8') ?>.</p>
        </div>

        <?php if ($statisticsError): ?>
            <p class="conference-form-status is-error" role="alert">
                Le relevé n’a pas pu être chargé. Vérifiez que le serveur MySQL de XAMPP est démarré.
            </p>
        <?php else: ?>
            <p class="visit-statistics-note">
                Une visite correspond à une session comptée une fois par mois. Aucune adresse IP n’est enregistrée.
            </p>
            <div class="visit-statistics-list">
                <article class="visit-month-card">
                    <div class="visit-month-summary">
                        <h2><?= htmlspecialchars($reportMonth['label'], ENT_QUOTES, 'UTF-8') ?></h2>
                        <p><strong><?= number_format($reportMonth['unique_visits'], 0, ',', ' ') ?></strong> visites</p>
                        <p><strong><?= number_format($reportMonth['page_views'], 0, ',', ' ') ?></strong> pages vues</p>
                    </div>
                    <div class="visit-month-bar" role="img" aria-label="<?= htmlspecialchars((string) $reportMonth['page_views'], ENT_QUOTES, 'UTF-8') ?> pages vues">
                        <span style="width: <?= $barWidth ?>%"></span>
                    </div>
                </article>
            </div>
        <?php endif; ?>
    </div>
</section>
