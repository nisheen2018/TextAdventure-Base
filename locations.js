function Locations (name, descripton, items) {
    this.name = name
    this.description = description
    this.items = []
 }
function connect(map, from, to) {
    map.connections[from][to] = 1;
    map.connections[to][from] = 1;
}
function disconnect(map, from, to) {
    map.connections[from][to] = 0;
    map.connections[to][from] = 0;

var map = {
    locations: [
        new Location("Central Park", " You end up in the most recreational Area Of NYC",)
        new Location ("Times Square", "You see shining lights everywhere in the most toured place in NYc")
        new Location("Grand Central Terminal", " You get off a train")
        new Location("Deli Shop", "You enter the shop to buy a map of the city to find your way back.")
        new Location("Underground tunnel", "You find yourself roaming aroung the tunnel to find any other patheays.")
        new Location("Bus Stop", "You sneak inside the bus to hitch a ride to get to downtown.")
    ],
    
    var connections = [
       [0,0,0,0,0,0]
       [0,0,0,0,0,0]
       [0,0,0,0,0,0]
       [0,0,0,0,0,0]
       [0,0,0,0,0,0]
       [0,0,0,0,0,0]
    ]
connect(map, 0, 1);
connect(map, 1, 2);
connect(map, 2, 0);
connect(map, 0, 3);
connect(map, 2, 0);
connect(map, 3, 1);

function testMap() {
    var m;
    console.log("The " + map.locations[0].name + " is adjacent to:");
    for (m in map.connections[0]) {
         if (map.connections[0][j] === 1) {
             console.log(" the " + map.locations[j].name);
         }
    }
}
testMap();

var desiredLocation = prompt ("Where do you want to go?")
  if (adjMatrix [player.location][desiredLocation] === 1) {
     player.location = desiredLocation
 }else{
    alert ("I'm sorry but you are not permitted to enter there!"); 
}

    
