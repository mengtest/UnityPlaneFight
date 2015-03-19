#pragma strict
var enemy:GameObject;
private var bulidTime:float =1;
private var tempTime:float;
private var moveSpeedX:float;
private var Boss_score:int = 1500;//boss出现，不刷小兵
private var tempScore:int;
function Start () {

}

function Update () {


	moveSpeedX = 30;
	tempTime += Time.deltaTime;
	transform.Translate(Vector3.right*moveSpeedX*Time.deltaTime);
	if(transform.position.x>1.85){
		transform.position.x=-1.77;
	
	}
	
	if(tempTime>1.5&&((Boss_score>(gameObject.Find("score").GetComponent(scoreCount).score)))){
		var n:GameObject = Instantiate(enemy,transform.position,transform.rotation);
		tempTime  = 0;
	}
}