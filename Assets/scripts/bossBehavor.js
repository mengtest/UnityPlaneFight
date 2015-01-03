#pragma strict
var bossLife:int = 30;
function Start () {

}

function Update () {
	
}

function OnCollisionEnter2D(col:Collision2D){
if(col.gameObject.name=="zidan_t(Clone)"){
	bossLife = bossLife-1;
}
if(bossLife<0){
 	Destroy(this.gameObject);

}
	//Debug.Log("wo zhong qiang le");

}