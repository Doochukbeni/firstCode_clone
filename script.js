const testimonials = [
  {
    id: 1,
    img: './images/DSC_7503.JPG',
    quote:
      '“I have always wished that my computer would be as easy to use as my telephone. My wish has come true. I no longer know how to use my telephone.”',
    name: 'Mr Doo',
  },
  {
    id: 2,
    img: './images/DSC_7503.JPG',
    quote:
      '“Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.”',
    name: 'Kernighan’s law',
  },
  {
    id: 3,
    img: './images/DSC_7503.JPG',
    quote:
      '"There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult."',
    name: 'C. A. R. Hoare in 1980',
  },
];

const openMenu = document.getElementById('mobile-cta');
const nav = document.querySelector('nav');
const mobileBtnExit = document.getElementById('mobile-exit');
const date = document.querySelector('.date');
const quote = document.querySelector('.quote');

console.log(quote);

openMenu.addEventListener('click', () => {
  nav.classList.add('menu-btn');
});

mobileBtnExit.addEventListener('click', () => {
  nav.classList.remove('menu-btn');
});

date.textContent = new Date().getFullYear();

// to load the quotation content
window.addEventListener('DOMContentLoaded', () => {
  quote.innerHTML = testimonials
    .map((test) => {
      return ` 
            <ul>
                <li>
                    <img src=${test.img} alt="photo of mr Doo">
                    <blockquote>
                        ${test.quote}
                    </blockquote>
                    <cite> ${test.name}</cite>
                </li>

            </ul>`;
    })
    .join('');
});

const api_endpoint = 'https://jsonplaceholder.typicode.com/users';

// (1) Use the fetch() function to make a GET request to
// the API endpoint

// (2) Use .then() with a callback to console.log() the name
// of the first user

// (3) Use .catch() to handle any possible error should the
// HTTP request fail

function run() {
  // Add your code below
  fetch(api_endpoint)
    .then((res) => res.json())
    .then((res_user) => console.log(res_user[1].name))
    .catch((err) => console.log('fetch_err', err));
}
run();
