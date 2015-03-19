using UnityEngine;
using System.Collections;

public class EnemyBuilder : MonoBehaviour
{
    public GameObject enemy;

    private float buildTime = 1;
    private float tempTime;
    private float moveSpeedX;
    private int Boss_score = 1500;
    private int tempScore;
    // Use this for initialization
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        moveSpeedX = 30.0f;
        tempTime += Time.deltaTime;
        transform.Translate(Vector3.right * moveSpeedX * Time.deltaTime);
        if (transform.position.x > 1.85)
        {
            transform.position = new Vector3(-1.77f, transform.position.y, transform.position.z);
        }
        if (tempTime > 1.5 && (Boss_score > (GameObject.Find("score").GetComponent<scoreCount>().score)))
        {
            GameObject n = Instantiate(enemy, transform.position, transform.rotation) as GameObject;
            tempTime = 0;
        }

    }
}
