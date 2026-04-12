document.addEventListener('DOMContentLoaded', () => {
    const viewer = document.getElementById('photo-viewer');
    const fullImg = document.getElementById('full-img');
    const closeBtn = document.getElementById('close-btn');

    document.querySelectorAll('.thumb').forEach(img => {
        img.addEventListener('click', () => {
            fullImg.src = img.src;
            viewer.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        viewer.style.display = 'none';
    });

    viewer.style.display = 'none';
});