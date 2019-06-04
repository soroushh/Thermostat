$(document).ready(function() {
  var thermostat = new Thermostat();
  $("#temperature").text(thermostat.degree);
  $("#temperature-up").on('click',function(){
    thermostat.up();
    $("#temperature").text(thermostat.degree);
  });
  $("#temperature-down").on('click',function(){
    thermostat.down();
    $("#temperature").text(thermostat.degree);
  });
  $("#powersaving-off").on('click',function(){
    thermostat.turnOff();
    $("#temperature").text(thermostat.degree);
    $("#power-saving-status").text("off")
  });
  $("#powersaving-on").on('click',function(){
    thermostat.turnOn();
    $("#power-saving-status").text("on")
    $("#temperature").text(thermostat.degree)
  });

  $("#temperature-reset").on('click',function(){
    thermostat.reset();
    $("#temperature").text(thermostat.degree);
  });
  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp)
    });
 });
});
