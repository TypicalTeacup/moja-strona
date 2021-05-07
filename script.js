var width;
var height;

var h;
var w;

var zdjecie = "img/herbata.png";

var licznik = 0;
var ruch = [];

function cofnij(){
	if (licznik>0){
		licznik--;
		$("#div"+ruch[licznik]).html('<img src="'+zdjecie+'" class="i1" onclick=podziel("'+ruch[licznik]+'") />');
	}
}

function papa(){
	zdjecie = "img/papiez2.gif";
	$(".i1").attr("src", zdjecie);
}

function zmien(){
	if (zdjecie == "img/dis.jpg"){
		zdjecie = "img/reksio.png";
		$("title").html("łu matku!");
	}
	else if (zdjecie == "img/reksio.png"){
		zdjecie = "img/herbata.png";
		$("title").html("Ave Herbata!");
	}
	else if(zdjecie == "img/herbata.png"){
		zdjecie = "img/opona.jpg";
		$("title").html("O Opona!");
	}
	else{
		zdjecie = "img/jajo.jpg";
		$("title").html("Uwaga, Jajo!");
	}
	$(".i1").attr("src", zdjecie);
}

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
