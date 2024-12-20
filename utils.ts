export function generatePDF(): void {
    const resumeContent = document.getElementById('resume-content');
    if (!resumeContent) return;

    const pdfContent = `
        <html>
        <head><title>Your Resume</title></head>
        <body>${resumeContent.outerHTML}</body>
        </html>
    `;
    const pdfWindow = window.open("", "_blank");
    pdfWindow?.document.write(pdfContent);
    pdfWindow?.document.close();
    pdfWindow?.print();
}
 