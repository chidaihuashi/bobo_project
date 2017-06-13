//轮播图
var banner_width=document.documentElement.offsetWidth;
var img=document.getElementsByClassName('banner_img_content');
for (var i = 0; i < img.length; i++) {
	img[i].style.width=banner_width+"px";
}
function aaa(){
	$(".banner_position").fadeIn(2000);
	$(".p1").animate({width:'560px'},4000,function(){
		$(".p2").animate({padding:"45px 0 0 0"},600);
	});
	
	
	$('.carousel-indicators li').on("click",bobo);
	$('.carousel-control').on("click",bobo);
}
aaa();
function bobo(){
	$(".p1").css("width",'0px');
	$(".p2").hide().animate({padding:"300px 0 0 0"},0);
	$(".p1").animate({width:'560px'},4000,function(){
		$(".p2").show().animate({padding:"45px 0 0 0"},600);
	});

	$(".banner_position").fadeOut(function(){
		$(".banner_position").fadeIn(2000);
	});	
}
//导航条消失隐藏
$(window).scroll(function(){
        var sc=$(window).scrollTop();
        if(sc>562){
            $(".toTop").css("display","block");
        }else{
            $(".toTop").css("display","none");
        }
    });
//  返回顶部
    $(".toTop_top").click(function(){
        $('body,html').animate({scrollTop:0},500);
    });
//信息跳转 
$('.toTop_xinXi').on('click',function(){
	window.location.href="LianXiWoMen.html";
});
//微信二维码,飞入飞出动画
var teg=true;
$('.toTop_weiXin').on('click',function(){
	if (teg) {
		$('.toTop_weiXin_ewm').animate({right:36},500);
		teg=false;
		
	}else{
		$('.toTop_weiXin_ewm').animate({right:-126},500);
		teg=true;
	}
	
});
//电话号码飞入飞出
var teg2=true;
$('.toTop_dianHua').on('click',function(){
	if (teg2) {
		$('.toTop_dianHua_num').animate({right:46},500);
		teg2=false;
		
	}else{
		$('.toTop_dianHua_num').animate({right:-126},500);
		teg2=true;
	}	
});

var src_h=document.documentElement.clientHeight;
$(window).scroll(function(){
	if($(window).scrollTop()>src_h-100){
            $(".position_titie").show();
            if($(window).scrollTop()>=src_h-87 && $(window).scrollTop()<src_h*2-87*2){
            	$('.position_titie_fuwu').animate({width:140},20);
            	$('.position_titie_fuwu').addClass('position_titie_style');
            	$('.position_titie_hangye').animate({width:77},20);
            	$('.position_titie_anli').animate({width:77},20);
            	$('.position_titie_hangye').removeClass('position_titie_style');
            	$('.position_titie_anli').removeClass('position_titie_style');
            }
            if($(window).scrollTop()>=src_h*2-87*2 && $(window).scrollTop()<src_h*3-87*3){
            	$('.position_titie_hangye').animate({width:140},20);
            	$('.position_titie_hangye').addClass('position_titie_style');
            	$('.position_titie_fuwu').animate({width:77},20);
            	$('.position_titie_fuwu').removeClass('position_titie_style');
            	$('.position_titie_anli').animate({width:77},20);
            	$('.position_titie_anli').removeClass('position_titie_style');
            }
            if($(window).scrollTop()>src_h*3-87*3){
            	$('.position_titie_anli').animate({width:140},20);
            	$('.position_titie_anli').addClass('position_titie_style');
            	$('.position_titie_hangye').removeClass('position_titie_style');
            	$('.position_titie_fuwu').removeClass('position_titie_style');
            	$('.position_titie_hangye').animate({width:77},20);
            	$('.position_titie_fuwu').animate({width:77},20);
            }
        }else{
            $(".position_titie").hide();
        }
});
$('.position_titie_fuwu').on('click',function(){
	 $('body,html').animate({scrollTop:src_h},500);
});
$('.position_titie_hangye').on('click',function(){
	 $('body,html').animate({scrollTop:src_h*2-36},500);
});
$('.position_titie_anli').on('click',function(){
	 $('body,html').animate({scrollTop:src_h*3-87},500);
})
var abc=$('.bo_hangye_icon').width();
//成功案例tab切换
var switch_word = document.getElementsByClassName('switch_word');
var succeed_switch_photo= document.getElementsByClassName('succeed_switch_photo');
for (var i=0;i<switch_word.length;i++) {
	switch_word[i].a = i ;
	switch_word[i].onmousemove = function  () {
		for (var j= 0 ;j<switch_word.length;j++) {
			switch_word[j].className = 'switch_word';
			succeed_switch_photo[j].className = 'succeed_switch_photo hide';
			if (this.a==j) {
				switch_word[j].className = "switch_word switch_word_color"
				succeed_switch_photo[j].className = 'succeed_switch_photo';
			}
		}
	}
}

//合作企业tab切换
var partner_btn = document.getElementsByClassName('partner_btn');
var partner= document.getElementsByClassName('partner');
for (var i=0;i<partner_btn.length;i++) {
	partner_btn[i].a = i ;
	partner_btn[i].onmousemove = function  () {
		for (var j= 0 ;j<partner_btn.length;j++) {
			partner_btn[j].className = 'partner_btn';
			partner[j].className = 'partner hide';
			if (this.a==j) {
				partner_btn[j].className = "partner_btn partner_btn_color"
				partner[j].className = 'partner';
			}
		}
	}
}

//完美体验tab切换
//完美体验tab切换
var experience_partner_btn = document.getElementsByClassName('experience_partner_btn');
var experience_perfect= document.getElementsByClassName('experience_perfect');
for (var i=0;i<experience_partner_btn.length;i++) {
	experience_partner_btn[i].a = i ;
	experience_partner_btn[i].onmousemove = function  () {
		for (var j= 0 ;j<experience_partner_btn.length;j++) {
			experience_partner_btn[j].className = 'experience_partner_btn';
			experience_perfect[j].className = 'experience_perfect hide';
			if (this.a==j) {
				experience_partner_btn[j].className = "experience_partner_btn partner_btn_color"
				experience_perfect[j].className = 'experience_perfect';
			}
		}
	}
}



//企业申请tab切换
var project_tab = document.getElementsByClassName('project_tab');
var project_height_line= document.getElementsByClassName('project_height_line');
var project_content = document.getElementsByClassName('project_content');
for (var i=0;i<project_tab.length;i++) {
	project_tab[i].a = i ;
	project_tab[i].onmousemove = function  () {
		for (var j= 0 ;j<project_tab.length;j++) {
			if (this.a==j) {
				project_tab[j].style.backgroundColor="#5a7392"
				project_tab[j].style.backgroundImage = 'url(image/project_tab_photo'+(1+j)+'.png)';
				project_height_line[j].style.backgroundColor='#5a7392';
				project_content[j].className='project_content';
			}else{
				project_tab[j].style.backgroundImage = 'url(image/project_tab_photo'+(11+j)+'.png)';
				project_tab[j].style.backgroundColor="#f6f6f6";
				project_height_line[j].style.backgroundColor='#f6f6f6';
				project_content[j].className='project_content hide';
			}
		}
	}
}
var xxxx=true;
$('.rigou').on('click',function () {
	if (xxxx) {
		$('.bobobo_dis').show();
		xxxx=false;
	}else{
		$('.bobobo_dis').hide();
		xxxx=true;
	};
});
//兼容完整处理 通过浏览器判断
var browser = window.navigator.userAgent.toLowerCase().indexOf('firefox');
if (browser != -1) {
//处理火狐滚轮事件
document.addEventListener('DOMMouseScroll', function(){
alert('火狐兼容的滚轮事件');
})
} else {
//其他浏览器
document.onmousewheel =function(){
	// console.log(document.body.scrollTop);
	opct();
	}
}
function opct() {
	if (document.body.scrollTop == 0) {
		$('nav').css('backgroundColor','#fff');
		$('nav').css('opacity','1');
	}else {
		$('nav').css('backgroundColor','#dcdcdc');
		$('nav').css('opacity','.8');
	}
}