<section id="blog" class="blog">
        <div class="container">
            <div class="section-header">
                <h<?= $sectionHeadingLevel ?> class="section-title" data-i18n="blogTitle">Blog & Actualités Tech</h<?= $sectionHeadingLevel ?>>
                <p class="section-subtitle" data-i18n="blogSubtitle">
                    Articles sur la sécurité informatique, le développement web et les astuces tech
                </p>
            </div>
            <div class="blog-grid">
                <article class="blog-card">
                    <div class="blog-image">
                        <div class="blog-category">Conférence</div>
                        <div class="blog-icon">
                            <i class="fas fa-robot" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="blog-content">
                        <h3 class="blog-title">
                            <a href="<?= htmlspecialchars($formationPageUrl, ENT_QUOTES, 'UTF-8') ?>">Conférence sur l’intelligence artificielle</a>
                        </h3>
                        <p class="blog-desc">
                            Rejoignez-nous le samedi 31 octobre 2026 à Delmas 33 pour une conférence consacrée à l’intelligence artificielle.
                        </p>
                        <div class="blog-meta">
                            <span class="blog-date"><i class="fas fa-calendar" aria-hidden="true"></i> 31 octobre 2026</span>
                            <span class="blog-author"><i class="fas fa-clock" aria-hidden="true"></i> 9 h à 14 h</span>
                        </div>
                        <a href="<?= htmlspecialchars($formationPageUrl, ENT_QUOTES, 'UTF-8') ?>" class="blog-link">
                            <span>Informations et inscription</span>
                            <i class="fas fa-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </article>

                <article class="blog-card">
                    <div class="blog-image">
                        <div class="blog-category" data-i18n="catSecurity">Sécurité</div>
                        <div class="blog-icon">
                            <i class="fas fa-shield-alt" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="blog-content">
                        <h3 class="blog-title">
                            <a href="#">5 Mesures de Sécurité Informatique Indispensables pour Votre PME</a>
                        </h3>
                        <p class="blog-desc">
                            Découvrez les 5 mesures essentielles pour protéger votre entreprise contre les cyberattaques...
                        </p>
                        <div class="blog-meta">
                            <span class="blog-date"><i class="fas fa-calendar" aria-hidden="true"></i> 15 Juin 2026</span>
                            <span class="blog-author"><i class="fas fa-user" aria-hidden="true"></i> Par Fleutech</span>
                        </div>
                        <a href="#" class="blog-link">
                            <span data-i18n="readMore">Lire Plus</span>
                            <i class="fas fa-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </article>

                <article class="blog-card">
                    <div class="blog-image">
                        <div class="blog-category" data-i18n="catDev">Développement</div>
                        <div class="blog-icon">
                            <i class="fas fa-code" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="blog-content">
                        <h3 class="blog-title">
                            <a href="#">Pourquoi Votre Entreprise a Besoin d'un Site Web Performant en 2026</a>
                        </h3>
                        <p class="blog-desc">
                            Un site web rapide et optimisé n'est plus une option, mais une nécessité pour réussir...
                        </p>
                        <div class="blog-meta">
                            <span class="blog-date"><i class="fas fa-calendar" aria-hidden="true"></i> 10 Juin 2026</span>
                            <span class="blog-author"><i class="fas fa-user" aria-hidden="true"></i> Par Fleutech</span>
                        </div>
                        <a href="#" class="blog-link">
                            <span data-i18n="readMore">Lire Plus</span>
                            <i class="fas fa-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </article>

                <article class="blog-card">
                    <div class="blog-image">
                        <div class="blog-category" data-i18n="catWindows">Windows</div>
                        <div class="blog-icon">
                            <i class="fab fa-windows" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="blog-content">
                        <h3 class="blog-title">
                            <a href="#">10 Astuces Windows pour Optimiser la Performance de Votre PC</a>
                        </h3>
                        <p class="blog-desc">
                            Améliorez la vitesse et la stabilité de votre ordinateur Windows avec ces astuces simples...
                        </p>
                        <div class="blog-meta">
                            <span class="blog-date"><i class="fas fa-calendar" aria-hidden="true"></i> 5 Juin 2026</span>
                            <span class="blog-author"><i class="fas fa-user" aria-hidden="true"></i> Par Fleutech</span>
                        </div>
                        <a href="#" class="blog-link">
                            <span data-i18n="readMore">Lire Plus</span>
                            <i class="fas fa-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </article>
            </div>
            <div class="blog-cta">
                <a href="#" class="btn btn-secondary">
                    <i class="fas fa-book" aria-hidden="true"></i> <span data-i18n="viewAllArticles">Voir Tous les Articles</span>
                </a>
            </div>
        </div>
    </section>

    