<div id="projectModal" class="modal" role="dialog" aria-modal="true" aria-labelledby="modalProjectName">
        <div class="modal-content">
            <div class="modal-header">
                <h3 id="modalProjectName"></h3>
                <button class="modal-close" onclick="closeModal('projectModal')" aria-label="Fermer">
                    <i class="fas fa-times" aria-hidden="true"></i>
                </button>
            </div>
            <div class="modal-body">
                <div id="modalProjectImage"></div>
                <p id="modalProjectDesc"></p>
                <div class="modal-problem">
                    <h4 data-i18n="problemTitle">Problème Résolu:</h4>
                    <p id="modalProjectProblem"></p>
                </div>
                <div class="modal-tech">
                    <h4 data-i18n="techUsed">Technologies Utilisées:</h4>
                    <div id="modalProjectTech"></div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" onclick="openQuoteForm()" data-i18n="contactForProject">
                    <i class="fas fa-envelope" aria-hidden="true"></i> Contacter pour un Projet Similaire
                </button>
            </div>
        </div>
    </div>

    