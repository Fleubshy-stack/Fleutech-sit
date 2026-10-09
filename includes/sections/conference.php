<section id="conference" class="conference-section">
    <div class="container">
        <div class="section-header">
            <h<?= $sectionHeadingLevel ?> class="section-title">Conférence sur l’intelligence artificielle</h<?= $sectionHeadingLevel ?>>
            <p class="section-subtitle">
                Découvrez les possibilités de l’intelligence artificielle et échangez autour de ses usages.
            </p>
        </div>

        <div class="conference-details">
            <article class="conference-detail">
                <i class="fas fa-calendar-day" aria-hidden="true"></i>
                <h2>Date</h2>
                <p><time datetime="2026-10-31">Samedi 31 octobre 2026</time></p>
            </article>
            <article class="conference-detail">
                <i class="fas fa-clock" aria-hidden="true"></i>
                <h2>Heure</h2>
                <p>De 9 h à 14 h</p>
            </article>
            <article class="conference-detail">
                <i class="fas fa-location-dot" aria-hidden="true"></i>
                <h2>Lieu</h2>
                <p>L’Espace de l’Institution Chrétienne Mixte Les Érudits<br>Delmas 33, Rue Empereur #1</p>
            </article>
        </div>

        <div class="conference-registration" id="inscription">
            <div class="conference-registration-copy">
                <h2>Inscrivez-vous à la conférence</h2>
                <p>Remplissez le formulaire pour manifester votre intérêt. Nous vous contacterons pour confirmer votre inscription.</p>
                <a class="conference-back-link" href="blog.php">
                    <i class="fas fa-arrow-left" aria-hidden="true"></i> Retour au Blog
                </a>
            </div>

            <div class="contact-form-container">
                <form class="conference-registration-form" data-endpoint="<?= htmlspecialchars($formationApiEndpoint, ENT_QUOTES, 'UTF-8') ?>">
                    <p class="visually-hidden">
                        <label>Ne pas remplir si vous êtes humain : <input name="bot-field" tabindex="-1" autocomplete="off"></label>
                    </p>
                    <div class="form-group">
                        <label for="conferenceName">Nom complet</label>
                        <input type="text" id="conferenceName" name="name" autocomplete="name" maxlength="120" required>
                    </div>
                    <div class="form-group">
                        <label for="conferenceEmail">Adresse courriel</label>
                        <input type="email" id="conferenceEmail" name="email" autocomplete="email" maxlength="150" required>
                    </div>
                    <div class="form-group">
                        <label for="conferenceProfile">Vous êtes</label>
                        <select id="conferenceProfile" name="profile" required>
                            <option value="">Choisissez une option</option>
                            <option value="etudiant">Étudiant(e)</option>
                            <option value="ecolier">Écolier / Écolière</option>
                            <option value="autre">Autre</option>
                        </select>
                    </div>
                    <div class="form-group conference-conditional-field" id="conferenceStudyField" hidden>
                        <label for="conferenceStudyDomain">Quel est votre domaine d’étude ?</label>
                        <input type="text" id="conferenceStudyDomain" name="study_domain" maxlength="120" disabled>
                    </div>
                    <div class="form-group conference-conditional-field" id="conferenceClassField" hidden>
                        <label for="conferenceClass">Quelle classe fréquentez-vous ?</label>
                        <input type="text" id="conferenceClass" name="school_class" maxlength="80" disabled>
                    </div>
                    <div class="form-group">
                        <label for="conferencePhone">Téléphone (facultatif)</label>
                        <input type="tel" id="conferencePhone" name="phone" autocomplete="tel" maxlength="25">
                    </div>
                    <div class="form-group">
                        <label for="conferenceOrganization">Établissement ou organisation (facultatif)</label>
                        <input type="text" id="conferenceOrganization" name="organization" autocomplete="organization" maxlength="100">
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">
                        <i class="fas fa-user-plus" aria-hidden="true"></i> Envoyer mon inscription
                    </button>
                    <p class="conference-form-status" id="conferenceFormStatus" aria-live="polite"></p>
                    <p class="conference-privacy-note">Vos informations seront utilisées uniquement pour traiter cette demande d’inscription.</p>
                </form>
                <section class="conference-entry-ticket" id="conferenceEntryTicket" aria-labelledby="conferenceTicketTitle" hidden>
                    <div class="entry-ticket-heading">
                        <i class="fas fa-ticket" aria-hidden="true"></i>
                        <span>Fleutech · Carte d’entrée</span>
                    </div>
                    <h2 id="conferenceTicketTitle">Conférence sur l’intelligence artificielle</h2>
                    <p class="entry-ticket-attendee" id="conferenceTicketAttendee"></p>
                    <dl class="entry-ticket-details">
                        <div><dt>Date</dt><dd>Samedi 31 octobre 2026</dd></div>
                        <div><dt>Heure</dt><dd>9 h à 14 h</dd></div>
                        <div><dt>Lieu</dt><dd>Institution Chrétienne Mixte Les Érudits, Delmas 33, Rue Empereur #1</dd></div>
                    </dl>
                    <p class="entry-ticket-reference">Référence d’inscription : <strong id="conferenceTicketReference"></strong></p>
                    <div class="entry-ticket-actions">
                        <button class="btn btn-primary" id="downloadConferenceTicket" type="button">
                            <i class="fas fa-download" aria-hidden="true"></i> Télécharger ma carte
                        </button>
                        <button class="btn btn-secondary" id="printConferenceTicket" type="button">
                            <i class="fas fa-print" aria-hidden="true"></i> Imprimer / enregistrer en PDF
                        </button>
                    </div>
                    <p class="conference-privacy-note">Présentez cette carte à l’entrée le jour de la conférence.</p>
                </section>
            </div>
        </div>
    </div>
</section>
