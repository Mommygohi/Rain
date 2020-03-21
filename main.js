var color = [
  "white", "#2d62b3", "#317ef5", "#bfd6f6",
  "#8dbdff", "#64a1f4", "#4a91f2", "#3b7dd8"
];
var locations = [];

function setup(){
  for(i = 0; i < 1000; i++){
    var randColor = Math.floor(Math.random() * 8);
    var randLeft = (Math.random() * 99) + 0.25;
    var randTop = (Math.random() * 90) + 0.5;
    //Create Id
    var id = "drop" + i;
    //Create Raindrop With Id
    var div = document.createElement("DIV");
    div.setAttribute("id", id);
    document.body.appendChild(div);

    //Give New Raindrop Randomly Chosen Color And Start Position
    document.querySelector("#" + id).style.backgroundColor = color[randColor];
    document.querySelector("#" + id).style.left = randLeft + "%";
    document.querySelector("#" + id).style.top = randTop + "%";
    locations.push(randTop);
  }
  window.setInterval(function(){
    for(i = 0; i < 1000; i++){
      if(locations[i] < 100){
        locations[i] += Math.random() * 500;
      } else {
        locations[i] -= Math.random() * 500;
      }
      document.querySelector("#drop" + i).style.top = locations[i] + "%";
    }
  },10);
}
