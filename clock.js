function countdown(year, month, day, display){
	var oneDay = 24*60*60*1000; 
	var secondDate = new Date(year,month-1,day);
	var firstDate = new Date();
	
	display.textContent =  Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
	setInterval(countdown, 1000000);
}

window.onload = function(){
	display = document.querySelector('#time');
	countdown(2015,11,1,display);
};

