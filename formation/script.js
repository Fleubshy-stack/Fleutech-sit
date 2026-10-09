"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".conference-registration-form");
    if (!form) return;

    const profileSelect = form.querySelector("#conferenceProfile");
    const studyField = form.querySelector("#conferenceStudyField");
    const classField = form.querySelector("#conferenceClassField");
    let ticketData = null;

    const updateProfileFields = () => {
        const profile = profileSelect.value;
        [
            { field: studyField, input: studyField.querySelector("input"), visible: profile === "etudiant" },
            { field: classField, input: classField.querySelector("input"), visible: profile === "ecolier" }
        ].forEach(({ field, input, visible }) => {
            field.hidden = !visible;
            input.disabled = !visible;
            input.required = visible;
            if (!visible) input.value = "";
        });
    };

    const showTicket = (name, registrationId) => {
        ticketData = { name, registrationId: String(registrationId) };
        document.getElementById("conferenceTicketAttendee").textContent = name;
        document.getElementById("conferenceTicketReference").textContent = ticketData.registrationId;
        const ticket = document.getElementById("conferenceEntryTicket");
        ticket.hidden = false;
        ticket.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    const downloadTicket = () => {
        if (!ticketData) return;

        const escapeXml = (value) => String(value).replace(/[<>&'"]/g, (character) => ({
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            "'": "&apos;",
            '"': "&quot;"
        })[character]);
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="600" viewBox="0 0 1000 600">
<rect width="1000" height="600" rx="32" fill="#0a0f1c"/>
<rect x="20" y="20" width="960" height="560" rx="24" fill="none" stroke="#00d4ff" stroke-width="3"/>
<text x="60" y="95" fill="#00d4ff" font-family="Arial,sans-serif" font-size="26" font-weight="700">FLEUTECH · CARTE D’ENTRÉE</text>
<text x="60" y="175" fill="#f9fafb" font-family="Arial,sans-serif" font-size="38" font-weight="700">Conférence sur l’intelligence artificielle</text>
<text x="60" y="245" fill="#cbd5e1" font-family="Arial,sans-serif" font-size="22">Participant(e)</text>
<text x="60" y="285" fill="#f9fafb" font-family="Arial,sans-serif" font-size="30" font-weight="700">${escapeXml(ticketData.name)}</text>
<text x="60" y="365" fill="#cbd5e1" font-family="Arial,sans-serif" font-size="22">Samedi 31 octobre 2026 · 9 h à 14 h</text>
<text x="60" y="415" fill="#cbd5e1" font-family="Arial,sans-serif" font-size="20">Institution Chrétienne Mixte Les Érudits</text>
<text x="60" y="450" fill="#cbd5e1" font-family="Arial,sans-serif" font-size="20">Delmas 33, Rue Empereur #1</text>
<text x="60" y="525" fill="#00d4ff" font-family="Arial,sans-serif" font-size="20">Référence d’inscription : ${escapeXml(ticketData.registrationId)}</text>
</svg>`;
        const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml;charset=utf-8" }));
        const link = document.createElement("a");
        link.href = url;
        link.download = `carte-entree-conference-IA-${ticketData.registrationId}.svg`;
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    };

    profileSelect.addEventListener("change", updateProfileFields);
    updateProfileFields();

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const status = document.getElementById("conferenceFormStatus");
        const fields = Object.fromEntries(new FormData(form).entries());

        if (fields["bot-field"]) {
            form.reset();
            updateProfileFields();
            return;
        }

        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        status.textContent = "Envoi de votre inscription…";
        status.classList.remove("is-error");

        try {
            const response = await fetch(form.dataset.endpoint || "/api/formation", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ registration: fields })
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.error || "L’enregistrement de l’inscription a échoué.");
            if (!result.registration_id) throw new Error("L’inscription a été reçue, mais aucune référence n’a été retournée.");

            showTicket(fields.name, result.registration_id);
            form.reset();
            updateProfileFields();
            status.textContent = "Merci ! Votre inscription est enregistrée. Voici votre carte d’entrée à télécharger.";
        } catch (error) {
            console.error("Impossible d’envoyer l’inscription à la conférence :", error);
            status.textContent = error.message || "L’inscription n’a pas pu être envoyée. Réessayez ou contactez-nous à infofleutech@yahoo.com.";
            status.classList.add("is-error");
        } finally {
            submitButton.disabled = false;
        }
    });

    document.getElementById("downloadConferenceTicket").addEventListener("click", downloadTicket);
    document.getElementById("printConferenceTicket").addEventListener("click", () => window.print());
});
