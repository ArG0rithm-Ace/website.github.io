window.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(res => res.text())
    .then(html => {
      document.body.insertAdjacentHTML("afterbegin", html);
      
      // ヘッダーが読み込まれた後にイベントリスナーを設定
      initHamburgerMenu();
    });

  fetch("footer.html")
    .then(res => res.text())
    .then(html => document.body.insertAdjacentHTML("beforeend", html));
});

function initHamburgerMenu() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const overlay = document.getElementById('overlay');

  if (!hamburgerBtn || !navMenu || !overlay) {
    console.log('ハンバーガーメニューの要素が見つかりません');
    return;
  }

  // ハンバーガーメニューの開閉
  function toggleMenu() {
    hamburgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // ページスクロールを防ぐ/許可する
    if (navMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  // ハンバーガーボタンクリック
  hamburgerBtn.addEventListener('click', toggleMenu);

  // オーバーレイクリックでメニューを閉じる
  overlay.addEventListener('click', toggleMenu);

  // ESCキーでメニューを閉じる
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      toggleMenu();
    }
  });

  // ウィンドウリサイズ時にメニューを閉じる
  window.addEventListener('resize', function() {
    if (navMenu.classList.contains('active')) {
      toggleMenu();
    }
  });

  // メニューリンククリック時にメニューを閉じる
  const menuLinks = navMenu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      toggleMenu();
    });
  });
}