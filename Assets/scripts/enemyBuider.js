#pragma strict
var enemy:GameObject;
private var bulidTime:float =1;
private var tempTime:float;
private var moveSpeedX:float;
function Start () {

}

function Update () {
	tempTime += Time.deltaTime;
	transform.Translate(Vector3.right*moveSpeedX*Time.deltaTime);
	if(transform.position.x>1.85){
		transform.position.x=-1.77;
	
	}
	moveSpeedX = 30;
	if(tempTime>1.5){
		var n:GameObject = Instantiate(enemy,transform.position,transform.rotation);
		tempTime  = 0;
	}
}