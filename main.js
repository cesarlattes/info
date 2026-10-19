(function () {
  'use strict';
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('menu');
  var subs = document.querySelectorAll('.has-sub');

  function closeSubs(except) {
    subs.forEach(function (li) {
      if (li === except) return;
      li.classList.remove('open');
      li.querySelector('.sub-toggle').setAttribute('aria-expanded', 'false');
    });
  }

  function closeAll() {
    closeSubs();
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  // Menu hambúrguer (mobile)
  toggle.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    if (!open) closeSubs();
  });

  // Submenus (clique/toque/teclado)
  subs.forEach(function (li) {
    var btn = li.querySelector('.sub-toggle');
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = li.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      closeSubs(li);
    });
  });

  // Fechar ao clicar fora ou apertar Esc
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.main-nav')) closeAll();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    closeAll();
    toggle.focus();
  });

  // Marca o item do menu da página atual
  var page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu a').forEach(function (a) {
    if (a.getAttribute('href') === page) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
})();
