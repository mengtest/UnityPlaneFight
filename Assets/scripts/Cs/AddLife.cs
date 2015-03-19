using UnityEngine;
using System.Collections;

public class AddLife : MonoBehaviour
{
    public GameObject heroLife;
    public bool isHeroLifeRun = false;
    public float moveSpeedX;

    private float tempTime;
    // Use this for initialization
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        moveSpeedX = 30;
        transform.Translate(Vector3.right * moveSpeedX * Time.deltaTime);

        if(gameObject.transform.position.x > 1.85f)
        {
            transform.position = new Vector3(-1.77f,0,0);
        }

        if (isHeroLifeRun==true)
        {
            GameObject n = Instantiate(heroLife,transform.position,transform.rotation)as GameObject;
            isHeroLifeRun = false;
        }

    }
}
