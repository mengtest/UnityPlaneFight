﻿#pragma strict
var zidan:GameObject;
 var timeTemp_:float;
function Start () {

}

function Update () {
	
	timeTemp_ +=Time.deltaTime;
		
		if(Input.GetKey(KeyCode.LeftArrow)){
			transform.position.x-= 1*Time.deltaTime;
		
		}
		if(Input.GetKey(KeyCode.RightArrow)){
			transform.position.x+= 1*Time.deltaTime;
		}
		if(timeTemp_>=0.6){
		
		var n:GameObject = Instantiate(zidan,Vector3(transform.position.x,transform.position.y+0.5,0),transform.rotation);
		timeTemp_ = 0;
		}
		

}


function OnCollisionEnter2D(col:Collision2D){

}