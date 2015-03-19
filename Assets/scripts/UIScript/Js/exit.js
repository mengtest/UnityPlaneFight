#pragma strict
var mySkin:GUISkin;
function Start () {

}

function Update () {

}

function OnGUI(){
	GUI.skin=mySkin;
	if(GUI.Button(new Rect(190,280,100,40),"",GUI.skin.GetStyle("exitButton"))){
		Application.Quit();
	}

}