function bookingTicket (){
    var close_booking = document.getElementById("close_booking");
    var button_yes = document.getElementById("button_yes");

    close_booking.style.display ="block";
    TweenMax.to(".quick-booking-wrap",1,{         
        x:-300,                        
        ease:Power2.easeOut    
     })

      function closeBookingTicket(){
        close_booking.style.display ="none";
        TweenMax.to(".quick-booking-wrap",0.5,{          //設定 class為ball的物件,執行時間為5s,從x為500的位置.大小為0.5
        x:0,                        
        ease: Linear.easeOut    //ease為速度的設定值   ,Elastic~Power0~3~Back~Bounce~Rough~SlowMo~Steppped       ,linear~Ease in~Ease out~Ease in out
     })
     }

    button_yes.addEventListener("click",closeBookingTicket);
    close_booking.addEventListener("click",closeBookingTicket);

   }