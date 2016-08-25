$('.tabOne').click(function() {
	    $('a.switch').removeClass("activeTab");
	   	$(this).addClass("activeTab");
      $("#tabOne").show();
      $("#tabTwo").hide();
      $("#tabThree").hide();
      $("#tabFour").hide();
      $("#tabFive").hide();
      event.preventDefault();
	});
  
$('.tabTwo').click(function() {
	    $('a.switch').removeClass("activeTab");
	   	$(this).addClass("activeTab");
      $("#tabOne").hide();
      $("#tabTwo").show()
      $("#tabThree").hide();
      $("#tabFour").hide();
      $("#tabFive").hide();
      event.preventDefault();
	});
  
$('.tabThree').click(function() {
	    $('a.switch').removeClass("activeTab");
	   	$(this).addClass("activeTab");
      $("#tabOne").hide();
      $("#tabTwo").hide();
      $("#tabThree").show();
      $("#tabFour").hide();
      $("#tabFive").hide();
      event.preventDefault();
	});
  
$('.tabFour').click(function() {
	    $('a.switch').removeClass("activeTab");
	   	$(this).addClass("activeTab");
      $("#tabOne").hide();
      $("#tabTwo").hide();
      $("#tabThree").hide();
      $("#tabFour").show();
      $("#tabFive").hide();
      event.preventDefault();
	});

$('.tabFive').click(function() {
  $('a.switch').removeClass("activeTab");
  $(this).addClass("activeTab");
  $("#tabOne").hide();
  $("#tabTwo").hide();
  $("#tabThree").hide();
  $("#tabFour").hide();
  $("#tabFive").show();
  event.preventDefault();
});