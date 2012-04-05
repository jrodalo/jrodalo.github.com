/**
 * jrodalo.github.com by @jrodalo
 */

window.onload = function() {

	var canvas = document.createElement("canvas");

	if (canvas && canvas.getContext) {

		Pizarra.iniciar(canvas);

	}

};

var Pizarra = {

	config: { ancho: 600, alto: 600 },

	iniciar: function(canvas) {

		var layout = document.getElementById("contenido"),
			capaPizarra = document.createElement("div"),
			context = canvas.getContext("2d");

		canvas.setAttribute("width", Pizarra.config.ancho);
		canvas.setAttribute("height", Pizarra.config.alto);
		canvas.addEventListener("mousemove", function(evt) { Pizarra.pintar(canvas, context, evt); }, false);

		capaPizarra.id = "pizarra";
		capaPizarra.appendChild(canvas);

		layout.parentNode.insertBefore(capaPizarra, layout);
	},

	pintar: function(canvas, context, evt) {

		var mousePos = Pizarra.getPosicionCursor(canvas, evt);

	    context.beginPath();
		context.moveTo(Pizarra.config.ancho / 2, Pizarra.config.alto / 2);
		context.lineTo(mousePos.x, mousePos.y);
		context.strokeStyle = "#DDD";
		context.stroke();
	},

	getPosicionCursor: function(canvas, evt) {

	    var obj = canvas, top = 0, left = 0;

	    while (obj && obj.tagName != 'BODY') {
	        top += obj.offsetTop;
	        left += obj.offsetLeft;
	        obj = obj.offsetParent;
	    }

	    var mouseX = evt.clientX - left + window.pageXOffset;
	    var mouseY = evt.clientY - top + window.pageYOffset;

	    return { x: mouseX, y: mouseY };
	}

};
