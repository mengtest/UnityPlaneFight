#pragma strict

function Start () {

}

function Update () {
	if(transform.position.y<-3.5){
	Destroy(this.gameObject);
	}
}


function OnCollisionEnter2D( col:Collision2D){
	Destroy(col.gameObject);
	Destroy(this.gameObject);

}