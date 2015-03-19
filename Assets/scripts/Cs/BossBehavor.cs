using UnityEngine;
using System.Collections;

public class BossBehavor : MonoBehaviour {
    public int _bossLife = 30;
    public GameObject bosszidan;


    private float _timeTemp = 0;
    
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
        _timeTemp += Time.deltaTime;
	}
    void OnCollisionEnter2D(Collision2D col) { 
        if(col.gameObject.name=="zidan(Clone)"){
            _bossLife = _bossLife - 1;
        }
        if(_bossLife<0){
            GameObject.Find("wuPin_Builder").GetComponent<AddLife>().isHeroLifeRun = true;
            Destroy(this.gameObject);
        }
        if(_timeTemp>0.5){
            GameObject n = Instantiate(bosszidan,new Vector3(transform.position.x,transform.position.y-1.5f,0),transform.rotation)as GameObject;
        }


    }

}
