<?php
declare(strict_types=1);

$availableSections = [
    'hero' => __DIR__ . '/sections/hero.php',
    'services' => __DIR__ . '/sections/services.php',
    'solutions' => __DIR__ . '/sections/solutions.php',
    'quote' => __DIR__ . '/sections/quote.php',
    'projects' => __DIR__ . '/sections/projects.php',
    'realizations' => __DIR__ . '/realizations.php',
    'tech-stack' => __DIR__ . '/sections/tech-stack.php',
    'blog' => __DIR__ . '/sections/blog.php',
    'conference' => __DIR__ . '/sections/conference.php',
    'testimonials' => __DIR__ . '/sections/testimonials.php',
    'contact' => __DIR__ . '/sections/contact.php',
    'visit-statistics' => __DIR__ . '/sections/visit-statistics.php',
];

$serverName = strtolower($_SERVER['SERVER_NAME'] ?? '');
$formationPageUrl = getenv('VERCEL') !== '1' && in_array($serverName, ['localhost', '127.0.0.1'], true)
    ? '/formation/'
    : 'conference-ia.php';

require_once __DIR__ . '/site-visits.php';
recordSiteVisit();
$visitsPlatform = getenv('VERCEL') === '1' ? 'vercel' : 'local';

foreach ($pageSections as $section) {
    if (!isset($availableSections[$section])) {
        throw new InvalidArgumentException('Section de page inconnue.');
    }
}

require __DIR__ . '/head.php';
?>
<body data-visits-platform="<?= htmlspecialchars($visitsPlatform, ENT_QUOTES, 'UTF-8') ?>">
<a class="skip-link" href="#main-content" data-i18n="skipToContent">Aller au contenu principal</a>
<?php require __DIR__ . '/header.php'; ?>
<main id="main-content" tabindex="-1">
    <?php $firstPageSection = $pageSections[0] ?? null; ?>
    <?php foreach ($pageSections as $section): ?>
        <?php $sectionHeadingLevel = (($currentPage ?? '') !== 'accueil' && $section === $firstPageSection) ? 1 : 2; ?>
        <?php require $availableSections[$section]; ?>
    <?php endforeach; ?>
</main>
<?php if (in_array('projects', $pageSections, true)): ?>
    <?php require __DIR__ . '/sections/project-modal.php'; ?>
<?php endif; ?>
<?php if (in_array('testimonials', $pageSections, true)): ?>
    <?php require __DIR__ . '/sections/testimonial-modal.php'; ?>
<?php endif; ?>
<?php require __DIR__ . '/sections/chatbot.php'; ?>
<?php require __DIR__ . '/sections/booking-modal.php'; ?>
<?php require __DIR__ . '/footer.php'; ?>
<script src="script.js"></script>
</body>
</html>
