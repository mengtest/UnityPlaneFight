#pragma strict
var heroLife:GameObject;
var isHeroLifeRun:boolean=false;
var moveSpeedX:float;
private var tempTime:float;
function Start () {
	
}

function Update () {
	moveSpeedX = 30;
	transform.Translate(Vector3.right*moveSpeedX*Time.deltaTime);
	if(transform.position.x>1.85){
		transform.position.x=-1.77;
	
	}
	
	if(isHeroLifeRun){
		var n:GameObject = Instantiate(heroLife,transform.position,transform.rotation);
		isHeroLifeRun = false;
	}
	
}