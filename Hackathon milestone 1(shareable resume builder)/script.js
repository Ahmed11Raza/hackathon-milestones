import { generatePDF } from './utils.js';

document.getElementById('generate-resume').addEventListener('click', () => {
    const username = document.getElementById('username').value.trim();
    const name = document.getElementById('name').value;
    const education = document.getElementById('education').value;
    const workExperience = document.getElementById('work-experience').value;

    if (!username) {
        alert("Username is required to generate a shareable link!");
        return;
    }

    document.getElementById('display-name').textContent = name;
    document.getElementById('display-education').textContent = education;
    document.getElementById('display-work-experience').textContent = workExperience;

    const shareableLink = `https://${username}.vercel.app/resume`;
    const linkElement = document.getElementById('shareable-link');
    linkElement.textContent = shareableLink;
    linkElement.href = shareableLink;

    document.getElementById('resume-display').classList.remove('hidden');
});

document.getElementById('copy-link').addEventListener('click', () => {
    const shareableLink = document.getElementById('shareable-link').href;
    navigator.clipboard.writeText(shareableLink)
        .then(() => alert("Shareable link copied to clipboard!"))
        .catch(() => alert("Failed to copy link."));
});

document.getElementById('download-pdf').addEventListener('click', () => {
    generatePDF();
});
