#pragma strict

function Start () {
		if(transform.position.y<-3){
		 Destroy(this.gameObject);
	
	}
}

function Update () {
	
}

function OnCollisionEnter2D(col:Collision2D){
if(col.gameObject.name!="enemyBoss(Clone)"){
	Destroy(this.gameObject);
	Destroy(col.gameObject);
	if(col.gameObject.name=="hero"){
		Application.LoadLevel(2);
	}

}
	
	
}