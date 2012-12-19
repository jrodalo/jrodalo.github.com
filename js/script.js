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

		var capaPizarra = document.createElement("div"),
			context = canvas.getContext("2d");

		canvas.setAttribute("width", Pizarra.config.ancho);
		canvas.setAttribute("height", Pizarra.config.alto);

		capaPizarra.className = "pizarra";
		capaPizarra.appendChild(canvas);

		document.body.insertBefore(capaPizarra, document.body.firstChild);
		document.addEventListener("mousemove", function(evt) { Pizarra.pintar(canvas, context, evt); }, false);
	},

	pintar: function(canvas, context, evt) {

		context.beginPath();
		context.moveTo(Pizarra.config.ancho / 2, Pizarra.config.alto / 2);
		context.lineTo(evt.clientX, evt.clientY);
		context.strokeStyle = Pizarra.config.color;
		context.stroke();
	}

};

Pizarra.iniciar();
