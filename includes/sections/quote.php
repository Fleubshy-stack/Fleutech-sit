<section id="quote" class="quote-section">
        <div class="container">
            <div class="quote-wrapper">
                <div class="quote-header">
                    <h2 class="section-title" data-i18n="quoteTitle">Formulaire de Devis</h2>
                    <p class="section-subtitle" data-i18n="quoteSubtitle">
                        Découvrez le coût de votre projet en quelques étapes simples
                    </p>
                </div>
                <div class="quote-form-container">
                    <div class="quote-progress">
                        <div class="progress-step active" data-step="1">
                            <div class="step-number">1</div>
                            <div class="step-label" data-i18n="step1">Service</div>
                        </div>
                        <div class="progress-line"></div>
                        <div class="progress-step" data-step="2">
                            <div class="step-number">2</div>
                            <div class="step-label" data-i18n="step2">Besoins</div>
                        </div>
                        <div class="progress-line"></div>
                        <div class="progress-step" data-step="3">
                            <div class="step-number">3</div>
                            <div class="step-label" data-i18n="step3">Infos</div>
                        </div>
                        <div class="progress-line"></div>
                        <div class="progress-step" data-step="4">
                            <div class="step-number">4</div>
                            <div class="step-label" data-i18n="step4">Devis</div>
                        </div>
                    </div>

                    <form id="quoteForm" class="quote-form">
                        <p class="visually-hidden">
                            <label>Ne pas remplir si vous êtes humain : <input name="bot-field"></label>
                        </p>
                        <div class="quote-step active" data-step="1">
                            <h3 class="step-title" data-i18n="step1Title">Choisissez votre service</h3>
                            <div class="service-selection">
                                <label class="service-option">
                                    <input type="checkbox" name="service" value="development">
                                    <div class="service-checkbox">
                                        <i class="fas fa-code" aria-hidden="true"></i>
                                    </div>
                                    <div class="service-label">
                                        <span data-i18n="devWeb">Développement Web</span>
                                        <small data-i18n="devWebShort">Sites & applications web</small>
                                    </div>
                                </label>
                                <label class="service-option">
                                    <input type="checkbox" name="service" value="security">
                                    <div class="service-checkbox">
                                        <i class="fas fa-shield-alt" aria-hidden="true"></i>
                                    </div>
                                    <div class="service-label">
                                        <span data-i18n="cyberSec">Cybersécurité</span>
                                        <small data-i18n="cyberSecShort">Protection & audit</small>
                                    </div>
                                </label>
                                <label class="service-option">
                                    <input type="checkbox" name="service" value="support">
                                    <div class="service-checkbox">
                                        <i class="fas fa-headset" aria-hidden="true"></i>
                                    </div>
                                    <div class="service-label">
                                        <span data-i18n="support">Support Informatique</span>
                                        <small data-i18n="supportShort">Assistance 24/7</small>
                                    </div>
                                </label>
                                <label class="service-option">
                                    <input type="checkbox" name="service" value="network">
                                    <div class="service-checkbox">
                                        <i class="fas fa-network-wired" aria-hidden="true"></i>
                                    </div>
                                    <div class="service-label">
                                        <span data-i18n="network">Solutions Réseau</span>
                                        <small data-i18n="networkShort">Infrastructure réseau</small>
                                    </div>
                                </label>
                            </div>
                            <button type="button" class="btn btn-primary" onclick="nextStep(2)" data-i18n="next">
                                <i class="fas fa-arrow-right" aria-hidden="true"></i> Suivant
                            </button>
                        </div>

                        <div class="quote-step" data-step="2">
                            <h3 class="step-title" data-i18n="step2Title">Décrivez vos besoins</h3>
                            <div class="needs-selection">
                                <label class="needs-option">
                                    <input type="checkbox" name="needs" value="responsive">
                                    <div class="needs-checkbox">
                                        <i class="fas fa-mobile-alt" aria-hidden="true"></i>
                                    </div>
                                    <span data-i18n="needResponsive">Site responsive</span>
                                </label>
                                <label class="needs-option">
                                    <input type="checkbox" name="needs" value="seo">
                                    <div class="needs-checkbox">
                                        <i class="fas fa-search" aria-hidden="true"></i>
                                    </div>
                                    <span data-i18n="needSEO">Optimisation SEO</span>
                                </label>
                                <label class="needs-option">
                                    <input type="checkbox" name="needs" value="ecommerce">
                                    <div class="needs-checkbox">
                                        <i class="fas fa-shopping-cart" aria-hidden="true"></i>
                                    </div>
                                    <span data-i18n="needEcommerce">E-commerce</span>
                                </label>
                                <label class="needs-option">
                                    <input type="checkbox" name="needs" value="database">
                                    <div class="needs-checkbox">
                                        <i class="fas fa-database" aria-hidden="true"></i>
                                    </div>
                                    <span data-i18n="needDatabase">Base de données</span>
                                </label>
                                <label class="needs-option">
                                    <input type="checkbox" name="needs" value="api">
                                    <div class="needs-checkbox">
                                        <i class="fas fa-plug" aria-hidden="true"></i>
                                    </div>
                                    <span data-i18n="needAPI">Intégration API</span>
                                </label>
                                <label class="needs-option">
                                    <input type="checkbox" name="needs" value="maintenance">
                                    <div class="needs-checkbox">
                                        <i class="fas fa-wrench" aria-hidden="true"></i>
                                    </div>
                                    <span data-i18n="needMaintenance">Maintenance régulière</span>
                                </label>
                            </div>
                            <div class="form-buttons">
                                <button type="button" class="btn btn-secondary" onclick="prevStep(1)" data-i18n="back">
                                    <i class="fas fa-arrow-left" aria-hidden="true"></i> Retour
                                </button>
                                <button type="button" class="btn btn-primary" onclick="nextStep(3)" data-i18n="next">
                                    <i class="fas fa-arrow-right" aria-hidden="true"></i> Suivant
                                </button>
                            </div>
                        </div>

                        <div class="quote-step" data-step="3">
                            <h3 class="step-title" data-i18n="step3Title">Vos informations</h3>
                            <div class="form-group">
                                <label for="companyName" data-i18n="companyName">Nom de l'entreprise</label>
                                <input type="text" id="companyName" name="company" required>
                            </div>
                            <div class="form-group">
                                <label for="contactName" data-i18n="contactName">Nom du contact</label>
                                <input type="text" id="contactName" name="name" required>
                            </div>
                            <div class="form-group">
                                <label for="contactEmail" data-i18n="contactEmail">Email</label>
                                <input type="email" id="contactEmail" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="contactPhone" data-i18n="contactPhone">Téléphone</label>
                                <input type="tel" id="contactPhone" name="phone" required>
                            </div>
                            <div class="form-group">
                                <label for="budget" data-i18n="budget">Budget estimé</label>
                                <select id="budget" name="budget">
                                    <option value="" data-i18n="budgetSelect">Sélectionner...</option>
                                    <option value="500-1000" data-i18n="budget1">500$ - 1000$</option>
                                    <option value="1000-3000" data-i18n="budget2">1000$ - 3000$</option>
                                    <option value="3000-5000" data-i18n="budget3">3000$ - 5000$</option>
                                    <option value="5000+" data-i18n="budget4">5000$+</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="message" data-i18n="message">Message (optionnel)</label>
                                <textarea id="message" name="message" rows="4"></textarea>
                            </div>
                            <div class="form-buttons">
                                <button type="button" class="btn btn-secondary" onclick="prevStep(2)" data-i18n="back">
                                    <i class="fas fa-arrow-left" aria-hidden="true"></i> Retour
                                </button>
                                <button type="button" class="btn btn-primary" onclick="submitQuote()" data-i18n="getQuote">
                                    <i class="fas fa-calculator" aria-hidden="true"></i> Obtenir Devis
                                </button>
                            </div>
                        </div>

                        <div class="quote-step" data-step="4">
                            <div class="quote-success">
                                <div class="success-icon">
                                    <i class="fas fa-check-circle" aria-hidden="true"></i>
                                </div>
                                <h3 class="success-title" data-i18n="quoteSuccessTitle">Devis Généré!</h3>
                                <p class="success-message" data-i18n="quoteSuccessMessage">
                                    Votre devis estimatif est prêt. Un membre de notre équipe vous contactera dans les 24h pour confirmer.
                                </p>
                                <div class="quote-estimate">
                                    <div class="estimate-header" data-i18n="estimateTitle">Estimation:</div>
                                    <div class="estimate-amount" id="estimateAmount">850$ - 1200$</div>
                                    <div class="estimate-period" data-i18n="estimatePeriod">Pour votre projet</div>
                                </div>
                                <div class="success-actions">
                                    <button type="button" class="btn btn-primary" onclick="openBooking()" data-i18n="bookConsultation">
                                        <i class="fas fa-calendar-alt" aria-hidden="true"></i> Prendre Rendez-vous
                                    </button>
                                    <button type="button" class="btn btn-secondary" onclick="resetQuoteForm()" data-i18n="newQuote">
                                        <i class="fas fa-redo" aria-hidden="true"></i> Nouveau Devis
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    