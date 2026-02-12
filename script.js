const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.filter;

    buttons.forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');

    cards.forEach((card) => {
      const cardCategory = card.dataset.category;
      const shouldShow = category === 'all' || category === cardCategory;
      card.classList.toggle('is-hidden', !shouldShow);
    });
  });
});
