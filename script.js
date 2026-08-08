// ================================
// FLEUTECH - SCRIPT PRINCIPAL
// ================================
// Ce fichier est désormais la SEULE source des traductions du site.
// Le <script> intégré qui existait dans index.html a été retiré pour
// éviter le conflit "const translations already declared".

// Traductions (dictionnaire complet — une clé par attribut data-i18n du HTML)
const translations = {
    fr: {
        home: "Accueil", services: "Services", solutions: "Solutions", projects: "Projets",
        techStack: "Stack Tech", blog: "Blog", testimonials: "Avis", contact: "Contact",
        bookNow: "Prendre Rendez-vous", getQuote: "Demander un Devis",
        heroTitle1: "Innover aujourd'hui", heroTitle2: "pour réussir demain",
        heroSubtitle: "Votre partenaire de confiance pour des solutions informatiques innovantes et performantes",
        statProjects: "Projets Réalisés", statSatisfaction: "Satisfaction Client", statSupport: "Support Disponible",

        servicesTitle: "Nos Services",
        servicesSubtitle: "Des expertises techniques de pointe pour répondre à tous vos besoins informatiques",
        devWeb: "Développement Web", devWebShort: "Création de sites et applications web modernes et performants",
        devWebFeat1: "Sites web responsifs", devWebFeat2: "Applications web complexes", devWebFeat3: "E-commerce & plateformes",
        devWebFeat4: "Optimisation performance", devWebFeat5: "SEO optimisation",
        cyberSec: "Cybersécurité", cyberSecShort: "Protection de vos systèmes et données contre les menaces numériques",
        cyberSecFeat1: "Audit de sécurité", cyberSecFeat2: "Protection contre les attaques", cyberSecFeat3: "Gestion des vulnérabilités",
        cyberSecFeat4: "Formation sécurité", cyberSecFeat5: "Conformité réglementaire",
        support: "Support Informatique", supportShort: "Assistance technique 24/7 pour votre infrastructure informatique",
        supportFeat1: "Support 24/7", supportFeat2: "Maintenance préventive", supportFeat3: "Résolution rapide",
        supportFeat4: "Assistance à distance", supportFeat5: "Gestion incidents",
        network: "Solutions Réseau", networkShort: "Infrastructure réseau robuste et performante pour votre entreprise",
        networkFeat1: "Installation réseau", networkFeat2: "Configuration serveurs", networkFeat3: "Sécurité réseau",
        networkFeat4: "Cloud integration", networkFeat5: "Monitoring 24/7",
        flipCard: "Survoler pour plus", learnMore: "Plus d'infos",

        solutionsTitle: "Solutions Clés en Main",
        solutionsSubtitle: "Des packs de services adaptés à vos besoins et à votre budget",
        popularBadge: "Populaire", recommendedBadge: "Recommandé", perMonth: "/mois", choosePack: "Choisir ce Pack",
        packStartup: "Pack Startup", packStartupDesc: "Pour les entreprises qui démarrent et veulent une base solide",
        packStartupFeat1: "Site web responsive", packStartupFeat2: "Support 9h-18h", packStartupFeat3: "Maintenance mensuelle",
        packStartupFeat4: "SEO basique", packStartupFeat5: "10h développement/mois",
        packSecurity: "Pack Sécurité PME", packSecurityDesc: "Protection complète pour les entreprises de taille moyenne",
        packSecurityFeat1: "Audit sécurité complet", packSecurityFeat2: "Protection 24/7", packSecurityFeat3: "Backup automatique",
        packSecurityFeat4: "Formation équipe", packSecurityFeat5: "Conformité réglementaire", packSecurityFeat6: "Support prioritaire",
        packEnterprise: "Pack Entreprise", packEnterpriseDesc: "Solution complète pour les grandes entreprises",
        packEnterpriseFeat1: "Tout inclus Pack PME", packEnterpriseFeat2: "Infrastructure réseau", packEnterpriseFeat3: "Cloud integration",
        packEnterpriseFeat4: "Développement dédié", packEnterpriseFeat5: "Support 24/7 prioritaire",
        packEnterpriseFeat6: "40h développement/mois", packEnterpriseFeat7: "Expert dédié",

        quoteTitle: "Formulaire de Devis", quoteSubtitle: "Découvrez le coût de votre projet en quelques étapes simples",
        step1: "Service", step2: "Besoins", step3: "Infos", step4: "Devis",
        step1Title: "Choisissez votre service", step2Title: "Décrivez vos besoins", step3Title: "Vos informations",
        needResponsive: "Site responsive", needSEO: "Optimisation SEO", needEcommerce: "E-commerce",
        needDatabase: "Base de données", needAPI: "Intégration API", needMaintenance: "Maintenance régulière",
        companyName: "Nom de l'entreprise", contactName: "Nom du contact", contactEmail: "Email",
        contactPhone: "Téléphone", budget: "Budget estimé", budgetSelect: "Sélectionner...",
        budget1: "500$ - 1000$", budget2: "1000$ - 3000$", budget3: "3000$ - 5000$", budget4: "5000$+",
        message: "Message (optionnel)", next: "Suivant", back: "Retour",
        quoteSuccessTitle: "Devis Généré!",
        quoteSuccessMessage: "Votre devis estimatif est prêt. Un membre de notre équipe vous contactera dans les 24h pour confirmer.",
        estimateTitle: "Estimation:", estimatePeriod: "Pour votre projet",
        bookConsultation: "Prendre Rendez-vous", newQuote: "Nouveau Devis",

        projectsTitle: "Nos Projets",
        projectsSubtitle: "Découvrez nos réalisations et comment nous avons résolu les défis de nos clients",
        viewProject: "Voir Détails", problemTitle: "Problème Résolu:", techUsed: "Technologies Utilisées:",
        contactForProject: "Contacter pour un Projet Similaire",
        catEcommerce: "E-commerce", catWebApp: "Application Web", catMediaPlatform: "Plateforme Média", catDashboard: "Dashboard",
        project1Name: "Plateforme E-commerce Mode",
        project1Desc: "Création d'une plateforme e-commerce complète avec gestion de catalogue, paiement sécurisé et dashboard client",
        project1Problem: "Le client voulait digitaliser sa boutique physique et offrir une expérience d'achat moderne à ses clients",
        project2Name: "Système de Gestion de Projets",
        project2Desc: "Application web de gestion de projets avec suivi de tâches, collaboration en équipe et reporting automatique",
        project2Problem: "L'entreprise avait besoin d'un outil centralisé pour gérer ses projets et améliorer la collaboration entre équipes",
        project3Name: "Plateforme de Streaming Vidéo",
        project3Desc: "Développement d'une plateforme de streaming vidéo avec contenu premium, abonnement et système de recommandation",
        project3Problem: "Le client voulait lancer son propre service de streaming concurrent des grandes plateformes existantes",
        project4Name: "Dashboard Analytique Entreprise",
        project4Desc: "Dashboard analytique pour visualiser les données métier, créer des rapports et suivre les performances en temps réel",
        project4Problem: "L'entreprise avait des données dispersées et besoin d'un outil unifié pour analyser et prendre des décisions",

        techStackTitle: "Notre Stack Technologique",
        techStackSubtitle: "Technologies modernes et robustes que nous maîtrisons pour vos projets",
        frontend: "Frontend", backend: "Backend", database: "Database", security: "Sécurité", cloud: "Cloud & DevOps",

        testimonialsTitle: "Témoignages Clients", testimonialsSubtitle: "Ce que nos partenaires disent de notre travail",
        leaveReview: "Laisser un avis", leaveReviewTitle: "Laisser un avis",
        leaveReviewNote: "Votre avis sera visible sur le site après une courte validation par notre équipe.",
        testimonialCompany: "Entreprise / Fonction (optionnel)", testimonialRating: "Note",
        testimonialText: "Votre avis", submitReview: "Envoyer mon avis",

        blogTitle: "Blog & Actualités Tech",
        blogSubtitle: "Articles sur la sécurité informatique, le développement web et les astuces tech",
        readMore: "Lire Plus", viewAllArticles: "Voir Tous les Articles",
        catSecurity: "Sécurité", catDev: "Développement", catWindows: "Windows",

        contactTitle: "Contactez-nous", contactSubtitle: "Nous sommes là pour répondre à toutes vos questions",
        address: "Adresse", phone: "Téléphone", email: "Email",
        contactSubject: "Sujet", contactMessage: "Message", sendMessage: "Envoyer Message",

        aiStatus: "Assistant IA - En ligne",
        aiHello: "Bonjour! Je suis Fleub l'assistant IA de Fleutech. Comment puis-je vous aider aujourd'hui?",
        chatMainMenuBtn: "↩️ Menu principal", chatCloseBtn: "❌ Fermer",

        bookingTitle: "Prendre Rendez-vous",
        bookingIntro: "Réservez en un clic un appel de consultation avec un de nos experts",
        bookingNote: "💡 Vous recevrez un email de confirmation immédiatement après la réservation",

        realizationsTitle: "Mes Réalisations",
        realizationsSubtitle: "Découvrez mes projets futurs et créations récentes",
        loadingProjects: "Chargement des projets...", addRealization: "Ajouter une Réalisation",
        addRealizationTitle: "Ajouter une Réalisation", realizationTitle: "Titre", realizationDesc: "Description",
        realizationCategory: "Catégorie", realizationImage: "Photo (JPG/PNG)",
        realizationTech: "Technologies (séparées par virgule)", addRealizationSubmit: "Ajouter",

        footerDesc: "Votre partenaire de confiance pour des solutions informatiques innovantes",
        company: "Entreprise", copyright: "© 2026 Fleutech. Tous droits réservés.",
        privacy: "Politique de Confidentialité", terms: "Conditions d'Utilisation"
    },
    en: {
        home: "Home", services: "Services", solutions: "Solutions", projects: "Projects",
        techStack: "Tech Stack", blog: "Blog", testimonials: "Reviews", contact: "Contact",
        bookNow: "Book a Meeting", getQuote: "Get a Quote",
        heroTitle1: "Innovate today", heroTitle2: "to succeed tomorrow",
        heroSubtitle: "Your trusted partner for innovative and high-performing IT solutions",
        statProjects: "Completed Projects", statSatisfaction: "Client Satisfaction", statSupport: "Support Available",

        servicesTitle: "Our Services",
        servicesSubtitle: "Cutting-edge technical expertise to meet all your IT needs",
        devWeb: "Web Development", devWebShort: "Creating modern, high-performing websites and web applications",
        devWebFeat1: "Responsive websites", devWebFeat2: "Complex web applications", devWebFeat3: "E-commerce & platforms",
        devWebFeat4: "Performance optimization", devWebFeat5: "SEO optimization",
        cyberSec: "Cybersecurity", cyberSecShort: "Protecting your systems and data against digital threats",
        cyberSecFeat1: "Security audit", cyberSecFeat2: "Attack protection", cyberSecFeat3: "Vulnerability management",
        cyberSecFeat4: "Security training", cyberSecFeat5: "Regulatory compliance",
        support: "IT Support", supportShort: "24/7 technical assistance for your IT infrastructure",
        supportFeat1: "24/7 support", supportFeat2: "Preventive maintenance", supportFeat3: "Fast resolution",
        supportFeat4: "Remote assistance", supportFeat5: "Incident management",
        network: "Network Solutions", networkShort: "Robust, high-performing network infrastructure for your business",
        networkFeat1: "Network installation", networkFeat2: "Server configuration", networkFeat3: "Network security",
        networkFeat4: "Cloud integration", networkFeat5: "24/7 monitoring",
        flipCard: "Hover for more", learnMore: "Learn More",

        solutionsTitle: "Turnkey Solutions",
        solutionsSubtitle: "Service packages tailored to your needs and budget",
        popularBadge: "Popular", recommendedBadge: "Recommended", perMonth: "/month", choosePack: "Choose this Pack",
        packStartup: "Startup Pack", packStartupDesc: "For businesses starting out and wanting a solid foundation",
        packStartupFeat1: "Responsive website", packStartupFeat2: "9am-6pm Support", packStartupFeat3: "Monthly maintenance",
        packStartupFeat4: "Basic SEO", packStartupFeat5: "10h development/month",
        packSecurity: "SME Security Pack", packSecurityDesc: "Complete protection for medium-sized businesses",
        packSecurityFeat1: "Complete security audit", packSecurityFeat2: "24/7 protection", packSecurityFeat3: "Automatic backup",
        packSecurityFeat4: "Team training", packSecurityFeat5: "Regulatory compliance", packSecurityFeat6: "Priority support",
        packEnterprise: "Enterprise Pack", packEnterpriseDesc: "Complete solution for large enterprises",
        packEnterpriseFeat1: "Everything in SME Pack", packEnterpriseFeat2: "Network infrastructure", packEnterpriseFeat3: "Cloud integration",
        packEnterpriseFeat4: "Dedicated development", packEnterpriseFeat5: "24/7 priority support",
        packEnterpriseFeat6: "40h development/month", packEnterpriseFeat7: "Dedicated expert",

        quoteTitle: "Quote Request", quoteSubtitle: "Discover your project's cost in a few simple steps",
        step1: "Service", step2: "Needs", step3: "Info", step4: "Quote",
        step1Title: "Choose your service", step2Title: "Describe your needs", step3Title: "Your information",
        needResponsive: "Responsive site", needSEO: "SEO optimization", needEcommerce: "E-commerce",
        needDatabase: "Database", needAPI: "API integration", needMaintenance: "Regular maintenance",
        companyName: "Company name", contactName: "Contact name", contactEmail: "Email",
        contactPhone: "Phone", budget: "Estimated budget", budgetSelect: "Select...",
        budget1: "$500 - $1000", budget2: "$1000 - $3000", budget3: "$3000 - $5000", budget4: "$5000+",
        message: "Message (optional)", next: "Next", back: "Back",
        quoteSuccessTitle: "Quote Generated!",
        quoteSuccessMessage: "Your estimated quote is ready. A team member will contact you within 24h to confirm.",
        estimateTitle: "Estimate:", estimatePeriod: "For your project",
        bookConsultation: "Book a Meeting", newQuote: "New Quote",

        projectsTitle: "Our Projects",
        projectsSubtitle: "Discover our work and how we solved our clients' challenges",
        viewProject: "View Details", problemTitle: "Problem Solved:", techUsed: "Technologies Used:",
        contactForProject: "Contact for a Similar Project",
        catEcommerce: "E-commerce", catWebApp: "Web Application", catMediaPlatform: "Media Platform", catDashboard: "Dashboard",
        project1Name: "Fashion E-commerce Platform",
        project1Desc: "Creation of a complete e-commerce platform with catalog management, secure payment, and client dashboard",
        project1Problem: "The client wanted to digitize their physical store and offer a modern shopping experience to their customers",
        project2Name: "Project Management System",
        project2Desc: "Project management web application with task tracking, team collaboration, and automated reporting",
        project2Problem: "The company needed a centralized tool to manage its projects and improve collaboration between teams",
        project3Name: "Video Streaming Platform",
        project3Desc: "Development of a video streaming platform with premium content, subscriptions, and a recommendation system",
        project3Problem: "The client wanted to launch their own streaming service to compete with major existing platforms",
        project4Name: "Business Analytics Dashboard",
        project4Desc: "Analytics dashboard to visualize business data, create reports, and track performance in real time",
        project4Problem: "The company had scattered data and needed a unified tool to analyze it and make decisions",

        techStackTitle: "Our Tech Stack",
        techStackSubtitle: "Modern, robust technologies we master for your projects",
        frontend: "Frontend", backend: "Backend", database: "Database", security: "Security", cloud: "Cloud & DevOps",

        testimonialsTitle: "Client Reviews", testimonialsSubtitle: "What our partners say about our work",
        leaveReview: "Leave a review", leaveReviewTitle: "Leave a review",
        leaveReviewNote: "Your review will appear on the site after a quick check by our team.",
        testimonialCompany: "Company / Role (optional)", testimonialRating: "Rating",
        testimonialText: "Your review", submitReview: "Submit my review",

        blogTitle: "Tech Blog & News",
        blogSubtitle: "Articles on IT security, web development, and tech tips",
        readMore: "Read More", viewAllArticles: "View All Articles",
        catSecurity: "Security", catDev: "Development", catWindows: "Windows",

        contactTitle: "Contact Us", contactSubtitle: "We're here to answer all your questions",
        address: "Address", phone: "Phone", email: "Email",
        contactSubject: "Subject", contactMessage: "Message", sendMessage: "Send Message",

        aiStatus: "AI Assistant - Online",
        aiHello: "Hello! I'm Fleub, Fleutech's AI assistant. How can I help you today?",
        chatMainMenuBtn: "↩️ Main Menu", chatCloseBtn: "❌ Close",

        bookingTitle: "Book a Meeting",
        bookingIntro: "Book a consultation call with one of our experts in one click",
        bookingNote: "💡 You'll receive a confirmation email immediately after booking",

        realizationsTitle: "My Work",
        realizationsSubtitle: "Discover my upcoming projects and recent creations",
        loadingProjects: "Loading projects...", addRealization: "Add a Project",
        addRealizationTitle: "Add a Project", realizationTitle: "Title", realizationDesc: "Description",
        realizationCategory: "Category", realizationImage: "Photo (JPG/PNG)",
        realizationTech: "Technologies (comma separated)", addRealizationSubmit: "Add",

        footerDesc: "Your trusted partner for innovative IT solutions",
        company: "Company", copyright: "© 2026 Fleutech. All rights reserved.",
        privacy: "Privacy Policy", terms: "Terms of Use"
    },
    ht: {
        home: "Akèy", services: "Sèvis", solutions: "Solisyon", projects: "Pwojè",
        techStack: "Stack Teknik", blog: "Blog", testimonials: "Temwayaj", contact: "Kontak",
        bookNow: "Pran Randevou", getQuote: "Mande yon Devi",
        heroTitle1: "Inove jodi a", heroTitle2: "pou reyisi demen",
        heroSubtitle: "Patnè ou fè konfyans pou solisyon enfòmatik inovatè ak pèfòmans",
        statProjects: "Pwojè Realize", statSatisfaction: "Satisfaksyon Kliyan", statSupport: "Sipò Disponib",

        servicesTitle: "Sèvis Nou Yo",
        servicesSubtitle: "Ekspètiz teknik avanse pou reponn tout bezwen enfòmatik ou yo",
        devWeb: "Devlopman Web", devWebShort: "Kreyasyon sit ak aplikasyon web modèn ak pèfòmans",
        devWebFeat1: "Sit web ki adapte", devWebFeat2: "Aplikasyon web konplèks", devWebFeat3: "E-commerce & platfòm",
        devWebFeat4: "Optimizasyon pèfòmans", devWebFeat5: "Optimizasyon SEO",
        cyberSec: "Sibèsekirite", cyberSecShort: "Pwoteksyon sistèm ak done ou yo kont menas dijital",
        cyberSecFeat1: "Odit sekirite", cyberSecFeat2: "Pwoteksyon kont atak", cyberSecFeat3: "Jesyon vilnerabilite",
        cyberSecFeat4: "Fòmasyon sekirite", cyberSecFeat5: "Konfòmite regleman",
        support: "Sipò Enfòmatik", supportShort: "Asistans teknik 24/7 pou enfrastrikti enfòmatik ou",
        supportFeat1: "Sipò 24/7", supportFeat2: "Antretyen prevantif", supportFeat3: "Rezolisyon rapid",
        supportFeat4: "Asistans a distans", supportFeat5: "Jesyon ensidan",
        network: "Solisyon Rezo", networkShort: "Enfrastrikti rezo solid ak pèfòmans pou antrepriz ou",
        networkFeat1: "Enstalasyon rezo", networkFeat2: "Konfigirasyon sèvè", networkFeat3: "Sekirite rezo",
        networkFeat4: "Entegrasyon cloud", networkFeat5: "Monitoring 24/7",
        flipCard: "Pase souri pou plis", learnMore: "Plis Enfo",

        solutionsTitle: "Solisyon Total",
        solutionsSubtitle: "Pakè sèvis ki adapte ak bezwen ak bidjè ou",
        popularBadge: "Popilè", recommendedBadge: "Rekòmande", perMonth: "/mwa", choosePack: "Chwazi Pak sa a",
        packStartup: "Pak Startup", packStartupDesc: "Pou antrepriz k ap kòmanse ki vle yon baz solid",
        packStartupFeat1: "Sit web ki adapte", packStartupFeat2: "Sipò 9v-18è", packStartupFeat3: "Antretyen chak mwa",
        packStartupFeat4: "SEO debaz", packStartupFeat5: "10è devlopman/mwa",
        packSecurity: "Pak Sekirite PME", packSecurityDesc: "Pwoteksyon konplè pou antrepriz mwayen gwosè",
        packSecurityFeat1: "Odit sekirite konplè", packSecurityFeat2: "Pwoteksyon 24/7", packSecurityFeat3: "Backup otomatik",
        packSecurityFeat4: "Fòmasyon ekip", packSecurityFeat5: "Konfòmite regleman", packSecurityFeat6: "Sipò priyorite",
        packEnterprise: "Pak Antrepriz", packEnterpriseDesc: "Solisyon konplè pou gwo antrepriz",
        packEnterpriseFeat1: "Tout enkli nan Pak PME", packEnterpriseFeat2: "Enfrastrikti rezo", packEnterpriseFeat3: "Entegrasyon cloud",
        packEnterpriseFeat4: "Devlopman dedye", packEnterpriseFeat5: "Sipò priyorite 24/7",
        packEnterpriseFeat6: "40è devlopman/mwa", packEnterpriseFeat7: "Ekspè dedye",

        quoteTitle: "Fòm Devi", quoteSubtitle: "Dekouvri pri pwojè ou an nan kèk etap senp",
        step1: "Sèvis", step2: "Bezwen", step3: "Enfo", step4: "Devi",
        step1Title: "Chwazi sèvis ou", step2Title: "Dekri bezwen ou yo", step3Title: "Enfòmasyon ou yo",
        needResponsive: "Sit ki adapte", needSEO: "Optimizasyon SEO", needEcommerce: "E-commerce",
        needDatabase: "Baz done", needAPI: "Entegrasyon API", needMaintenance: "Antretyen regilye",
        companyName: "Non antrepriz la", contactName: "Non kontak la", contactEmail: "Imèl",
        contactPhone: "Telefòn", budget: "Bidjè estime", budgetSelect: "Chwazi...",
        budget1: "500$ - 1000$", budget2: "1000$ - 3000$", budget3: "3000$ - 5000$", budget4: "5000$+",
        message: "Mesaj (opsyonèl)", next: "Swivan", back: "Retounen",
        quoteSuccessTitle: "Devi Kreye!",
        quoteSuccessMessage: "Devi estimatif ou an pare. Yon manm ekip nou an ap kontakte w nan 24è pou konfime.",
        estimateTitle: "Estimasyon:", estimatePeriod: "Pou pwojè ou",
        bookConsultation: "Pran Randevou", newQuote: "Nouvo Devi",

        projectsTitle: "Pwojè Nou Yo",
        projectsSubtitle: "Dekouvri sa nou fè ak kijan nou rezoud defi kliyan nou yo",
        viewProject: "Wè Detay", problemTitle: "Pwoblèm Rezoud:", techUsed: "Teknoloji Itilize:",
        contactForProject: "Kontakte pou yon Pwojè Similè",
        catEcommerce: "E-commerce", catWebApp: "Aplikasyon Web", catMediaPlatform: "Platfòm Medya", catDashboard: "Dashboard",
        project1Name: "Platfòm E-commerce Mòd",
        project1Desc: "Kreyasyon yon platfòm e-commerce konplè ak jesyon katalòg, peman sekirize ak dashboard kliyan",
        project1Problem: "Kliyan an te vle dijitalize magazen fizik li e ofri yon eksperyans achte modèn pou kliyan li yo",
        project2Name: "Sistèm Jesyon Pwojè",
        project2Desc: "Aplikasyon web jesyon pwojè ak swiv tach, kolaborasyon ekip ak rapò otomatik",
        project2Problem: "Antrepriz la te bezwen yon zouti santralize pou jere pwojè li yo e amelyore kolaborasyon ant ekip",
        project3Name: "Platfòm Streaming Videyo",
        project3Desc: "Devlopman yon platfòm streaming videyo ak kontni premium, abònman ak sistèm rekòmandasyon",
        project3Problem: "Kliyan an te vle lanse pwòp sèvis streaming li pou konpetisyone gwo platfòm ki egziste yo",
        project4Name: "Dashboard Analitik Antrepriz",
        project4Desc: "Dashboard analitik pou vizyalize done biznis, kreye rapò e swiv pèfòmans an tan reyèl",
        project4Problem: "Antrepriz la te gen done ki gaye e li te bezwen yon zouti inifye pou analize e pran desizyon",

        techStackTitle: "Stack Teknolojik Nou",
        techStackSubtitle: "Teknoloji modèn ak solid nou metrize pou pwojè ou yo",
        frontend: "Frontend", backend: "Backend", database: "Baz Done", security: "Sekirite", cloud: "Cloud & DevOps",

        testimonialsTitle: "Temwayaj Kliyan", testimonialsSubtitle: "Sa patnè nou yo di sou travay nou",
        leaveReview: "Kite yon avi", leaveReviewTitle: "Kite yon avi",
        leaveReviewNote: "Avi ou ap parèt sou sit la apre yon ti verifikasyon ekip nou fè.",
        testimonialCompany: "Antrepriz / Fonksyon (opsyonèl)", testimonialRating: "Nòt",
        testimonialText: "Avi ou", submitReview: "Voye avi mwen",

        blogTitle: "Blog & Aktyalite Tech",
        blogSubtitle: "Atik sou sekirite enfòmatik, devlopman web ak konsèy tech",
        readMore: "Li Plis", viewAllArticles: "Wè Tout Atik yo",
        catSecurity: "Sekirite", catDev: "Devlopman", catWindows: "Windows",

        contactTitle: "Kontakte Nou", contactSubtitle: "Nou la pou reponn tout kesyon ou yo",
        address: "Adrès", phone: "Telefòn", email: "Imèl",
        contactSubject: "Sijè", contactMessage: "Mesaj", sendMessage: "Voye Mesaj",

        aiStatus: "Asistan AI - Anliy",
        aiHello: "Bonjou! Mwen se Fleub, asistan AI Fleutech la. Kijan mwen ka ede w jodi a?",
        chatMainMenuBtn: "↩️ Meni Prensipal", chatCloseBtn: "❌ Fèmen",

        bookingTitle: "Pran Randevou",
        bookingIntro: "Rezève yon apèl konsiltasyon ak youn nan ekspè nou yo nan yon sèl klik",
        bookingNote: "💡 Ou pral resevwa yon imèl konfimasyon touswit apre rezèvasyon an",

        realizationsTitle: "Reyalizasyon Mwen Yo",
        realizationsSubtitle: "Dekouvri pwojè m ap vin fè ak kreyasyon resan yo",
        loadingProjects: "N ap chaje pwojè yo...", addRealization: "Ajoute yon Reyalizasyon",
        addRealizationTitle: "Ajoute yon Reyalizasyon", realizationTitle: "Tit", realizationDesc: "Deskripsyon",
        realizationCategory: "Kategori", realizationImage: "Foto (JPG/PNG)",
        realizationTech: "Teknoloji (separe ak vigil)", addRealizationSubmit: "Ajoute",

        footerDesc: "Patnè ou fè konfyans pou solisyon enfòmatik inovatè",
        company: "Antrepriz", copyright: "© 2026 Fleutech. Tout dwa rezève.",
        privacy: "Politik Konfidansyalite", terms: "Kondisyon Itilizasyon"
    }
};

// ================================
// MENU DU CHATBOT — 5 groupes de questions
// ================================

function populateFaqDropdown() {
    const list = document.getElementById("chatbotFaqList");
    if (!list) return;
    list.innerHTML = "";

    Object.entries(mainMenu).forEach(([groupKey, group]) => {
        const label = document.createElement("div");
        label.className = "chatbot-faq-group-label";
        label.textContent = group.label[currentLang] || group.label.fr;
        list.appendChild(label);

        Object.entries(group.questions).forEach(([qKey, q]) => {
            const opt = document.createElement("button");
            opt.type = "button";
            opt.className = "chatbot-faq-option";
            opt.dataset.group = groupKey;
            opt.dataset.question = qKey;
            opt.textContent = q.label[currentLang] || q.label.fr;
            list.appendChild(opt);
        });
    });
}

function setupFaqDropdown() {
    const toggle = document.getElementById("chatbotFaqToggle");
    const list = document.getElementById("chatbotFaqList");
    if (!toggle || !list) return;

    toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        list.classList.toggle("open");
    });

    list.addEventListener("click", (e) => {
        const opt = e.target.closest(".chatbot-faq-option");
        if (!opt) return;
        askMenuQuestion(opt.dataset.group, opt.dataset.question);
        list.classList.remove("open");
    });

    document.addEventListener("click", () => list.classList.remove("open"));
}

function setupFaqSelect() {
    const select = document.getElementById("chatbotFaqSelect");
    if (!select) return;

    select.addEventListener("change", () => {
        const value = select.value;
        if (!value) return;
        const [groupKey, qKey] = value.split("|");
        askMenuQuestion(groupKey, qKey);
        select.value = "";
    });
}

const mainMenu = {
  webdev: {
    icon: "fa-store",
    label: { fr: "Service Web & Dev", en: "Web & Dev Services", ht: "Sèvis Web & Dev" },
    welcome: {
      fr: "Bienvenue sur FleuTech ! Quel type de projet souhaitez-vous réaliser ?",
      en: "Welcome to FleuTech! What kind of project would you like to build?",
      ht: "Byenveni sou FleuTech! Ki kalite pwojè ou vle reyalize?"
    },
    questions: {
      design: {
        label: { fr: "Création & Design de site Web", en: "Website Creation & Design", ht: "Kreyasyon & Design Sit Web" },
        answer: {
          fr: "Nous concevons des sites vitrines modernes et sur-mesure : identité visuelle, arborescence claire et design responsive adapté à votre image de marque.",
          en: "We design modern, custom showcase websites: visual identity, clear structure, and responsive design tailored to your brand.",
          ht: "Nou konsevwa sit vitrin modèn ak sou mezi: idantite vizyèl, estrikti klè ak design ki adapte ak mak ou."
        }
      },
      devcustom: {
        label: { fr: "Développement sur mesure & Applications", en: "Custom Development & Applications", ht: "Devlopman sou Mezi & Aplikasyon" },
        answer: {
          fr: "Nous développons des applications web sur mesure (React, Node.js, bases de données) adaptées à vos processus métier spécifiques.",
          en: "We build custom web applications (React, Node.js, databases) tailored to your specific business processes.",
          ht: "Nou devlope aplikasyon web sou mezi (React, Node.js, baz done) ki adapte ak pwosesis biznis ou yo."
        }
      },
      sysadmin: {
        label: { fr: "Support & Administration Système / Windows", en: "System / Windows Support & Administration", ht: "Sipò & Administrasyon Sistèm / Windows" },
        answer: {
          fr: "Nous assurons l'administration de vos serveurs et postes Windows : installation, mises à jour, optimisation des performances et dépannage.",
          en: "We manage your Windows servers and workstations: installation, updates, performance optimization, and troubleshooting.",
          ht: "Nou jere sèvè ak pòs Windows ou yo: enstalasyon, mizajou, optimizasyon pèfòmans ak depanaj."
        }
      },
      training: {
        label: { fr: "Formations & Ateliers Tech", en: "Tech Training & Workshops", ht: "Fòmasyon & Atelye Tech" },
        answer: {
          fr: "Nous proposons des formations pratiques (en présentiel ou à distance) sur le développement web, la cybersécurité et les outils bureautiques.",
          en: "We offer hands-on training (in-person or remote) on web development, cybersecurity, and office tools.",
          ht: "Nou ofri fòmasyon pratik (an prezans oswa a distans) sou devlopman web, sibèsekirite ak zouti biwo."
        }
      }
    }
  },
  support: {
    icon: "fa-screwdriver-wrench",
    label: { fr: "Assistance & Dépannage", en: "Support & Troubleshooting", ht: "Asistans & Depanaj" },
    welcome: {
      fr: "Un problème ou une question technique ? Indiquez-nous ce dont vous avez besoin :",
      en: "A technical issue or question? Tell us what you need:",
      ht: "Yon pwoblèm oswa yon kesyon teknik? Di nou sa ou bezwen:"
    },
    questions: {
      bug: {
        label: { fr: "Signaler un bug ou une panne sur mon site", en: "Report a bug or outage on my site", ht: "Rapòte yon bug oswa yon pán sou sit mwen" },
        answer: {
          fr: "Décrivez le problème directement ici dans le chat (page concernée, ce qui se passe) et nous le transmettons à notre équipe technique sans délai. Vous pouvez aussi appeler le +509 55525871.",
          en: "Describe the issue right here in the chat (which page, what's happening) and we'll pass it to our technical team right away. You can also call +509 55525871.",
          ht: "Dekri pwoblèm nan dirèkteman isit nan chat la (ki paj, ki sa k ap pase) e nou ap voye l bay ekip teknik nou san reta. Ou ka rele tou nan +509 55525871."
        }
      },
      faq: {
        label: { fr: "Consulter la Documentation / FAQ", en: "View Documentation / FAQ", ht: "Gade Dokimantasyon / FAQ" },
        answer: {
          fr: "Notre FAQ couvre les questions les plus fréquentes sur nos services. Si votre question n'y figure pas, posez-la ici et nous vous répondrons directement.",
          en: "Our FAQ covers the most common questions about our services. If yours isn't there, ask it here and we'll answer you directly.",
          ht: "FAQ nou an kouvri kesyon ki pi frekan sou sèvis nou yo. Si kesyon ou pa ladan, poze l isit e n ap reponn ou dirèkteman."
        }
      },
      trackProject: {
        label: { fr: "Suivre l'avancement de mon projet", en: "Track my project's progress", ht: "Swiv avansman pwojè mwen" },
        answer: {
          fr: "Donnez-nous le nom de votre projet ou votre email de contact ici dans le chat, et nous vous transmettrons un point d'avancement à jour.",
          en: "Give us your project name or contact email here in the chat, and we'll send you an up-to-date progress update.",
          ht: "Ban nou non pwojè ou a oswa imèl kontak ou isit nan chat la, e n ap voye ba ou yon pwen sou avansman an."
        }
      },
      requestUpdate: {
        label: { fr: "Demander une modification / mise à jour", en: "Request a change / update", ht: "Mande yon modifikasyon / mizajou" },
        answer: {
          fr: "Décrivez la modification souhaitée ici dans le chat (page, contenu ou fonctionnalité concernée) ; nous évaluons la demande et revenons vers vous rapidement.",
          en: "Describe the change you'd like here in the chat (page, content, or feature involved); we'll assess the request and get back to you quickly.",
          ht: "Dekri modifikasyon ou vle a isit nan chat la (paj, kontni oswa fonksyonalite konsène); nou ap evalye demann nan e retounen ba ou rapid."
        }
      }
    }
  },
  quote: {
    icon: "fa-ruler-combined",
    label: { fr: "Obtenir un Devis", en: "Get a Quote", ht: "Jwenn yon Devi" },
    welcome: {
      fr: "Estimons votre projet ensemble en quelques clics !",
      en: "Let's estimate your project together in just a few clicks!",
      ht: "Ann estime pwojè ou ansanm nan kèk klik!"
    },
    questions: {
      estimateWebsite: {
        label: { fr: "Estimer le coût d'un site web", en: "Estimate the cost of a website", ht: "Estime pri yon sit web" },
        form: "quote",
        formContext: { fr: "devis site web", en: "website quote", ht: "devi sit web" }
      },
      estimateIT: {
        label: { fr: "Demander un devis pour un service IT / Réseau", en: "Request a quote for IT / Network services", ht: "Mande yon devi pou sèvis IT / Rezo" },
        form: "quote",
        formContext: { fr: "devis IT / réseau", en: "IT / network quote", ht: "devi IT / rezo" }
      },
      maintenance: {
        label: { fr: "Formules de maintenance mensuelle", en: "Monthly maintenance plans", ht: "Fòmil antretyen chak mwa" },
        answer: {
          fr: "Nos formules mensuelles : Pack Startup 499$, Pack Sécurité PME 899$, Pack Entreprise 1499$. Chacune inclut un volume d'heures de développement et un niveau de support différent.",
          en: "Our monthly plans: Startup Pack $499, SME Security Pack $899, Enterprise Pack $1499. Each includes a different amount of development hours and level of support.",
          ht: "Fòmil chak mwa nou yo: Pak Startup 499$, Pak Sekirite PME 899$, Pak Antrepriz 1499$. Chak gen yon kantite è devlopman ak yon nivo sipò diferan."
        }
      },
      pricingSheet: {
        label: { fr: "Télécharger notre grille tarifaire", en: "Download our pricing sheet", ht: "Telechaje grid pri nou an" },
        answer: {
          fr: "Vous pouvez consulter le détail de nos formules juste en dessous, dans la section 'Solutions Clés en Main'. Pour recevoir la grille complète par email, laissez-nous un message via 'Laisser un message rapide'.",
          en: "You can see the details of our plans just below, in the 'Turnkey Solutions' section. To receive the full sheet by email, leave us a message via 'Leave a quick message'.",
          ht: "Ou ka gade detay fòmil nou yo jis anba a, nan seksyon 'Solisyon Total'. Pou resevwa grid konplè a pa imèl, kite nou yon mesaj nan 'Kite yon mesaj rapid'."
        },
        action: "scrollSolutions"
      }
    }
  },
  about: {
    icon: "fa-circle-info",
    label: { fr: "À propos de FleuTech", en: "About FleuTech", ht: "Konsènan FleuTech" },
    welcome: {
      fr: "En savoir plus sur nos activités et nos engagements :",
      en: "Learn more about what we do and what we stand for:",
      ht: "Aprann plis sou aktivite ak angajman nou yo:"
    },
    questions: {
      whoWeAre: {
        label: { fr: "Qui sommes-nous ? / Notre mission", en: "Who we are / Our mission", ht: "Kimoun nou ye? / Misyon nou" },
        answer: {
          fr: "FleuTech est une entreprise IT basée à Port-au-Prince. Notre mission : rendre la technologie accessible et fiable pour les entreprises haïtiennes, du site vitrine à l'infrastructure réseau.",
          en: "FleuTech is an IT company based in Port-au-Prince. Our mission: making technology accessible and reliable for Haitian businesses, from showcase websites to network infrastructure.",
          ht: "FleuTech se yon antrepriz IT ki baze Pòtoprens. Misyon nou: fè teknoloji aksesib ak fyab pou biznis ayisyen, depi sit vitrin rive nan enfrastrikti rezo."
        }
      },
      hours: {
        label: { fr: "Horaires & Informations de contact", en: "Hours & Contact Information", ht: "Orè & Enfòmasyon Kontak" },
        answer: {
          fr: "Nos bureaux sont à Port-au-Prince, Haïti. Support technique disponible 24/7 ; équipe commerciale joignable au +509 55525871 ou infofleutech@yahoo.com.",
          en: "Our offices are in Port-au-Prince, Haiti. Technical support available 24/7; sales team reachable at +509 55525871 or infofleutech@yahoo.com.",
          ht: "Biwo nou yo Pòtoprens, Ayiti. Sipò teknik disponib 24/7; ekip komèsyal ou ka jwenn nan +509 55525871 oswa infofleutech@yahoo.com."
        }
      },
      portfolio: {
        label: { fr: "Voir nos réalisations / Portfolio", en: "See our work / Portfolio", ht: "Gade reyalizasyon nou yo / Pòtfolyo" },
        answer: {
          fr: "Découvrez nos projets juste en dessous : plateforme e-commerce, système de gestion de projets, streaming vidéo et dashboard analytique.",
          en: "Check out our projects just below: e-commerce platform, project management system, video streaming, and analytics dashboard.",
          ht: "Dekouvri pwojè nou yo jis anba a: platfòm e-commerce, sistèm jesyon pwojè, streaming videyo ak dashboard analitik."
        },
        action: "scrollProjects"
      },
      partnerships: {
        label: { fr: "Opportunités & Partenariats", en: "Opportunities & Partnerships", ht: "Opòtinite & Patenarya" },
        answer: {
          fr: "Nous sommes ouverts aux collaborations avec d'autres entreprises et aux profils techniques souhaitant nous rejoindre. Écrivez-nous à infofleutech@yahoo.com avec votre proposition.",
          en: "We're open to collaborations with other businesses and to technical profiles wanting to join us. Email us at infofleutech@yahoo.com with your proposal.",
          ht: "Nou ouvè pou kolaborasyon ak lòt antrepriz ak pou pwofil teknik ki vle rejwenn nou. Ekri nou nan infofleutech@yahoo.com ak pwopozisyon ou."
        }
      }
    }
  },
  human: {
    icon: "fa-phone",
    label: { fr: "Parler à un Humain", en: "Talk to a Human", ht: "Pale ak yon Moun" },
    welcome: {
      fr: "Vous préférez discuter de vive voix avec un spécialiste ?",
      en: "Would you rather talk directly with a specialist?",
      ht: "Ou pito pale dirèkteman ak yon espesyalis?"
    },
    questions: {
      scheduleCall: {
        label: { fr: "Planifier un appel téléphonique / RDV", en: "Schedule a phone call / meeting", ht: "Planifye yon apèl telefòn / Randevou" },
        form: "booking",
        formContext: { fr: "rendez-vous", en: "meeting", ht: "randevou" }
      },
      whatsapp: {
        label: { fr: "Discuter sur WhatsApp", en: "Chat on WhatsApp", ht: "Diskite sou WhatsApp" },
        answer: {
          fr: "Ouverture de WhatsApp dans un nouvel onglet — écrivez-nous directement !",
          en: "Opening WhatsApp in a new tab — write to us directly!",
          ht: "N ap louvri WhatsApp nan yon nouvo onglè — ekri nou dirèkteman!"
        },
        action: "openWhatsapp"
      },
      quickMessage: {
        label: { fr: "Laisser un message rapide", en: "Leave a quick message", ht: "Kite yon mesaj rapid" },
        form: "quickmessage",
        formContext: { fr: "message", en: "message", ht: "mesaj" }
      },
      liveChatTransfer: {
        label: { fr: "Transfert vers le support en direct (Live Chat)", en: "Transfer to live chat support", ht: "Transfè bay sipò an dirèk (Live Chat)" },
        answer: {
          fr: "Nous transférons votre conversation à un membre de notre équipe support. Un agent vous répondra ici dès que possible.",
          en: "We're transferring your conversation to a member of our support team. An agent will reply here as soon as possible.",
          ht: "N ap transfere konvèsasyon ou bay yon manm nan ekip sipò nou. Yon ajan ap reponn ou isit pi vit posib."
        }
      }
    }
  }
};

// Textes bots réutilisables, non liés à un data-i18n de la page
const chatbotStrings = {
  fr: { menuMore: "Autre chose ? Choisissez un sujet :" },
  en: { menuMore: "Anything else? Pick a topic:" },
  ht: { menuMore: "Lòt bagay? Chwazi yon sijè:" }
};

// Les 3 courtes questions posées une par une pour les formulaires "devis",
// "rendez-vous" et "message rapide" (Nom, Email, Description du besoin)
const leadFormSteps = [
  { key: "name", prompt: { fr: "Quel est votre nom ?", en: "What's your name?", ht: "Kijan ou rele?" } },
  { key: "email", prompt: { fr: "Quel est votre email ?", en: "What's your email?", ht: "Ki imèl ou?" } },
  { key: "need", prompt: { fr: "Décrivez brièvement votre besoin :", en: "Briefly describe what you need:", ht: "Dekri byen kout bezwen ou:" } }
];

// Message final envoyé une fois les 3 étapes complétées, selon le type de demande
const leadFormClosing = {
  quote: {
    fr: (d, ctx) => `Merci ${d.name} ! Votre demande de ${ctx} est enregistrée. Un membre de notre équipe vous contactera à ${d.email} sous 24h avec une estimation.`,
    en: (d, ctx) => `Thank you ${d.name}! Your ${ctx} request has been recorded. A team member will contact you at ${d.email} within 24h with an estimate.`,
    ht: (d, ctx) => `Mèsi ${d.name}! Demann ${ctx} ou a anrejistre. Yon manm ekip nou ap kontakte w nan ${d.email} nan 24è ak yon estimasyon.`
  },
  booking: {
    fr: (d, ctx) => `Merci ${d.name} ! Votre demande de ${ctx} est enregistrée. Nous vous contacterons à ${d.email} pour confirmer un créneau.`,
    en: (d, ctx) => `Thank you ${d.name}! Your ${ctx} request is recorded. We'll contact you at ${d.email} to confirm a time slot.`,
    ht: (d, ctx) => `Mèsi ${d.name}! Demann ${ctx} ou a anrejistre. N ap kontakte w nan ${d.email} pou konfime yon lè.`
  },
  quickmessage: {
    fr: (d, ctx) => `Merci ${d.name}, votre ${ctx} a bien été transmis à notre équipe ! Nous vous répondrons à ${d.email} rapidement.`,
    en: (d, ctx) => `Thank you ${d.name}, your ${ctx} has been sent to our team! We'll reply to you at ${d.email} soon.`,
    ht: (d, ctx) => `Mèsi ${d.name}, ${ctx} ou a voye bay ekip nou! N ap reponn ou nan ${d.email} byento.`
  }
};

// État courant du menu du chatbot : "main" (5 groupes) ou "sub" (sous-questions d'un groupe)
let chatbotMenuState = { level: "main", group: null };

// État courant d'un formulaire en cours (devis / RDV / message) — actif tant
// qu'on attend une réponse de l'utilisateur pour nom / email / besoin
let chatbotFormState = { active: false, type: null, contextLabel: null, step: 0, data: {} };

// Correspondance nom de service (passé par onclick dans le HTML) → valeur de la case à cocher
const serviceCheckboxMap = {
  "développement web": "development",
  "cybersécurité": "security",
  "support informatique": "support",
  "solutions réseau": "network"
};

// Détails des 4 projets affichés dans la section "Nos Projets" — utilisés pour remplir la modale
const projectsData = {
  1: {
    name: "Plateforme E-commerce Mode",
    icon: "fa-shopping-bag",
    desc: "Création d'une plateforme e-commerce complète avec gestion de catalogue, paiement sécurisé et dashboard client.",
    problem: "Le client voulait digitaliser sa boutique physique et offrir une expérience d'achat moderne à ses clients.",
    tech: ["React", "Node.js", "MongoDB"]
  },
  2: {
    name: "Système de Gestion de Projets",
    icon: "fa-tasks",
    desc: "Application web de gestion de projets avec suivi de tâches, collaboration en équipe et reporting automatique.",
    problem: "L'entreprise avait besoin d'un outil centralisé pour gérer ses projets et améliorer la collaboration entre équipes.",
    tech: ["Vue.js", "Python", "PostgreSQL"]
  },
  3: {
    name: "Plateforme de Streaming Vidéo",
    icon: "fa-play-circle",
    desc: "Développement d'une plateforme de streaming vidéo avec contenu premium, abonnement et système de recommandation.",
    problem: "Le client voulait lancer son propre service de streaming concurrent des grandes plateformes existantes.",
    tech: ["Angular", "Django", "AWS"]
  },
  4: {
    name: "Dashboard Analytique Entreprise",
    icon: "fa-chart-line",
    desc: "Dashboard analytique pour visualiser les données métier, créer des rapports et suivre les performances en temps réel.",
    problem: "L'entreprise avait des données dispersées et besoin d'un outil unifié pour analyser et prendre des décisions.",
    tech: ["React", "Python", "D3.js"]
  }
};

// État global
let currentLang = "fr";
let currentQuoteStep = 1;
let currentTestimonialIndex = 0;
let chatbotOpen = false;

// Mode administrateur pour "Mes Réalisations".
// Le mot de passe n'est PLUS comparé ici dans le navigateur — il est envoyé à la
// fonction serveur (netlify/functions/realizations.mjs) qui le compare à une
// variable d'environnement secrète (ADMIN_SECRET), invisible dans le code du site.
let adminKey = sessionStorage.getItem("fleutech-admin-key") || null;

// Chargé au démarrage depuis le vrai backend (voir loadRealizations)
let realizations = [];

// Ouvre https://fleutech.digital/?admin=1 pour voir apparaître le prompt de mot de passe.
function checkAdminAccess() {
    if (adminKey) return;
    if (!location.search.includes("admin=1")) return;

    const password = prompt("Mot de passe administrateur :");
    if (password === null) return;

    adminKey = password;
    sessionStorage.setItem("fleutech-admin-key", password);
    updateAdminUI();
    // Le mot de passe n'est vraiment vérifié que lors du premier ajout/suppression
    // (c'est la fonction serveur qui valide) — s'il est faux, un message d'erreur
    // apparaîtra à ce moment-là plutôt qu'ici.
}

// Affiche ou cache le bouton "Ajouter une Réalisation" selon le mode admin
function updateAdminUI() {
    const cta = document.getElementById("realizationsCta");
    if (cta) cta.style.display = adminKey ? "" : "none";
}

// Récupère la liste à jour des réalisations depuis le vrai backend
// (fonction serveur + stockage Netlify Blobs) — persiste pour TOUS les visiteurs.
async function loadRealizations() {
    try {
        const res = await fetch("/api/realizations");
        realizations = await res.json();
    } catch (err) {
        console.error("Impossible de charger les réalisations :", err);
        realizations = [];
    }
    renderRealizations();
}

// DOM Ready — tout ce qui touche au DOM démarre ici, une seule fois
document.addEventListener("DOMContentLoaded", () => {
    initLanguage();
    initNetworkAnimation();
    checkAdminAccess();
    updateAdminUI();
    loadRealizations();
    loadTestimonials();
    setupTestimonialForm();
    loadPendingTestimonials();
    initChatbot();
    initForms();
    setupNavigation();
    setupModalClose();
    setupLanguageSelector();
    setupAddRealizationForm();
    setupChatbotMenu();
    populateFaqDropdown(); 
    setupFaqDropdown();
    
});

// ================================
// NAVIGATION
// ================================
function setupNavigation() {
    const mobileBtn = document.getElementById("mobileMenuBtn");
    const navMenu = document.querySelector(".nav-menu");

    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener("click", () => {
            navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
            navMenu.style.flexDirection = "column";
            navMenu.style.position = "absolute";
            navMenu.style.top = "76px";
            navMenu.style.right = "1rem";
            navMenu.style.background = "rgba(10, 15, 28, 0.95)";
            navMenu.style.padding = "1rem";
            navMenu.style.border = "1px solid rgba(255,255,255,0.08)";
            navMenu.style.borderRadius = "16px";
        });
    }
}

// ================================
// FORMULAIRES — envoi réel via /api/send-message (Resend)
// ================================

// Envoie un type de formulaire ("contact", "quote", "chatbot-lead") avec ses champs
// à la fonction serveur Vercel, qui se charge d'expédier un vrai email.
function submitForm(type, fields) {
    return fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, fields })
    });
}

function initForms() {
    const contactForm = document.querySelector(".contact-form");
    if (!contactForm) return;

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = new FormData(contactForm);
        const fields = Object.fromEntries(data.entries());

        // Anti-spam : si le champ caché est rempli, on abandonne silencieusement (c'est un robot)
        if (fields["bot-field"]) {
            contactForm.reset();
            return;
        }

        submitForm("contact", fields)
            .then((res) => {
                if (!res.ok) throw new Error("send failed");
                contactForm.reset();
                alert(
                    currentLang === "en" ? "Message sent! We'll get back to you soon." :
                    currentLang === "ht" ? "Mesaj voye! N ap reponn ou byento." :
                    "Message envoyé ! Nous vous répondrons rapidement."
                );
            })
            .catch(() => {
                alert(
                    currentLang === "en" ? "Something went wrong. Please try again or email us directly." :
                    currentLang === "ht" ? "Gen yon pwoblèm. Eseye ankò oswa ekri nou dirèkteman." :
                    "Une erreur est survenue. Réessayez ou écrivez-nous directement à infofleutech@yahoo.com."
                );
            });
    });
}

// ================================
// LANGUE
// ================================
function initLanguage() {
    const saved = localStorage.getItem("fleutech-lang") || "fr";
    currentLang = saved;
    applyLanguage(currentLang);
}

function setupLanguageSelector() {
    const langBtn = document.getElementById("currentLang");
    const dropdown = document.getElementById("langDropdown");

    if (langBtn && dropdown) {
        langBtn.setAttribute("aria-haspopup", "true");
        langBtn.setAttribute("aria-expanded", "false");

        langBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const isOpen = dropdown.classList.toggle("show");
            langBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });

        document.addEventListener("click", () => {
            dropdown.classList.remove("show");
            langBtn.setAttribute("aria-expanded", "false");
        });

        dropdown.querySelectorAll(".lang-option").forEach(option => {
            option.addEventListener("click", (e) => {
                e.preventDefault();
                const lang = option.dataset.lang;
                currentLang = lang;
                applyLanguage(lang);
                dropdown.classList.remove("show");
                langBtn.setAttribute("aria-expanded", "false");
            });
        });
    }
}

function applyLanguage(lang) {
    currentLang = lang;
    const t = translations[lang] || translations.fr;
    document.documentElement.lang = lang;
    localStorage.setItem("fleutech-lang", lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.dataset.i18n;
        if (t[key] !== undefined) el.textContent = t[key];
    });

    const langBtnEl = document.getElementById("currentLang");
    if (langBtnEl) langBtnEl.textContent = lang.toUpperCase();

    renderChatbotMenu();
    populateFaqDropdown();
}

function renderChatbotMenu() {
    const container = document.getElementById("quickQuestions");
    if (!container) return;
    container.innerHTML = "";
}

function setupChatbotMenu() {
    const container = document.getElementById("quickQuestions");
    if (!container) return;

    container.addEventListener("click", (e) => {
        const btn = e.target.closest(".quick-question-btn");
        if (!btn) return;
        const level = btn.dataset.level;

        if (level === "group") {
            openMenuGroup(btn.dataset.group);
        } else if (level === "sub") {
            askMenuQuestion(btn.dataset.group, btn.dataset.question);
        }
    });
}

function openMenuGroup(groupKey) {
    const group = mainMenu[groupKey];
    if (!group) return;

    addMessage("user", group.label[currentLang] || group.label.fr);
    const welcome = group.welcome[currentLang] || group.welcome.fr;
    setTimeout(() => addMessage("ai", welcome), 400);

    chatbotMenuState = { level: "sub", group: groupKey };
    renderChatbotMenu();
}

function askMenuQuestion(groupKey, questionKey) {
    const question = mainMenu[groupKey]?.questions?.[questionKey];
    if (!question) return;

    addMessage("user", question.label[currentLang] || question.label.fr);

    if (question.form) {
        startLeadForm(question.form, question.formContext);
        return;
    }

    const answer = question.answer[currentLang] || question.answer.fr;
    setTimeout(() => {
        addMessage("ai", answer);

        if (question.action === "scrollProjects") {
            scrollToSection("projects");
        } else if (question.action === "scrollSolutions") {
            scrollToSection("solutions");
        } else if (question.action === "openWhatsapp") {
            window.open("https://wa.me/50955525871", "_blank", "noopener");
        }

        // Corrigé : c'était "chatbotStrings.\n  r.menuMore" (cassé, référençait
        // une clé "r" inexistante) — remis en "chatbotStrings.fr.menuMore".
        const more = chatbotStrings[currentLang]?.menuMore || chatbotStrings.fr.menuMore;
        setTimeout(() => addMessage("ai", more), 500);
    }, 500);

}

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
}

// ================================
// FORMULAIRE EN 3 ÉTAPES DU CHATBOT (devis / rendez-vous / message rapide)
// ================================
function startLeadForm(formType, contextLabel) {
    chatbotFormState = { active: true, type: formType, contextLabel, step: 0, data: {} };
    renderChatbotMenu();
    askNextFormStep();
}

function askNextFormStep() {
    const step = leadFormSteps[chatbotFormState.step];
    if (!step) {
        finalizeLeadForm();
        return;
    }
    setTimeout(() => addMessage("ai", step.prompt[currentLang] || step.prompt.fr), 400);
}

function handleLeadFormInput(text) {
    const step = leadFormSteps[chatbotFormState.step];
    if (!step) return;

    chatbotFormState.data[step.key] = text;
    chatbotFormState.step += 1;

    if (chatbotFormState.step < leadFormSteps.length) {
        askNextFormStep();
    } else {
        finalizeLeadForm();
    }
}

function finalizeLeadForm() {
    const { type, contextLabel, data } = chatbotFormState;
    const ctx = contextLabel?.[currentLang] || contextLabel?.fr || "";
    const closingFn = leadFormClosing[type]?.[currentLang] || leadFormClosing[type]?.fr;
    const message = closingFn ? closingFn(data, ctx) : "Merci, nous avons bien reçu votre demande.";

    submitForm("chatbot-lead", { type: ctx, ...data }).catch(() => {
        // On ne bloque pas la conversation pour une erreur réseau silencieuse.
    });

    setTimeout(() => {
        addMessage("ai", message);
        chatbotFormState = { active: false, type: null, contextLabel: null, step: 0, data: {} };
        chatbotMenuState = { level: "main", group: null };
        renderChatbotMenu();
    }, 600);
}

function goToChatbotMenu() {
    chatbotFormState = { active: false, type: null, contextLabel: null, step: 0, data: {} };
    chatbotMenuState = { level: "main", group: null };
    renderChatbotMenu();
}

// ================================
// HERO NETWORK ANIMATION
// ================================
function initNetworkAnimation() {
    const canvasContainer = document.getElementById("networkCanvas");
    if (!canvasContainer) return;

    const canvas = document.createElement("canvas");
    canvasContainer.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    let width, height, nodes = [];

    function resize() {
        width = canvasContainer.offsetWidth;
        height = canvasContainer.offsetHeight;
        canvas.width = width;
        canvas.height = height;
        generateNodes();
    }

    function generateNodes() {
        nodes = [];
        const count = Math.floor((width * height) / 18000);
        for (let i = 0; i < count; i++) {
            nodes.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.6,
                vy: (Math.random() - 0.5) * 0.6,
                radius: Math.random() * 2 + 1
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);

        nodes.forEach((n, i) => {
            n.x += n.vx;
            n.y += n.vy;

            if (n.x < 0 || n.x > width) n.vx *= -1;
            if (n.y < 0 || n.y > height) n.vy *= -1;

            ctx.beginPath();
            ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(0, 212, 255, 0.7)";
            ctx.fill();

            for (let j = i + 1; j < nodes.length; j++) {
                const other = nodes[j];
                const dx = n.x - other.x;
                const dy = n.y - other.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 150) {
                    ctx.beginPath();
                    ctx.moveTo(n.x, n.y);
                    ctx.lineTo(other.x, other.y);
                    ctx.strokeStyle = `rgba(0, 212, 255, ${1 - dist / 150})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        });

        requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    resize();
    draw();
}

// ================================
// FORMULAIRE DE DEVIS
// ================================
function nextStep(step) {
    document.querySelector(`.quote-step[data-step="${currentQuoteStep}"]`).classList.remove("active");
    document.querySelector(`.progress-step[data-step="${currentQuoteStep}"]`).classList.remove("active");
    currentQuoteStep = step;
    document.querySelector(`.quote-step[data-step="${currentQuoteStep}"]`).classList.add("active");
    document.querySelector(`.progress-step[data-step="${currentQuoteStep}"]`).classList.add("active");
}

function prevStep(step) {
    nextStep(step);
}

function submitQuote() {
    const form = document.getElementById("quoteForm");
    const services = [...document.querySelectorAll('input[name="service"]:checked')].map(i => i.value);
    const needs = [...document.querySelectorAll('input[name="needs"]:checked')].map(i => i.value);
    let estimate = 500;

    if (services.includes("development")) estimate += 400;
    if (services.includes("security")) estimate += 500;
    if (services.includes("support")) estimate += 250;
    if (services.includes("network")) estimate += 350;

    estimate += needs.length * 150;

    document.getElementById("estimateAmount").textContent = `${estimate}$ - ${estimate + 300}$`;

    const data = new FormData(form);
    const fields = Object.fromEntries(data.entries());
    fields.services = services.join(", ");
    fields.needs = needs.join(", ");
    fields.estimate = `${estimate}$ - ${estimate + 300}$`;
    submitForm("quote", fields).catch(() => {});

    nextStep(4);
}

function resetQuoteForm() {
    document.getElementById("quoteForm").reset();
    nextStep(1);
}

function openQuoteForm(service = "") {
    const modal = document.getElementById("bookingModal");
    if (modal) modal.classList.remove("show");

    const checkboxValue = serviceCheckboxMap[service.toLowerCase()];
    if (checkboxValue) {
        const checkbox = document.querySelector(`input[name="service"][value="${checkboxValue}"]`);
        if (checkbox) checkbox.checked = true;
    }

    document.getElementById("quote").scrollIntoView({ behavior: "smooth" });
}

// ================================
// MODALS
// ================================
function openBooking() {
    document.getElementById("bookingModal").classList.add("show");
}

function closeModal(id) {
    document.getElementById(id).classList.remove("show");
}

function setupModalClose() {
    window.addEventListener("click", (e) => {
        document.querySelectorAll(".modal").forEach(modal => {
            if (e.target === modal) modal.classList.remove("show");
        });
    });
}

// ================================
// TÉMOIGNAGES — chargés depuis le backend, soumission publique, modération admin
// ================================
let testimonialCarouselInterval = null;

// Génère les étoiles (pleines / demi / vides) pour une note donnée
function starsHtml(rating) {
    const r = Math.max(0, Math.min(5, Number(rating) || 0));
    const full = Math.floor(r);
    const half = r - full >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    let html = "";
    for (let i = 0; i < full; i++) html += '<i class="fas fa-star" aria-hidden="true"></i>';
    if (half) html += '<i class="fas fa-star-half-alt" aria-hidden="true"></i>';
    for (let i = 0; i < empty; i++) html += '<i class="far fa-star" aria-hidden="true"></i>';
    return html;
}

// Dessine les avis approuvés dans le carrousel + reconstruit les points + relance la rotation
function renderTestimonials(list) {
    const carousel = document.getElementById("testimonialsCarousel");
    const dotsContainer = document.getElementById("carouselDots");
    if (!carousel || !dotsContainer) return;

    carousel.innerHTML = "";
    dotsContainer.innerHTML = "";

    list.forEach((item, i) => {
        const card = document.createElement("div");
        card.className = "testimonial-card";
        card.innerHTML = `
            <div class="testimonial-rating" aria-label="${item.rating} étoiles sur 5">${starsHtml(item.rating)}</div>
            <p class="testimonial-text">${escapeHtml(item.text)}</p>
            <div class="testimonial-author">
                <div class="author-avatar"><i class="fas fa-user" aria-hidden="true"></i></div>
                <div class="author-info">
                    <h4 class="author-name">${escapeHtml(item.name)}</h4>
                    ${item.company ? `<p class="author-company">${escapeHtml(item.company)}</p>` : ""}
                </div>
            </div>
            ${adminKey ? `<button class="btn btn-secondary btn-small testimonial-delete-btn" onclick="deletePublishedTestimonial('${item.id}')"><i class="fas fa-trash" aria-hidden="true"></i> Supprimer</button>` : ""}
        `;
        carousel.appendChild(card);

        const dot = document.createElement("div");
        dot.className = `carousel-dot ${i === 0 ? "active" : ""}`;
        dot.addEventListener("click", () => showTestimonial(i));
        dotsContainer.appendChild(dot);
    });

    if (testimonialCarouselInterval) clearInterval(testimonialCarouselInterval);
    if (list.length > 0) {
        showTestimonial(0);
        testimonialCarouselInterval = setInterval(() => moveCarousel(1), 6000);
    }
}
async function deletePublishedTestimonial(id) {
    if (!confirm("Supprimer définitivement cet avis ?")) return;

    try {
        await fetch("/api/testimonials", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ adminKey, id })
        });
        loadTestimonials();
    } catch (err) {
        alert("Erreur réseau — réessaie dans un instant.");
    }
}

// Récupère les avis déjà validés depuis le backend
async function loadTestimonials() {
    try {
        const res = await fetch("/api/testimonials");
        const list = await res.json();
        renderTestimonials(list);
    } catch (err) {
        console.error("Impossible de charger les témoignages :", err);
    }
}

function showAddTestimonialForm() {
    document.getElementById("addTestimonialModal").classList.add("show");
}

// Envoie l'avis d'un client au backend — il reste invisible tant qu'un admin
// ne l'a pas approuvé (protection contre le spam et les faux avis).
function setupTestimonialForm() {
    const form = document.getElementById("addTestimonialForm");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const data = new FormData(form);

        // Anti-spam : ce champ doit rester vide (les robots le remplissent, pas les humains)
        if (data.get("honeypot")) {
            form.reset();
            closeModal("addTestimonialModal");
            return;
        }

        const newTestimonial = {
            name: data.get("name"),
            company: data.get("company"),
            rating: Number(data.get("rating")),
            text: data.get("text")
        };

        try {
            const res = await fetch("/api/testimonials", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ testimonial: newTestimonial })
            });

            if (!res.ok) {
                let detail = "";
                try { detail = await res.text(); } catch {}
                alert(
                    `Votre avis n'a pas pu être envoyé (code ${res.status})` +
                    (detail ? ` : ${detail}` : ".") +
                    (res.status === 404 ? "\n\nLa fonction serveur 'testimonials' semble introuvable — vérifie qu'elle a bien été déployée sur Vercel (dossier /api)." : "")
                );
                return;
            }

            form.reset();
            closeModal("addTestimonialModal");
            alert(
                currentLang === "en" ? "Thank you! Your review will appear after a quick check by our team." :
                currentLang === "ht" ? "Mèsi! Avi ou ap parèt apre yon ti verifikasyon." :
                "Merci ! Votre avis apparaîtra après une courte vérification par notre équipe."
            );
        } catch (err) {
            alert("Erreur réseau — réessaie dans un instant.");
        }
    });
}

// ---- Modération (visible seulement en mode admin, même mot de passe que les réalisations) ----

async function loadPendingTestimonials() {
    const panel = document.getElementById("testimonialModeration");
    const list = document.getElementById("pendingTestimonialsList");
    if (!panel || !list) return;

    if (!adminKey) {
        panel.style.display = "none";
        return;
    }

    try {
        const res = await fetch("/api/testimonials?pending=1", {
            headers: { "X-Admin-Key": adminKey }
        });
        if (!res.ok) {
            panel.style.display = "none";
            return;
        }
        const pending = await res.json();

        if (pending.length === 0) {
            panel.style.display = "none";
            return;
        }

        panel.style.display = "block";
        list.innerHTML = "";
        pending.forEach((item) => {
            const card = document.createElement("div");
            card.className = "pending-testimonial-card";
            card.innerHTML = `
                <div class="testimonial-rating">${starsHtml(item.rating)}</div>
                <p>${escapeHtml(item.text)}</p>
                <strong>${escapeHtml(item.name)}</strong> ${item.company ? `— ${escapeHtml(item.company)}` : ""}
                <div class="pending-actions">
                    <button class="btn btn-primary btn-small" onclick="approveTestimonial('${item.id}')">Approuver</button>
                    <button class="btn btn-secondary btn-small" onclick="rejectTestimonial('${item.id}')">Rejeter</button>
                </div>
            `;
            list.appendChild(card);
        });
    } catch (err) {
        console.error("Impossible de charger les avis en attente :", err);
    }
}

async function approveTestimonial(id) {
    try {
        await fetch("/api/testimonials", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ adminKey, id, action: "approve" })
        });
        loadPendingTestimonials();
        loadTestimonials();
    } catch (err) {
        alert("Erreur réseau — réessaie dans un instant.");
    }
}

async function rejectTestimonial(id) {
    try {
        await fetch("/api/testimonials", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ adminKey, id })
        });
        loadPendingTestimonials();
    } catch (err) {
        alert("Erreur réseau — réessaie dans un instant.");
    }
}

function showTestimonial(index) {
    const carousel = document.getElementById("testimonialsCarousel");
    const dots = document.querySelectorAll(".carousel-dot");
    if (!carousel) return;

    currentTestimonialIndex = index;
    carousel.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
}

function moveCarousel(direction) {
    const total = document.getElementById("testimonialsCarousel").children.length;
    if (total === 0) return;
    currentTestimonialIndex = (currentTestimonialIndex + direction + total) % total;
    showTestimonial(currentTestimonialIndex);
}

// ================================
// CHATBOT IA
// ================================
function initChatbot() {
    // Le chat reste FERMÉ par défaut à l'ouverture de la page — seul toggleChatbot() l'ouvre.
}

function toggleChatbot() {
    const chat = document.querySelector(".chatbot-container");
    chatbotOpen = !chatbotOpen;
    chat.classList.toggle("open", chatbotOpen);
}

function handleChatbotInput(event) {
    if (event.key === "Enter") sendChatbotMessage();
}

function sendChatbotMessage() {
    const input = document.getElementById("chatbotInput");
    const message = input.value.trim();
    if (!message) return;
    addMessage("user", message);
    input.value = "";

    if (chatbotFormState.active) {
        handleLeadFormInput(message);
        return;
    }

    const response = generateAIResponse(message);
    setTimeout(() => addMessage("ai", response), 700);
}

function addMessage(sender, text) {
    const messages = document.getElementById("chatbotMessages");
    const messageEl = document.createElement("div");
    messageEl.className = `message ${sender}-message`;
    messageEl.innerHTML = `
        <div class="message-avatar"><i class="fas fa-${sender === "ai" ? "robot" : "user"}" aria-hidden="true"></i></div>
        <div class="message-content">
            <p>${text}</p>
            <span class="message-time">Now</span>
        </div>
    `;
    messages.appendChild(messageEl);
    messages.scrollTop = messages.scrollHeight;
}

function generateAIResponse(message) {
    const msg = message.toLowerCase();
    if (msg.includes("service")) return "Nous offrons développement web, cybersécurité, support informatique et solutions réseau.";
    if (msg.includes("prix") || msg.includes("tarif")) return "Les prix varient selon la complexité. Le formulaire de devis vous donnera une estimation rapide.";
    if (msg.includes("rendez") || msg.includes("meeting") || msg.includes("booking")) return "Cliquez sur 'Prendre Rendez-vous' pour réserver une consultation.";
    if (msg.includes("sécurité") || msg.includes("security")) return "Notre service cybersécurité protège vos systèmes avec audit, monitoring et prévention.";
    if (msg.includes("formation")) return "Nous offrons des formations en présentiel ou à distance. Restez connecté pour toutes nos nouvelles mises à jour.";
    return "Merci pour votre message. Un expert Fleutech vous répondra rapidement.";
}

// ================================
// RÉALISATIONS DYNAMIQUES
// ================================

// Empêche l'injection de code via un titre/description — protège tous les visiteurs.
function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str ?? "";
    return div.innerHTML;
}

function renderRealizations() {
    const grid = document.getElementById("realizationsGrid");
    if (!grid) return;

    grid.innerHTML = "";
    realizations.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "realization-card";
        const imageHtml = item.image
            ? `<img src="${item.image}" alt="${escapeHtml(item.title)}" class="realization-image">`
            : "";
        card.innerHTML = `
            ${imageHtml}
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.description)}</p>
            <div class="project-category">${escapeHtml(item.category)}</div>
            <div class="project-tech">
                ${item.tech.map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join("")}
            </div>
            ${adminKey ? `<button class="btn btn-secondary btn-small" onclick="removeRealization(${index})">Supprimer</button>` : ""}
        `;
        grid.appendChild(card);
    });
}

function showAddRealizationForm() {
    document.getElementById("addRealizationModal").classList.add("show");
}

// Redimensionne et compresse une photo avant envoi (comme Facebook) — sans ça,
// une photo de smartphone (4-8 Mo) surchargerait le stockage et ralentirait le site.
function resizeImageFile(file, maxWidth = 800, quality = 0.7) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const scale = Math.min(1, maxWidth / img.width);
                const canvas = document.createElement("canvas");
                canvas.width = img.width * scale;
                canvas.height = img.height * scale;
                canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
                resolve(canvas.toDataURL("image/jpeg", quality));
            };
            img.onerror = reject;
            img.src = e.target.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// Envoie la nouvelle réalisation à la fonction serveur, qui vérifie le mot de
// passe et sauvegarde dans Netlify Blobs — donc ça persiste vraiment pour tous
// les visiteurs, pas seulement dans le navigateur de la personne qui ajoute.
function setupAddRealizationForm() {
    const form = document.getElementById("addRealizationForm");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const data = new FormData(form);
        const fileInput = document.getElementById("realizationImage");
        let imageData = "";

        if (fileInput.files && fileInput.files[0]) {
            try {
                imageData = await resizeImageFile(fileInput.files[0]);
            } catch {
                alert("Impossible de traiter la photo — la réalisation sera ajoutée sans image.");
            }
        }

        const newItem = {
            title: data.get("title"),
            description: data.get("description"),
            category: data.get("category"),
            image: imageData,
            tech: data.get("tech").split(",").map(t => t.trim()).filter(Boolean)
        };

        try {
            const res = await fetch("/api/realizations", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ adminKey, realization: newItem })
            });

            if (res.status === 401) {
                alert("Mot de passe administrateur incorrect.");
                return;
            }
            if (!res.ok) {
                let detail = "";
                try { detail = await res.text(); } catch {}
                alert(
                    `Cette réalisation n'a pas pu être enregistrée (code ${res.status})` +
                    (detail ? ` : ${detail}` : ".") +
                    (res.status === 404 ? "\n\nLa fonction serveur 'realizations' semble introuvable — vérifie qu'elle a bien été déployée sur Vercel (dossier /api)." : "")
                );
                return;
            }

            realizations = await res.json();
            renderRealizations();
            form.reset();
            closeModal("addRealizationModal");
        } catch (err) {
            alert("Erreur réseau — réessaie dans un instant.");
        }
    });
}

// Supprime une réalisation via la fonction serveur (même vérification de mot de passe)
async function removeRealization(index) {
    try {
        const res = await fetch("/api/realizations", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ adminKey, index })
        });

        if (res.status === 401) {
            alert("Mot de passe administrateur incorrect.");
            return;
        }

        realizations = await res.json();
        renderRealizations();
    } catch (err) {
        alert("Erreur réseau — réessaie dans un instant.");
    }
}


// ================================
// UTILITAIRES
// ================================
function viewProject(id) {
    const project = projectsData[id];
    if (!project) return;

    document.getElementById("modalProjectName").textContent = project.name;
    document.getElementById("modalProjectDesc").textContent = project.desc;
    document.getElementById("modalProjectProblem").textContent = project.problem;

    const imageEl = document.getElementById("modalProjectImage");
    if (imageEl) {
        imageEl.innerHTML = `<div class="project-mockup"><i class="fas ${project.icon}" aria-hidden="true"></i></div>`;
    }

    const techEl = document.getElementById("modalProjectTech");
    if (techEl) {
        techEl.innerHTML = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join("");
    }

    document.getElementById("projectModal").classList.add("show");
}
