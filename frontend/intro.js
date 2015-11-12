$(document).ready(function() { 
    
    $("aside" ).hide( "slow", function() {
        $(this).slideDown("slow");
    })
    
    $("h5,h6").fadeTo("slow", 0.33);
   
    $("h5,h6").hover(function () {
        $(this).fadeTo("slow", 1);
    }, function() {
        $(this).fadeTo("slow", 0.33);       
    });
    
    $("section").click(function() {
        $(this).animate({"font-size":"2em"}, "fast");
    }, function(event) {
        $(this).animate({"font-size":"1.1em"}, "fast");
    })
    
    $("section").hover(function() {
        $(this).css("background-color","#AADAE6");
    }, function() {
        $(this).css("background-color","#50C0DC");
    });
    $("td").on("mouseenter", enterSect);
    $("td").on("mouseleave", leaveSect);
    function enterSect() {
        $(this).css("background-color","#A1C9C7");
        $(this).css("color","white");
    }
    function leaveSect() {
        $(this).css("background-color","white");
        $(this).css("color","#414755");
    }
    $("td").click(function() {
        $(this).off( "mouseenter mouseleave" );
        $(this).css("border", "3px groove  white");
    });
    $("div.button").on("click", function(e) {
        $(this).toggle("slow");
    }, function() {
        $(this).text("saman_mov@yahoo.com");
        $(this).toggleClass("email"); //email är en stil i css
    })  

});
