<div id="addTestimonialModal" class="modal" role="dialog" aria-modal="true" aria-labelledby="addTestimonialModalTitle">
        <div class="modal-content">
            <div class="modal-header">
                <h3 id="addTestimonialModalTitle" data-i18n="leaveReviewTitle">Laisser un avis</h3>
                <button class="modal-close" onclick="closeModal('addTestimonialModal')" aria-label="Fermer">
                    <i class="fas fa-times" aria-hidden="true"></i>
                </button>
            </div>
            <div class="modal-body">
                <p class="testimonial-form-note" data-i18n="leaveReviewNote">
                    Votre avis sera visible sur le site après une courte validation par notre équipe.
                </p>
                <form id="addTestimonialForm" class="testimonial-form">
                    <div class="form-group">
                        <label for="testimonialName" data-i18n="contactName">Nom</label>
                        <input type="text" id="testimonialName" name="name" required maxlength="80">
                    </div>
                    <div class="form-group">
                        <label for="testimonialCompany" data-i18n="testimonialCompany">Entreprise / Fonction (optionnel)</label>
                        <input type="text" id="testimonialCompany" name="company" maxlength="100">
                    </div>
                    <div class="form-group">
                        <label for="testimonialRating" data-i18n="testimonialRating">Note</label>
                        <select id="testimonialRating" name="rating" required>
                            <option value="5">★★★★★ (5/5)</option>
                            <option value="4">★★★★☆ (4/5)</option>
                            <option value="3">★★★☆☆ (3/5)</option>
                            <option value="2">★★☆☆☆ (2/5)</option>
                            <option value="1">★☆☆☆☆ (1/5)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="testimonialText" data-i18n="testimonialText">Votre avis</label>
                        <textarea id="testimonialText" name="text" rows="4" required maxlength="500"></textarea>
                    </div>
                    <p class="visually-hidden">
                        <label>Ne pas remplir si vous êtes humain : <input type="text" id="testimonialHoneypot" name="honeypot"></label>
                    </p>
                    <button type="submit" class="btn btn-primary btn-block" data-i18n="submitReview">
                        <i class="fas fa-paper-plane" aria-hidden="true"></i> Envoyer mon avis
                    </button>
                </form>
            </div>
        </div>
    </div>

    