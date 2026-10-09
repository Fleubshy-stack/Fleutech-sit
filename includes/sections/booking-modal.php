<div id="bookingModal" class="modal" role="dialog" aria-modal="true" aria-labelledby="bookingModalTitle">
        <div class="modal-content modal-large">
            <div class="modal-header">
                <h3 id="bookingModalTitle" data-i18n="bookingTitle">Prendre Rendez-vous</h3>
                <button class="modal-close" onclick="closeModal('bookingModal')" aria-label="Fermer">
                    <i class="fas fa-times" aria-hidden="true"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="booking-intro">
                    <p data-i18n="bookingIntro">
                        Réservez en un clic un appel de consultation avec un de nos experts
                    </p>
                </div>
                <div class="calendly-wrapper">
                    <iframe
                        src="https://calendly.com/infofleutech"
                        width="100%"
                        height="600"
                        frameborder="0"
                        title="Réservation de consultation Fleutech"
                        class="calendly-iframe">
                    </iframe>
                </div>
                <p class="booking-note" data-i18n="bookingNote">
                    💡 Vous recevrez un email de confirmation immédiatement après la réservation
                </p>
            </div>
        </div>
    </div>

    