#pragma strict
var mySkin:GUISkin;
function Start () {

}

function Update () {

}

function OnGUI(){
	GUI.skin=mySkin;
	if(GUI.Button(new Rect(180,200,120,40),"",GUI.skin.GetStyle("StartButton"))){
		Application.LoadLevel(1);
	}

}