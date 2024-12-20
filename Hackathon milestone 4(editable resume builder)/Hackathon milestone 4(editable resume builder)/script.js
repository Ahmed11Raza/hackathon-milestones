document.getElementById('generate-resume').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const education = document.getElementById('education').value;
    const workExperience = document.getElementById('work-experience').value;

    // Populate resume content
    document.getElementById('display-name').textContent = name;
    document.getElementById('display-education').textContent = education;
    document.getElementById('display-work-experience').textContent = workExperience;

    // Show resume section
    document.getElementById('resume-display').classList.remove('hidden');

    // Enable inline editing functionality
    const editableFields = document.querySelectorAll('#resume-content span[contenteditable="true"]');
    editableFields.forEach((field) => {
        field.addEventListener('input', (e) => {
            const targetId = e.target.id.replace('display-', '');
            const formField = document.getElementById(targetId);
            if (formField) {
                formField.value = e.target.textContent;
            }
        });
    });
});
