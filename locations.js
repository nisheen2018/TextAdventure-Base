function Locations (name, descripton, items) {
    this.name = name
    this.description = description
    this.items = []
 }
    var locations = []
    var locations1 = newLocation("Central Park", "Recreational Area Of NYC",)
    locations.push.location1 
    var locations2 = newLocation ("Times Square", "Most toured place in NYc")
    locations.push.location2
    var location3 = newLocation("Grand Central Terminal", "long-distance passenger rail travel")
    locations.push.location3
    
    var connections = [
       [0,0,1]
       [0,1,0]
       [1,0,0]
    ]
    
    var map = [locations, connections]
    var desiredLocation = prompt ('Where do you want to go?")
    