/**
 *	jQuery preload.
 *	jQuery required.
 *	
 *	* Copyright 2013 (c) kamem
 *	* http://develo.org/
 *	* Licensed Under the MIT.
 *	
 *	Date: 2013.12.30
 */
!function(a){a.fn.preload=function(b){function c(b,c){for(var d=0;d<b.length;d++)a("<img>").attr("src",b[d]).load(function(a){b.splice(0,1),c(p,p-b.length,a)})}for(var d=a.extend({imgs:[],loadFunction:"",onComplete:"",timer:!1,timerSpeed:0},b),e=d.imgs,f=d.onComplete,g=d.loadFunction,h=d.timer,i=d.timerSpeed,j=0,k=0,l={percent:[],img:[]},m=0,n=[],o=0;o<d.imgs.length;o++)e[o]=d.imgs[o],n[o]=d.imgs[o];var p=e.length;if(c(e,function(b,c,d){j=Math.ceil(100*c/b),l.percent.push(j),l.img.push(a(d.currentTarget)[0].src),h||(k=j),c>=b?""==f||h||f({img:a(d.currentTarget)[0].src,imgs:n,percent:k,num:c,aryNum:a.inArray(a(d.currentTarget)[0].src,n)}):""==g||h||g({img:a(d.currentTarget)[0].src,percent:k,num:c,aryNum:a.inArray(a(d.currentTarget)[0].src,n)})}),h)var h=setInterval(function(){k>=100?(clearInterval(h),f({img:l.img[m],imgs:n,percent:k,num:m+1,aryNum:a.inArray(l.img[m],n)})):j>k&&(k!==l.percent[m]?(k++,g({percent:k,num:m})):(k++,g({img:l.img[m],percent:k,num:m+1,aryNum:a.inArray(l.img[m],n)}),m++))},i)}}(jQuery,this);