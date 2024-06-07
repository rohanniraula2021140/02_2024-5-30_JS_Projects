const products = [
    {
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        title: 'Color Flipper',
        color: 'Black',
        price: '$35',
        link: 'projects/project1/index.html'
    },
    {
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
        title: 'Classic Tee',
        color: 'White',
        price: '$40',
        link: 'projects/project2/index.html'
    },
    // Add more products as needed
];

const productContainer = document.getElementById('product-container');

products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('group', 'relative');

    productDiv.innerHTML = `
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img src="${product.image}" alt="${product.title}" class="h-full w-full object-cover object-center lg:h-full lg:w-full">
        </div>
        <div class="mt-4 flex justify-between">
            <div>
                <h3 class="text-sm text-gray-700">
                    <a href="${product.link}">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${product.title}
                    </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">${product.color}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">${product.price}</p>
        </div>
    `;

    productContainer.appendChild(productDiv);
});
