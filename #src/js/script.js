
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
