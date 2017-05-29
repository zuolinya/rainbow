(function($) {
	init()

	function init() {
//		startVideo();
//		setTimeout(function() {
//			$('.startPageVideo').animate({opacity:0},1000).hide(800);
//			$('.canvasBox').animate({opacity:1},1300).show(800)
//			setTimeout(function() {
				playCanvas();
//			}, 800)
//		}, 21300)
//		}, 1300)
		playCanvas();
		
	}

	function startVideo() {
		var startVideo = document.getElementById("startVideo");
		startVideo.loop = false;
		startVideo.addEventListener('play', function() {
			setTimeout(function() {
				$("#startVideo").hide();
				$('.statVideoImg').show()
//			}, 1000)
			}, 21000)
		}, false);
	}

	function playCanvas() {
		var canvas = document.getElementById('myCanvas');
		canvas.width = 640;
		canvas.height = 1136;
		if(canvas.getContext) {
			var cxt = canvas.getContext("2d");		

			var imageUrls = {
				bannerImg: "/rainbow315/images/banner.jpg",
				logoImg: "/rainbow315/images/logo.png",
				logoMinImg: "/rainbow315/images/logoMin.png",
				image_1003_01: "/rainbow315/images/image_1003_01.jpg",
				image_1003_02: "/rainbow315/images/image_1003_02.jpg",
				image_1003_03: "/rainbow315/images/image_1003_03.jpg",
				image_1003_04: "/rainbow315/images/image_1003_04.jpg",
				shareImg: "/rainbow315/images/share.jpg",
				thumbsImg: "/rainbow315/images/thumbs-up.jpg",
				commentImg: "/rainbow315/images/comment.jpg",
				image_1008_01: "/rainbow315/images/image_1008_01.jpg",
				image_1008_02: "/rainbow315/images/image_1008_02.jpg",
				image_1008_03: "/rainbow315/images/image_1008_03.jpg",
				image_1008_04: "/rainbow315/images/image_1008_04.jpg",
				image_1103_03: "/rainbow315/images/image_1103_03.jpg",
				image_1103_02: "/rainbow315/images/image_1103_02.jpg",
				image_1103_01: "/rainbow315/images/image_1103_01.jpg",
				image_1103_04: "/rainbow315/images/image_1103_04.jpg",
				image_1117_01: "/rainbow315/images/image_1117_01.jpg",
				image_1117_02: "/rainbow315/images/image_1117_02.jpg",
				image_1117_03: "/rainbow315/images/image_1117_03.jpg",
				image_1117_04: "/rainbow315/images/image_1117_04.jpg",
				image_1209_01: "/rainbow315/images/image_1209_01.jpg",
				image_1209_02: "/rainbow315/images/image_1209_02.jpg",				
				image_1305_01: "/rainbow315/images/image_1305_01.jpg",
				image_1305_02: "/rainbow315/images/image_1305_02.jpg",
				image_1403_01: "/rainbow315/images/image_1403_01.jpg",
				image_1403_02: "/rainbow315/images/image_1403_02.jpg",
				image_1403_03: "/rainbow315/images/image_1403_03.jpg",
				image_1403_04: "/rainbow315/images/image_1403_04.jpg",
				image_1504_01: "/rainbow315/images/image_1504_01.jpg",
				image_1510_01: "/rainbow315/images/image_1510_01.jpg",
				image_1510_02: "/rainbow315/images/image_1510_02.jpg",
				image_1607_01: "/rainbow315/images/image_1607_01.jpg",
				image_1607_02: "/rainbow315/images/image_1607_02.jpg",
				image_1607_03: "/rainbow315/images/image_1607_03.jpg",
				image_1607_04: "/rainbow315/images/image_1607_04.jpg",				
				image_1610_01: "/rainbow315/images/image_1610_01.jpg",
				image_1610_02: "/rainbow315/images/image_1610_02.jpg",
				image_1610_03: "/rainbow315/images/image_1610_03.jpg",
				image_1610_04: "/rainbow315/images/image_1610_04.jpg",				
				image_end: "/rainbow315/images/image_end.jpg",
				

			}
			var logoImg = new Image();logoImg.src = imageUrls.logoImg;
			var logoMinImg = new Image();logoMinImg.src = imageUrls.logoMinImg;
			var image_1003_01 = new Image();image_1003_01.src = imageUrls.image_1003_01;
			var image_1003_02 = new Image();image_1003_02.src = imageUrls.image_1003_02;
			var image_1003_03 = new Image();image_1003_03.src = imageUrls.image_1003_03;
			var image_1003_04 = new Image();image_1003_04.src = imageUrls.image_1003_04;
			var shareImg = new Image();shareImg.src = imageUrls.shareImg;
			var thumbsImg = new Image();thumbsImg.src = imageUrls.thumbsImg;
			var shareImg = new Image();shareImg.src = imageUrls.shareImg;
			var commentImg = new Image();commentImg.src = imageUrls.commentImg;
			var image_1008_01 = new Image();image_1008_01.src = imageUrls.image_1008_01;
			var image_1008_02 = new Image();image_1008_02.src = imageUrls.image_1008_02;
			var image_1008_03 = new Image();image_1008_03.src = imageUrls.image_1008_03;
			var image_1008_04 = new Image();image_1008_04.src = imageUrls.image_1008_04;
			var image_1103_04 = new Image();image_1103_04.src = imageUrls.image_1103_04;
			var image_1103_03 = new Image();image_1103_03.src = imageUrls.image_1103_03;
			var image_1103_02 = new Image();image_1103_02.src = imageUrls.image_1103_02;
			var image_1103_01 = new Image();image_1103_01.src = imageUrls.image_1103_01;
			var image_1117_01 = new Image();image_1117_01.src = imageUrls.image_1117_01;
			var image_1117_02 = new Image();image_1117_02.src = imageUrls.image_1117_02;
			var image_1117_03 = new Image();image_1117_03.src = imageUrls.image_1117_03;
			var image_1117_04 = new Image();image_1117_04.src = imageUrls.image_1117_04;
			var image_1209_01 = new Image();image_1209_01.src = imageUrls.image_1209_01;
			var image_1209_02 = new Image();image_1209_02.src = imageUrls.image_1209_02;
			var image_1305_01 = new Image();image_1305_01.src = imageUrls.image_1305_01;
			var image_1305_02 = new Image();image_1305_02.src = imageUrls.image_1305_02;
			var image_1403_01 = new Image();image_1403_01.src = imageUrls.image_1403_01;
			var image_1403_02 = new Image();image_1403_02.src = imageUrls.image_1403_02;
			var image_1403_03 = new Image();image_1403_03.src = imageUrls.image_1403_03;
			var image_1403_04 = new Image();image_1403_04.src = imageUrls.image_1403_04;
			var image_1504_01 = new Image();image_1504_01.src = imageUrls.image_1504_01;
			var image_1510_01 = new Image();image_1510_01.src = imageUrls.image_1510_01;
			var image_1510_02 = new Image();image_1510_02.src = imageUrls.image_1510_02;			
			var image_1607_01 = new Image();image_1607_01.src = imageUrls.image_1607_01;
			var image_1607_02 = new Image();image_1607_02.src = imageUrls.image_1607_02;
			var image_1607_03 = new Image();image_1607_03.src = imageUrls.image_1607_03;
			var image_1607_04 = new Image();image_1607_04.src = imageUrls.image_1607_04;			
			var image_1610_01 = new Image();image_1610_01.src = imageUrls.image_1610_01;
			var image_1610_02 = new Image();image_1610_02.src = imageUrls.image_1610_02;
			var image_1610_03 = new Image();image_1610_03.src = imageUrls.image_1610_03;
			var image_1610_04 = new Image();image_1610_04.src = imageUrls.image_1610_04;			
			var image_end = new Image();image_end.src = imageUrls.image_end;
			
			var bannerImg = new Image();
			bannerImg.src = imageUrls.bannerImg;
			
			bannerImg.addEventListener("load", function() {
				
				//最大为8000
				var distance = 0;
				drawPage()
				setTimeout(function(){
					setInterval(function(){
						distance = distance +2;
						cxt.clearRect(0,0,640,1136);
						drawPage()
					},30)
				},1000)
				
				
				function drawPage(){
//					drawLine(0, 410, 0, 10000, 40, "#eae9e7");
//					drawLine(640, 410, 640, 10000, 40, "#eae9e7");
					drawImg(bannerImg, 0, 0);
					drawImg(logoImg, 38, 24);
					//1
					drawFont("丰台彩虹消费维权服务", "normal", 34, "#231815", 198, 72);
					drawLine(0, 318, 640, 318, 1, '#c9caca');
					drawFont("详细", "normal", 32, "#231815", 54, 360);
					drawFont("资料", "normal", 32, "#231815", 54, 400);
					drawLine(161, 330, 161, 410, 1, '#c9caca');
					drawFont("346", "normal", 32, "#00a0e9", 207, 360);
					drawFont("微博", "normal", 32, "#231815", 202, 400);
					drawLine(310, 330, 310, 410, 1, '#c9caca');
					drawFont("73", "normal", 32, "#00a0e9", 358, 360);
					drawFont("关注", "normal", 32, "#231815", 348, 400);
					drawLine(464, 330, 464, 410, 1, '#c9caca');
					drawFont("96315", "normal", 32, "#00a0e9", 500, 360);
					drawFont("粉丝", "normal", 32, "#231815", 514, 400);
					drawImg(logoMinImg, 36, 420);
					drawFont("丰台彩虹消费维权服务队", "normal", 24, "#231815", 113, 450);
					drawFont("2010年3月12日 14：06", "normal", 20, "#727171", 113, 480);
					drawFont("丰台彩虹消费维权服务队成立", "normal", 20, "#231815", 113, 520);
					drawFont("“彩虹 315”新浪微博正式开通", "normal", 20, "#231815", 113, 550);
					drawImg(image_1003_01, 113, 570);
					drawImg(image_1003_02, 350, 570);
					drawImg(image_1003_03, 113, 820);
					drawImg(image_1003_04, 350, 820);
					drawLine(20, 1070, 620, 1070, 1, '#c9caca');
					drawImg(shareImg, 94, 1090);
					drawFont("3万", "normal", 20, "#727171", 133, 1110);
					drawImg(commentImg, 283, 1090);
					drawFont("1万", "normal", 20, "#727171", 322, 1110);
					drawImg(thumbsImg, 471, 1090);
					drawFont("5万", "normal", 20, "#727171", 513, 1110);
					drawLine(220, 1080, 220, 1120, 1, '#c9caca');
					drawLine(415, 1080, 415, 1120, 1, '#c9caca');
					//2
					drawLine(0, 1150, 640, 1150, 20, '#eae9e7');
					drawImg(logoMinImg, 36, 1190);
					drawFont("丰台彩虹消费维权服务队", "normal", 24, "#231815", 113, 1220);
					drawFont("2010年8月2日 17：22", "normal", 20, "#727171", 113, 1250);
					drawFont("丰台区成立北京市首个消费维权法律服务站", "normal", 20, "#231815", 113, 1290);
					drawFont("启动“就近投诉处理机制”、“商品检测援助服务机制”", "normal", 20, "#231815", 113, 1320);
					drawImg(image_1008_01, 113, 1340);
					drawImg(image_1008_02, 113, 1580);
					drawImg(image_1008_03, 350, 1340);
					drawImg(image_1008_04, 350, 1580);
					drawLine(20, 1830, 620, 1830, 1, '#c9caca');
					drawImg(shareImg, 94, 1850);
					drawFont("3万", "normal", 20, "#727171", 133, 1870);
					drawImg(commentImg, 283, 1850);
					drawFont("1万", "normal", 20, "#727171", 322, 1870);
					drawImg(thumbsImg, 471, 1850);
					drawFont("5万", "normal", 20, "#727171", 513, 1870);
					drawLine(220, 1840, 220, 1880, 1, '#c9caca');
					drawLine(415, 1840, 415, 1880, 1, '#c9caca');
					//3
					drawLine(0, 1910, 640, 1910, 20, '#eae9e7');
					drawImg(logoMinImg, 36, 1960);
					drawFont("丰台彩虹消费维权服务队", "normal", 24, "#231815", 113, 1990);
					drawFont("2011年3月16日 11：02", "normal", 20, "#727171", 113, 2020);
					drawFont("在首都经济贸易大学举办“我关注、我参与、我放心消费", "normal", 20, "#231815", 113, 2060);
					drawFont("维权论坛”，启动了“我关注、我参与、我放心”消费调", "normal", 20, "#231815", 113, 2090);
					drawFont("查活动；首个大学“消费教育基地”落成", "normal", 20, "#231815", 113, 2120);
					drawImg(image_1103_01, 113, 2150);
					drawImg(image_1103_02, 113, 2390);
					drawImg(image_1103_03, 350, 2150);
					drawImg(image_1103_04, 350, 2390);
					drawLine(20, 2640, 620, 2640, 1, '#c9caca');
					drawImg(shareImg, 94, 2660);
					drawFont("3万", "normal", 20, "#727171", 133, 2680);
					drawImg(commentImg, 283, 2660);
					drawFont("1万", "normal", 20, "#727171", 322, 2680);
					drawImg(thumbsImg, 471, 2660);
					drawFont("5万", "normal", 20, "#727171", 513, 2680);
					drawLine(220, 2650, 220, 2690, 1, '#c9caca');
					drawLine(415, 2650, 415, 2690, 1, '#c9caca');
					
					//4
					drawLine(0, 2720, 640, 2720, 20, '#eae9e7');
					drawImg(logoMinImg, 36, 2770);
					drawFont("丰台彩虹消费维权服务队", "normal", 24, "#231815", 113, 2800);
					drawFont("2011年5月21日 15：16", "normal", 20, "#727171", 113, 2830);
					drawFont("召开2010年度总结表彰大会，评选首批“彩虹服务之星”", "normal", 20, "#231815", 113, 2870);
					drawImg(image_1103_01, 113, 2900);
					drawLine(20, 3150, 620, 3150, 1, '#c9caca');
					drawImg(shareImg, 94, 3170);
					drawFont("3万", "normal", 20, "#727171", 133, 3190);
					drawImg(commentImg, 283, 3170);
					drawFont("1万", "normal", 20, "#727171", 322, 3190);
					drawImg(thumbsImg, 471, 3170);
					drawFont("5万", "normal", 20, "#727171", 513, 3190);
					drawLine(220, 3160, 220, 3200, 1, '#c9caca');
					drawLine(415, 3160, 415, 3200, 1, '#c9caca');
					//5
					drawLine(0, 3230, 640, 3230, 20, '#eae9e7');
					drawImg(logoMinImg, 36, 3280);
					drawFont("丰台彩虹消费维权服务队", "normal", 24, "#231815", 113, 3310);
					drawFont("2011年11月17日 18：52", "normal", 20, "#727171", 113, 3340);
					drawFont("成立丰台六里桥地区消费维权联盟", "normal", 20, "#231815", 113, 3380);
					drawFont("启动“共建万丰路绿色放心消费示范街活动”", "normal", 20, "#231815", 113, 3420);
					drawImg(image_1117_01, 113, 3440);
					drawImg(image_1117_02, 113, 3680);
					drawImg(image_1117_03, 350, 3440);
					drawImg(image_1117_04, 350, 3680);
					drawLine(20, 3930, 620, 3930, 1, '#c9caca');
					drawImg(shareImg, 94, 3960);
					drawFont("3万", "normal", 20, "#727171", 133, 3980);
					drawImg(commentImg, 283, 3960);
					drawFont("1万", "normal", 20, "#727171", 322, 3980);
					drawImg(thumbsImg, 471, 3960);
					drawFont("5万", "normal", 20, "#727171", 513, 3980);
					drawLine(220, 3950, 220, 3990, 1, '#c9caca');
					drawLine(415, 3950, 415, 3990, 1, '#c9caca');
					//6
					drawLine(0, 4020, 640, 4020, 20, '#eae9e7');
					drawImg(logoMinImg, 36, 4070);
					drawFont("丰台彩虹消费维权服务队", "normal", 24, "#231815", 113, 4100);
					drawFont("2012年9月22日 11：46", "normal", 20, "#727171", 113, 4130);
					drawFont("丰台区沐浴行业消费纠纷人民调解委员会成立", "normal", 20, "#231815", 113, 4170);
					drawFont("丰台区首地大峡谷购物中心消费纠纷人民调解委员会成立", "normal", 20, "#231815", 113, 4200);
					drawImg(image_1209_01, 113, 4230);
					drawImg(image_1209_02, 350, 4230);
					drawLine(20, 4480, 620, 4480, 1, '#c9caca');
					drawImg(shareImg, 94, 4510);
					drawFont("3万", "normal", 20, "#727171", 133, 4530);
					drawImg(commentImg, 283, 4510);
					drawFont("1万", "normal", 20, "#727171", 322, 4530);
					drawImg(thumbsImg, 471, 4510);
					drawFont("5万", "normal", 20, "#727171", 513, 4530);
					drawLine(220, 4500, 220, 4540, 1, '#c9caca');
					drawLine(415, 4500, 415, 4540, 1, '#c9caca');
					
					//7
					drawLine(0, 4570, 640, 4570, 20, '#eae9e7');
					drawImg(logoMinImg, 36, 4620);
					drawFont("丰台彩虹消费维权服务队", "normal", 24, "#231815", 113, 4650);
					drawFont("2013年5月6日 10：36", "normal", 20, "#727171", 113, 4680);
					drawFont("在丰台区蒲黄榆三小设立消费者权益保护“青少年维权岗”", "normal", 20, "#231815", 113, 4710);
					drawImg(image_1305_01, 113, 4750);
					drawImg(image_1305_02, 350, 4750);
					drawLine(20, 5000, 620, 5000, 1, '#c9caca');
					drawImg(shareImg, 94, 5030);
					drawFont("3万", "normal", 20, "#727171", 133, 5050);
					drawImg(commentImg, 283, 5030);
					drawFont("1万", "normal", 20, "#727171", 322, 5050);
					drawImg(thumbsImg, 471, 5030);
					drawFont("5万", "normal", 20, "#727171", 513, 5050);
					drawLine(220, 5020, 220, 5060, 1, '#c9caca');
					drawLine(415, 5020, 415, 5060, 1, '#c9caca');
					
					//8
					drawLine(0, 5090, 640, 5090, 20, '#eae9e7');
					drawImg(logoMinImg, 36, 5140);
					drawFont("丰台彩虹消费维权服务队", "normal", 24, "#231815", 113, 5170);
					drawFont("2014年3月27日 17：09", "normal", 20, "#727171", 113, 5200);
					drawFont("在北京市丰台区方庄青少年宫创建丰台区首家青少年消费", "normal", 20, "#231815", 113, 5240);
					drawFont("教育基地，成立“丰台彩虹消费维权服务队--雏鹰小分队”", "normal", 20, "#231815", 113, 5270);
					drawImg(image_1403_01, 113, 5300);
					drawImg(image_1403_03, 113, 5550);
					drawImg(image_1403_02, 350, 5300);
					drawImg(image_1403_04, 350, 5550);
					drawLine(20, 5800, 620, 5800, 1, '#c9caca');
					drawImg(shareImg, 94, 5830);
					drawFont("3万", "normal", 20, "#727171", 133, 5850);
					drawImg(commentImg, 283, 5830);
					drawFont("1万", "normal", 20, "#727171", 322, 5850);
					drawImg(thumbsImg, 471, 5830);
					drawFont("5万", "normal", 20, "#727171", 513, 5850);
					drawLine(220, 5820, 220, 5860, 1, '#c9caca');
					drawLine(415, 5820, 415, 5860, 1, '#c9caca');
					
					//9
					drawLine(0, 5880, 640, 5880, 20, '#eae9e7');
					drawImg(logoMinImg, 36, 5920);
					drawFont("丰台彩虹消费维权服务队", "normal", 24, "#231815", 113, 5950);
					drawFont("2015年4月6日 18：49", "normal", 20, "#727171", 113, 5980);
					drawFont("推动丰台区工商分局、丰台区人民法院签署《关于进一", "normal", 20, "#231815", 113, 6020);
					drawFont("步深化“诉调对接”沟通协作机制建设的合作协议》", "normal", 20, "#231815", 113, 6050);
					drawImg(image_1504_01, 113, 6080);
					drawLine(20, 6330, 620, 6330, 1, '#c9caca');
					drawImg(shareImg, 94, 6360);
					drawFont("3万", "normal", 20, "#727171", 133, 6380);
					drawImg(commentImg, 283, 6360);
					drawFont("1万", "normal", 20, "#727171", 322, 6380);
					drawImg(thumbsImg, 471, 6360);
					drawFont("5万", "normal", 20, "#727171", 513, 6380);
					drawLine(415, 6350, 415, 6390, 1, '#c9caca');
					drawLine(220, 6350, 220, 6390, 1, '#c9caca');
					
					//10
					drawLine(0, 6420, 640, 6420, 20, '#eae9e7');
					drawImg(logoMinImg, 36, 6450);
					drawFont("丰台彩虹消费维权服务队", "normal", 24, "#231815", 113, 6480);
					drawFont("2015年10月16日 10：31", "normal", 20, "#727171", 113, 6510);
					drawFont("丰台区红木行业消费纠纷快速和解机制正式启动", "normal", 20, "#231815", 113, 6550);
					drawImg(image_1510_01, 113, 6580);
					drawImg(image_1510_02, 350, 6580);
					drawLine(20, 6830, 620, 6830, 1, '#c9caca');
					drawImg(shareImg, 94, 6860);
					drawFont("3万", "normal", 20, "#727171", 133, 6880);
					drawImg(commentImg, 283, 6860);
					drawFont("1万", "normal", 20, "#727171", 322, 6880);
					drawImg(thumbsImg, 471, 6860);
					drawFont("5万", "normal", 20, "#727171", 513, 6880);
					drawLine(415, 6870, 415, 6910, 1, '#c9caca');
					drawLine(220, 6870, 220, 6910, 1, '#c9caca');
										
					//11
					drawLine(0, 6920, 640, 6920, 20, '#eae9e7');
					drawImg(logoMinImg, 36, 6970);
					drawFont("丰台彩虹消费维权服务队", "normal", 24, "#231815", 113, 7000);
					drawFont("2016年7月8日 10：00", "normal", 20, "#727171", 113, 7030);
					drawFont("放心消费在丰台”微信公众号正式上线", "normal", 20, "#231815", 113, 7070);
					drawFont("北京丰台区消费教育基地”揭牌启动", "normal", 20, "#231815", 113, 7100);
					drawImg(image_1607_01, 113, 7130);
					drawImg(image_1607_03, 113, 7370);
					drawImg(image_1607_02, 350, 7130);
					drawImg(image_1607_04, 350, 7370);
					drawLine(20, 7620, 620, 7620, 1, '#c9caca');
					drawImg(shareImg, 94, 7650);
					drawFont("3万", "normal", 20, "#727171", 133, 7670);
					drawImg(commentImg, 283, 7650);
					drawFont("1万", "normal", 20, "#727171", 322, 7670);
					drawImg(thumbsImg, 471, 7650);
					drawFont("5万", "normal", 20, "#727171", 513, 7670);
					drawLine(415, 7640, 415, 7680, 1, '#c9caca');
					drawLine(220, 7640, 220, 7680, 1, '#c9caca');
					
					//12
					drawLine(0, 7710, 640, 7710, 20, '#eae9e7');
					drawImg(logoMinImg, 36, 7760);
					drawFont("丰台彩虹消费维权服务队", "normal", 24, "#231815", 113, 7790);
					drawFont("2016年10月15日 11：30", "normal", 20, "#727171", 113, 7820);
					drawFont("斩获殊荣，再接再厉！", "normal", 20, "#231815", 113, 7860);
					drawImg(image_1610_01, 113, 7890);
					drawImg(image_1610_03, 113, 8130);
					drawImg(image_1610_02, 350, 7890);
					drawImg(image_1610_04, 350, 8130);
					drawLine(20, 8380, 620, 8380, 1, '#c9caca');
					drawImg(shareImg, 94, 8410);
					drawFont("3万", "normal", 20, "#727171", 133, 8430);
					drawImg(commentImg, 283, 8410);
					drawFont("1万", "normal", 20, "#727171", 322, 8430);
					drawImg(thumbsImg, 471, 8410);
					drawFont("5万", "normal", 20, "#727171", 513, 8430);
					drawLine(415, 8400, 415, 8440, 1, '#c9caca');
					drawLine(220, 8400, 220, 8440, 1, '#c9caca');
					
					//13
					drawLine(0, 8470, 640, 8470, 20, '#eae9e7');
					drawImg(logoMinImg, 36, 8520);
					drawFont("丰台彩虹消费维权服务队", "normal", 24, "#231815", 113, 8550);
					drawFont("今天 10分钟以前", "normal", 20, "#727171", 113, 8580);
					drawFont("满心期待，迎接未来！", "normal", 20, "#231815", 113, 8620);
					drawImg(image_end, 113, 8650);
					drawLine(20, 8980, 620, 8980, 1, '#c9caca');
					drawImg(shareImg, 94, 9010);
					drawFont("3万", "normal", 20, "#727171", 133, 9030);
					drawImg(commentImg, 283, 9010);
					drawFont("1万", "normal", 20, "#727171", 322, 9030);
					drawImg(thumbsImg, 471, 9010);
					drawFont("5万", "normal", 20, "#727171", 513, 9030);
				
				}
				
				
				
				
				
				
				//绘制图片
				function drawImg(imgSrc, left, top) {
					cxt.save();
					top = top - distance;
					cxt.translate(left, top);
					cxt.drawImage(imgSrc, 0, 0);
					cxt.restore();
				}
				//绘制文字
				function drawFont(textContain, fontWeight, fontSize, color, left, top) {
					cxt.save();
					top = top - distance;
					cxt.font = fontWeight + " " + fontSize + "px 微软雅黑";
					cxt.fillStyle = color;
					cxt.fillText(textContain, left, top);
					cxt.restore();
				}
				//绘制线条
				function drawLine(top, right, bottom, left, width, color) {
					cxt.save();
					cxt.beginPath();
					right = right - distance;
					left = left - distance;
					cxt.moveTo(top, right);
					cxt.lineTo(bottom, left);
					cxt.lineWidth = width;
					cxt.strokeStyle = color;
					cxt.stroke();
					cxt.closePath();
					cxt.restore();
				}
			})

		}
	}

})(jQuery);