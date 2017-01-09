$(document).ready(function(){
	makeGrid(16);
	draw();
	erase();
	varColors();
	reset();
	change_gridSize();
});

function makeGrid(x){
	for(i=0;i<x*x;i++) {
		$("#sheet").append('<div class="box"></div>')
		}
		$(".box").css({
		'width': $('#sheet').width() / x,
		'height': $('#sheet').height() / x
	})
}		
function draw(){
	$(".box").mouseover(function(){
		$(this).css("background-color", "red");	
	});
}	

function reset(){
	$("#reset").click(function(){
		$(".box").css("background-color","white")
	})
	draw();
}
function varColors(){
	$("#random").click(function(){
		reset();
	$(".box").mouseover(function(){
		$(this).css("background-color", 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')')
	})	
	});
}
function erase(){
	$("#erase").click(function(){
	$(".box").mouseover(function(){
		$(this).css("background-color","white")
	})
})
}
function change_gridSize(){
	$("#size").click(function(){
		$("#sheet").empty();
		gridSize= window.prompt("Select the number of squares: in between 1 t0 100");
		makeGrid(gridSize);		
		draw();
	})
}