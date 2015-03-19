using UnityEngine;
using System.Collections;

public class scoreCount : MonoBehaviour {
    public int score = 0;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
        gameObject.guiText.text = "Score:" + score;
	}

    void Awake() {
        DontDestroyOnLoad(this);
    }
}
