// Set skill bar widths from data-level attributes
document.querySelectorAll('.skill-bar').forEach(bar => {
    const level = bar.getAttribute('data-level') || '0';
    bar.style.setProperty('--level', level + '%');
});

let isEditing = false;

function toggleEdit() {
    isEditing = !isEditing;
    const resume = document.getElementById('resume');
    const editBtn = document.getElementById('editBtn');

    document.querySelectorAll('.editable').forEach(el => {
        el.setAttribute('contenteditable', isEditing);
    });

    resume.classList.toggle('editing', isEditing);
    editBtn.textContent = isEditing ? 'Save Resume' : 'Edit Resume';
}

// Photo upload preview
document.getElementById('photoInput').addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (evt) {
            document.getElementById('profilePhoto').src = evt.target.result;
        };
        reader.readAsDataURL(file);
    }
});

function printResume() {
    window.print();
}

// Simple "Download PDF" using the browser's print-to-PDF dialog.
// For a true one-click PDF export, wire this up to a library like html2pdf.js.
function downloadPDF() {
    window.print();
}