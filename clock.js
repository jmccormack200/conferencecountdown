function conference(name, year, month, day, display, image){
	this.name = name;
	this.year = year;
	this.month = month;
	this.day = day;
	this.display = display;
	this.image = image;

	this.countdown = function(){
		var oneDay = 24*60*60*1000; 
		var secondDate = new Date(this.year, this.month - 1, this.day);
		var firstDate = new Date();
		
		this.display.textContent =  Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
		setInterval(this.countdown, 1000000);
	}
}

function generateNewClock(num,conf){
	var addclk = document.getElementById("clockholder");
	var t = '<div id="clock"' + num + 'class="allclocks">'+ conf.name;
	t = t + 'is in <br></div>';
	t = document.createTextNode(t);
	addclk.appendChild(t);
}

window.onload = function(){
	display = document.querySelector('#time1');
	var conf = new conference("Augmented Face",2015,11,1,display);
	conf.countdown();
	generateNewClock(2,conf);
}

