using UnityEngine;
using System.Collections;

public class EnemyBehavor : MonoBehaviour {
    private int score = 0;
    private GameObject num;
	// Use this for initialization
	void Start () {
        num = GameObject.Find("score");
	}
	
	// Update is called once per frame
	void Update () {
        if (transform.position.y < -3.5) {
            Destroy(this.gameObject);
        }
	}
    void OnCollisionEnter2D(Collision2D col) { 
        if(col.gameObject.name=="zidan(Clone)"){
            Destroy(col.gameObject);
            Destroy(this.gameObject);
            num.GetComponent<scoreCount>().score += 100;
        }
        if(col.gameObject.name=="hero"){
            GameObject.Find("HeroLife").GetComponent<HeroLife>().heroLife -= 1;
            Destroy(this.gameObject); 
        }

    }

}
