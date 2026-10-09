<?php
declare(strict_types=1);

$currentPage = 'conference';
$pageTitle = 'Conférence sur l’intelligence artificielle | Fleutech';
$pageDescription = 'Inscrivez-vous à la conférence sur l’intelligence artificielle du samedi 31 octobre 2026, de 9 h à 14 h, à Delmas 33.';
$pageSections = ['conference'];
$serverName = strtolower($_SERVER['SERVER_NAME'] ?? '');
if (in_array($serverName, ['localhost', '127.0.0.1'], true)) {
    header('Location: /formation/', true, 302);
    exit;
}
$formationApiEndpoint = '/api/formation';

require __DIR__ . '/includes/page-layout.php';
