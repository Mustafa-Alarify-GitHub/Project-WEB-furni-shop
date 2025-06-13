"use strict";
// TODO convert to JSON
const products = [
    { id: 1, name: "Ceiling Light", image: "p1.png", price: 82.0, discountPrice: 75.0 },
    { id: 2, name: "Wood Chair", image: "p2.png", price: 70.0, discountPrice: 50.0 },
    { id: 3, name: "Paper Cupboard", image: "p3.png", price: 120.0, discountPrice: 105.0 },
    { id: 4, name: "Ole Gundorse Spring Chair", image: "p4.png", price: 100.0, discountPrice: 82.0 },
    { id: 5, name: "Treos Series 911", image: "p5.png", price: 70.0, discountPrice: 50.0 },
    { id: 6, name: "Multi Bilderman Slipper", image: "p6.png", price: 120.0, discountPrice: 105.0 },
    { id: 7, name: "XORA Corner Desk", image: "p7.png", price: 100.0, discountPrice: 82.0 },
    { id: 8, name: "Black Forest Series Wood Table", image: "p8.png", price: 82.0, discountPrice: 75.0 },
];
const container = document.getElementById("productsContainer");
products.forEach((product, i) => {
    const div = document.createElement("div");
    div.className = `
    flex flex-col gap-2 border border-[#e7e9eb] rounded-xl p-2
    transform transition duration-300 hover:scale-105 hover:shadow-xl
    animate-fade-in
  `;
    div.style.animationDelay = `${i * 100}ms`;
    div.innerHTML = `
    <img src="../../images/products/${product.image}" 
         class="rounded-xl object-cover" 
         alt="${product.name}">
    <h5 class="text-[16px] tablet:text-[24px] font-semibold">${product.name}</h5>
    <h5 class="text-[14px] tablet:text-[16px]">
      $${product.discountPrice.toFixed(2)} 
      <span class="text-[#919397] line-through">$${product.price.toFixed(2)}</span>
    </h5>
  `;
    container.appendChild(div);
});
