

//오른쪽 위 버튼 누르면 팝업 창 뜨게 만드는 코드.
chrome.runtime.onMessage.addListener(function(msg, sender){
    if(msg == "toggle"){
        toggle();

    }
})













var icon1 = document.createElement("img");
icon1.src = chrome.runtime.getURL("images/backward.png");
icon1.style.border = "thick solid black";
//icon1.style.backgroundColor = "LightCyan";
icon1.width = 85;
icon1.height = 80;
icon1.style.position = "fixed"; //무조건
//icon1.style.position = "absolute"; //이걸 하면, 그 자리에 그대로 고정되어 스크롤 내리면 아이콘이 안보이는 문제점이 생김
icon1.style.top = "80px";
icon1.style.right = "25px";
document.documentElement.appendChild(icon1);

var icon2 = document.createElement("img");
icon2.src = chrome.runtime.getURL("images/forward.png");
icon2.style.border = "thick solid black";
//icon2.style.backgroundColor = "Azure";
icon2.width = 85;
icon2.height = 80;
icon2.style.position = "fixed";
//icon2.style.position = "absolute"; 
icon2.style.top = "220px";
icon2.style.right = "25px";
document.documentElement.appendChild(icon2);

var icon3 = document.createElement("img");
icon3.src = chrome.runtime.getURL("images/refresh.png");
icon3.style.border = "thick solid black";
icon3.width = 85;
icon3.height = 80;
icon3.style.position = "fixed";
//icon3.style.position = "absolute"; 
icon3.style.top = "360px";
icon3.style.right = "25px";
document.documentElement.appendChild(icon3);

var icon4 = document.createElement("img");
icon4.src = chrome.runtime.getURL("images/home.png");
icon4.style.border = "thick solid black";
icon4.width = 85;
icon4.height = 80;
icon4.style.position = "fixed";
//icon4.style.position = "absolute"; 
icon4.style.top = "500px";
icon4.style.right = "25px";
document.documentElement.appendChild(icon4);





 
var icon5 = document.createElement("img");
icon5.src = chrome.runtime.getURL("images/extension.png");
icon5.style.border = "thick solid black";
icon5.style.backgroundColor = "";
icon5.width = 85;
icon5.height = 80;
icon5.style.position = "fixed";
//icon5.style.position = "absolute"; //
icon5.style.top = "640px";
icon5.style.right = "25px";
document.documentElement.appendChild(icon5);

var icon5_1 = document.createElement("P");
icon5_1.innerText = "120%";
icon5_1.style.font = "normal bolder 33px Arial,Black"; 
icon5_1.style.letterSpacing = "0.2px";
icon5_1.style.border = "thick solid black";
icon5_1.style.backgroundColor = "";
icon5_1.style.position = "fixed";
icon5_1.style.top = "725px";
icon5_1.style.right = "25px";
document.documentElement.appendChild(icon5_1);

var icon5_2 = document.createElement("P");
icon5_2.innerText = "130%";
icon5_2.style.font = "normal bolder 33px Arial,Black"; 
icon5_2.style.letterSpacing = "0.2px";
icon5_2.style.border = "thick solid black";
icon5_2.style.backgroundColor = "";
icon5_2.style.position = "fixed";
icon5_2.style.top = "769px";
icon5_2.style.right = "25px";
document.documentElement.appendChild(icon5_2);

var icon5_3 = document.createElement("P");
icon5_3.innerText = "140%";
icon5_3.style.font = "normal bolder 33px Arial,Black"; 
icon5_3.style.letterSpacing = "0.2px";
icon5_3.style.border = "thick solid black";
icon5_3.style.backgroundColor = "";
icon5_3.style.position = "fixed";
icon5_3.style.top = "813px";
icon5_3.style.right = "25px";
document.documentElement.appendChild(icon5_3);

var icon5_4 = document.createElement("P");
icon5_4.innerText = "150%";
icon5_4.style.font = "normal bolder 33px Arial,Black"; 
icon5_4.style.letterSpacing = "0.2px";
icon5_4.style.border = "thick solid black";
icon5_4.style.backgroundColor = "";
icon5_4.style.position = "fixed";
icon5_4.style.top = "857px";
icon5_4.style.right = "25px";
document.documentElement.appendChild(icon5_4);






var icon6 = document.createElement("img");
icon6.src = chrome.runtime.getURL("images/up.png");
icon6.style.border = "thick solid black";
icon6.width = 50;
icon6.height = 50;
icon6.style.position = "fixed";
//icon6.style.position = "absolute"; 
icon6.style.top = "75px";
icon6.style.right = "1840px";
document.documentElement.appendChild(icon6);

var icon7 = document.createElement("img");
icon7.src = chrome.runtime.getURL("images/down.png");
icon7.style.border = "thick solid black";
icon7.width = 50;
icon7.height = 50;
icon7.style.position = "fixed";
//icon7.style.position = "absolute"; 
icon7.style.top = "838px";
icon7.style.right = "1840px";
document.documentElement.appendChild(icon7);





 
var icon8 = document.createElement("img");
icon8.src = chrome.runtime.getURL("images/upup.png");
icon8.style.border = "thick solid black";
icon8.width = 50;
icon8.height = 50;
icon8.style.position = "fixed";
//icon8.style.position = "absolute"; 
icon8.style.top = "7px";
icon8.style.right = "1840px";
document.documentElement.appendChild(icon8);

var icon9 = document.createElement("img");
icon9.src = chrome.runtime.getURL("images/downdown.png");
icon9.style.border = "thick solid black";
icon9.width = 50;
icon9.height = 50;
icon9.style.position = "fixed";
//icon9.style.position = "absolute"; 
icon9.style.top = "906px";
icon9.style.right = "1840px";
document.documentElement.appendChild(icon9); //마지막 자식














//icon1- '뒤로가기'
$(document).ready(function(){
	$(document.documentElement.lastChild.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling).hover(function(){
		
		this.style.border = "thick solid red";
		this.style.backgroundColor = "yellow";

		$(this).click(function(){
			//window.history.back(); 
			window.history.go(-1);
		});

    }, function(){ // hover원상태로

		this.style.border = "thick solid black";
		this.style.backgroundColor = "";

  });
});

//icon2- '앞으로가기'
$(document).ready(function(){
	$(document.documentElement.lastChild.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling).hover(function(){
		
		this.style.border = "thick solid red";
		this.style.backgroundColor = "yellow";

		$(this).click(function(){
			window.history.forward(); 
		});

    }, function(){ // hover원상태로

		this.style.border = "thick solid black";
		this.style.backgroundColor = "";

  });
});

//icon3- '새로고침'
$(document).ready(function(){
	$(document.documentElement.lastChild.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling).hover(function(){
		
		this.style.border = "thick solid red";
		this.style.backgroundColor = "yellow";

		$(this).click(function(){
			document.location.reload(); //새로고침
		});

    }, function(){ // hover원상태로

		this.style.border = "thick solid black";
		this.style.backgroundColor = "";

  });
});

//icon4- '홈으로'
$(document).ready(function(){
	$(document.documentElement.lastChild.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling).hover(function(){
		
		this.style.border = "thick solid red";
		this.style.backgroundColor = "yellow";

		$(this).click(function(){
			document.location.replace("https://www.naver.com/"); //홈으로
		});

    }, function(){ // hover원상태로

		this.style.border = "thick solid black";
		this.style.backgroundColor = "";

  });
});








//icon5- '원래 화면 사이즈로'
$(document).ready(function(){
	$(document.documentElement.lastChild.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling).hover(function(){
		
		this.style.border = "thick solid red";
		this.style.backgroundColor = "yellow";

		$(this).click(function(){
			document.body.style.zoom = "1.0";
		});

    }, function(){ // hover원상태로

		this.style.border = "thick solid black";
		this.style.backgroundColor = "";

  });
});

//icon5_1- '120%로 확대'
$(document).ready(function(){
	$(document.documentElement.lastChild.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling).hover(function(){
		
		this.style.border = "thick solid red";
		this.style.backgroundColor = "yellow";

		$(this).click(function(){
			document.body.style.zoom = "1.2";
		});

    }, function(){ // hover원상태로

		this.style.border = "thick solid black";
		this.style.backgroundColor = "";

  });
});

//icon5_2- '130%로 확대'
$(document).ready(function(){
	$(document.documentElement.lastChild.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling).hover(function(){
		
		this.style.border = "thick solid red";
		this.style.backgroundColor = "yellow";

		$(this).click(function(){
			document.body.style.zoom = "1.3";
		});

    }, function(){ // hover원상태로

		this.style.border = "thick solid black";
		this.style.backgroundColor = "";

  });
});

//icon5_3- '140%로 확대'
$(document).ready(function(){
	$(document.documentElement.lastChild.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling).hover(function(){
		
		this.style.border = "thick solid red";
		this.style.backgroundColor = "yellow";

		$(this).click(function(){
			document.body.style.zoom = "1.4";
		});

    }, function(){ // hover원상태로

		this.style.border = "thick solid black";
		this.style.backgroundColor = "";

  });
});

//icon5_4- '150%로 확대'
$(document).ready(function(){
	$(document.documentElement.lastChild.previousSibling.previousSibling.previousSibling.previousSibling).hover(function(){
		
		this.style.border = "thick solid red";
		this.style.backgroundColor = "yellow";

		$(this).click(function(){
			document.body.style.zoom = "1.5";
		});

    }, function(){ // hover원상태로

		this.style.border = "thick solid black";
		this.style.backgroundColor = "";

  });
});








//1920X1080
//icon6- '스크롤 위로'
$(document).ready(function(){
	$(document.documentElement.lastChild.previousSibling.previousSibling.previousSibling).hover(function(){
		
		this.style.border = "thick solid red";
		this.style.backgroundColor = "yellow";

		$(this).click(function(){
			document.documentElement.scrollTop -= 20; //위로 스크롤
		});

    }, function(){ // hover원상태로

		this.style.border = "thick solid black";
		this.style.backgroundColor = "";

  });
});

//icon7- '스크롤 아래로'
$(document).ready(function(){
	$(document.documentElement.lastChild.previousSibling.previousSibling).hover(function(){
		
		this.style.border = "thick solid red";
		this.style.backgroundColor = "yellow";

		$(this).click(function(){	
			document.documentElement.scrollTop += 20; //아래로 스크롤
		});

    }, function(){ // hover원상태로

		this.style.border = "thick solid black";
		this.style.backgroundColor = "";

  });
});



//icon8- '스크롤 반 페이지 위로'
$(document).ready(function(){
	$(document.documentElement.lastChild.previousSibling).hover(function(){
		
		this.style.border = "thick solid red";
		this.style.backgroundColor = "yellow";

		$(this).click(function(){
			document.documentElement.scrollTop -= 380; //위로 반페이지
		});

    }, function(){ // hover원상태로

		this.style.border = "thick solid black";
		this.style.backgroundColor = "";

  });
});

//icon9- '스크롤 반 페이지 아래로'
$(document).ready(function(){
	$(document.documentElement.lastChild).hover(function(){
		
		this.style.border = "thick solid red";
		this.style.backgroundColor = "yellow";

		$(this).click(function(){	
			document.documentElement.scrollTop += 380; //아래로 반페이지
		});

    }, function(){ // hover원상태로

		this.style.border = "thick solid black";
		this.style.backgroundColor = "";

  });
});

//총 자식 13개







// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ


 var twin;
 var s;
 var w,h;

$(document).ready(function(){ // Standard clickable or focusable HTML elements
   $(" a, button, select, textarea, keygen,     input ").hover(function(){ 
	  //strong, em, abbr, code, b, i, p,    iframe
	 

        //덮어씌워지는 태그는 효과줄 필요X.
	    $(this).css({ "position":"relative" });//원래의 실행객체가 이동하지 못하게 절대위치 줘버리기 
		


       twin = $(this).clone();

      $(twin).css({ "position":"absolute", "z-index":"2147483647", 
		             "top":"", "left":"", 
		             "background-color":"yellow", //"width":"100%", "height":"100%", 
                     "border-width":"4px", "border-color":"red", "border-style":"solid",
		             "font-size":"-1", 
					 "font-weight":"999",
		             "padding":"2px", //여백
	                 //"overflow":"hidden",
					 "transform":"scale(1.4)" //1.3
		          });"position":"absolute", "z-index":"2147483647", 
		             "top":"", "left":"", 
		             "background-color":"yellow", //"width":"100%", "height":"100%", 
                     "border-width":"4px", "border-color":"red", "border-style":"solid",
		             "font-size":"-1", 
					 "font-weight":"999",
		             "padding":"2px", //여백
	                 //"overflow":"hidden",
					 "transform":"scale(1.4)" //1.3
		          });

        w = $(this).width();
		h = $(this).height();
		
		twin.offset({ top: -h*0.20   ,   left: -w/20 });
		//https://webisfree.com/2014-09-07/[jquery]-절대좌표-및-상대좌표-확인-및-이동하기-offset()-position()

        $(this).prepend(twin);		



    }, function(){ //원상태로 돌아오는 부분.

	    $(twin).remove(); 
		$(this).css({ "position":"" }); //원래 그상태로 돌아오도록 만들기

  });
});










// <2>
// 더 보기좋게 메뉴판 탭인덱스
//$(document).ready(function(){ 
//  $("[tabindex]").hover(function(){ 
//
//    $(this).css({ "background-color":"orange", "width":"", "height":"",
//		          "border-width":"10px", "border-color":"orange", "border-style":"solid" });
//
//    }, function(){ //원상태로 돌아오는 부분
//
//         $(this).css({"background-color":"", "width":"", "height":"", 
//			       	  "border-width":"", "border-color":"", "border-style":"" });
//
//  });
//});


// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ




/*플러스 TEST*/
//세부 실행객체 찾는 과정.
//나중에 발견하면 적용하기
//$(document).ready(function(){ 
//	$("checkbox, link, menuitem, menuitemcheckbox, menuitemradio, option, radio, slider, tab, textbox, treeitem,    li").hover(function(){
//	 
//   $(this).css({ "background-color":"green", "width":"", "height":"",
//		          "border-width":"10px", "border-color":"red", "border-style":"solid" });
//
//    }, function(){ 
//
//         $(this).css({"background-color":"", "width":"", "height":"", 
//			       	  "border-width":"", "border-color":"", "border-style":"" });
//
//  });
//});



// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
