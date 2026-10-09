<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function respond(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_UNICODE);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, ['ok' => false, 'error' => 'Méthode non autorisée']);
}

$payload = json_decode(file_get_contents('php://input') ?: '', true);
$registration = is_array($payload) ? ($payload['registration'] ?? null) : null;
if (!is_array($registration)) {
    respond(400, ['ok' => false, 'error' => 'Inscription invalide']);
}

if (isset($registration['bot-field']) && is_string($registration['bot-field']) && trim($registration['bot-field']) !== '') {
    respond(200, ['ok' => true]);
}

$name = $registration['name'] ?? null;
$email = $registration['email'] ?? null;
$profile = $registration['profile'] ?? null;
$studyDomain = $registration['study_domain'] ?? '';
$schoolClass = $registration['school_class'] ?? '';
$phone = $registration['phone'] ?? '';
$organization = $registration['organization'] ?? '';

if (!is_string($name) || trim($name) === '' || strlen($name) > 120) {
    respond(400, ['ok' => false, 'error' => 'Nom invalide']);
}
if (!is_string($email) || strlen($email) > 150 || !filter_var(trim($email), FILTER_VALIDATE_EMAIL)) {
    respond(400, ['ok' => false, 'error' => 'Adresse courriel invalide']);
}
if (!in_array($profile, ['etudiant', 'ecolier', 'autre'], true)) {
    respond(400, ['ok' => false, 'error' => 'Veuillez choisir votre profil']);
}
if ($profile === 'etudiant' && (!is_string($studyDomain) || trim($studyDomain) === '' || strlen($studyDomain) > 120)) {
    respond(400, ['ok' => false, 'error' => 'Le domaine d’étude est obligatoire pour un étudiant']);
}
if ($profile === 'ecolier' && (!is_string($schoolClass) || trim($schoolClass) === '' || strlen($schoolClass) > 80)) {
    respond(400, ['ok' => false, 'error' => 'La classe fréquentée est obligatoire pour un écolier']);
}
if (!is_string($phone) || strlen($phone) > 25 || !is_string($organization) || strlen($organization) > 100) {
    respond(400, ['ok' => false, 'error' => 'Téléphone ou organisation invalide']);
}

try {
    $host = getenv('FLEUTECH_DB_HOST') ?: '127.0.0.1';
    $port = getenv('FLEUTECH_DB_PORT') ?: '3306';
    $database = getenv('FLEUTECH_DB_NAME') ?: 'formation';
    $username = getenv('FLEUTECH_DB_USER') ?: 'root';
    $password = getenv('FLEUTECH_DB_PASSWORD');
    $password = $password === false ? '' : $password;

    $pdo = new PDO(
        "mysql:host={$host};port={$port};dbname={$database};charset=utf8mb4",
        $username,
        $password,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_EMULATE_PREPARES => false,
        ]
    );

    $choice = match ($profile) {
        'etudiant' => 'Étudiant(e) - Domaine : ' . trim($studyDomain),
        'ecolier' => 'Écolier / Écolière - Classe : ' . trim($schoolClass),
        default => 'Autre',
    };

    $choiceLength = function_exists('mb_strlen') ? mb_strlen($choice, 'UTF-8') : strlen($choice);
    if ($choiceLength > 100) {
        respond(400, ['ok' => false, 'error' => 'Le domaine ou la classe est trop long (100 caractères maximum au total).']);
    }

    $statement = $pdo->prepare(
        'INSERT INTO `inscription a la formation ia`
            (`nom_complet`, `email`, `choix_etude`, `Telephone`, `etablissement`)
         VALUES
            (:name, :email, :choice, :phone, :organization)'
    );
    $statement->execute([
        ':name' => trim($name),
        ':email' => strtolower(trim($email)),
        ':choice' => $choice,
        ':phone' => trim($phone),
        ':organization' => trim($organization),
    ]);

    $registrationId = $pdo->lastInsertId();
    if ($registrationId === '0') {
        throw new RuntimeException('La base de données n’a pas fourni de numéro d’inscription.');
    }

    respond(201, ['ok' => true, 'registration_id' => $registrationId]);
} catch (Throwable $error) {
    error_log('Impossible d’enregistrer une inscription dans MySQL : ' . $error->getMessage());
    respond(500, ['ok' => false, 'error' => 'Impossible d’enregistrer l’inscription']);
}
