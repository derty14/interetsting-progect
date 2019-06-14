//img
var img= {
  "timeout": 0,
  url:'https://pokeapi.co/api/v2/pokemon/1/',
  type:'GET',
  dataType: 'json',
}
$.ajax(img).done(function (res) {
  $("#image").append("<img src='"+res["sprites"]["front_default"]+"'> <img src='"+res["sprites"]["back_default"]+"'> <img src='"+res["sprites"]["front_shiny"]+"'> <img src='"+res["sprites"]["back_shiny"]+"'>");
})
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
//hearthstone
var hs= {
  "timeout": 0,
  url:'https://omgvamp-hearthstone-v1.p.mashape.com/cards/Ysera',
  type:'GET',
  dataType: 'json',
  beforeSend: function(xhr) {
      xhr.setRequestHeader("X-RapidAPI-Host", "omgvamp-hearthstone-v1.p.rapidapi.com"),
      xhr.setRequestHeader("X-RapidAPI-Key", "cd621808admsh2aaba6c4758eccfp135912jsn7d549f1bc4a2")
  }
}
$.ajax(hs).done(function (res) {
  $("#hearthstone").append("<h2>"+ res[0]["name"]+"</h2> <br> <img src='"+res[0]["imgGold"]+"'> <br> <h2>Статы</h2> <p>Атака: "+res[0]["attack"]+", Здоровье: "+ res[0]["health"]+", Редкость: "+res[0]["rarity"]+"</p>")
})
