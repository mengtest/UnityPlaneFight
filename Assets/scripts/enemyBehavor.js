#pragma strict
private var score:int=0;
function Start () {

}

function Update () {
	if(transform.position.y<-3.5){
		Destroy(this.gameObject);//自销毁
	}
}


function OnCollisionEnter2D( col:Collision2D){

	if(col.gameObject.name=="zidan(Clone)"){
	Destroy(col.gameObject);
	Destroy(this.gameObject);
	
	}
	
	var num:GameObject;
	num=gameObject.Find("score");
	num.GetComponent(scoreCount).score+=100;
}