using UnityEngine;
using System.Collections;

public class StartButton : MonoBehaviour {
    public GUISkin mySkin;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
    void OnGUI() {
        GUI.skin = mySkin;
        if (GUI.Button(new Rect(180, 200, 120, 40), "", GUI.skin.GetStyle("StartButton")))
        {
            Application.LoadLevel(1);
        }
    }

}
