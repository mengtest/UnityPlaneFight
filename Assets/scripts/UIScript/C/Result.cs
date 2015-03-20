using UnityEngine;
using System.Collections;

public class Result : MonoBehaviour {

	// Use this for initialization
	void Start () {
        gameObject.guiText.text = "Your Score is " + GameObject.Find("score").GetComponent<scoreCount>().score;
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
