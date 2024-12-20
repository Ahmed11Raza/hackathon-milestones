export function generateDynamicResume(
    name: string,
    email: string,
    education: string,
    workExperience: string,
    skills: string
): string {
    return `
        <h2>Generated Resume</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Education:</strong></p>
        <p>${education.replace(/\n/g, '<br>')}</p>
        <p><strong>Work Experience:</strong></p>
        <p>${workExperience.replace(/\n/g, '<br>')}</p>
        <p><strong>Skills:</strong> ${skills}</p>
    `;
}
