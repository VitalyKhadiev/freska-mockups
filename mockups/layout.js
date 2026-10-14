// Общие части всех макетов: шапка, подвал, нижняя панель на телефоне.
// В Laravel это будут Blade-компоненты (layouts/app.blade.php).
(function () {
  const PHONE = '+7 (000) 000-00-00';
  const TEL = 'tel:+70000000000';
  const page = document.body.dataset.page || '';
  const on = (name) => (page === name ? ' class="active"' : '');

  const header = `
  <div class="topbar">
    <div class="wrap">
      <span>Доставка по Тобольску от 1,5 часа · бесплатно от 5 000 ₽</span>
      <span style="display:flex; gap:18px; align-items:center">
        <a href="delivery.html">Ежедневно 10:30–20:00</a>
        <a href="${TEL}">${PHONE}</a>
      </span>
    </div>
  </div>
  <header class="header">
    <div class="wrap">
      <a class="logo" href="home.html"><img src="../assets/logo.png" alt="Freska bouquet"></a>
      <nav>
        <a href="catalog.html"${on('catalog')}>Каталог</a>
        <a href="delivery.html"${on('delivery')}>Доставка и оплата</a>
        <a href="home.html#reviews">Отзывы</a>
        <a href="home.html#contacts">Контакты</a>
      </nav>
      <div class="actions">
        <a class="search" href="catalog.html"><i class="ti ti-search"></i>Найти букет или набор</a>
        <a class="icon-btn m-only" href="catalog.html" aria-label="Поиск"><i class="ti ti-search"></i></a>
        <a class="icon-btn d-only" href="account.html#favorites" aria-label="Избранное"><i class="ti ti-heart"></i></a>
        <a class="icon-btn" href="account.html" aria-label="Личный кабинет"><i class="ti ti-user"></i></a>
        <a class="icon-btn" href="cart.html" aria-label="Корзина"><i class="ti ti-shopping-bag"></i><span class="badge">2</span></a>
      </div>
    </div>
  </header>`;

  const footer = `
  <footer class="footer">
    <div class="wrap">
      <div class="grid">
        <div><div class="brand">FRESKA<small>bouquet</small></div><p style="margin-top:20px; font-size:14px; max-width:280px">Цветы, клубника в шоколаде и десерты с доставкой по Тобольску.</p></div>
        <div><h4>Каталог</h4><ul><li><a href="catalog.html">Цветы</a></li><li><a href="catalog.html">Клубничные букеты</a></li><li><a href="catalog.html">Цветы + клубника</a></li><li><a href="catalog.html">Клубничные наборы</a></li><li><a href="catalog.html">Десерты</a></li><li><a href="catalog.html">Дополнения</a></li></ul></div>
        <div><h4>Покупателям</h4><ul><li><a href="delivery.html">Доставка и оплата</a></li><li><a href="home.html#reviews">Отзывы</a></li><li><a href="account.html">Личный кабинет</a></li><li><a href="home.html#contacts">Контакты</a></li></ul></div>
        <div><h4>Мы на связи</h4><ul><li><a href="${TEL}">${PHONE}</a></li><li><a href="#">Telegram</a></li><li><a href="#">WhatsApp</a></li><li><a href="#">ВКонтакте</a></li></ul></div>
      </div>
      <div class="legal"><span>© 2026 FRESKA · ИП Фамилия И. О. · ИНН 000000000000</span><span><a href="#">Публичная оферта</a> · <a href="#">Политика конфиденциальности</a></span></div>
    </div>
  </footer>
  <nav class="mobile-bar">
    <a href="catalog.html"${on('catalog')}><i class="ti ti-layout-grid"></i>Каталог</a>
    <a href="account.html#favorites"${on('favorites')}><i class="ti ti-heart"></i>Избранное</a>
    <a href="cart.html"${on('cart')}><i class="ti ti-shopping-bag"></i><span class="badge">2</span>Корзина</a>
    <a href="${TEL}"><i class="ti ti-phone"></i>Позвонить</a>
    <a class="btn btn-primary" href="catalog.html">Заказать</a>
  </nav>`;

  document.body.insertAdjacentHTML('afterbegin', header);
  document.body.insertAdjacentHTML('beforeend', footer);

  // Переключатели: в контейнере [data-group] активным становится нажатый [data-opt]
  document.addEventListener('click', (e) => {
    const opt = e.target.closest('[data-opt]');
    if (opt && !opt.disabled) {
      const group = opt.closest('[data-group]');
      group.querySelectorAll('[data-opt]').forEach((el) => el.classList.toggle('active', el === opt));
      group.dispatchEvent(new CustomEvent('change-opt', { detail: opt.dataset.opt, bubbles: true }));
    }
    // Счётчики количества
    const step = e.target.closest('[data-step]');
    if (step) {
      const out = step.parentElement.querySelector('span');
      out.textContent = Math.max(1, Number(out.textContent) + Number(step.dataset.step));
    }
  });
})();
