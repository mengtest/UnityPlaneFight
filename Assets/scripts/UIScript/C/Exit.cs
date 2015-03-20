using UnityEngine;
using System.Collections;

public class Exit : MonoBehaviour {
    public GUISkin mySkin;
	// Use this for initialization
	void Start () {
       
	}
	
	// Update is called once per frame
	void Update () {
      
	}

    void OnGUI() {
        GUI.skin = mySkin;
        if (GUI.Button(new Rect(190f, 280f, 100f, 40f), "", GUI.skin.GetStyle("exitButton")))
        {
            Application.Quit();
        }
    }
}
