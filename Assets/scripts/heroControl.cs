using UnityEngine;
using System.Collections;

public class heroControl : MonoBehaviour {
    public float speed = 100;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
        if(Input.GetKeyDown(KeyCode.UpArrow)){
            transform.Translate (Vector3.up*Time.deltaTime*speed);
           
        }
        if (Input.GetKeyDown(KeyCode.DownArrow))
        {
            transform.Translate(Vector3.down * Time.deltaTime * speed);
           
        }
        if (Input.GetKeyDown(KeyCode.LeftArrow))
        {
            transform.Translate(Vector3.left * Time.deltaTime * speed);

        }

        if (Input.GetKeyDown(KeyCode.RightArrow))
        {
            transform.Translate(Vector3.right * Time.deltaTime * speed);

        }



       // transform.position = Camera.main.ScreenToWorldPoint(  new Vector3(Input.mousePosition.x + Input.mousePosition.y,0));

        UnityEngine.Debug.Log(Input.mousePosition.x+","+Input.mousePosition.y);
	}
}
