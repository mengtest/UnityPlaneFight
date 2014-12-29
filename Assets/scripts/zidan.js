#pragma strict
var speed:float=10;

function Start () {

}

function Update () {
	gameObject.rigidbody2D.AddForce(Vector2(0,speed));
	if(transform.position.y>6){
		 Destroy(this.gameObject);
	
	}
}