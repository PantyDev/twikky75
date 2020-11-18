var alpha = 0;
var Y = -100;


/*
$('.logoText').css('color', 'rgba(255,255,255,'+ 0 +')');
addA();
$('.logoText').css('transition-timing-function', 'ease-out');
function addA () {
	if(alpha < 1)
	{
		alpha += 0.005;
		$('.logoText').css('color', 'rgba(255,255,255,'+ alpha +')');
	}
	if(Y < 0)
	{
		Y += 1;
		$('.logoText').css('transform', 'translateY(' + Y + 'px)');
	}
	setTimeout(addA, 1);
}

function easeOutCubic(x, endTime) {
	return 5;
}


*/
var blackAlpha = 0.3;
var changed = false;
var sID = 1;
function slideChange() {
	if(blackAlpha <= 1 && changed == false)
	{
		blackAlpha += 0.01;
		$('#background').css('background-color', 'rgba(0,0,0,'+ blackAlpha +')');
		setTimeout(slideChange, 1);
	}
	else
	{
		$('#background').css('background-image', 'url(img/logo'+ sID +'.jpg)');
		changed = true;
		if(blackAlpha >= 0.3)
		{
			blackAlpha -= 0.01;
			$('#background').css('background-color', 'rgba(0,0,0,'+ blackAlpha +')');
			setTimeout(slideChange, 1);
		}
		else changed = false;
	}
}

function slide(slideID) {
	if(blackAlpha <= 0.3 && slideID != sID)
	{
		sID = slideID;
		setTimeout(slideChange, 1);
	}
}

setTimeout(autoSlideChange, 7000);
function autoSlideChange()
{
	setTimeout(autoSlideChange, 7000);
	if(blackAlpha <= 0.3)
	{
		sID ++;
		if(sID > 4)
			sID = 1;
		setTimeout(slideChange, 1);
	}
}
function btn(btnID) 
{

	switch(btnID)
	{
		case 0: 
			$("html, body").animate({
			scrollTop: $("#more").offset().top
			}, 1000); break;
		case 1:
			$("html, body").animate({
			scrollTop: $("#style").offset().top
			}, 1000); break;
		case 2:
			$("html, body").animate({
			scrollTop: $("#art").offset().top
			}, 1000); break;
		case 3:
			$("html, body").animate({
			scrollTop: $("#contacts").offset().top
			}, 1000); break;
	}
}

//арты
var slideW = 143;
var sliderW = 862;
$(document).ready(function() {
	for(var i = 0; i < 6; i++)
	{
		//$('#id' + i).css('left', (i * 82) + 'px');
		$("#digital-slider").find('#id' + i).css('left', (i * slideW) + 'px');
		$("#traditional-slider").find('#id' + i).css('left', (i * slideW) + 'px');
	}
});


$("#digital-slider").mouseover(function(e){
	$(".art-ghost1").css('display', 'block');
	$(".art-ghost").css('display', 'none');
	$(".art-ghost1").css('transform', 'scale(1, 1)');
});
$("#digital-slider").mouseout(function(e){
	$(".art-ghost1").css('display', 'none');
	$(".art-ghost").css('display', 'block');
	$(".art-ghost").css('transform', 'scale(1, 1)');
});
$("#traditional-slider").mouseover(function(e){
	$(".art-ghost1").css('display', 'block');
	$(".art-ghost").css('display', 'none');
	$(".art-ghost1").css('transform', 'scale(-1, 1)');
});
$("#traditional-slider").mouseout(function(e){
	$(".art-ghost1").css('display', 'none');
	$(".art-ghost").css('display', 'block');
	$(".art-ghost").css('transform', 'scale(-1, 1)');
});




function setSlide() {
	sliderAnim("#digital-slider");
	sliderAnim("#traditional-slider");
}


function sliderAnim(name)
{
	let stopped = [];
	for(var i = 0; i < 6; i ++)
	{
		stopped[i] = false;
	}
	$(name).mouseover(function(e){
		var slide = $(e.target).attr("id");
		$(name).find('#' + slide).css('z-index', '3');
		var slideX = slide[2] * slideW;
		var slideWidth = slideW;
		
		stopped[slide[2] - 1] = false;
		
		slideWChange();
		function slideWChange()
		{
			if(slideWidth <= sliderW && stopped[slide[2] - 1] == false)
			{
				$(name).find('#' + slide).css('width', slideWidth + 'px');
				slideWidth += 3.5;
				setTimeout(slideWChange, 1);
			}
		}
		slideXChange();
		function slideXChange()
		{
			if(stopped[slide[2] - 1] == false)
			{
				if(slideX >= 0)
				{
					$(name).find('#' + slide).css('left', slideX + 'px');
					slideX -= 2.1;
					setTimeout(slideXChange, 1);
				}
				else{
					$(name).find('#' + slide).css('left', 0 + 'px');
				}
			}
		}
	});

	$(name).mouseout(function(e){
		var slide = $(e.target).attr("id");
		var slideX = slide[2] * slideW;
		stopped[slide[2] - 1] = true;
		
		$(name).find('#' + slide).css('z-index', '2');
		$(name).find('#' + slide).css('width', slideW + 'px');
		$(name).find('#' + slide).css('left', slideX + 'px');
	});
}


//АДАПТАЦИЯ
//При изменении масштаба
/*var zLevel = Math.round(window.devicePixelRatio * 100);
if(zLevel >= 100 && zLevel < 110)
{
	$('.logoContent').css('height', '850px');
	$('#slide3').css('display', 'block');
}
if(zLevel >= 110 && zLevel < 150)
{
	$('.logoContent').css('height', '750px');
	$('#slide3').css('display', 'none');
}

$(window).resize(function() { 
	if(zLevel >= 100 && zLevel < 110)
	{
		$('.logoContent').css('height', '850px');
		$('#slide3').css('display', 'block');
	}
	if(zLevel >= 110 && zLevel < 150)
	{
		$('.logoContent').css('height', '750px');
		$('#slide3').css('display', 'none');
	}
});*/



//если менять размер окна
$('#more-text').css('opacity', '0%');
$('#more-image').css('opacity', '0%');
$('#style-image').css('opacity', '0%');
$('#style-text').css('opacity', '0%');
if(Math.round(window.devicePixelRatio * 100) <= 80)
{
	$('#more-text').css('animation', '1.2s ease-out 0s 1 FromBottom');
	$('#more-text').css('opacity', '100%');
	$('#more-image').css('animation', '1.2s ease-out 0s 1 FromBottom');
	$('#more-image').css('opacity', '100%');
}

if(Math.round(window.devicePixelRatio * 100) <= 33)
{
	$('#style-text').css('animation', '1.2s ease-out 0s 1 FromLeft');
	$('#style-text').css('opacity', '100%');
	$('#style-image').css('animation', '1.2s ease-out 0s 1 FromRight');
	$('#style-image').css('opacity', '100%');
}


$(window).resize(function() { 
	var browserZoomLevel = Math.round(window.devicePixelRatio * 100);
	if(browserZoomLevel <= 80)
	{
		$('#more-text').css('animation', '1.2s ease-out 0s 1 FromBottom');
		$('#more-text').css('opacity', '100%');
		$('#more-image').css('animation', '1.2s ease-out 0s 1 FromBottom');
		$('#more-image').css('opacity', '100%');
	}
	if(browserZoomLevel <= 33)
	{
		$('#style-text').css('animation', '1.2s ease-out 0s 1 FromLeft');
		$('#style-text').css('opacity', '100%');
		$('#style-image').css('animation', '1.2s ease-out 0s 1 FromRight');
		$('#style-image').css('opacity', '100%');
	}
});

//если прокручивать
$(document).ready(function() { // Ждём загрузки страницы
	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
			$('#more-text').css('animation', '1.2s ease-out 0s 1 FromBottom');
			$('#more-text').css('opacity', '100%');
			$('#more-image').css('animation', '1.2s ease-out 0s 1 FromBottom');
			$('#more-image').css('opacity', '100%');
		}
		if ($(this).scrollTop() > 1200) {
			$('#style-text').css('animation', '1.2s ease-out 0s 1 FromLeft');
			$('#style-text').css('opacity', '100%');
			$('#style-image').css('animation', '1.2s ease-out 0s 1 FromRight');
			$('#style-image').css('opacity', '100%');
		}
		if ($(this).scrollTop() > 2500) {
			setTimeout(setSlide, 1500);
			for(var i = 0; i < 6; i ++)
			{
				if(i & 1)
					$('#digital-slider').find('#id' + i).css('animation', '1.5s ease-out 0s 1 FromBottomSlider');
				else
					$('#digital-slider').find('#id' + i).css('animation', '1.5s ease-out 0s 1 FromTopSlider');
				$('#digital-slider').find('#id' + i).css('opacity', '100%');
			}
		
			for(var i = 0; i < 6; i ++)
			{
				if(i & 1)
					$('#traditional-slider').find('#id' + i).css('animation', '1.5s ease-out 0s 1 FromBottomSlider');
				else
					$('#traditional-slider').find('#id' + i).css('animation', '1.5s ease-out 0s 1 FromTopSlider');
				$('#traditional-slider').find('#id' + i).css('opacity', '100%');
			}
		}
		if ($(this).scrollTop() > 3100) {
			$('#contact-text').css('animation', '1.5s ease-out 0s 1 FromRight');
			$('#contact-text').css('opacity', '100%');
			$('#contact-image').css('animation', '1.5s ease-out 0s 1 FromLeft');
			$('#contact-image').css('opacity', '100%');
		}
	});
	
	
	if ($(this).scrollTop() > 200) {
		$('#more-text').css('animation', '1.5s ease-out 0s 1 FromBottom');
		$('#more-text').css('color', 'rgba(13,13,13,1)');
		$('#more-image').css('animation', '1.5s ease-out 0s 1 FromBottom');
		$('#more-image').css('opacity', '100%');
	}
	if ($(this).scrollTop() > 1200) {
		$('#style-text').css('animation', '1.5s ease-out 0s 1 FromLeft');
		$('#style-text').css('opacity', '100%');
		$('#style-image').css('animation', '1.5s ease-out 0s 1 FromRight');
		$('#style-image').css('opacity', '100%');
	}
	if ($(this).scrollTop() > 2500) {
		setTimeout(setSlide, 1500);
		for(var i = 0; i < 6; i ++)
		{
			if(i & 1)
				$('#digital-slider').find('#id' + i).css('animation', '1.5s ease-out 0s 1 FromBottomSlider');
			else
				$('#digital-slider').find('#id' + i).css('animation', '1.5s ease-out 0s 1 FromTopSlider');
			$('#digital-slider').find('#id' + i).css('opacity', '100%');
		}
		
		for(var i = 0; i < 6; i ++)
		{
			if(i & 1)
				$('#traditional-slider').find('#id' + i).css('animation', '1.5s ease-out 0s 1 FromBottomSlider');
			else
				$('#traditional-slider').find('#id' + i).css('animation', '1.5s ease-out 0s 1 FromTopSlider');
			$('#traditional-slider').find('#id' + i).css('opacity', '100%');
		}
	}
	if ($(this).scrollTop() > 3100) {
		$('#contact-text').css('animation', '1.5s ease-out 0s 1 FromRight');
		$('#contact-text').css('opacity', '100%');
		$('#contact-image').css('animation', '1.5s ease-out 0s 1 FromLeft');
		$('#contact-image').css('opacity', '100%');
	}
	
});



$(document).ready(function(){

  var elem = $('.container'),         //    Контейнер, в котором будем проводить анимацию
      pos = elem.offset(),            //    Позиция элемента
      elem_left = pos.left,           //    Слева
      elem_top = pos.top,             //    Сверху
      elem_width = elem.width(),      //    Ширина элемента
      elem_height = elem.height(),    //    Высота элемента
      x_center,    //    Координаты центра по оси X
      y_center;    //    Координаты центра по оси Y

//    Обрабатываем событие перемещения курсора мыши
  $('.container').mousemove(function(e){    

//    Определяем центр элемента (формула легко гуглится)
    x_center = ( elem_width / 2 ) - ( e.pageX - elem_left );
    y_center = ( elem_height / 2 ) - ( e.pageY - elem_top );

//    Проходим по всем блокам с изображениями)
    $('.parallax').each(function(){

      var speed = $(this).attr('data-speed'),     //    Определяем скорость 
          xPos = Math.round(x_center/20*speed),//    Высчитываем позицию по оси X
          yPos = Math.round(y_center/20*speed);   //    Высчитываем позицию по оси Y

//    Перемещение по оси Y делаем до определенной точки, потом перемещение останавливаем

//    Непосредственно перенос      
      $(this).css('transform', 'translate3d('+xPos+'px, '+yPos+'px, 0px)');

        });
	$('.parallaxbg').each(function(){

      var speed = $(this).attr('data-speed'),     //    Определяем скорость 
          xPos = Math.round(x_center/20*speed) - 5,//    Высчитываем позицию по оси X
          yPos = Math.round(y_center/20*speed) - 3;   //    Высчитываем позицию по оси Y

//    Перемещение по оси Y делаем до определенной точки, потом перемещение останавливаем

//    Непосредственно перенос      
      $(this).css('transform', 'translate3d('+xPos+'px, '+yPos+'px, 0px)');

        });
    });	
	
});