// JavaScript Document

/*
this is an open concept of a contruct
whatever is needed create in an object that will be unspun.
each element within a group use a comma

use stickie and animation with page scroll.
 
use pops with a video to show overlays (pop up info).

*/
var stickie = {

			"logo_holder": {
                "stick_x": 0,
                "stick_y": 50,
				"start_x": 0,
				"start_y": 0,
				"stuck":0,
				"docked":0,
				"type":"stick"
            },
			
			"box-car-1": {
                "stick_x": 0,
                "stick_y": 100,
				"start_x": 0,
				"start_y": 0,
				"stay_x":100,
				"stuck":0,
				"docked":0,
				"type":"stay"
            }
			
}

var pops = {
	
			"point-1": {
                "show": 0,
                "hide": 3,
				"state":0,
				"url": ""
            }
	
}

var trigger = {
	
			"animation_holder": {
                "top": 1200,
                "triggered": 0,

            }
	
}

/*
Add the definitions back to the main object
*/
myObj ={};
myObj.stickie=stickie;
myObj.pops=pops;
myObj.trigger=trigger;

