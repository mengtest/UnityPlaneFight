#pragma strict
var enemyBoss:GameObject;
var bossTemp_time;
var bossTemp_number:int = 1;
function Start () {
	
}

function Update () {
	if(gameObject.Find("score").GetComponent(scoreCount).score>=1500&&(bossTemp_number==1)){
		var n:GameObject = Instantiate(enemyBoss,transform.position,transform.rotation);
		bossTemp_number = 0;
		
	}
}