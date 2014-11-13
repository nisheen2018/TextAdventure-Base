var player = { items:[ ]; pickUp: function (item){this.items.push(item);}};
drop: function(item){
	var pos = this.items.indexOf(item);
	if (pos >= 0) {
		this.items.splice(pos, 1);
    }
  }
}

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
    
function gameStep (input) {
	var cmd = interpret(input);
	var result = execute(cmd); 
	report(result);




var gameStart = function() {
	var inputBox = document.querySelector("input");
	inputBox.addEventListener("keyup", function(event){
		if (event.keyCode === 13) {
			gameStep(this.value);
		}
	});
}

window.onload = gameStart; 





