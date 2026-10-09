<section id="realizations" class="realizations">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title" data-i18n="realizationsTitle">Nos réalisations</h2>
                <p class="section-subtitle" data-i18n="realizationsSubtitle">
                    Découvrez les projets et solutions réalisés par Fleutech
                </p>
            </div>
            <div id="realizationsGrid" class="realizations-grid">
                <div class="loading-realizations" data-i18n="loadingProjects">
                    <i class="fas fa-spinner fa-spin" aria-hidden="true"></i> Chargement des projets...
                </div>
            </div>
            <div class="realizations-cta" id="realizationsCta" style="display: none;">
                <button class="btn btn-secondary" onclick="showAddRealizationForm()" data-i18n="addRealization">
                    <i class="fas fa-plus" aria-hidden="true"></i> Ajouter une Réalisation
                </button>
            </div>
        </div>
    </section>

    <div id="addRealizationModal" class="modal" role="dialog" aria-modal="true" aria-labelledby="addRealizationModalTitle">
        <div class="modal-content">
            <div class="modal-header">
                <h3 id="addRealizationModalTitle" data-i18n="addRealizationTitle">Ajouter une Réalisation</h3>
                <button class="modal-close" onclick="closeModal('addRealizationModal')" aria-label="Fermer">
                    <i class="fas fa-times" aria-hidden="true"></i>
                </button>
            </div>
            <div class="modal-body">
                <form id="addRealizationForm" class="realization-form">
                    <div class="form-group">
                        <label for="realizationTitle" data-i18n="realizationTitle">Titre</label>
                        <input type="text" id="realizationTitle" name="title" required>
                    </div>
                    <div class="form-group">
                        <label for="realizationDesc" data-i18n="realizationDesc">Description</label>
                        <textarea id="realizationDesc" name="description" rows="4" required></textarea>
                    </div>
                    <div class="form-group">
                        <label for="realizationCategory" data-i18n="realizationCategory">Catégorie</label>
                        <select id="realizationCategory" name="category">
                            <option value="web">Développement Web</option>
                            <option value="security">Cybersécurité</option>
                            <option value="network">Solutions Réseau</option>
                            <option value="support">Support Informatique</option>
                            <option value="training">Formation</option>
                            <option value="other">Autre</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="realizationImage" data-i18n="realizationImage">Photo (JPG/PNG)</label>
                        <input type="file" id="realizationImage" name="imageFile" accept="image/png, image/jpeg, image/webp">
                    </div>
                    <div class="form-group">
                        <label for="realizationTech" data-i18n="realizationTech">Technologies (séparées par virgule)</label>
                        <input type="text" id="realizationTech" name="tech" placeholder="React, Node.js, MongoDB">
                    </div>
                    <button type="submit" class="btn btn-primary btn-block" data-i18n="addRealizationSubmit">
                        <i class="fas fa-plus" aria-hidden="true"></i> Ajouter
                    </button>
                </form>
            </div>
        </div>
    </div>

    