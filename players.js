
var player = {
  name: "Mat",
  location: null,
  items: [],
  Age: 7,
  role: "lost boy"
  hasBusPass: true
  hasMoney: true
  hasKeys: true
  hasSnacks: false
 }
 
 var items = ["City Map", "Money", "Keys", "Bottle", "Snacks", "BusPass"]
 player.pickUp = function (item) {
   this.items.push (item);
 },
 
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
    
    player.drop = function(item) {
    var pos = this.items.indexOf(item);
    if (pos >= 0) {
        this.items.splice(pos, 1);
    } else {
        alert ("You don't have the item")
    }
};
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
       case "Keys"
       if (mapLocation = 3) {
         gameMessage = "Use the keys to unlock the secret door"
       } break;
       case "Bottle"
       if (mapLocation = 4) {
         gameMessage = "Use the bottle to fill up water and reboost your energy"
       } break;
       case "BusPass"
       if (mapLocation = 5) {
         gameMessage = "You will need this to get to the other side of town"
        } break; 
       };
       
    };
