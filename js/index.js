var operation; //var that will hold the entire operation
var empty = false; //var that will empty the divs accordingly
$('button').click(function(operation){
    if(empty){
      $(".operation").empty();
      $("current").empty();
      empty = false;
    }
  
    operation = $(this).html(); 
    
    if(operation == '='){
      var storage = +eval($('.operation').html()).toFixed(5);
      $('.operation').append("="+storage);
      $('.current').empty().append(storage);
      empty = true;
      return;
    }
  
    var check = $(".operation").html().split("");
  
    if(isNaN(operation) || !isNaN(operation) && isNaN(check[check.length-1])){
      $(".current").empty();
    }
  
    if(operation == "ac"){
      $(".operation").empty();
      $(".current").empty();
      return;
    }
  
    if(operation == "ce"){
      var temp = $(".operation").html();
      temp = temp.slice(0, -1);
      $(".operation").empty().append(temp);
      temp = $(".current").html();
      temp = temp.slice(0, -1);
      $(".current").empty().append(temp);
      return;
    }
  
    $('.current').append(operation);
    $('.operation').append(operation);
  }
);