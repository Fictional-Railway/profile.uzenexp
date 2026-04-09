document.addEventListener('DOMContentLoaded', () => {
    const viewer = document.getElementById('photo-viewer');
    const fullImg = document.getElementById('full-img');
    const closeBtn = document.getElementById('close-btn');

    // 全てのサムネイルにクリックイベントを設定
    document.querySelectorAll('.thumb').forEach(img => {
        img.addEventListener('click', () => {
            fullImg.src = img.src; // 本来はここで大きい画像のURLを入れる
            viewer.style.display = 'flex';
        });
    });

    // 閉じるボタン
    closeBtn.addEventListener('click', () => {
        viewer.style.display = 'none';
    });

    // 最初に非表示にしておく
    viewer.style.display = 'none';
});