#pragma strict
private var score:int=0;
function Start () {

}

function Update () {
	if(transform.position.y<-3.5){
	
	Destroy(this.gameObject);
	}
}


function OnCollisionEnter2D( col:Collision2D){

	if(col.gameObject.name=="zidan_t(Clone)"){
	Destroy(col.gameObject);
	Destroy(this.gameObject);
	
	}
	
	var num:GameObject;
	num=gameObject.Find("score");
	num.GetComponent(scoreCount).score+=100;
}