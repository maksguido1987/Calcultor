function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
   callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }
   
   testWebP(function (support) {
   if (support == true) {
   document.querySelector('body').classList.add('webp');
   }else{
   document.querySelector('body').classList.add('no-webp');
   }
   });;

function insert(num) {
  document.form.textview.value = document.form.textview.value + num;
}
 
function clean() {
  document.form.textview.value = ''; //заменяем все из инпута на пустую строку
}

function back() {
  let exp = document.form.textview.value; // присваеваем переменной все из инпута
  document.form.textview.value = exp.substring(0, exp.length - 1); // заменяем все из инпута на то же самое минус 1 значение 
}

function equal() {
  let exp = document.form.textview.value;
  if (exp) {
    document.form.textview.value = eval(exp);
  }
}
