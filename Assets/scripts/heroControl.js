#pragma strict
var zidan:GameObject;

function Start () {

}

function Update () {
	transform.position =Camera.mainCamera.ScreenToWorldPoint( new Vector3(Input.mousePosition.x,Input.mousePosition.y,10));
	if(Input.GetKeyDown(KeyCode.Space)||Input.GetMouseButtonDown(0)){
		//Debug("sa");
		var n:GameObject = Instantiate(zidan,Vector3(transform.position.x,transform.position.y+0.5,0),transform.rotation);
	}
	
	
	
}


function OnCollisionEnter2D(col:Collision2D){
	
	Application.LoadLevel(2);
}