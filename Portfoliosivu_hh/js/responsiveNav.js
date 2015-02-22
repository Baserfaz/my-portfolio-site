//Creating and populating a responsive selection navbar
//By Chris Coyier (www.css-tricks.com)

$(document).ready( function () {

	//Create a select box and inject it to HTML
	$("<select />").appendTo(".navigation nav");

	//Create a default option 
	$("<option />", {
	"selected"	: "selected",
	"value" : "",
	"text" : "Go to..."
	}).appendTo("nav select");

	//Populating the selection box with existing navigation options
	$(".navigation nav li a").each(function() {
		var el = $(this);
			$("<option />", {
				"value" : el.attr("href"),
				"text" : el.text()
			}).appendTo("nav select");
	});
	
	//To make the selection actually work!
	$("nav select").change(function() {
		window.location = $(this).find("option:selected").val();
	});
	
});