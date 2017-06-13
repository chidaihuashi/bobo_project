//
//var jhj_btn = document.getElementsByClassName('jhj_btn');
//var banner_show= document.getElementsByClassName('banner_show');
//var banner_img = document.getElementsByClassName("advange_img");
//for (var i=0;i<jhj_btn.length;i++) {
//	jhj_btn[i].cla = i ;
//	jhj_btn[i].onmousemove = function  () {
//		for (var j= 0 ;j<jhj_btn.length;j++) {
//			banner_img[j].className = 'advange_img img_hide';
//			jhj_btn[j].className = 'jhj_btn';
//			if (this.cla==j) {
//				banner_img[j].className = "advange_img"
//				jhj_btn[j].className = 'jhj_btn new';
//			}
//		}
//	}
//}
//var cultura_1 = document.getElementsByClassName("cultura_1");
//var mask = document.getElementsByClassName("mask");
//var told = document.getElementsByClassName("told");
//cultura_1[0].onmousemove = function  () {
//	mask[0].style.display = "none";
//	told[0].style.display = "block";
//}
//cultura_1[0].onmouseout = function  () {
//	mask[0].style.display = "block";
//	told[0].style.display = "none";
//}
//cultura_1[1].onmousemove = function  () {
//	mask[1].style.display = "none";
//	told[1].style.display = "block";
//}
//cultura_1[1].onmouseout = function  () {
//	mask[1].style.display = "block";
//	told[1].style.display = "none";
//}
//cultura_1[2].onmousemove = function  () {
//	mask[2].style.display = "none";
//	told[2].style.display = "block";
//}
//cultura_1[2].onmouseout = function  () {
//	mask[2].style.display = "block";
//	told[2].style.display = "none";
//}
//轮播图
//console.log($(".advange_img").eq(0).offsetWidth);
var aaa=document.getElementsByClassName('advange_img');
var jhj_banner=document.getElementsByClassName('jhj_banner');

//alert(9);
//$('.jhj_banner').css('overflow','scroll');
var xx=0
var time=null;

//function aaa(){
		time_a = setInterval(function(){
		xx+=2;
		if (xx%50 == 0) {
			clearInterval(time_a);
			setTimeout(function(){
			},1500);
		}
		jhj_banner[0].scrollLeft += xx;
	},10);
	
//}

//aaa();


