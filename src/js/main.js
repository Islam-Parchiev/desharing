import './_components.js';
import './_functions.js';
const inner = document.querySelector('.mobile-menu__inner');
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.mobile-menu');
inner.addEventListener('click', () => {
    menu.classList.remove('menu--active');
    burger.classList.remove('burger--active');
})
// const ctx = document.getElementById('myChart');

// new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });


// test

// const maxValue = 200;
// const percentValue = maxValue * (50 / 100);
// const item = document.querySelector('.graph__col_one').style.height = `${percentValue}%`
// console.log(maxValue * (40 / 100));