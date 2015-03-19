using UnityEngine;
using System.Collections;

public class WuPingControl : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
        transform.position = new Vector3(transform.position.x,transform.position.y-Time.deltaTime,transform.position.z);
	}

    void OnCollisionEnter2D(Collision2D col) { 
        if(col.gameObject.name=="hero"){
            GameObject.Find("HeroLife").GetComponent<HeroLife>().heroLife += 1;
            Destroy(this.gameObject);
        }
    }
}
