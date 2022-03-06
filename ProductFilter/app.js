const filters = document.querySelector('#filters');

filters.addEventListener('input', filterGoods);

function filterGoods() {
	const country = filters.querySelector('#country').value,
		sizes = [...filters.querySelectorAll('#size input:checked')].map((n) => n.value),
		priceMin = document.querySelector('#price-min').value,
		priceMax = document.querySelector('#price-max').value;

	outputGoods(
		DATA.filter(
			(n) =>
				(!country || n.country === country) &&
				(!sizes.length || sizes.includes(n.size)) &&
				(!priceMin || priceMin <= n.cost) &&
				(!priceMax || priceMax >= n.cost)
		)
	);
}

function outputGoods(goods) {
	document.getElementById('goods').innerHTML = goods
		.map(
			(n) => `
      <div class="product-list-items">
      <h3 class="product-list-items-h3">${n.name}</h3>
      <img src="${n.image}" class="product-list-items-img">
      <p>Cost: ${n.cost}</p>
      <div class="product-list-button">
        <button tabindex="-1" data-art="${n.name}">
          Button
        </button>
  </div>
</div>
  `
		)
		.join('');
}

const DATA = [
	{
		sex: 'male',
		name: 'Deneme 1',
		cost: 1000,
		country: 'france',
		image: 'https://st.myideasoft.com/idea/di/34/myassets/products/572/tsk-tisort-2020.jpg?revision=1593324979',
		size: 'S',
	},
	{
		sex: 'female',
		name: 'Deneme 2',
		cost: 1200,
		country: 'turkey',
		image: 'https://www.modaeva.com.tr/productimages/111153/middle/5150.jpg',
		size: 'M',
	},
	{
		sex: 'male',
		name: 'Deneme 3',
		cost: 1700,
		country: 'china',
		image:
			'https://www.hediyenolsun.com/wp-content/uploads/2019/04/erkek-tisort-tasarla-kapida-odeme.-kisiye-ozel-resimli-erkek-tisort-baski.jpg',
		size: 'L',
	},
	{
		sex: 'male',
		name: 'Deneme 4',
		cost: 2000,
		country: 'turkey',
		image: 'https://www.modaeva.com.tr/productimages/111153/middle/5150.jpg',
		size: 'XL',
	},
	{
		sex: 'male',
		name: 'Deneme 5',
		cost: 1200,
		country: 'turkey',
		image: 'https://www.modaeva.com.tr/productimages/111153/middle/5150.jpg',
		size: 'M',
	},
	{
		sex: 'male',
		name: 'Deneme 6',
		cost: 1700,
		country: 'china',
		image: 'https://www.modaeva.com.tr/productimages/111153/middle/5150.jpg',
		size: 'L',
	},
	{
		sex: 'male',
		name: 'Deneme 7',
		cost: 2000,
		country: 'turkey',
		image: 'https://www.modaeva.com.tr/productimages/111153/middle/5150.jpg',
		size: 'XL',
	},
];

outputGoods(DATA);
