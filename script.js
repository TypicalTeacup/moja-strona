var width;
var height;

var h;
var w;

var zdjecie = "img/reksio.png";

var licznik = 0;
var ruch = [];

function start(){
	height = parseInt($("body").css("height"));
	width = parseInt($("body").css("width"));
	
	if (width>height){
		h = $(".i0").css("height");
		$(".i0").css("height", "100%");
		$(".i0").css("width", h);
	}
	else{
		w = $(".i0").css("width");
		$(".i0").css("width", "100%");
		$(".i0").css("height", w);
	}
	setTimeout("start()", 5);
}

function podziel(id){
	var div_html = [];
	
	ruch[licznik] = id;
	licznik++;
	
	if (licznik == 2137 && zdjecie == "img/papiez.jpg"){
		papa();
	}
	
	for (i=0;i<4;i++){
		div_html[i] = '<div id="div'+id+i+'" class="d1" ><img src="'+zdjecie+'" class="i1" onclick=podziel("'+id+i+'") /></div>';
	}
	
	$("#div"+id).html(div_html[0]+div_html[1]+div_html[2]+div_html[3]);
}

window.onload = start;