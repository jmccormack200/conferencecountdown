var conferenceApp = angular.module('ConferenceCountdown',[]);

var conferenceList = [
        {
                "name":"IFIP WMNC",
                "year":"2016",
                "month":"3",
                "day":"1",
                "img":"img/IFIP.png"
        },
        {
                "name":"MILCOM",
                "year":"2016",
                "month":"4",
                "day":"4",
                "img":"img/MILCOM.png"
        },
        {
                "name":"Asliomar",
                "year":"2016",
                "month":"5",
                "day":"2",
                "img":"img/sigconf.png"
        },
        {
                "name":"FGCT",
                "year":"2016",
                "month":"6",
                "day":"1",
                "img":"img/uk.png"
        },
        {
                "name":"MilCis",
                "year":"2016",
                "month":"6",
                "day":"3",
                "img":"img/aus.png"
        },
        {
                "name":"DINWC2016",
                "year":"2016",
                "month":"6",
                "day":"15",
                "img":"img/uk.png"
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
