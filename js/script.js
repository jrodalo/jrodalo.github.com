/**
 * jrodalo.github.com by @jrodalo
 */

var Pizarra = function() {

	"use strict";

	var config = {
		ancho: window.innerWidth,
		alto: window.innerHeight,
		color: "#DDD"
	};

	function init() {

		var canvas = document.createElement("canvas");

		if ( ! canvas || ! canvas.getContext) { return; }

		canvas.setAttribute("width", config.ancho);
		canvas.setAttribute("height", config.alto);

		document.body.insertBefore(canvas, document.body.firstChild);

		var context = canvas.getContext("2d");

		document.addEventListener("mousemove", function(evt) {
			pintar(context, evt);
		}, false);
	}

	function pintar(context, evt) {

		context.beginPath();
		context.moveTo(config.ancho / 2, config.alto / 2);
		context.lineTo(evt.clientX, evt.clientY);
		context.strokeStyle = config.color;
		context.stroke();
	}

	return {init: init};
}();

Pizarra.init();
