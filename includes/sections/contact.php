<section id="contact" class="contact">
        <div class="container">
            <div class="contact-wrapper">
                <div class="contact-info">
                    <h<?= $sectionHeadingLevel ?> class="section-title" data-i18n="contactTitle">Contactez-nous</h<?= $sectionHeadingLevel ?>>
                    <p class="section-subtitle" data-i18n="contactSubtitle">
                        Nous sommes là pour répondre à toutes vos questions
                    </p>
                    <div class="contact-details">
                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
                            </div>
                            <div class="contact-text">
                                <h4 data-i18n="address">Adresse</h4>
                                <p>Port-au-Prince, Ouest, Haiti</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="fas fa-phone" aria-hidden="true"></i>
                            </div>
                            <div class="contact-text">
                                <h4 data-i18n="phone">Téléphone</h4>
                                <p><a href="tel:+50955525871">+509 55525871</a></p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="fas fa-envelope" aria-hidden="true"></i>
                            </div>
                            <div class="contact-text">
                                <h4 data-i18n="email">Email</h4>
                                <p><a href="mailto:infofleutech@yahoo.com">infofleutech@yahoo.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="social-links">
                        <a href="https://tiktok.com" class="social-btn" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                            <i class="fab fa-tiktok" aria-hidden="true"></i>
                        </a>
                        <a href="https://x.com/fleubeus509" class="social-btn" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X">
                            <i class="fab fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61592271817120" class="social-btn" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <i class="fab fa-facebook-f" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div class="contact-form-container">
                    <form class="contact-form">
                        <p class="visually-hidden">
                            <label>Ne pas remplir si vous êtes humain : <input name="bot-field"></label>
                        </p>
                        <div class="form-group">
                            <label for="contactName2" data-i18n="contactName">Nom</label>
                            <input type="text" id="contactName2" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="contactEmail2" data-i18n="contactEmail">Email</label>
                            <input type="email" id="contactEmail2" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="contactSubject" data-i18n="contactSubject">Sujet</label>
                            <input type="text" id="contactSubject" name="subject" required>
                        </div>
                        <div class="form-group">
                            <label for="contactMessage" data-i18n="contactMessage">Message</label>
                            <textarea id="contactMessage" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">
                            <i class="fas fa-paper-plane" aria-hidden="true"></i> <span data-i18n="sendMessage">Envoyer Message</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    