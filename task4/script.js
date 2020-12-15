const changingText = prompt('на какой текст изменить?');
const textOnPage = document.querySelector('a');
textOnPage.textContent = changingText ;
// document.querySelector('#textContent').addEventListener('никакое событие тут не подойдет', 
// (event) => {
// //     this.preventDefault();
// //     alert('');
// // }

// if (textOnPage = changingText) {
//     this.preventDefault();
//     alert('точно изменить?')
// }