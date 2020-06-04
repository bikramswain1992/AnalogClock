function setClock(e,settings){
    settings = setDefault(settings);
    $(e).css({"padding": "20px" });
    $(e).css({"display": "flex" });
    $(e).css({"justify-content": "center" });
    $(e).css({"align-items": "center" });
    $(e).css({"background": settings.backgroundColor });
    $(e).append('<div class="clock"><div class="hour"><div class="hr"></div></div><div class="min"><div class="mn"></div></div><div class="sec"><div class="sc"></div></div></div>');
    setElements(e,settings)
    var deg = 6;
    var hr = $(e).find('.hr');
    var mn = $(e).find('.mn');
    var sc = $(e).find('.sc');
    setInterval(function(){
        var day = new Date();
        var hh = day.getHours() * 30;
        var mm = day.getMinutes() * deg;
        var ss = day.getSeconds() * deg;

        hr.css({'transform' : `rotateZ(${(hh)+(mm/12)}deg)`});
        mn.css({'transform' : `rotateZ(${mm}deg)`});
        sc.css({'transform' : `rotateZ(${ss}deg)`});
    });
}

function setElements(e,settings){
    var size = settings.clockSize;
    var hourHandColor = settings.hourHandColor;
    var minHandColor = settings.minHandColor;
    var secHandColor = settings.secHandColor;
    var clockCenterColor = settings.clockCenterColor;
    var clockBefore = 15/350;
    var hourOverall = 160/350;
    var minOverall = 190/350;
    var secOverall = 230/350;
    var hourHandHeight = 80/350;
    var hourHandWidth = 8/350;
    var minHandHeight = 90/350;
    var minHandWidth = 4/350;
    var secHandHeight = 150/350;
    var secHandWidth = 2/350;
    $(e).find('.clock').css({'width':size});
    $(e).find('.clock').css({'height':size});
    
    $(e).find('.clock').css({'border': '4px solid '+settings.backgroundColor});
    $(e).find('.clock').css({'box-shadow': settings.clockBorder});
    
    $(e).find('.clock').append("<div style=\"position: absolute;"+
        "width: "+clockBefore*size+"px;"+
        "height: "+clockBefore*size+"px;"+
        "background: "+clockCenterColor+";"+
        "border-radius: 50%;"+
        "z-index: 10000;"+
    "\"></div>");
    $(e).find('.clock .hour .hr').css({'width':hourOverall*size});
    $(e).find('.clock .hour .hr').css({'height':hourOverall*size});
    $(e).find('.clock .min .mn').css({'width':minOverall*size});
    $(e).find('.clock .min .mn').css({'height':minOverall*size});
    $(e).find('.clock .sec .sc').css({'width':secOverall*size});
    $(e).find('.clock .sec .sc').css({'height':secOverall*size});
    $(e).find('.clock .hour .hr').append("<div style=\"position: absolute;"+
        "width: "+(hourHandWidth*size)+"px;"+
        "height: "+(hourHandHeight*size)+"px;"+
        "background: "+hourHandColor+";"+
        "z-index: 10;"+
        "border-radius: 6px 6px 0 0 ;"+
    "\"></div>");
    $(e).find('.clock .min .mn').append("<div style=\"position: absolute;"+
            "width: "+(minHandWidth*size)+"px;"+
            "height: "+(minHandHeight*size)+"px;"+
            "background: "+minHandColor+";"+
            "z-index: 10;"+
            "border-radius: 6px 6px 0 0 ;"+
            "\"></div>");
    $(e).find('.clock .sec .sc').append("<div style=\"position: absolute;"+
        "width: "+(secHandWidth*size)+"px;"+
        "height: "+(secHandHeight*size)+"px;"+
        "background: "+secHandColor+";"+
        "z-index: 10;"+
        "border-radius: 6px 6px 0 0 ;"+
    "\"></div>");
}

function setDefault(s){
    if(typeof s == 'undefined'){
        s = {
            backgroundColor : "#091921",
            clockSize : 350,
            hourHandColor : "#ff105e",
            minHandColor : '#2c76e6',
            secHandColor : '#fff',
            clockCenterColor : '#fff',
            clockBorder : '0 -15px 15px rgba(255,255,255,0.05),inset 0 -15px 15px rgba(0,0,0,0.05),0 15px 15px rgba(0,0,0,0.3),inset 0 15px 15px rgba(0,0,0,0.3)'
        }
    }
    else{
        if(typeof s.backgroundColor == 'undefined'){
            s.backgroundColor = "#091921";
        }
    
        if(typeof s.clockSize == 'undefined'){
            s.clockSize = 350;
        }
    
        if(typeof s.hourHandColor == 'undefined'){
            s.hourHandColor = "#ff105e";
        }
    
        if(typeof s.minHandColor == 'undefined'){
            s.minHandColor = '#2c76e6';
        }
    
        if(typeof s.secHandColor == 'undefined'){
            s.secHandColor = '#fff';
        }
    
        if(typeof s.clockCenterColor == 'undefined'){
            s.clockCenterColor = '#fff';
        }

        if(typeof s.clockBorder == 'undefined'){
            s.clockBorder = '0 -15px 15px rgba(255,255,255,0.05),inset 0 -15px 15px rgba(0,0,0,0.05),0 15px 15px rgba(0,0,0,0.3),inset 0 15px 15px rgba(0,0,0,0.3)';
        }
    }
    
    return s;
}