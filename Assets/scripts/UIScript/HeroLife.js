#pragma strict

var heroLife:int=1;

function Start () {

}

function Update () {
	gameObject.guiText.text="HeroLife:"+heroLife;
}