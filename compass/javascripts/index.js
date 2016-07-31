/*
require('../stylesheets/style.css');
require('../stylesheets/sass/index.scss');*/
/*import 'http://127.0.0.1:9090/public/stylesheets/style.css';
import 'http://127.0.0.1:9090/public/stylesheets/sass/index.css';*/


$(function(){


    $(".collapse .nav li").hover(function(){
        var p = this.querySelector('p');
        $(p).css('width',$(this).css('width'));
    },function(){
        var p = this.querySelector('p');
        $(p).css('width',0);
    });

    //    给外容器赋值
    $("#banner").css('height',window.innerHeight);
    //  给子项目赋宽度值
    $('#bg_container .ft_item').css('width', $("#banner").css('width'));
    $('#bg_container .sd_item').css('width', $("#banner").css('width'));
    // 给大容器宽度值
    var bg_cont_width = document.body.clientWidth*2;
    $('#bg_container').css('width',bg_cont_width);
    //给第一个子项目的 第二部分 赋值高度
    var banner_list_height = parseInt($('.ft_item').css('height'))-parseInt($('.search').css('height'));
    $('#banner_list').css('height',banner_list_height);
  /* //两个背景赋值宽度
    $('.bg2').css('width',$('#banner').css('width'));
    //两个背景赋值宽度
    $('.bg3').css('width',$('#banner').css('width'));*/
    window.onresize= function () {
        $("#banner").css('height',window.innerHeight);
        $('#bg_container .ft_item').css('width', $("#banner").css('width'));
        $('#bg_container .sd_item').css('width', $("#banner").css('width'));
        banner_list_height = parseInt($('.ft_item').css('height'))-parseInt($('.search').css('height'));
        $('#banner_list').css('height',banner_list_height);
       /* $('.bg2').css('width',$('#banner').css('width'));
         $('.bg3').css('width',$('#banner').css('width'));*/
    }
    var flag = true;
    window.addEventListener('DOMMouseScroll', function (e) {
     // mousewheel(e);
    })
    window.addEventListener('mousewheel', function (e) {
       // mousewheel(e);

    })
    function mousewheel(e){
        if(flag){
            move(e);
            flag = false
        }else{
            setTimeout(function(){
                flag = true;
            },1000);
            return;
        }
    }

    function move(e){
        var e = e||window.event;
        if(e.wheelDelta){
            var delta = e.wheelDelta;
        }else{
            var delta = -e.detail;
        }
        var ft_item = document.querySelector('.ft_item');
            ft_item.style.transformOrigin ='50% 50%';
        //var delta = e.wheelDelta;
        if(delta <  0){
            var left = -parseInt($("#banner").css('width'));

           /* $('.ft_item').css('opacity',0);
            $('.sd_item').css('display','block').css('opacity',1);*/


            //ft_item.style.transform = 'rotate(90deg)';/* skew(90deg,00deg)*/

            $('#bg_container').css('left',left);
            $('.sd_item').css('display','block').css('opacity',1);
          /*  setTimeout(function(){
                ft_item.style.transform = 'rotate(0deg)';
            },2000)*/

        }
        if(delta >  0){
            $('#bg_container').css('left',0);
           // ft_item.style.transform = 'rotate(0deg) ';/*skew(-45deg,00deg)*/
            $('.sd_item').css('opacity',0);
            setTimeout(function () {
                $('.sd_item').css('display','none');
            },1000)
        }
    }
    //生成10个星星
    makeStar('.star',20);
    function makeStar(ele,num){
        var ele =document.querySelector(ele);
        for(var i=0;i<num;i++){
            createLi(ele);
        }
    }
    function createLi(ele){
        var li = document.createElement('li');

        li.style.width = parseInt(Math.random()*10+10)+'px';
        li.style.height = li.style.width;
        li.style.top = Math.random()*1000-200+'px';
        li.style.left = Math.random()*1800-200+'px';
        li.style.animation = 'star '+parseInt(Math.random()*5+2)+'s '+'infinite both';
        li.style.transform = 'translateZ('+Math.random()*1000-1000+'px)';
        ele.appendChild(li);
    }
    //流星

    //    使用canvas制云彩浮动效果
  /*  cloud()*/
  function cloud(){
      var banCanvas = document.getElementById('ban-canvas');
      var height = banCanvas.width = banCanvas.style.width;
      var width =  banCanvas.height = banCanvas.style.height;
      var context = banCanvas.getContext('2d');
  //    设置图像透明度
      context.globalAlpha = 0.8;
  //    设置图像重叠方式
      context.globalCompositeOperation = 'destinaion-atop';
  //    获取云彩图片
    var img = new Image();
        img.src = 'images/wuyun1.png';
        img.onload = function(){
        //    将云彩画到画布上
            drawCloud(context,img)
        }
      function drawCloud(context,img){
          imgHeight = img.height;
          imgWidth = img.width;
          console.log(imgHeight)
          console.log(imgWidth)
          context.drawImage(img,0,0,imgWidth,imgHeight);
         /* context.save();
          context.translate(0,0);*/

      }

  }


})































