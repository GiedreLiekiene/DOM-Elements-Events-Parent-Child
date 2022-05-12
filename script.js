let button = document.getElementById('changeBackground');
let buttonRed = document.getElementById('changeBgRed');

button.addEventListener('click', () => {
    document.body.style.background = 'blue';   
   });

   function changeRed() {
       document.body.style.background = 'red';
   }
   buttonRed.addEventListener('click', () => {
       document.body.style.background = 'red';
   });