#pragma strict
var bossLife:int = 30;
private var  timeTemp:float=0;
var bosszidan:GameObject;
function Start () {

}

function Update () {
	timeTemp+=Time.deltaTime;
}

function OnCollisionEnter2D(col:Collision2D){
if(col.gameObject.name=="zidan_t(Clone)"){
	bossLife = bossLife-1;
}
if(bossLife<0){
	gameObject.Find("wuPin_Builder").GetComponent(AddLife).isHeroLifeRun=true;
 	Destroy(this.gameObject);
	
}
if(timeTemp>0.5){
	var n:GameObject = Instantiate(bosszidan,Vector3(transform.position.x,transform.position.y-1.5,0),transform.rotation);
	timeTemp=0;
}

	

}