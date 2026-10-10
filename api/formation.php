<?php
declare(strict_types=1);

if (getenv('VERCEL') === '1') {
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    http_response_code(410);
    echo json_encode([
        'ok' => false,
        'error' => 'Utilisez le point d’inscription en ligne.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

require dirname(__DIR__, 2) . '/formation/api/formation.php';
