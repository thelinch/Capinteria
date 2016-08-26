$(document).ready(function(){
	var a=$("a").filter(".click");
a.on("click",function(ev){
  ev.preventDefault();
    $(this).closest(".carta").toggleClass("vuelta");
    var e=  $(this).addClass("visibilidad");
   var $carta= $(".carta").on("mouseleave",function(){
         setTimeout(function(){
    	e.removeClass("visibilidad");
    	$carta.removeClass("vuelta");
         },2000)
    	


    })
   	})


$(window).resize(function(){
	if($(window).width()>=480 && $(window).width()<768){

  $("#contacto").removeClass("movil-50");
  $(this).addClass("movil-100")
	}else{
		//vamos a poner movil-50
		$("#contacto").removeClass("movil-100");
		$("#contacto").addClass("movil-50");
	}
})
$(window).scroll(function(){
	var posicion=$(window).scrollTop()*0.5;

	$("body").css({
		'background-position': '0 '+posicion+'px' 
	})
})

	
	 //  a la ora dehacer una selecion primerono debes ser tan especifico, sino por ID o clase
  
})