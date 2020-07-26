$(function(){
	//모바일 메뉴
	$(".hamBtn").click(function(){
		$(".mCateWrapW").stop().animate({
			"left":0
		},1000);
	});
	$(".closeBtn").click(function(){
		$(".mCateWrapW").stop().animate({
			"left":"-100%"
		},1000);
	});
	var cCount = 0;
	$(".mCategory>li").click(function(){
		$(this).siblings().children(".sub").stop().slideUp(500);
		$(this).children(".sub").stop().slideToggle(500);
		$(this).siblings().removeClass("active");
		cCount++;
		if(cCount%2==1){
			$(this).addClass("active");
		} else{
			$(this).removeClass("active");
		}
	});
	
	//공지사항
	var current = 0;
	var notice = $(".text>li");
	setInterval(function(){
		notice.eq(current).animate({
			"top": "-56px"
		},1000);
		current++;
		if(current == 3){
			current = 0;
		}
		notice.eq(current).css("top","56px");
		notice.eq(current).animate({
			"top":0
		},1000);
	},3000);
	
	//NENE GALLERY slide
	var $left = new Array();
	var $zidex = new Array();
	var $gallery = new Array();
	$(".galleryImg>li").each(function(i){
		$left[i] = $(this).css("left");
		$xindex = $(this).css("z-index");
		$gallery[i] = "." + $(this).attr("class");
	});
	//console.log($left,$gallery)
	$(".rightBtn").click(function(e){
		e.preventDefault();
		var obj = $gallery.shift();
		$gallery.push(obj);
		$($gallery[7]).css("left",$left[7]);
		for(i=0;i<8;i++){
			$($gallery[i]).stop().animate({
				"left":$left[i]
			},500);
		}
		//console.log($gallery);
	});
	$(".leftBtn").click(function(e){
		e.preventDefault();
		var obj = $gallery.pop();
		$gallery.unshift(obj);
		$($gallery[0]).css("left",$left[0]);
		for(i=0;i<8;i++){
			$($gallery[i]).stop().animate({
				"left":$left[i]
			},500);
		}
		//console.log($gallery);
	});
	var timer = setInterval(function(){
		$(".rightBtn").trigger("click");
	},4000);
	$(".gallery").mouseover(function(){
		clearInterval(timer);
	});
	$(".gallery").mouseout(function(){
		timer = setInterval(function(){
			$(".rightBtn").trigger("click");
		},4000);
	});
	
	//퀵메뉴
	var qTop = $(".quick").offset().top;
	//console.log(qTop);
	$(window).scroll(function(){
		var sTop = $(this).scrollTop();
		//console.log(sTop);
		$(".quick").stop().animate({
			"top":qTop+sTop+"px"
		},200);
	});
});