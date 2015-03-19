using UnityEngine;
using System.Collections;

public class HeroLife : MonoBehaviour {
    public int heroLife = 1;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
        gameObject.guiText.text = "HeroLife" + heroLife;
        if(heroLife<=0){
            Destroy(GameObject.Find("hero"));
            Application.LoadLevel(2);
        }
	}
}
