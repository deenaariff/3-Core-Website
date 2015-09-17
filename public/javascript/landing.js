$(document).ready(function() {

    var idNames = [".navbar", "#circle1", "#circle2", "#circle3"]
    var textNames = ["#message1", "#message2", "#message3"]
    var messages = [
        " ",
    	"Lorem Ipsum Dolor",
    	"Creativity flows through our veins.",
    	"We strive to craft the most outstanding inventions and innovations.",
    	"We believe in working together to achieve the desired outcome.",
    ]

    function call() {

        $( idNames[0] ).hover(function() {
            choose(0);
        }).mouseleave(function() {
            choose(1);
        }); 

        $( ".title").hover(function() {
            choose(0);
        }).mouseleave(function() {
            choose(1);
        }); 

        $( ".about").hover(function() {
            choose(0);
        }).mouseleave(function() {
            choose(1);
        }); 


    	$( idNames[1] ).hover(function() {
            choose(2);
        }).mouseleave(function() {
            choose(1);
        });  

        $( idNames[2] ).hover(function() {
            choose(3);
        }).mouseleave(function() {
            choose(1);
        });

        $( idNames[3] ).hover(function() {
        	choose(4);
        }).mouseleave(function() {
            choose(1);
        });
    }

    function choose (index) {
    	$( ".headline" ).replaceWith( "<h2 class = 'headline'>" +  messages[index] + "</h2>");
    }

    call();

});