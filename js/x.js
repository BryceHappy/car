/*
$(document).pngFix();ie6 png fix
$(this).lightBox();jq lightbox
$(this).fxFile(70);input type="file"
$(this).fxSlide(5, 300, 'v');slide can be vertical'v' or horizontal'h'
$(this).fxCss(target); clone target's css
$(this).mousewheel(function(e, delta){}); mousewheel event
$(this).bgiframe();
getUrlVars()["id"];
getAjaxVars(e)["me"];
--------jq effect
$(this).effect('blind');
blind bounce clip drop explode fade fold highlight pulsate scale shake slide transfer puff
--------jq easing 
$(this).animate({left:''}, 500, 'easeInQuad', callback);
easeInQuad	easeOutQuad	easeInOutQuad	easeInCubic	easeOutCubic	easeInOutCubic	easeInQuart	easeOutQuart	easeInOutQuart	easeInQuint	easeOutQuint	easeInOutQuint	easeInSine	easeOutSine	easeInOutSine	easeInExpo	easeOutExpo	easeInOutExpo	easeInCirc	easeOutCirc	easeInOutCirc	easeInElastic	easeOutElastic	easeInOutElastic	easeInBack	easeOutBack	easeInOutBack	easeInBounce	easeOutBounce	easeInOutBounce
--------share
anteaterAddBookmark("FaceBook");
anteaterAddBookmark("Twitter");
anteaterAddBookmark("Plurk");
--------outside event
clickoutside, dblclickoutside, focusoutside, bluroutside, mousemoveoutside, mousedownoutside, mouseupoutside, mouseoveroutside, mouseoutoutside, keydownoutside, keypressoutside, keyupoutside, changeoutside, selectoutside, submitoutside
--------own selector
$.extend($.expr[':'], {  
    over100pixels: function(a) {  
        return $(a).height() > 100;  
    }  
}); 
*/
var flashEnd;
var flashEnd1;
var flashEnd2;
var popWin;
var recallWin;
var ua = navigator.userAgent.toLowerCase();
if(  ua.indexOf('iphone') != -1 ||ua.indexOf('ipod') != -1 || ua.indexOf('android') != -1 &&  $(window).width() <=640){
	var winlocation =window.location.href;
	if(
		winlocation.indexOf('owners_service.aspx') != -1 ||
		winlocation.indexOf('collection.aspx') != -1 ||
		winlocation.indexOf('owners_maintenance.aspx') != -1 ||
		winlocation.indexOf('owners_warranty.aspx') != -1 ||
		winlocation.indexOf('owners_elemant.aspx') != -1
		){
		//event except
	} else if(winlocation.indexOf('news_detail.aspx?nw=') != -1){
		window.location.href = 'http://m.toyota.com.tw/news_detail.aspx?nw=' + getUrlVars()["nw"];
	} else if(winlocation.indexOf('showroom_') != -1){
		window.location.href = window.location.href.replace('www.toyota','m.toyota').replace(window.location.href.split('/')[4],'exterior.aspx');
	} else {
		window.location.href = 'http://m.toyota.com.tw/';
	};
};

/*function loadScroll(){
	$.getScript( "js/iscroll.js" ).done(function( script, textStatus ) {
		console.log( textStatus );
	});
}*/

$(document).ready(function(){

	if( $.browser.version == '6.0' && $.browser.msie ){ 
		$('#BG').bgiframe();
		$(document).pngFix();
	};
	
	if( id('BG') ){
		var BG = $('#BG');
		var DOT = $('#DOT');
		var DOTdiv = $('#DOT > div');
		var win = $(window);
		var outH;
		DOTdiv.each(function (){
			if($(this).find('.popClose').length == 0 && $(this).hasClass('popT1')){
				$(this).append('<a href="javascript:;" class="popClose" onclick="recallWin();"></a>');
			};
		});
		popWin = function (d){
			BG.show();
			DOT.show();
			$('#DOT > div').hide();
			$(d).show();
			outH = $(d).outerHeight(true);
			if(outH > win.height()){
				DOT.css({top:win.scrollTop()+10+'px'});
			} else {
				DOT.css({top:win.scrollTop()+((win.height() - outH)/2)+'px'});
			}
			
		};
		recallWin = function (){
			if( DOT.children('div:visible').find('iframe').length > 0 ){
				var cloneDOM = DOT.children('div:visible').clone();
				DOT.children('div:visible').hide().remove();
				DOT.append(cloneDOM);
				cloneDOM=null;
			}
			BG.hide();
			DOT.hide();
		};
		BG.click(recallWin);
	}
	
	
	if( !$.browser.msie ){
		$('div.Box').css({background:'url(images/bg-re-grid-1.png)'});
	};
	
	if(id('Foot')){
		var footBtn = $('#Foot div.footTab a');
		var footcont = $('#Foot div.footCont > div');
		footBtn.each(function (i){
			$(this).click(function (){
				footBtn.removeClass('ON').eq(i).addClass('ON');
				footcont.hide().eq(i).fadeIn(500);
				return false;
			});
		});
		var footLoveDivOpen = 0;
		var footLoveDiv =
		$('#footLoveBtn').click(function (){
			footLoveDiv.hide().eq(++footLoveDivOpen%2).fadeIn(500);
			if(footLoveDivOpen%2 == 0){
				$(this).removeClass('ON');
			} else {
				$(this).addClass('ON');
			}
		}).parent().children('div');
		//$('#footSlide1').fxSlide2(1,700,'h');
		
	};
	
	if( id('goTop') ){
		var w = $('body,html');
		$('#goTop').click(function (){
			w.animate({scrollTop:'0px'}, 500);
			if(_gaq)_gaq.push(['_trackPageview', '/goTOP/']);
			return false;
			
		});
		
	}
	
	var setInput = $('.setInput');
	if(setInput.length>0){
		setInput.each(function (){
			var defaultVal = $(this).attr('defaultval');				
			if(defaultVal){
				$(this).focus(function (){
					if($(this).val() == defaultVal){
						$(this).val('');
					}
				}).blur(function (){
					if($(this).val() == '' || $(this).val() == ' '){
						$(this).val(defaultVal);
					}
				}).val(defaultVal);
			}
			
		});
	};
	
	if(id('mainMenu')){
		var menu = $('#mainMenu');
		var menuBtn = $('#mainMenuExpand');
		var once = true;
		var onceTimer;
		function menuOpen(){
			if(once){
				clearTimeout(onceTimer);
			}
			menu.stop().animate({left:'0px'}, 500, 'easeOutExpo');
		}
		function menuClose(){
			menu.stop().animate({left:'-124px'}, 500, 'easeOutExpo');
		}
		if(  ua.indexOf('iphone') != -1 || ua.indexOf('ipod') != -1 || ua.indexOf('ipad') != -1 || ua.indexOf('android') != -1 ){
			menuBtn.toggle(menuOpen,menuClose);
			if(document.cookie.search('visited') != -1){
				menu.stop().css({left:'-124px'});
			} else {
				onceTimer = setTimeout(menuClose, 5000);
			}
			function setCookie(key, value, expire, domain, path){
				var ck=key +'='+ encodeURIComponent(value);
				if( expire ){
				var epr=new Date();
					epr.setTime(epr.getTime()+ expire*1000 );
					ck+=';expires='+ epr.toUTCString();
				};
				if( domain ) ck+=';domain='+ domain;
				if( path ) ck+=';path='+ path;
				document.cookie=ck;
			};
			setCookie('visited', '1', 20);			
			
		} else{
			menu.hover(menuOpen,menuClose);
			onceTimer = setTimeout(menuClose, 5000);
		};
		
		
	};
	
	if(id('indexSlide1')){
		
		
		$('#indexSlide1').fxSlide2(1,1100,'f');
		var fxGrid = $('#indexListItem').fxGrid(4,500,6);
		var indexbtn = $('#indexFilter a');
		var scrollMark = $('#indexFilter').offset().top - 66;
		var w = $('body,html');
		indexbtn.each(function (i){
			$(this).click(function (){
				w.animate({scrollTop:scrollMark+'px'}, 500);
				indexbtn.removeClass('ON').eq(i).addClass('ON');
				fxGrid.runPos(i);
				if(i==1){
					$('#stageTwo1, #stageThree1').show();
				} else {
					$('#stageTwo1, #stageThree1').hide();
				}
			});
		});
		fxGrid.runPos(1);
		
	};
	
	if(id('roomSlide1')){
		var roombtn = $('#roomSlide1 div.roomSlideTimer1 a');
		var dom = {
			time:7000,
			id:0,
			bar:$('#roomSlide1 div.roomSlideTimer1 div.bar')
		};
		dom.w = ($('#roomSlide1').width()-roombtn.length+1) / roombtn.length;
		var resetTimer = function (){};
		
		if(roombtn.length > 1 ){
			resetTimer = function (n){
				dom.bar.stop().css({width:dom.w*n+'px'}).animate({width:(n+1)*dom.w+'px'}, dom.time,'linear', function(){
					slide.setRun(n+1);
				});
			};
		}

		var realPad = true;
		if(ua.indexOf('ipad') != -1 || ua.indexOf('android') != -1 ){
			realPade = false;
			dom.bar.css({width:'100%'});
			
			$('#roomSlide2 .hover').toggle(function (){
				$(this).css({height:'476px'}).find('p').show();
			}, function (){
				$(this).css({height:'22px'}).find('p').hide();
			});
			
			$('div.roomGridImgIn1 .hover').toggle(function (){
				$(this).css({height:'230px'}).find('p').show();
			}, function (){
				$(this).css({height:'30px'}).find('p').hide();
			});
			
			
		};
		dom.bar.css({width:'100%'});
		var slide = $('#roomSlide1').fxSlide({
			once:1,speed:700,ease:'easeOutExpo',direct:'h',
			onRun:function (i){
				if(realPad){
					resetTimer(i);
				};
				
			}
		});
		roombtn.each(function (i){
			$(this).click(function (){
				slide.setRun(i);
				return false;
			});
			this.style.width = dom.w + 'px';
			
		});
		
		$('#roomSlide2').fxSlide2(1,700,'h');
		
		if(id('roomColor1')){
			/*var color;
			$('#roomColor1 div.img').each(function (){
				color = this;
			});*/
			var zz = 2;
			var cars = $('#roomColor1 div.img > div');
			cars.eq(0).css({zIndex:zz});
			var colorBtn = $('#roomColor1 div.btn a');
			var colorWarn = $('#roomColor1 div.warn > div');
			colorWarn.hide().eq(0).show();
			colorBtn.each(function (i){
				var thisColor = $(this).attr('ccode');
				$(this).click(function (){
					colorBtn.removeClass('ON').eq(i).addClass('ON');
					cars.eq(i).css({zIndex:++zz, opacity:0}).animate({opacity:1}, 500);
					colorWarn.stop().hide().eq(i).fadeIn(500);
					/*
					color.style.backgroundColor = 'rgb('+ Math.round(Math.random()*255) +','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
					setTimeout(function (){
						color.style.backgroundColor = thisColor;
					}, 500);*/
				});
			}).eq(0).click();
			var dom360 = $('#roomColor1 div.roomCar360');
			var loader = $('#preloader');
			var spinArea = $('#roomColor1');
			function bind360(dom, num){
				var inX=0;
				var moved=0;
				var cId = 0;
				var spinDom = dom.find('div.roomCar360');
				dom.find('div.roomCar360').each(function (){
					spinDom = this;
				});
				dom.mousedown(function (e){
					inX = e.pageX;
					spinArea.bind('mousemove', spinMove);
				});
				$('body').mouseup(function (){
					spinArea.unbind('mousemove', spinMove);
					cId = moved;
				});
				function spinMove(e){
					moved = cId - Math.round((inX-e.pageX) / 30);
					if(moved >= 0){
						moved = moved%num;
					} else if(moved < 0){
						moved = num + (moved%num);
					}
					//spinDom.css({top:-moved * 566 + 'px'});
					spinDom.style.top=-moved * 566 + 'px';
					//document.title = moved + '//' + num;
				};
			}
			
			function colorReady(dom,num){
				var d = dom.eq(num);
				var dImg = d.find('img');
				var maxAngle = dImg.length;
				var tempSrc;
				loader.fxImgLoader({
					imgDOM: d.find('img'),
					imgSrc:'ssrc',
					onEach:function (i){
						dImg.eq(i).attr('src', dImg.eq(i).attr('ssrc'));
					},onFinish:function(){
						d.prev().removeClass('loading').addClass('done');
						colorBtn.eq(num).children('b').remove();
						if(maxAngle >1){
							bind360(d.parent(), maxAngle);
						} else {
							d.prev().css({cursor:'default'});
						}
						if((num+1) < dom360.length){
							colorReady(dom360,num+1);
							//document.title = num+1;
						};
						d=dImg=maxAngle=tempSrc=null;
					},onLoaded:function (loadNow,loadMax){
						colorBtn.eq(num).children('b').text(loadNow/loadMax*100+'%');
					}
				});
			};
			
			
			colorReady(dom360,0);
			
			
		}
	};
	
	/*
	var expandDOM ={
		d:$('div.roomSpecExpand')
	};
	expandDOM.odd = expandDOM.d.find('table');
	expandDOM.expand = expandDOM.d.find('.expand');
	if(expandDOM.odd.length > 0){
		expandDOM.odd.each(function (i){
			$('tr',this).each(function (i){
				if(i%2 == 0)$(this).addClass('odd');
			});
		});
	};
	if(expandDOM.expand.length > 0){
		
		expandDOM.expand.bind('click',function (i){
			if($(this).next().css('display') == 'none' ){
				$(this).next().slideDown(300);
				$(this).children('a').addClass('ON');
			} else {
				$(this).next().slideUp(300);
				$(this).children('a').removeClass('ON');
			}
		});
	};*/
	
	var jSelect = $('.fxSelect');
	if(jSelect.length >0){
		jSelect.each(function (){
			$(this).fxSelect();
		});
	};
	
	
	if(id('gMapxx')){

		var myOptions = {
			zoom: 3,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
		var pplMarker;
		
		var userA = navigator.userAgent.toLowerCase();
		var isMobile;
		if(  userA.indexOf('iphone') != -1 || userA.indexOf('ipod') != -1 || userA.indexOf('ipad') != -1 || userA.indexOf('android') != -1 ){
			isMobile = true;
		};
		
		if(navigator.geolocation && isMobile) {
			navigator.geolocation.getCurrentPosition(function(position) {
				var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
				/*var infowindow = new google.maps.InfoWindow({
					map: map,
					position: pos,
					content: '您目前的位置'
				});*/
				pplMarker = new google.maps.Marker({
					map: map,
					draggable: false,
					//animation: google.maps.Animation.DROP,
					position: pos,
					visible: true,
					icon:'images/scope-1.png'
				});
				map.setCenter(pos);
				map.setZoom(18);
			}, function() {
				alert('無法取得您目前的位子');
				//handleNoGeolocation(true);
				map.setCenter(new google.maps.LatLng(23.8525556, 120.92111109999997));
				map.setZoom(10);
			});
		} else {
			map.setCenter(new google.maps.LatLng(23.8525556, 120.92111109999997));
			map.setZoom(12);
			//handleNoGeolocation(false);
		}

		
		function startLoadMarkers(_obj){
			
			var marker = new google.maps.Marker({
				map: map,
				draggable: false,
				position: new google.maps.LatLng(_obj.lat, _obj.lng),
				visible: true,
				icon:'images/map_icon_'+_obj.type+'.png'
				
			});
			marks.push(marker);
			
			var myOptions = {
				content: '<div class="infoBoxT1"><b>'+_obj.name+'</b>'+((_obj.more)?'<a href="https://www.google.com.tw/#q='+_obj.name+'&oq='+_obj.name+'" target="_blank">MORE</a>':'')+'<span>'+_obj.addr+'</span></div>',
				alignBottom:false,
				disableAutoPan: false,
				maxWidth: 0,
				//pixelOffset: new google.maps.Size(20, -20),
				pixelOffset: new google.maps.Size(20,-50),
				//boxStyle: { 
					//background: "url('images/tri.gif') left top no-repeat"//,opacity: 0.75
				//},
				infoBoxClearance: new google.maps.Size(1, 1),
				isHidden: false,
				closeBoxURL: '',
				pane: "floatPane",
				enableEventPropagation: false
			};
			
			var ib = new InfoBox(myOptions);
			
			google.maps.event.addListener(marker, "mouseover", function (e) {
				ib.open(map, this);
			});
			google.maps.event.addListener(marker, "mouseout", function (e) {
				ib.close(map, this);
			});
		}
	};
	

	if( id('dragBarPrice') ){
		$('#dragBarPrice').fxDragBar({
			initMin:20,
			initMax:2400000,
			minNum:20,
			maxNum:2400000,
			minVal:$('#dragBarVal1 .left'),
			maxVal:$('#dragBarVal1 .right')
		});
		$('#dragBarFuel').fxDragBar({
			initMin:2,
			initMax:4,
			minNum:2,
			maxNum:4,
			decimal:10,
			minVal:$('#dragBarVal2 .left'),
			maxVal:$('#dragBarVal2 .right')
		});
		$('#dragBarSeat').fxDragBar({
			initMin:1,
			initMax:7,
			minNum:1,
			maxNum:7,
			minVal:$('#dragBarVal3 .left'),
			maxVal:$('#dragBarVal3 .right')
		});
	};
	
	if(id('ownerBtn')){
		$('#ownerBtn').click(function (){
			if($(this).next().css('display') == 'none'){
				$(this).addClass('ON').next().show();
			} else {
				$(this).removeClass('ON').next().hide();
			}
		});
	}
	
	if(id('ownerServiceTab')){
		var seTabtn = $('#ownerServiceTab a');
		var cont = $('#ownerResultCont > div');
		var scrollMark = $('#ownerServiceTab').offset().top - 66;
		var w = $('body,html');
		var seIndex = $('#ownerServiceTab a').index($('#ownerServiceTab a.ON'));
		seTabtn.each(function(i){
			$(this).click(function (){
				seTabtn.removeClass('ON').eq(i).addClass('ON');
				cont.hide().eq(i).fadeIn(700);
				w.animate({scrollTop:scrollMark+'px'}, 500);
				return false;
			})
		});
		cont.hide().eq(seIndex).show();

	}
	
	if(id('collectionLeft')){
		var btn = $('#collectionLeft .sub a');
		var img = $('#collectionLeft a.lightbox');
		img.lightBox();
		if(img.length>1){
			var zz=2;
			var cId = 0;
			btn.each(function (i){
				$(this).click(function (){
					if(cId != i){
						btn.removeClass('ON').eq(i).addClass('ON')
						img.eq(i).css({zIndex:++zz,opacity:0}).animate({opacity:1}, 500);
						cId = i;
					}
				});
			});			
		}
	}
	
	if(id('magazineSlide')){
		$('#magazineSlide').fxSlide2(1,500,'h', 'mag');
	};
	
	if(id('fxSlide')){
		$('#fxSlide').fxSlide2(1,500,'h');
	};
	
	
	if(id('useFB') || id('bindFB') ){
		//714892898524099
		var appKey = '424591737645406';
		if(window.location.href.search('www.toyota.com.tw') != -1){
			appKey='714892898524099';
		};
		FB.init({
			appId      : appKey,
			channelUrl : '//http://belle.toyota.com.tw/2013_test/channel.html',
			status     : true,
			xfbml      : true
		});
		function runFB(bool){
			FB.getLoginStatus(function(response) {
				if (response.authResponse) {
					setFB(response.authResponse.userID, bool);
				} else {
					FB.login(function(response2) {
						if (response2.authResponse) {
							setFB(response2.authResponse.userID, bool);
							/*
							alert(response2.authResponse.userID);
							console.log(response2.authResponse.accessToken);*/
						} else {
							alert('Facebook登入失敗');
						}
					}, {scope: null});
				}
			});
			
		};
		function setFB(id, b){
			//console.log(id);
			$('#con_fb,#con_fbLogin').val(id);
			if(b){
				if(b==1){
					funfb();
				} else {
					funfb2();
				}
				
			}
		};
		$('#useFB').click(function (){
			runFB(1);
		});
		$('#useFB2').click(function (){
			runFB(2);
		});
		$('#bindFB').click(function (){
			runFB(false);
		});
	};
	
	
	if(id('roomSpecSelectFix')){
		var roomSpecSelectFix =$('#roomSpecSelectFix');
		var topPoint = $('#roomSpecSelectFix').offset().top - 66;
		var wTop;
		$(window).scroll(function (){
			//document.title = $(this).scrollTop() + '//' + topPoint;
			if( $(this).scrollTop() > topPoint ){
				roomSpecSelectFix.addClass('roomSpecSelectFixON');
			} else {
				roomSpecSelectFix.removeClass('roomSpecSelectFixON');
			}
		});
	};

	if(id('magazineList')){
		var magazineVideoBox = $('#magazineVideoBox');
		var magazineVideoBoxDiv = magazineVideoBox.children('div');
		var magazineVideoBoxTop = $('#magazineList').offset().top;
		var magazineListA = $('#magazineList div.btn a').each(function (i){
			var thisTop = $(this).offset().top - magazineVideoBoxTop+18;
			$(this).click(function (){
				magazineListA.removeClass('ON');
				if(magazineVideoBox.css('display') == 'none'){
					$(this).addClass('ON');
					magazineVideoBoxDiv.hide().eq(i).show();
					magazineVideoBox.css({top:thisTop+'px'}).fadeIn(500);
				} else {
					magazineVideoBox.fadeOut(300);
					
				}
				
				
				return false;
			});
			
		});
	}
});

$(window).load(function(){

});




function id(d){
	return document.getElementById(d);
}

jQuery.fn.extend({
	fxCheck:function (o){
		return new function (d){
			var t = $(d);
			var out = this;
			var v = t.val();
			var regphone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
			var regmail = /^[^@^\s]+@[^\.@^\s]+(\.[^\.@^\s]+)+$/;
			var setting = {
				regPhone: regphone,
				regMail:regmail
			};
			for (i in o) setting[i] = o[i];

			out.isPhone = function (){
				if(setting.regPhone.test(v) ){
					return true;
				} else {
					return false;
				};
			}
			out.isMail = function (){
				if(v.match(setting.regMail) ){
					return true;
				} else {
					return false;
				};
			}	
	
		}(this);
	}, fxImgLoader:function(o){
		var loader = $(this);
		var setting = {
				imgLoaded:0,
				imgCount:0,
				imgSrc:'src',
				imgDOM:null,
				imgStrStart:'',
				imgStrEnd:'',
				onEach:null,
				onFinish:null,
				onLoaded:null
		};
		for (i in o) setting[i] = o[i];
		
		if(setting.imgDOM){
			if(setting.imgDOM.length > 0){
				setting.imgCount = setting.imgDOM.length;
				settingImg(0);
			} else {
				alert('imgDOM.length less than 1');
			};
		} else {
			if(setting.imgType=='' || setting.imgStr=='')alert('fxImgLoader require imgStrStart/imgStrEnd');
			if(setting.imgCount>0){
				settingImg(1);
			} else {
				alert('imgCount less than 1');
			};
		};
		function settingImg(n){
			for(var z =0;z<setting.imgCount;z++){
				var img = $('<img />');
				img.appendTo(loader);
				if(typeof(setting.onEach) == 'function')setting.onEach(z);
				img.attr('src', ((n==0)?setting.imgDOM.eq(z).attr(setting.imgSrc):setting.imgStrStart+z+setting.imgStrEnd) ).load(function(){
					img=null;
					setting.imgLoaded++;
					if(typeof(setting.onLoaded)== 'function' ){
						setting.onLoaded(setting.imgLoaded,setting.imgCount);
					}
					if(setting.imgLoaded >= setting.imgCount && typeof(setting.onFinish)== 'function' ){
						setting.onFinish();
					};
				}).each(function() {
					if(this.complete && $.browser.msie ) $(this).trigger('load');
				});
			};
		}
		return this;
	}, fxDragBar:function (o){
		var bar = $(this);
		var setting = {
				initMin:0,
				initMax:100,
				minVal:bar.find('.fxMin i'),
				maxVal:bar.find('.fxMax i'),
				minBar:bar.find('.fxMin'),
				maxBar:bar.find('.fxMax'),
				range:bar.find('.range'),
				minNum:0,
				maxNum:100,
				maxPx:0,
				decimal:1,
				hudObj:null,
				hudPre:'',
				hudSuf:'',
				hudCut:'',
				onDragStart:null,
				onDragMove:null,
				onDragEnd:null
		};
		for (i in o) setting[i] = o[i];
		setting.maxPx = bar.width();
		var minObj;
		var maxObj;
		var rangeObj;
		var actMin;
		var actMax;
		var numRange = setting.maxNum - setting.minNum;
		setting.minBar.each(function (){
			minObj = this;
		});
		setting.maxBar.each(function (){
			maxObj = this;
		});
		setting.range.each(function (){
			rangeObj = this;
		});
		var d = $(document);
		var moved;
		var posX = $(this).offset().left;
		var nowMinX=posX;
		var nowMaxX=setting.maxPx;
		
		setting.minBar.mousedown(function (e){
			nowMinX = $(this).position().left;
			d.bind('mousemove', barDragMin);
			return false;
		});
		setting.maxBar.mousedown(function (e){
			nowMaxX.maxPx = $(this).position().left;
			d.bind('mousemove', barDragMax);
			return false;
		});
		
		function barDragMin(e){
			moved = e.pageX - posX;
			if(moved < 0){
				moved = 0;
			} else if(moved >= nowMaxX){
				moved = nowMaxX;
			};
			minObj.style.left = moved+'px';
			rangeBar();
			return false;
		}
		function barDragMax(e){
			moved = e.pageX - posX;
			if(moved < nowMinX){
				moved = nowMinX;
			} else if(moved >= setting.maxPx){
				moved = setting.maxPx;
			};
			maxObj.style.left = moved+'px';
			rangeBar();
			return false;
		}
		function rangeBar(){

			nowMinX = setting.minBar.position().left;
			nowMaxX = setting.maxBar.position().left;
			actMin = Math.round(nowMinX/setting.maxPx*numRange*setting.decimal)/setting.decimal + setting.minNum;
			actMax = Math.round(nowMaxX/setting.maxPx*numRange*setting.decimal)/setting.decimal + setting.minNum;
			
			setting.minVal.text(actMin);
			setting.maxVal.text(actMax);
			
			if(setting.hudObj){
				setting.hudObj.text(setting.hudPre+actMin+setting.hudCut+actMax+setting.hudSuf);
			}
			
			rangeObj.style.left = nowMinX + 'px';
			rangeObj.style.width = nowMaxX - nowMinX + 'px';
		};
		rangeBar();
		
		$(document).mouseup(function (){
			nowMinX = setting.minBar.position().left;
			nowMaxX = setting.maxBar.position().left;
			d.unbind('mousemove', barDragMin);
			d.unbind('mousemove', barDragMax);
			if(setting.onDragEnd === 'function')setting.onDragEnd();
		});
		
		/*console.log(setting.minBar == setting.maxBar);
		console.log(setting.minBar == setting.minBar);
		console.log(setting.minBar === setting.maxBar);
		console.log(setting.minBar === setting.minBar);*/

		
		
		
	}, fxSelect:function (o){
		return new function (d){
			var setting = {
					onChange:null,
					defaultName:''
			};
			for (i in o) setting[i] = o[i];
			var out = this;
			var t = $(d);
			var setVal = $('input',d);
			var setName = $('.name',d);
			var subDiv = $('div.sub',d);
			setting.defaultName = setName.text();
			var show = (subDiv.css('display') == 'none')?false:true;
			subDiv.find('a').live('click', function (){
				var val = $(this).attr('key');
				setVal.val(val);
				setName.text($(this).text());
				subDiv.hide();
				show=false;
				val=null;
				subDiv.find('a').removeClass('ON');
				$(this).addClass('ON');
				if(typeof(setting.onChange) == 'function'){
					setting.onChange({value:setVal.val(),name:setName.text(), index:$(this).index()});
				}
				return false;
			});
			setName.click(function(){
				if(show){
					t.css({position:'static'});
					subDiv.hide();
					show=false;
				} else {
					t.css({position:'relative'});
					subDiv.show();
					show=true;
					
				}
			});
			t.bind('clickoutside', function (){
				t.css({position:'static'});
				subDiv.hide();
				show=false;
			})
			out.writeVal = function (key){
				if(key==null){
					setVal.val('');
				} else {
					setVal.val(key);
				}
			};
			out.removeSub = function (){
				subDiv.find('*').remove();
				setVal.val('');
				setName.text(setting.defaultName);
			};
			out.clean = function (){
				setVal.val('');
				setName.text(setting.defaultName);
			};
			out.set = function (i){
				subDiv.find('a').eq(i).click();
			};
			
		}(this);
	},fxGrid: function (col,aSpeed,sorts){
		return new function (d){
			var out =this;
			var box = $(d);
			
			var msie = false;
			if( $.browser.msie && $.browser.version == '6.0' || $.browser.version == '7.0' || $.browser.version == '8.0' || $.browser.version == '9.0' ){
				msie = true;
			};		
			var nowScale = col;

			var eachImg =new Array();

			eachImg.push(box.children('div'));
			for(var i=0;i<sorts;i++){
				if(i==0){
					eachImg[i] =box.children('div');
				} else {
					eachImg[i]=box.children('div.f'+i);
				}
				
			}
			
			var windowTimer;
			if(msie){
				var msieresize = false;
				$(window).resize(function (){
					if(box.width() != boxW ){
						clearTimeout(windowTimer);
						windowTimer = setTimeout(function (){
							setPos(recordNum);
						}, 500);
					}
				});
			} else{
				$(window).resize(function (){
					clearTimeout(windowTimer);
					windowTimer = setTimeout(function (){
						setPos(recordNum);
					}, 500);
				});
			}
	
			
			var getHeight = eachImg[0].outerHeight(true);
			var imgBox;
			var imgNum = eachImg[0].outerWidth(true);
			var boxW;
			var recordNum ;
			var setPosTimer;
			var maxHeight;
			//alert(imgNum);
			function setPos(num){

				boxW = box.width();
				recordNum = num;

				maxHeight = new Array();
				imgBox = 100/nowScale;
				
				//imgNum = Math.round(box.width() * col / 100);
				
				if(msie){
					eachImg[0].stop().css({width:'0px'}, 100);
					eachImg[num].each(function (i){
						maxHeight[i]=Math.floor(i/col)* getHeight;
						$(this).stop().animate({width:imgNum+'px',top:maxHeight[i] + 'px', left:(i%nowScale) * imgNum + 'px'}, 1000);
						maxHeight[i] += getHeight;
					});
					maxHeight = maxHeight.max();
					box.animate({height:maxHeight + 'px'}, 900);
				} else {
					
					eachImg[0].css({width:'0px'});
					eachImg[num].css({width:imgNum+'px'}).each(function (i){
						maxHeight[i]=Math.floor(i/col)* getHeight;
						this.style.top = maxHeight[i] + 'px';
						this.style.left = (i%nowScale) * imgNum + 'px';
						maxHeight[i] += getHeight;

					});
					maxHeight = maxHeight.max();
					box.css({height:maxHeight+'px'});
					
				}

				clearTimeout(setPosTimer);
				setPosTimer = setTimeout(function (){
					if(box.width() != boxW ){
						
						/*alert(box.width() + '/' + bowW);*/
						setPos(recordNum);	
					}
				}, 1010);
	
			};
			Array.prototype.max = function () {
				return Math.max.apply(Math, this);
			};
	
			setPos(0);
			out.runPos = function (n){
				setPos(n);
			};
			
		}(this);
		
	},fxSlide2: function (showAtOnce, animateSpeed, fxDirect, SORT){
		$(this).each(function(){
			if (!fxDirect) {
				alert('fxSlide error (showAtOnce『1,2,3』, animateSpeed『10,100,1000』, fxDirect『"h" or "v"』)');
			};
			var isMobile = false;
			if(  ua.indexOf('iphone') != -1 || ua.indexOf('ipod') != -1 || ua.indexOf('ipad') != -1 || ua.indexOf('android') != -1 ){
				isMobile = true;
			};
			var _this = $(this);
			var aItem = $('.aItem', _this);
			var aItemDiv = aItem.children('div');
			var itemNum = aItemDiv.length;
			
			var maxId = itemNum - showAtOnce;
			var itemWidth;
			var cId = 0;
			var aPage = '';
			
			if(isMobile){
				if(fxDirect == 'h'){
					itemWidth = aItemDiv.outerWidth(true);
					aItem.css({width : itemWidth * itemNum +"px"});
				} else if(fxDirect == 'v') {
					itemWidth = aItemDiv.outerHeight(true);
					aItem.css({height : itemWidth * itemNum + "px"});
				} if (fxDirect =='f'){
					itemWidth = _this.width();
					aItem.css({width : itemWidth * itemNum + "px"});
					aItemDiv.css({width:itemWidth+'px'});
				};				
			} else {
				if(fxDirect == 'h'){
					itemWidth = aItemDiv.outerWidth(true);
					aItem.css({width : itemWidth * itemNum + 10 + "px"});
				} else if(fxDirect == 'v') {
					itemWidth = aItemDiv.outerHeight(true);
					aItem.css({height : itemWidth * itemNum + 10 + "px"});
				} if (fxDirect =='f'){
					itemWidth = _this.width();
					aItem.css({width : itemWidth * itemNum + 100 + "px"});
					aItemDiv.css({width:itemWidth+'px'});
				};			
			}

			var slideWidth = itemNum * itemWidth;
			
			var aLeft;
			var aRight;
			var bArrow = true;
			var sliding;
			if (itemNum <= showAtOnce){
				$('.aLeft > a', _this).remove();
				$('.aRight > a', _this).remove();
				$('.aPage2',_this).remove();
				bArrow = false;
			} else {
				if(isMobile && SORT != 'mag'){
					for(var i=0;i<itemNum;i++){
						aPage += '<a href="javascript:;" class="'+( (i==0)?'ON':'' )+'"></a>';
					};
					$('.aPage',_this).html(aPage);
					aPage = $('.aPage a', _this);
					var thisIscoll;
					_this.find('.aBody').each(function (){
						thisIscoll = new iScroll(this, {
							snap: true,
							vScroll:true,
							momentum: false,
							hScrollbar: false,
							onScrollEnd: function () {
								aPage.removeClass('ON').eq(this.currPageX).addClass('ON');
								if(SORT == 'mag') aItemDiv.removeClass('ON').eq(cId).addClass('ON');
							}
						});
					});
					$('.aLeft > a', _this).click(function (){
						thisIscoll.scrollToPage('prev', 0);
					});
					$('.aRight > a', _this).click(function (){
						thisIscoll.scrollToPage('next', 0);
					});
				} else{				
					aLeft = $('.aLeft > a', _this);
					aRight = $('.aRight > a', _this);
					for(var i=0;i<itemNum;i++){
						aPage += '<a href="javascript:;" class="'+( (i==0)?'ON':'' )+'"></a>';
					};
					$('.aPage',_this).html(aPage);
					aPage = $('.aPage a', _this);
					aPage.each(function (i){
						$(this).click(function (){
							cId = i;
							sliding();
						});
					});
					aLeft.click(function () {
						cId --;
						sliding (cId);
						$(this).blur();
						return false;
					});
					aRight.click(function () {
						cId ++;
						sliding (cId);
						$(this).blur();
						return false;
					});
					
					sliding = function  (){
						if(bArrow){
							if(cId >= maxId && maxId > 0) {
								aRight.hide();
								aLeft.show();
								cId = maxId;
							} else if(cId <= 0) {
								aRight.show();
								aLeft.hide();
								cId = 0;
							} else {
								aLeft.show();
								aRight.show();
							};
							aPage.removeClass('ON').eq(cId).addClass('ON');					
						}
		
						if (fxDirect == 'h') aItem.stop().animate( { marginLeft: - itemWidth * cId + "px" }, animateSpeed, 'easeOutExpo');
						if (fxDirect == 'f') aItem.stop().animate( { marginLeft: - itemWidth * cId + "px" }, animateSpeed, 'easeOutExpo');
						if (fxDirect == 'v') aItem.stop().animate( { marginTop: - itemWidth * cId + "px" }, animateSpeed, 'easeOutExpo');
						if(SORT == 'mag') aItemDiv.removeClass('ON').eq(cId).addClass('ON');
					};
					sliding();
					if(fxDirect == 'f'){
						var timeout;
						$(window).resize(function (){
							clearTimeout(timeout);
							timeout = setTimeout(function (){
								itemWidth = _this.width();
								aItem.css({height : itemWidth * itemNum + 10 + "px"});
								aItemDiv.css({width:itemWidth+'px'});
							}, 500);
						});
					}
					
				};
				

			};

			


		});
	}, 	fxSlide: function (o){
		return new function (d){
			var out = this;
			var setting = {
					speed:0,
					ease:'linear',
					once:0,
					direct:null,
					onRun:null
			};
			for (i in o) setting[i] = o[i];
			if(!setting.direct){
				alert('fxSlide require direct');
			}
			
			
			
			var _this = $(d);
			var aItem = $('div.aItem', _this);
			var aItemDiv = aItem.children('div');
			var itemNum = aItemDiv.length;
			
			var maxId = itemNum - setting.once;
			var itemWidth;
			var cId = 0;
			var aPage = '';
			
			if(setting.direct == 'h'){
				itemWidth = aItemDiv.outerWidth(true);
				aItem.css({width : itemWidth * itemNum + 10 + "px"});
			} else if(setting.direct == 'v') {
				itemWidth = aItemDiv.outerHeight(true);
				aItem.css({height : itemWidth * itemNum + 10 + "px"});
			};
			var slideWidth = itemNum * itemWidth;
			
			var aLeft;
			var aRight;
			if (itemNum <= setting.once){
				$('.aLeft > a', _this).remove();
				$('.aRight > a', _this).remove();
			} else {
				aLeft = $('.aLeft > a', _this);
				aRight = $('.aRight > a', _this);
				for(var i=0;i<itemNum;i++){
					aPage += '<a href="javascript:;" class="'+( (i==0)?'ON':'' )+'"></a>';
				};
				$('.aPage',_this).html(aPage);
				aPage = $('.aPage a', _this);
				aLeft.click(function () {
					cId --;
					sliding (cId);
					$(this).blur();
					return false;
				});
				aRight.click(function () {
					cId ++;
					sliding (cId);
					$(this).blur();
					return false;
				});
				
			};

			var goSlide;
			if(setting.direct == 'h'){
				goSlide = function (){
					aItem.stop().animate( { marginLeft: - itemWidth * cId + "px" }, setting.speed, 'easeOutExpo');
				};
			} else if(setting.direct == 'v') {
				goSlide = function (){
					aItem.stop().animate( { marginTop: - itemWidth * cId + "px" }, setting.speed, 'easeOutExpo');
				};
			}
			function sliding (){
				if(cId > maxId) {
					cId = 0;
				} else if(cId < 0) {

					cId = maxId-1;
				};
				if(aPage)aPage.removeClass('ON').eq(cId).addClass('ON');
				
				goSlide();
				if(setting.onRun){
					setting.onRun(cId);
				};
			};
			out.setRun = function (n){
				cId = n;
				sliding();
			};
			sliding();
		}(this);
		
	}, delight : function() {
		return this.each(function(){
			if($.browser.mozilla){
				$(this).css('MozUserSelect','none');
			}else if($.browser.msie){
				$(this).bind('selectstart',function(){return false;});
			}else{
				$(this).mousedown(function(){return false;});
			}
		});
	}, adllClass2 : function(STR){
		_tagName = this.tagName.toString().toLowerCase();
		$(this).parent().children(_tagName).removeClass(STR);
		$(this).addClass(STR);
		_tagName = null;
		return this;
	}, fxScroll: function(){
		$(this).each(function(){
			var _this = this;
			var fxSin2 = $(_this).children('div.fxSin2');	
			var selfHeight = fxSin2.children('div.fxSinBox').outerHeight(true);
			if( fxSin2.height() < selfHeight ){
				var scrollExpand = (($(document).width() - 880)*0.1 < 30)?30:($(document).width() - 880)*0.1;
				var scrollPX = Math.round($(document).height()/3);
				var difAmount;
				var fxSscroll = $(_this).children('div.fxSscroll').show();
				difAmount = selfHeight - fxSin2.outerHeight(true);
				var fxBoth = $('.fxSscroll, .fxSbarBG', fxSscroll);
				var fxSbar= $('.fxSbar', fxSscroll);
				var fxSinBox= fxSin2.children('div.fxSinBox');
				//fxBoth.css({height: $(_this).height() - 60 + 'px'});
				//scrollSize = scrollGrid - Math.floor(difAmount/scrollGrid);
				/*if( scrollSize < scrollMinSize){
					fxSbar.css({height:scrollMinSize+'%'});
				} else {
					fxSbar.css({height:scrollSize+'%'});
				};*/
				var barCenter = fxSbar.height() / 2;
				var barCenter2 = fxSscroll.height() - fxSbar.height();
				var topPoint = fxSscroll.offset().top + barCenter;
				var endPoint = fxSscroll.offset().top + fxSscroll.height() - (fxSbar.height()/2);
				var totalCanMove;
				//alert('barCenter:'+barCenter +'\nbarCenter2:' + barCenter2+ '\ntopPoint:' + topPoint + '\nendPoint:' + endPoint);
				var topClicked;
				var nowPoint = 0;
				var boxTop;
				fxSscroll.hover(function(){
					$(this)/*.bind('mousemove', fxScrollMoving)*/.css({width:scrollExpand+'px'}).children('div.fxSbarBG').stop().animate({opacity:0.7}, 500);
					//fxSbar.css({backgroundColor:'#0693f0'});
				}, function(){
					$(this)/*.unbind('mousemove', fxScrollMoving)*/.css({width:''}).children('div.fxSbarBG').stop().animate({opacity:0}, 500);
					//fxSbar.css({backgroundColor:''});
				})
				fxSinBox.resize(function(){
					selfHeight = $(this).outerHeight(true);
					difAmount = selfHeight - fxSin2.outerHeight(true);
				});
				$(window).resize(function(){
					difAmount = selfHeight - fxSin2.outerHeight(true);
					//fxBoth.css({height: $(_this).height() - 60 + 'px'});
					barCenter2 = fxSscroll.height() - fxSbar.height();
					topPoint = fxSscroll.offset().top + barCenter;
					endPoint = fxSscroll.offset().top + fxSscroll.height() - (fxSbar.height()/2);
				});
				fxSin2.resize(function(){
					difAmount = selfHeight - $(this).height();
				});
				$('.fxSbar, .fxSbarBG', fxSscroll).mousedown(function(e){
					if( e.pageY < topPoint){
						nowPoint = 0;
					} else if(e.pageY > endPoint){
						nowPoint = barCenter2;
					} else{
						nowPoint = e.pageY - topPoint;
					};
					fxSbar.css({backgroundColor:'#0693f0'});
					actingEv();
					$('body').bind('mousemove', fxScrollMoving);
					return false;
				});
				$('body').mouseup(function(){
					fxSbar.css({backgroundColor:''});
					$(this).unbind('mousemove', fxScrollMoving);
				});
				$('.fxSarrowUp a', fxSscroll).click(function(){
					nowPoint -= scrollPX;
					if(nowPoint < 0){
						nowPoint = 0;
					} else if( nowPoint > barCenter2 ){
						nowPoint = barCenter2;
					}
					actingEv();
				});
				$('.fxSarrowDown a', fxSscroll).click(function(){
					nowPoint += scrollPX;
					if(nowPoint < 0){
						nowPoint = 0;
					} else if( nowPoint > barCenter2 ){
						nowPoint = barCenter2;
					}
					actingEv();
				});
				$(_this).mousewheel(function(e, delta){
					if(delta > 0){
						actingEv2(1);
					} else if( delta < 0){
						actingEv2(0);
					};
				});
				function fxScrollMoving (e){
					if( e.pageY < topPoint){
						nowPoint = 0;
					} else if(e.pageY > endPoint){
						nowPoint = barCenter2;
					} else{
						nowPoint = e.pageY - topPoint;
					};
					actingEv();
					return false;
				};
				function actingEv (){
					fxSbar.css({top:nowPoint + 'px'});
					fxSinBox.css({top: -(difAmount * nowPoint / barCenter2 ) + 'px'});
				};
				function actingEv2(NUM){
					if( NUM == 0){
						NUM = fxSinBox.position().top - scrollPX;
					} else {
						NUM = fxSinBox.position().top + scrollPX;
					}
					if(NUM < -difAmount){
						NUM = -difAmount;
					} else if(NUM > 0){
						NUM = 0;
					}
					nowPoint = (-NUM)*barCenter2/difAmount;
					//document.title = nowPoint;
					fxSinBox.css({top: NUM + 'px'});
					fxSbar.css({top:nowPoint + 'px'});
					//document.title = nowPoint+'//'+fxSinBox.position().top;
					//fxSbar.css({top:nowPoint + 'px'});
					//fxSinBox.css({top: -(difAmount * nowPoint / barCenter2 ) + 'px'});
				};
			};
		});
		return this;
	},fxImgSlide : function(optionObj){
		var animateTypes = 11;
		$(this).each(function(){
			if( optionObj.style >= 0 && optionObj.style <= animateTypes){
			} else {
				alert('optionObj.style n/a');
				return;
			}
			var chopX = optionObj.chopX || 5;
			var chopY = optionObj.chopY || 5;
			var chopW;
			var chopH;
			var chopLeft;
			var chopTop;
			var choper;
			var animateDOM;
			
			var animateAmount = 100;
			var animateDelay = optionObj.delay || 100;
			var animateSpeed = optionObj.speed || 500;
			var arr=new Array();
			var newAr=new Array();
			var newArLen = chopX+chopY -1;
			var indexNUM = 0;
			var thisZindex = 2;
			var wheel = optionObj.wheel | false;
			choper = $('div.aItem > div', this);
			chopW = Math.floor( choper.width() / chopX);
			chopH = Math.floor( choper.height() / chopY);
			choper.each(function(i){
				if(i==0){
					$(this).css({zIndex:thisZindex});
				}
				var _this = this;
				if( optionObj.style != 11){
					for(var i=0;i<chopX;i++){
						chopLeft = i*chopW;
						$(_this).append('<div style="background:url('+$(_this).children('img').attr('src')+') -'+ chopLeft +'px 0;left:'+chopLeft+'px;top:0;width:'+chopW+'px;height:100%;"></div>');
					}
					for(var i=0;i<chopY;i++){
						chopTop = i*chopH;
						$(_this).append('<span style="background:url('+$(_this).children('img').attr('src')+') 0 -'+ chopTop +'px;left:0;top:'+chopTop+'px;width:100%;height:'+chopH+'px;"></span>');
					}
				} else {
					for(var i=0;i<chopY;i++){
						for(var j=0;j<chopX;j++){
							chopLeft = j*chopW;
							chopTop = i*chopH;
							$(_this).append('<p style="background:url('+$(_this).children('img').attr('src')+') -'+ chopLeft +'px -'+chopTop+'px;width:'+chopW+'px;height:'+chopH+'px;left:'+chopLeft+'px;top:'+chopTop+'px;"></p>');
						}
					}
				}
				$('img',_this).hide();
			});
			if( optionObj.style == 11){
				for(var i = 0; i < newArLen; i++){
					for(var j = Math.min(chopY,i+1)-1; j >= Math.max(0,i-chopX+1); j--){
						arr.push((j*chopX)+i-j);
					}  
				}
				for(var i = 0;i <newArLen;i++){
					if (i<chopY){
						newAr.push(arr.splice(0, (i+1)) );
					} else if(i> newArLen-chopX){
						newAr.push(arr.splice(0, (chopY - (i-(newArLen-chopY)) )));
					} else {
						newAr.push(arr.splice(0, chopY) );
					}
				}
				arr = null;
			}
			chopY = chopX = chopLeft = chopTop = chopW = chopH = null;
			var thisA = $('.aPage a', this);
			thisA.click(function(){
				indexNUM = $(this).index();
				pageTab();
			});
			$('.aLeft a', this).click(function(){
				indexNUM--;
				pageTab();
			});
			$('.aRight a', this).click(function(){
				indexNUM++;
				pageTab();
			});
			if(wheel){
				$(this).mousewheel(function(e, delta){
					if(delta > 0){
						indexNUM--;	
					} else if(delta < 0){
						indexNUM++;
					}
					pageTab();
				});
			}
			function pageTab(){
				if(indexNUM < 0){
					indexNUM = choper.length -1;
				} if(indexNUM > choper.length -1 ){
					indexNUM = 0;
				}
				thisZindex++;
				thisA.removeClass('ON').eq(indexNUM).addClass('ON');
				animateDOM = choper.eq(indexNUM).css({zIndex:thisZindex});
				animateDOM.children('div,span, p').css({opacity:0, fontSize:'12px'});
				switch(optionObj.style){
					case 0:
						animateDOM.children('div,span').each(function(i){
							if( i  < chopX ){
								$(this).animate({fontSize:'20px'}, i*animateDelay, function(){
									$(this).animate({opacity:0.3}, animateSpeed);
								});
							} else {
								$(this).animate({fontSize:'20px'}, i*animateDelay, function(){
									$(this).animate({opacity:1}, animateSpeed);
								});
							}
						});
						break;
					case 1:
						animateDOM.children('div').each(function(i){
							$(this).animate({fontSize:'20px'}, i*animateDelay, function(){
								$(this).animate({opacity:1}, animateSpeed);
							});
						});
						animateDOM.children('span').each(function(i){
							$(this).animate({fontSize:'20px'}, i*animateDelay, function(){
								$(this).animate({opacity:1}, animateSpeed);
							});
						});
						break;
					case 2:
						animateDOM.children('span').css({opacity:0}).each(function(i){
							$(this).animate({fontSize:'20px'}, i*animateDelay, function(){
								$(this).animate({opacity:1}, animateSpeed);
							});
						});
						break;
					case 3:
						animateDOM.children('div').css({opacity:0}).each(function(i){
							$(this).animate({fontSize:'20px'}, i*animateDelay, function(){
								$(this).animate({opacity:1}, animateSpeed);
							});
						});
						break;
					case 4:
						animateDOM.children('img').css({opacity:0.2, display:'block'});
						animateDOM.children('span').each(function(i){
							if(i%2 == 0){
								$(this).css({left:'-'+animateAmount+'px'}).animate({opacity:1, left:'0px'}, animateSpeed);
							} else {
								$(this).css({left:animateAmount+'px'}).animate({opacity:1, left:'0px'}, animateSpeed);
							}
						});
						animateDOM.children('div').each(function(i){
							if( i%2 == 0){
								$(this).css({top:'-'+animateAmount+'px'}).animate({opacity:1, top:'0px'}, animateSpeed);
							} else {
								$(this).css({top:animateAmount+'px'}).animate({opacity:1, top:'0px'}, animateSpeed);
							}
						});
						
						break;
					case 5:
						animateDOM.children('span').css({left:animateAmount+'px'}).each(function(i){
							$(this).animate({fontSize:'20px'}, i*animateDelay, function(){
								$(this).animate({opacity:1, left:'0px'}, animateSpeed);
							});
						});
						break;
					case 6:
						animateDOM.children('div').css({top:-animateAmount+'px'}).each(function(i){
							$(this).animate({fontSize:'20px'}, i*animateDelay, function(){
								$(this).animate({opacity:1, top:'0px'}, animateSpeed);
							});
						});
						break;
					case 7:
						animateDOM.children('span').each(function(i){
							if(i%2 == 0){
								$(this).css({left:'-'+animateAmount+'px'}).animate({fontSize:'20px'}, i*animateDelay, function(){
									$(this).animate({opacity:1, left:'0px'}, animateSpeed);
								});
							} else {
								$(this).css({left:animateAmount+'px'}).animate({fontSize:'20px'}, i*animateDelay, function(){
									$(this).animate({opacity:1, left:'0px'}, animateSpeed);
								});
							}
							
						});
						break;
					case 8:
						animateDOM.children('div').each(function(i){
							if( i%2 == 0){
								$(this).css({top:'-'+animateAmount+'px'}).animate({fontSize:'20px'}, i*animateDelay, function(){
									$(this).animate({opacity:1, top:'0px'}, animateSpeed);
								});
							} else {
								$(this).css({top:animateAmount+'px'}).animate({fontSize:'20px'}, i*animateDelay, function(){
									$(this).animate({opacity:1, top:'0px'}, animateSpeed);
								});
							}
						});
						break;
					case 9:
						animateDOM.children('span').each(function(i){
							if(i%2 == 0){
								$(this).css({left:'-'+animateAmount+'px'}).animate({fontSize:'20px'}, i*animateDelay, function(){
									$(this).animate({opacity:1, left:'0px'}, animateSpeed);
								});
							} else {
								$(this).css({left:animateAmount+'px'}).animate({fontSize:'20px'}, i*animateDelay, function(){
									$(this).animate({opacity:1, left:'0px'}, animateSpeed);
								});
							}
							
						});
						animateDOM.children('div').each(function(i){
							if( i%2 == 0){
								$(this).css({top:'-'+animateAmount+'px'}).animate({fontSize:'20px'}, i*animateDelay, function(){
									$(this).animate({opacity:1, top:'0px'}, animateSpeed);
								});
							} else {
								$(this).css({top:animateAmount+'px'}).animate({fontSize:'20px'}, i*animateDelay, function(){
									$(this).animate({opacity:1, top:'0px'}, animateSpeed);
								});
							}
						});
						break;
					case 10:
						animateDOM.children('span').css({left:'-'+animateAmount+'px'}).each(function(i){
							$(this).animate({fontSize:'20px'}, i*animateDelay, function(){
								$(this).animate({opacity:1, left:'0px'}, animateSpeed);
							});
						});
						animateDOM.children('div').css({top:animateAmount+'px'}).each(function(i){
							$(this).animate({fontSize:'20px'}, i*animateDelay, function(){
								$(this).animate({opacity:1, top:'0px'}, animateSpeed);
							});
						});
						break;
					case 11:
						for(var i in newAr){
							for( var j in newAr[i]){
								animateDOM.children('p').eq(newAr[i][j]).animate({fontSize:'20px'}, i*animateDelay, function(){
									$(this).animate({opacity:1}, animateSpeed);
								});
							};
						};
						break;
				}
			}
		});
		return this;
	}
});

var WEB_SITE_HREF="";
var WEB_SITE_TITLE="";
var FAVORITES="Favorites";
var FACEBOOK="FaceBook";
var GOOGLE="Google";
var PLURK="Plurk";
var SINA="Sina";
var TWITTER="Twitter";
var QQ="QQ";
var HAPPY="Happy";
var SO="So";
var REN = "Ren";
var ICON_IMAGE_PATH="images/anteaterBookmark/";
var FILE_NAME_EXTENSION=".png";
var bookmarkList=[FAVORITES,SINA,QQ,HAPPY,SO,REN,FACEBOOK,GOOGLE,PLURK,TWITTER];
function getBookmarkList(){return bookmarkList;}
function getBookmarkListIcon(){var _array=bookmarkList.concat();for(var i=0;i<_array.length;i++){_array[i]=ICON_IMAGE_PATH+_array[i]+FILE_NAME_EXTENSION;};return _array;};
function anteaterAddBookmark(pType,DOM){
	var _locationHref=(WEB_SITE_HREF=="")?window.location.href:WEB_SITE_HREF;
	_locationHref=encodeURIComponent(_locationHref);var _title=(WEB_SITE_TITLE=="")?document.title:WEB_SITE_TITLE;
	_title=encodeURIComponent(_title);var _href;
	switch(pType){
	case FAVORITES:
		anteaterAddFavorites();
		return;
		break;
	case SINA:
		_href="http://v.t.sina.com.cn/share/share.php?url="+_locationHref+"&title="+_title;
		break;
	case QQ:
		_href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+_locationHref+"&title="+_title;
		break;
	case HAPPY:
		_href="http://www.kaixin001.com/repaste/share.php??rurl="+_locationHref+"&rtitle="+_title;
		break;
	case SO:
		_href="http://t.sohu.com/third/post.jsp?url="+_locationHref+"&title="+_title;
		break;
	case REN:
		_href = "http://share.renren.com/share/buttonshare.do?link="+_locationHref+"&title="+_title;
		break;
		
	case FACEBOOK:
		_href="http://www.facebook.com/sharer.php?u="+_locationHref+"&title="+_title;
		break;
	case GOOGLE:
		_href="http://www.google.com/bookmarks/mark?op=add&bkmk="+_locationHref+"&title="+_title;
		break;
	case PLURK:
		_href="http://www.plurk.com/?qualifier=shares&status=".concat(_locationHref).concat(' ').concat('(').concat(_title).concat(')');
		break;
	case TWITTER:
		_href="http://twitter.com/home/?status="+_title+" "+_locationHref;
		break;
	};
	window.open(_href,"_blank");return false;
};
function anteaterAddFavorites(){var _title=(WEB_SITE_TITLE=="")?document.title:WEB_SITE_TITLE;var _locationHref=(WEB_SITE_HREF=="")?window.location.href:WEB_SITE_HREF;if(window.sidebar&&window.sidebar.addPanel){window.sidebar.addPanel(_title,_locationHref,'');}else if(window.external){window.external.AddFavorite(_locationHref,_title);}else if(document.layers){window.alert('Please click OK then press Ctrl+D to create a bookmark');}else{window.alert('Please use your browsers\' bookmarking facility to create a bookmark');}};
function echo(o){var s = "";for (var a in o) {if( o[a] instanceof Object ){s += a + " :" + echo( o[a] ) + '\n';}else{s += a + " = " + o[a] + '\n';}	}return s;}