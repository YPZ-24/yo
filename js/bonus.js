const p1 = document.querySelector('p:nth-child(1)');
const p2 = document.querySelector('p:nth-child(2)');
const p3 = document.querySelector('p:nth-child(3)');

p1.style.opacity = 1

setTimeout(() => p2.style.opacity = 1, 1000);

setTimeout(() => p3.style.opacity = 1, 2000);