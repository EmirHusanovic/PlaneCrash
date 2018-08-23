$(document).ready(function(){


var animMaxCount=1000;
var animCount=0;
var counter=0;


$(function() {
    doAnimation('#picture3');

    
});

function doAnimation (pic){
	$(pic).animate({left:'1300px'},2500,function(){

		if( animCount<animMaxCount){
			$(pic).css("left","-150px");
                 doAnimation(pic);}
	});
	animCount++;
}

$("#picture4").hide();
$("#picture5").hide();
/* Click on the first plane*/
$("#picture3").click(function(){
$(this).attr("src","pic1.jpg");
$("#picture4").attr("src","pic.png");
$(this).animate().stop();
$(this).hide(1500);

doAnimation('#picture4');
$("#picture4").show();
counter++;
$("h1").html("Planes crashed: "+counter);
});
/* Click on the second plane */
$("#picture4").click(function(){
$(this).attr("src","pic1.jpg");
$("#picture3").attr("src","pic.png");
$("#picture5").attr("src","pic.png");
$(this).animate().stop();
$(this).hide(1500);
$("#picture3").show();
doAnimation('#picture3');
$("#picture5").show();
doAnimation('#picture5');

counter++;
$("h1").html("Planes crashed: "+counter);
});

/*Click on the third plane */
$("#picture5").click(function(){
$(this).attr("src","pic1.jpg");
$(this).animate().stop();
$(this).hide(1500);
doAnimation("#picture4");
$("#picture4").show();
$("#picture4").attr("src","pic.png");
doAnimation("#picture3");
$("#picture3").show();
$("#picture3").attr("src","pic.png");
counter++;
$("h1").html("Planes crashed: "+counter);
})





})