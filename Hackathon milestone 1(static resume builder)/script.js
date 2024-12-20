import { generateResume } from './resumeGenerator.js';

document.getElementById('resumeForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const skills = document.getElementById('skills').value;
    const experience = document.getElementById('experience').value;

    const resumeHTML = generateResume(name, email, skills, experience);
    document.getElementById('resumeOutput').innerHTML = resumeHTML;
});
