#pragma strict

function Start () {
	gameObject.guiText.text ="Your Score is "+gameObject.Find("score").GetComponent(scoreCount).score;
}

function Update () {
	
}