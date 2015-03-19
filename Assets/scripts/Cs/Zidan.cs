using UnityEngine;
using System.Collections;

public class Zidan : MonoBehaviour
{

    // Use this for initialization
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        transform.position = new Vector3(transform.position.x, transform.position.y + 1 * Time.deltaTime, transform.position.z);

        if (transform.position.y >= 6)
        {
            Destroy(this.gameObject);
        }

    }

    void OnCollisionEnter2D(Collision2D col)
    {
        if (col.gameObject.name != "PaperPlane")
        {
            Destroy(this.gameObject);

        }
    }  

}
