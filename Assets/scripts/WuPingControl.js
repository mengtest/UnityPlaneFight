#pragma strict

function Start () {

}

function Update () {
	transform.position.y -=1*Time.deltaTime;
}
function OnCollisionEnter2D(col:Collision2D){

	if(col.gameObject.name=="hero"){
		gameObject.Find("HeroLife").GetComponent(HeroLife).heroLife+=1;//检测道具与飞机碰撞后添加生命值
		Destroy(this.gameObject);
	}
}