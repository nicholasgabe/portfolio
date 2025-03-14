function openModal(title, videoSrc) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-video').src = videoSrc;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('modal-video').pause();
}