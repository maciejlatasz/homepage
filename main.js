console.log('siema');
console.log('Super tajne dane')
const name = 'Maciek';
const age = 29;
console.log(name);
console.log(age);
console.log(`Nazywam się ${name} i mam ${age} lat`);

const heading = document.querySelector('.main__heading');

console.log(heading);

const paragraphs = document.querySelectorAll('p');

console.log(paragraphs);

const change = document.querySelector('.about__test');

console.log(change.innerHTML);
change.innerHTML = 'Zmiana wprowadzona za pomocą JS';