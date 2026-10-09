<div class="chatbot-container">
        <div class="chatbot-header">
            <div class="chatbot-title">
                <div class="chatbot-avatar">
                    <i class="fas fa-robot" aria-hidden="true"></i>
                </div>
                <div class="chatbot-info">
                    <h4>Fleub AI</h4>
                    <p data-i18n="aiStatus">Assistant IA - En ligne</p>
                </div>
            </div>
            <button class="chatbot-close" onclick="toggleChatbot()" aria-label="Fermer le chat">
                <i class="fas fa-times" aria-hidden="true"></i>
            </button>
        </div>
        <div class="chatbot-messages" id="chatbotMessages">
            <div class="message ai-message">
                <div class="message-avatar">
                    <i class="fas fa-robot" aria-hidden="true"></i>
                </div>
                <div class="message-content">
                    <p data-i18n="aiHello">Bonjour! Je suis Fleub l'assistant IA de Fleutech. Comment puis-je vous aider aujourd'hui?</p>
                    <span class="message-time">...</span>
                </div>
            </div>
        </div>

        
        <div class="chatbot-quick-questions" id="quickQuestions" aria-live="polite"></div>
<div class="chatbot-faq-select-wrapper">
<div class="chatbot-faq-dropdown" id="chatbotFaqDropdown">
    <button type="button" class="chatbot-faq-toggle" id="chatbotFaqToggle">
        <span>Choisir une question</span>
        <i class="fas fa-chevron-down" aria-hidden="true"></i>
    </button>
    <div class="chatbot-faq-list" id="chatbotFaqList"></div>
</div>
</div>
        <div class="chatbot-persistent-nav">
            <button type="button" class="chatbot-nav-btn" onclick="goToChatbotMenu()">
                <span data-i18n="chatMainMenuBtn">↩️ Menu principal</span>
            </button>
            <button type="button" class="chatbot-nav-btn" onclick="toggleChatbot()">
                <span data-i18n="chatCloseBtn">❌ Fermer</span>
            </button>
        </div>
        <div class="chatbot-input">
            <input type="text" id="chatbotInput" placeholder="Posez votre question..." onkeypress="handleChatbotInput(event)">
            <button class="chatbot-send" onclick="sendChatbotMessage()" aria-label="Envoyer">
                <i class="fas fa-paper-plane" aria-hidden="true"></i>
            </button>
        </div>
    </div>
    <button class="chatbot-toggle" onclick="toggleChatbot()" aria-label="Ouvrir le chat">
        <i class="fas fa-comment-dots" aria-hidden="true"></i>
    </button>

    