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
		capaPizarra.style.marginLeft = "-" + (Pizarra.config.ancho / 2) + "px";
		capaPizarra.style.marginTop = "-" + (Pizarra.config.alto / 2) + "px";
		capaPizarra.appendChild(canvas);

		document.body.insertBefore(capaPizarra, document.body.firstChild);
		document.addEventListener("mousemove", function(evt) { Pizarra.pintar(canvas, context, evt); }, false);
	},

	pintar: function(canvas, context, evt) {

		var mousePos = Pizarra.getPosicionCursor(canvas, evt);

		context.beginPath();
		context.moveTo(Pizarra.config.ancho / 2, Pizarra.config.alto / 2);
		context.lineTo(mousePos.x, mousePos.y);
		context.strokeStyle = Pizarra.config.color;
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

Pizarra.iniciar();
