// app.ts

interface ResumeData {
    name: string;
    education: string;
    workExperience: string;
}

document.getElementById('generate-resume')?.addEventListener('click', () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;

    const resumeData: ResumeData = { name, education, workExperience };

    // Populate resume content
    (document.getElementById('display-name') as HTMLElement).textContent = resumeData.name;
    (document.getElementById('display-education') as HTMLElement).textContent = resumeData.education;
    (document.getElementById('display-work-experience') as HTMLElement).textContent = resumeData.workExperience;

    // Show resume section
    document.getElementById('resume-display')?.classList.remove('hidden');

    // Enable inline editing functionality
    const editableFields = document.querySelectorAll('#resume-content span[contenteditable="true"]');
    editableFields.forEach((field) => {
        field.addEventListener('input', (e) => {
            const targetId = (e.target as HTMLElement).id.replace('display-', '');
            const formField = document.getElementById(targetId) as HTMLInputElement | HTMLTextAreaElement;
            if (formField) {
                formField.value = (e.target as HTMLElement).textContent || '';
            }
        });
    });
});
