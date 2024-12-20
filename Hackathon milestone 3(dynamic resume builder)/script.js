import { generateDynamicResume } from './resumeGenerator.js';

document.getElementById('resumeForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const education = document.getElementById('education').value;
    const workExperience = document.getElementById('workExperience').value;
    const skills = document.getElementById('skills').value;

    const resumeHTML = generateDynamicResume(name, email, education, workExperience, skills);
    document.getElementById('resumeOutput').innerHTML = resumeHTML;
});
