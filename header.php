<header class="navbar">
  <div class="nav-container">
    <a class="logo" href="index.php" aria-label="Fleutech - Accueil">
      <img src="logo.jpeg" alt="" class="logo-icon">
      <span class="logo-text">Fleutech</span>
    </a>

    <nav class="nav-menu" id="navMenu" aria-label="Navigation principale">
      <a href="index.php" class="nav-link" data-i18n="home" <?= ($currentPage ?? '') === 'accueil' ? 'aria-current="page"' : '' ?>>Accueil</a>
      <a href="service.php" class="nav-link" data-i18n="services" <?= ($currentPage ?? '') === 'service' ? 'aria-current="page"' : '' ?>>Services</a>
      <a href="solution.php" class="nav-link" data-i18n="solutions" <?= ($currentPage ?? '') === 'solution' ? 'aria-current="page"' : '' ?>>Solutions</a>
      <a href="stack-tech.php" class="nav-link" data-i18n="techStack" <?= ($currentPage ?? '') === 'stack-tech' ? 'aria-current="page"' : '' ?>>Stack Tech</a>
      <a href="blog.php" class="nav-link" data-i18n="blog" <?= ($currentPage ?? '') === 'blog' ? 'aria-current="page"' : '' ?>>Blog</a>
      <a href="<?= htmlspecialchars($formationPageUrl, ENT_QUOTES, 'UTF-8') ?>" class="nav-link" data-i18n="training" <?= ($currentPage ?? '') === 'conference' ? 'aria-current="page"' : '' ?>>Formation</a>
      <a href="avis.php" class="nav-link" data-i18n="testimonials" <?= ($currentPage ?? '') === 'avis' ? 'aria-current="page"' : '' ?>>Avis</a>
      <a href="contact.php" class="nav-link" data-i18n="contact" <?= ($currentPage ?? '') === 'contact' ? 'aria-current="page"' : '' ?>>Contact</a>
    </nav>

    <div class="nav-actions">
      <div class="language-selector">
        <button id="currentLang" class="lang-btn" type="button" aria-haspopup="true" aria-expanded="false">FR</button>
        <div id="langDropdown" class="lang-dropdown">
          <a href="#" class="lang-option" data-lang="fr">Français</a>
          <a href="#" class="lang-option" data-lang="en">English</a>
          <a href="#" class="lang-option" data-lang="ht">Kreyòl</a>
        </div>
      </div>

      <button class="booking-btn" type="button" onclick="openBooking()">
        <i class="fas fa-calendar-check" aria-hidden="true"></i>
        <span data-i18n="bookNow">Prendre Rendez-vous</span>
      </button>

      <button class="mobile-menu-btn" id="mobileMenuBtn" type="button" aria-label="Ouvrir le menu">
        <i class="fas fa-bars" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</header>
