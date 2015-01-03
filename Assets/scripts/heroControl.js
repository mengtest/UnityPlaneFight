#pragma strict
var zidan:GameObject;
 var timeTemp_:float;
function Start () {

}

function Update () {
	
	timeTemp_ +=Time.deltaTime;
	
	/*i
	transform.position =Camera.main.ScreenToWorldPoint( new Vector3(Input.mousePosition.x,Input.mousePosition.y,10));
	if(Input.GetKeyDown(KeyCode.Space)||Input.GetMouseButtonDown(0)){
		//Debug("sa");
		*/
		
		if(Input.GetKeyDown(KeyCode.LeftArrow)){
			transform.position.x-= 0.2;
		
		}
		if(Input.GetKeyDown(KeyCode.RightArrow)){
			transform.position.x+= 0.2;
		}
		if(timeTemp_>=0.6){
		
		var n:GameObject = Instantiate(zidan,Vector3(transform.position.x,transform.position.y+0.5,0),transform.rotation);
		timeTemp_ = 0;
		}
		//

}


function OnCollisionEnter2D(col:Collision2D){
	if(col.gameObject.name=="enemy(Clone)"){
	Application.LoadLevel(2);
	
	}
	
}