#pragma strict
var speed:float=10;

function Start () {

}

function Update () {
	transform.position.y+=1*Time.deltaTime;
	if(transform.position.y>6){
		 Destroy(this.gameObject);
	
	}
}

function OnCollisionEnter2D( col:Collision2D){
	if(col.gameObject.name!="PaperPlane"){
		Destroy(this.gameObject);
	
	}else{
	gameObject.transform.position.x=transform.position.x;
	}
		

	

}