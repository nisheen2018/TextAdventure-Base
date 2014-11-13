var player = { items:[ ]; pickUp: function (item){this.items.push(item);}};

function interpret (input) {
var cmd = input.trim().split('');
    return cmd;
}

function execute = (cmd){
var action = cmd[0];
var object = cmd [1];
var method = player [action];
    method (object);
}
var input = document.querySelector ('input');
input.addEventListener ('keyup', function (event){
    if ( event.keyCode === 13 )
    alert (this.value);
}
var cmd = interpret (this.value);
    execute (cmd);
    alert ( player.items)
    
function report = 


function gameStep = (str) {
  return [execute, interpret, report]
}

var item = document.createElement ('li')
item.textContent = player.items[i]
list.appendchild(item)

addEventListener("keyup", function(event) {
    if (event.keyCode == Enter)
      document.body = "";

