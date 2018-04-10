var s = skrollr.init();
$(window).scroll(function(evt){
   if($(window).scrollTop()>0)
      $(".navbar").removeClass("navbar-top");
   else
      $(".navbar").addClass("navbar-top");
});

function toggleIcon(e) {
  $(e.target)
      .prev('.panel-heading')
      .find(".more-less")
      .toggleClass('glyphicon-plus glyphicon-minus');
}
 $('.panel-group').on('hidden.bs.collapse', toggleIcon);
 $('.panel-group').on('shown.bs.collapse', toggleIcon);