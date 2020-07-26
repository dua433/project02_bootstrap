$(function () {
	//모바일 메뉴
	$(".hamBtn").click(function () {
		$(".mCateWrapW").stop().animate({
			"left": 0
		}, 1000);
	});
	$(".closeBtn").click(function () {
		$(".mCateWrapW").stop().animate({
			"left": "-100%"
		}, 1000);
	});
	$(".mCategory>li").click(function () {
		$(this).children(".sub").stop().slideToggle(500);
		$(this).siblings().children(".sub").stop().slideUp(1000);
		$(this).toggleClass("active");
		$(this).siblings().removeClass("active");
	});

	//지도 탭메뉴
	var mapX = new Array(37.6528631, 36.9217249);
	var mapY = new Array(127.0516011, 127.0516011);
	var i = 0;
	mm();

	function mm() {
		var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
			mapOption = {
				center: new kakao.maps.LatLng(mapX[i], mapY[i]), // 지도의 중심좌표
				level: 4 // 지도의 확대 레벨
			};
		var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
		var imageSrc = "images/icon_map.png", // 마커이미지의 주소입니다    
			imageSize = new kakao.maps.Size(62, 60), // 마커이미지의 크기입니다
			imageOption = {
				offset: new kakao.maps.Point(31, 60)
			}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
		// 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
		var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
			markerPosition = new kakao.maps.LatLng(mapX[i], mapY[i]); // 마커가 표시될 위치입니다
		// 마커를 생성합니다
		var marker = new kakao.maps.Marker({
			position: markerPosition,
			image: markerImage // 마커이미지 설정 
		});
		// 마커가 지도 위에 표시되도록 설정합니다
		marker.setMap(map);
	}

	$(".tebMenu>li").click(function(e){
		e.preventDefault();
		i = $(this).index();
		mm();
		$(this).addClass("active").siblings().removeClass("active");
		$(".textWrap>table").eq(i).css("opacity",1).siblings().css("opacity",0);
	});

	//퀵메뉴
	var qTop = $(".quick").offset().top;
	//console.log(qTop);
	$(window).scroll(function () {
		var sTop = $(this).scrollTop();
		//console.log(sTop);
		$(".quick").stop().animate({
			"top": qTop + sTop + "px"
		}, 200);
	});
});
