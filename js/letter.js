$(document).ready(function() {
  $("#survey form").submit(function(event) {
    var nameInput = $("input#name").val();
    var streetInput = $("input#street").val();
    var cityInput = $("input#city").val();
    var numberInput= $("input#number").val();

    $(".name").text(nameInput);
    $(".street").text(streetInput);
    $(".city").text(cityInput);
    $(".number").text(numberInput);

    $("#survey").hide();
    $("#letter").show();

    event.preventDefault();
  });
});
