//rocket
var rocket = {
  url: "https://api.spacexdata.com/v3/capsules",
  "method": "GET",
  "timeout": 0
};
$.ajax(rocket).done(function (response) {

  for (var i=0;i<response.length;i++){
    $("#rockets").append("<span style='font-size: 10px;'> Id капсулы: "+ response[i]['capsule_id'] + " Код запуска: "+ response[i]['original_launch_unix']+" Дата запуска: " + response[i]['original_launch'] +"</span></br>");
  }

});
//pockemon
var pockemon = {
  url: "https://pokeapi.co/api/v2/pokemon/1/",
  "method": "GET",
  "timeout": 0
};
$.ajax(pockemon).done(function (response) {
    $("#pockemon").append("<h2>"+ response["name"]+"</h2><p>Базовые характеристики: "+response["stats"]["0"]["base_stat"]+"</p>")
});
