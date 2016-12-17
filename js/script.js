$(document).ready(function(){
   $(".searchBtn a").click(function(){
      $(".searchBar").slideToggle("fast");
   });

   $(".actionMenu li a").click(function(){
       $(".actionMenu li a").removeClass("active");
       $(".pinSpecification .tabs").slideUp("fast").removeClass("openUp");

       var idSplit = $(this).parent().attr("id").split("-");
       var id = idSplit[1];
       var outerHeight = $("body").height();
       var bottomSpace = outerHeight - $(this).offset().top;
       //alert(bottomSpace);
        if($("#tab-"+id).length==1){
            $(this).addClass("active");
            if(bottomSpace<250){
                $("#tab-"+id).addClass("openUp");
            }
            $(".pinSpecification .tabs").slideUp("fast");
            $("#tab-"+id).slideDown("fast");
        }
   });



});
