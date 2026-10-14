// Демо-товары для макетов. На сайте эти данные будут приходить из базы через админку.
const P = '../assets/';
const PRODUCTS = [
  { name: 'Пионы с клубникой в шоколаде', meta: '11 пионов · 9 ягод', price: 8900, img: 'IMG_6784.jpg', pos: '45% 62%', tag: 'hit' },
  { name: 'Букет «Нежность»', meta: 'гортензия, диантус, роза', price: 4900, img: 'IMG_6786.jpg', pos: '50% 45%' },
  { name: '101 красная роза', meta: 'Эквадор, 60 см', price: 24900, img: 'IMG_6785.jpg', pos: '50% 58%', tag: 'hit' },
  { name: 'Клубника в шоколаде', meta: 'от 9 до 25 ягод', price: 2700, from: true, img: 'IMG_6784.jpg', pos: '50% 68%', tag: 'new' },
  { name: 'Набор «Для неё»', meta: 'букет + 12 ягод', price: 6300, old: 7000, img: 'IMG_6786.jpg', pos: '30% 40%', tag: 'sale' },
  { name: '51 роза в ленте', meta: 'Эквадор, 50 см', price: 12500, img: 'IMG_6785.jpg', pos: '35% 50%' },
  { name: 'Пионы «Бордо»', meta: '11 пионов', price: 6900, img: 'IMG_6784.jpg', pos: '70% 55%', tag: 'new' },
  { name: 'Букет «Зефир»', meta: 'гортензия, эустома', price: 5400, img: 'IMG_6786.jpg', pos: '70% 55%' },
  { name: 'Клубничный букет «Шарм»', meta: '15 ягод, белый шоколад', price: 3900, img: 'IMG_6784.jpg', pos: '40% 70%' },
  { name: 'Розы «Классика», 25 шт.', meta: 'Эквадор, 50 см', price: 6500, img: 'IMG_6785.jpg', pos: '60% 45%' },
  { name: 'Букет «Пудра»', meta: 'диантус, кустовая роза', price: 3600, img: 'IMG_6786.jpg', pos: '40% 60%', tag: 'hit' },
  { name: 'Набор «Комплимент»', meta: 'мини-букет + 6 ягод', price: 2900, img: 'IMG_6784.jpg', pos: '55% 50%' },
];

const rub = (n) => n.toLocaleString('ru-RU') + ' ₽';
const TAGS = { hit: '<span class="tag">Хит</span>', new: '<span class="tag tag-new">Новинка</span>', sale: '<span class="tag tag-sale">−10%</span>' };

function productCard(p) {
  return `
  <article class="product">
    <a class="photo" href="product.html">${TAGS[p.tag] || ''}<button class="fav" aria-label="В избранное" onclick="event.preventDefault(); this.querySelector('i').classList.toggle('ti-heart-filled')"><i class="ti ti-heart"></i></button><img src="${P + p.img}" alt="${p.name}" style="object-position:${p.pos}" loading="lazy"></a>
    <a href="product.html"><h3 class="name">${p.name}</h3></a><div class="meta">${p.meta}</div>
    <div class="row"><span class="price">${p.from ? 'от ' : ''}${rub(p.price)}${p.old ? `<span class="old">${rub(p.old)}</span>` : ''}</span>
    <button class="btn btn-dark btn-sm"><i class="ti ti-plus"></i><span>${p.from ? 'Выбрать' : 'В корзину'}</span></button></div>
  </article>`;
}

// <div class="products" data-products="0,1,2,3"> — номера товаров через запятую или "all"
document.querySelectorAll('[data-products]').forEach((el) => {
  const ids = el.dataset.products === 'all' ? PRODUCTS.map((_, i) => i) : el.dataset.products.split(',').map(Number);
  el.innerHTML = ids.map((i) => productCard(PRODUCTS[i])).join('');
});
