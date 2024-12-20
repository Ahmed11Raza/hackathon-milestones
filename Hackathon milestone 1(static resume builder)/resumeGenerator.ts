export function generateResume(
    name: string,
    email: string,
    skills: string,
    experience: string
): string {
    return `
        <h2>Resume</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Skills:</strong> ${skills}</p>
        <p><strong>Experience:</strong></p>
        <p>${experience}</p>
    `;
}
