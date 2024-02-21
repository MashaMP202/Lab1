let inputIn = document.querySelector('.input-in');
let inputIni = document.querySelector('.inputi-in');
let inputInii = document.querySelector('.inputii-in');
let button = document.querySelector('button');
button.onclick = function(){
let a = inputIn.value;
let b = inputIni.value;
let c = inputInii.value;
a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);
if (a == 0){
	alert('Ошибка!');
}
else if (isNaN(a)){
	alert("Введите значения a!");
}
else if (isNaN(b)){
	alert("Введите значения b!");
}
else if (isNaN(c)){
	alert("Введите значения c!");
}
else{
if(b == 0){ // Проверка на частный случай! Когда b = 0 => x^2-4=0
	x1 = (-c/a)**(1/2);
	x2 = (c/a)**(1/2);
	alert(x1);
	alert(x2);
}else{
let quest = confirm('Вы уверены?');
if (quest == 1) {
alert('Мы продолжаем!');
D = ((b**2) - (4*a*c)); //Посчитанный дискриминант
alert(`Дискриминант = ${Math.round(D*100)/100}`);
console.log(D);

if (D > 0){
    x1 = (+(-b + D**(1/2))/(2*a)) //Первый корень
    x2 = ((-b - D**(1/2))/(2*a)); //Второй корень
    alert(`Первый корень = ${Math.round(x1*100)/100}`);
    console.log(x1);
    alert(`Второй корень = ${Math.round(x2*100)/100}`);
    console.log(x2);
} else if ( D == 0) {
    x0 = (-b)/(2*a); //Единственный корень
    alert(`Единственный корень = ${Math.round(x0*100)/100}`);
    console.log(x0);
} else {
    alert('NET KORNEY'); //Нету решений
}
}else{
	alert('Попробуйте в другой раз!');
}
}
}	
	console.log(a);
	console.log(b);
	console.log(c);
	
}

