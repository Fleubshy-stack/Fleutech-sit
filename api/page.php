<?php
declare(strict_types=1);

$pages = [
    'index' => dirname(__DIR__) . '/index.php',
    'service' => dirname(__DIR__) . '/service.php',
    'solution' => dirname(__DIR__) . '/solution.php',
    'stack-tech' => dirname(__DIR__) . '/stack-tech.php',
    'blog' => dirname(__DIR__) . '/blog.php',
    'avis' => dirname(__DIR__) . '/avis.php',
    'contact' => dirname(__DIR__) . '/contact.php',
    'conference-ia' => dirname(__DIR__) . '/conference-ia.php',
    'statistiques' => dirname(__DIR__) . '/statistiques.php',
];

$page = $_GET['page'] ?? 'index';
if (!is_string($page) || !isset($pages[$page])) {
    http_response_code(404);
    header('Content-Type: text/plain; charset=utf-8');
    echo 'Page introuvable';
    exit;
}

require $pages[$page];
