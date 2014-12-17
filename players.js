
var player = {
  name: "Mat",
  location: null,
  items: [],
  Age: 7,
  role: "lost boy"
  hasBusPass: false
  hasMoney: true
  hasKeys: true
  hasSnacks: false
 }
 
 var items = ["City Map", "Money", "Keys", "Bottle", "Snacks", "BusPass"]
 
 function takeItem ( )
    var itemIndexNumber = items.indexOf(item),
    if (itemIndexItem !== 1
    && locations[itemIndexNumber === mapLocation] {
      gameMessage = "You take the" + item + " " ;
      
      items.splice (itemIndexNumber, 1)
      Locations.splice (itemUndexNumber, 1)
    } else {
      gameMessage = "You can't do that.";    
      
    }
    switch (item) {
      case "City Map"
      if (mapLocation = 1) {
        gameMessage = "You will use this map to find your way to the city"
      } else {
        gameMessage = " Don't forget to pick up the city map"
      } break;
       case "Money"
       if (mapLocation =2) {
          gameMessage = "You will need money to get on the bus and for deli shop"
       } break;
       
    }
