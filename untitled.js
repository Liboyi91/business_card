
var cardH = 400;
var cardW = Math.round(cardH*1.636);
var bleedPadW = Math.round(cardW*0.05);
var bleedPadH = Math.round(cardH*0.05);
var bleedXmin = 0;
var bleedXmax = cardW + (bleedPadW*2);
var bleedYmin = 0;
var bleedYmax = cardH + (bleedPadH*2);
var cardXmin = 0 + bleedPadW;
var cardXmax = cardW;
var cardYmin = 0 + bleedPadH;
var cardYmax = cardH;
var padXmin = cardXmin + bleedPadW;
var padXmax = cardXmax - bleedPadW*2;
var padYmin = cardYmin + bleedPadH;
var padYmax = cardYmax - bleedPadH*2;
var square_size = 40;
var randomness = 0.03;
var iw, jh;
//var img {width: 20%; height: 20%;}

function setup() {
	createCanvas(bleedXmax, bleedYmax); //width and height of my canvas
	stroke("black");
	rect(bleedXmin, bleedYmin, bleedXmax-1, bleedYmax-1); // minus one to make it visible inside canvas
	stroke("pink");
	rect(cardXmin, cardYmin, cardXmax, cardYmax); // centered
	background("pink");
	//noStroke();

	for(var i=0; i < cardW; i++) {
	for(var j=0; j < cardH; j++) {
 	push();
 	translate((square_size*i), (square_size*j));
 	if(cardH % 2 == 0) {
 	iw = cardW/2 - Math.abs(i - cardW/2);
 	} else {
 	iw = cardW/2 - 0.5 - Math.abs(i - cardW/2 - 0.5);
	}
 
 	if(cardH % 2 == 0) {
 	jh = cardH/2 - 0.5 - Math.abs(j - cardH/2 + 0.5);
 	} else {
 	jh = cardH/2 - Math.abs(j - cardH/2);
 	}
 	if( jh != 0 || iw != 0) {
 	rotate( radians(iw * iw * jh * jh * random(-randomness,randomness)) );
 	}
 	rect(square_size, square_size, square_size, square_size);
 	pop();
 	}
 	} 

	var fontSizeA = Math.round(cardH/15);
	textSize(fontSizeA);
	text("Shih Chien University", padXmin+bleedPadW, padYmax*0.3)
	var fontSizeNorm = Math.round(cardH/20); // maintain aspect ratio with text too
	var fontSizeB = Math.round(cardH/25);
	var fontSizeC = Math.round(cardH/10)
	textSize(fontSizeC);
	text("Po-I LI", padXmin+bleedPadW, padYmax*0.65);
	textSize(fontSizeB);
	text("Student, ETP in International Business", padXmin+bleedPadW, (padYmax*0.3)+fontSizeA);
	textSize(fontSizeNorm);
	text("Phone: 0912575174", padXmin+bleedPadW, (padYmax*0.75)+(fontSizeA*2));
	text("E-mail: liboyi91@gmail.com", padXmin+bleedPadW, (padYmax*0.75)+(fontSizeA*3));

}




