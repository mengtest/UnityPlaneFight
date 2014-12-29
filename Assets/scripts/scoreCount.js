#pragma strict
var score:int=0;
function Update(){
	gameObject.guiText.text = "Score:"+score;
	
}

function Awake(){

	DontDestroyOnLoad (this.gameObject);


}