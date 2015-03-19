using UnityEngine;
using System.Collections;

public class BossBuilder : MonoBehaviour {
    public GameObject enemyBoss;
    private float bossTempTime;
    private int Temp_number = 1;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	    if(GameObject.Find("score").GetComponent<scoreCount>().score>=1500&&(Temp_number==1)){
            GameObject n = Instantiate(enemyBoss, transform.position, transform.rotation) as GameObject;
            Temp_number = 0;

        }


	}
}
