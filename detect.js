function isFacebookApp() {
        var ua = navigator.userAgent || navigator.vendor || window.opera;
        return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
    } 
    if(isFacebookApp()){
         // fade in notice bar when detect Facebook in-app browser
          $('#susu-fb-inapp').fadeIn();
         // fade out notice bar when user press OK
          $('#susu-fb-inapp').on('click', function(event) {
              $('#susu-fb-inapp').fadeOut();   
          });
    }