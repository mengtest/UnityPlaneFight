#pragma strict

var heroLife:int=1;

function Start () {

}

function Update () {
	gameObject.guiText.text="HeroLife:"+heroLife;
	if(heroLife<=0){
		Destroy(GameObject.Find("hero"));
		Application.LoadLevel(2);
	}
}