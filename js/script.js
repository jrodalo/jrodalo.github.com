/**
 * jrodalo.github.com by @jrodalo
 */

var Pizarra = {

	config: {
		ancho: window.innerWidth,
		alto: window.innerHeight,
		color: "#DDD"
	},

	iniciar: function() {

		var canvas = document.createElement("canvas");

		if ( ! canvas || ! canvas.getContext) { return; }

		canvas.setAttribute("width", Pizarra.config.ancho);
		canvas.setAttribute("height", Pizarra.config.alto);

		document.body.insertBefore(canvas, document.body.firstChild);

		var context = canvas.getContext("2d");

		document.addEventListener("mousemove", function(evt) {
			Pizarra.pintar(context, evt);
		}, false);
	},

	pintar: function(context, evt) {

		context.beginPath();
		context.moveTo(Pizarra.config.ancho / 2, Pizarra.config.alto / 2);
		context.lineTo(evt.clientX, evt.clientY);
		context.strokeStyle = Pizarra.config.color;
		context.stroke();
	}

};

Pizarra.iniciar();
