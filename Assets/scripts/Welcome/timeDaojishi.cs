using UnityEngine;
using System.Collections;

public class timeDaojishi : MonoBehaviour {
    public float time=5;//倒计时时间
    private float temp;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
        
        temp += Time.deltaTime;
        UnityEngine.Debug.Log(temp);
        if (temp > time) {
            Application.LoadLevel(1);
        }
	}
}
