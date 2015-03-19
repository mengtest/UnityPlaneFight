using UnityEngine;
using System.Collections;

public class HeroControl : MonoBehaviour {
    public GameObject zidan;
    public float time_temp;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
        time_temp += Time.deltaTime;
        if(Input.GetKey(KeyCode.LeftArrow)){
            transform.position = new Vector3(transform.position.x- 1 * Time.deltaTime,transform.position.y,transform.position.z);
        }
        if(Input.GetKey(KeyCode.RightArrow)){
            transform.position = new Vector3(transform.position.x + 1 * Time.deltaTime, transform.position.y, transform.position.z);
        }

        if(time_temp>=0.6){
            Instantiate(zidan,new Vector3(transform.position.x,transform.position.y+0.5f,transform.position.z),transform.rotation);
            time_temp = 0;
        }



	}
}
