$(document).ready(function(){
  $("#stress").submit(function(event){
    event.preventDefault();
    var userResponse = [];
    var wsCount = 0;
    var hsCount = 0;
    $("input:checkbox[name=warningsigns]:checked").each(function(){
       wsCount += 1;
    });
    $("input:checkbox[name=health-symptoms]:checked").each(function(){
       hsCount += 1;
    });

    if (wsCount >= 1)
    {
      $(".ws-result").show();
    }
    if (hsCount >= 1)
    {
      $(".ls-result").show();
    }
  });
});
