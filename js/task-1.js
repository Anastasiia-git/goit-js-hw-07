const quantity = document.querySelectorAll('.item');
console.log(`Number of categories: ${quantity.length}`);

quantity.forEach(category => {
  const title = category.querySelector('h2').textContent;
  console.log(`Category: ${title}`);
  const el = category.querySelectorAll('ul li').length;
  console.log(`Elements: ${el}`);
});
