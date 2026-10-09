<section id="testimonials" class="testimonials">
        <div class="container">
            <div class="section-header">
                <h<?= $sectionHeadingLevel ?> class="section-title" data-i18n="testimonialsTitle">Témoignages Clients</h<?= $sectionHeadingLevel ?>>
                <p class="section-subtitle" data-i18n="testimonialsSubtitle">
                    Ce que nos partenaires disent de notre travail
                </p>
            </div>
            <div class="testimonials-wrapper">
                <!-- Les avis (par défaut + ceux ajoutés par les clients et validés) sont
                     générés dynamiquement par renderTestimonials() dans script.js -->
                <div class="testimonials-carousel" id="testimonialsCarousel"></div>
                <div class="carousel-controls">
                    <button class="carousel-btn prev" onclick="moveCarousel(-1)" aria-label="Témoignage précédent">
                        <i class="fas fa-chevron-left" aria-hidden="true"></i>
                    </button>
                    <div class="carousel-dots" id="carouselDots"></div>
                    <button class="carousel-btn next" onclick="moveCarousel(1)" aria-label="Témoignage suivant">
                        <i class="fas fa-chevron-right" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
            <div class="testimonial-cta">
                <button class="btn btn-secondary" onclick="showAddTestimonialForm()">
                    <i class="fas fa-star" aria-hidden="true"></i>
                    <span data-i18n="leaveReview">Laisser un avis</span>
                </button>
            </div>

            <!-- Panneau de modération : visible uniquement en mode admin (?admin=1 + mot de passe) -->
            <div id="testimonialModeration" class="testimonial-moderation" style="display: none;">
                <h3><i class="fas fa-lock" aria-hidden="true"></i> Avis en attente de validation</h3>
                <div id="pendingTestimonialsList"></div>
            </div>
        </div>
    </section>

    <!-- Formulaire "Laisser un avis" -->
    