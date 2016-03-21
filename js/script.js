//TeddyFrost©
//if you want to use this code please contact me : r2d2f9@gmail.com
//using this code without contact me is a theft!
var	mx = 0,my = 0,
		maxx = $(window).width(),maxy = $(window).height(),
		x = maxx/2,y = maxy/2,
		angl,
		kl = false,kr = false,kt = false,kb = false,speed = 10,
		pang = 0,
		rmb = false;//right mouse button
var start = function(){//main function
ppos(x,y);
size();
$(window).resize(function(){size();});
$(document).mousemove(function(event){
	mx = event.pageX;
	my = event.pageY;
	$('#canon').css('transform','rotateZ('+ang((x-mx)+53,(y-my)+50)+'deg)');
});
$(document).click(function(){
	shoot();
});
$(document).on( "contextmenu",function(){
	return false;
});
$(window).on('keydown',function(event){
	console.log(event.which );
	 if (event.which == 37){
		kl = true;
	}if (event.which == 39){
		kr = true;
	}if (event.which == 38){
		kt = true;
	}if (event.which == 40){
		kb = true;
	}if (event.which == 82){
		$('#bulets').html('');
	}if (event.which == 32){
		switch(rmb){
			case false:rmb =true;setTimeout(function(){shoot();},200);break;
			case true:rmb =false;break;
		}
	}
});
$(window).on('keyup',function(event){
	 if (event.which == 37){
		kl = false;
	}if (event.which == 39){
		kr = false;
	}if (event.which == 38){
		kt = false;
	}if (event.which == 40){
		kb = false;
	}
});
$('#ab-click').click(function(){
	$('#about').toggleClass('show');
});
$('#ab-close').click(function(){
	$('#about').toggleClass('show');
});
}//end main function
setInterval(function(){
	if(kl == true||kr == true||kt == true||kb == true){
		if(kl == true && x>-20){
			x-=speed;
			ppos(x,y);
			plang(180);
		}
		if(kr == true && x<maxx-90){
			x+=speed;
			ppos(x,y);
			plang(0);
		}
		if(kt == true && y>-20){
			y-=speed;
			ppos(x,y);
			plang(90);
		}
		if(kb == true && y<maxy-80){
			y+=speed;
			ppos(x,y);
			plang(270);
		}
	}
},40);
ppos = function(x,y){
	$('#player').css('left',(x+25)+'px').css('top',(y-25)+'px');
}
ang = function(dx,dy){//compare angle of canon
	var ang;
	if(dx>=0 && dy>0){
		 ang = 180+Math.round(90/((dx/dy)+1));
	}else if(dx < 0){
		if(dy > 0){
			ang =  Math.round(90/((dx/dy)-1));
		}else{
			ang =  Math.round(90/((dx/dy)+1));
		}
	}else{
		ang =  180+Math.round(90/((dx/dy)-1));
	}
	angl = ang;
	return ang;
}
plang = function(a){
	pang = a;
	$('#pbody').css('transform','rotateZ('+pang+'deg)');
}
bulet = function(x,y,a){
	$(this).css('left',x+'px').css('top',y+'px').css('transform','rotateZ('+a+'deg)');
}
fly = function(el){

	$(el).hide();
}
size = function(){
	$('#ab-click').css('left',maxx-80).css('top',40);
	$('#about').css('width',maxx-40).css('height',maxy-90).css('left',20).css('top',20);
	$('#ab-close').css('left',maxx-80).css('top',40);
}
shoot = function(){
	k = (mx-x)/(my-y)
	//bscr = 'bulet('+x+','+y+','+angl+')';
	bscr = "setTimeout(function(){$('#b-'+("+$('.bulet').length+")).css('margin-left','"+((mx-x)-50)+"px').css('margin-top','"+((my-y)-50)+"px'),100})";
	bulet = '<div id="b-'+$(".bulet").length+'" class="bulet"><script>'+bscr+'</script><div class="petal pet1"></div><div class="petal pet2"></div><div class="petal pet3"></div><div class="petal pet4"></div><div class="petal pet5"></div></div>';
	$('#bulets').append(bulet);
	$('#b-'+($(".bulet").length-1)).css('left',(x+50)+'px').css('top',(y+50)+'px').css('transform','rotateZ('+angl+'deg)');
	if(rmb == true){
		setTimeout(function(){
			shoot();
		},100);
	}
}
$(document).ready(function(){start()});