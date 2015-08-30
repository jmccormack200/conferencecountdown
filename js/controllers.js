var conferenceApp = angular.module('ConferenceCountdown',[]);

var conferenceList = [
        {
                "name":"MobiHoc",
                "year":"2016",
                "month":"1",
                "day":"8",
                "img":"img/mobihoc.png"
        },
        {
                "name":"Augmented Human",
                "year":"2015",
                "month":"11",
                "day":"1",
                "img":"img/augmentedhuman.png"
        },
        {
                "name":"SeGAH",
                "year":"2015",
                "month":"10",
                "day":"15",
                "img":"img/segah.png"
        },
        {
                "name":"Southeast Con",
                "year":"2015",
                "month":"12",
                "day":"9",
                "img":"img/southeastcon.png"
        },
        {
                "name":"ICVR",
                "year":"2016",
                "month":"1",
                "day":"25",
                "img":"img/icvr.png"
        }
];

function conferencedays(year, month, day){
	this.year = year;
	this.month = month;
	this.day = day;

	var oneDay = 24*60*60*1000; 
	var secondDate = new Date(this.year, this.month - 1, this.day);
	var firstDate = new Date();

	var days =  Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
	return days;
}
	
conferenceApp.controller('ConferenceListCtrl', function($scope){
	console.log("Point A");

	$scope.conferences = [];

	console.log("test");
	for (var i = 0; i < conferenceList.length; i++){
		var conf = conferenceList[i];
		name = conf.name;
		console.log(name);
		countdown = conferencedays(conf.year, conf.month, conf.day);
		img = conf.img;
		$scope.conferences.push({"name":name,"countdown":countdown,"img":img});
	}	
});
