using UnityEngine;
using System.Collections;

public class backGround_move : MonoBehaviour
{
		public float speed = 4;
		// Use this for initialization
		void Start ()
		{
	
		}
	
		// Update is called once per frame
		void Update ()
		{
				transform.Translate (Vector3.down * Time.deltaTime * speed);
				if (transform.position.y < -5.9) {
						gameObject.transform.position = new Vector3 (0, 6, 0);
				}

		}
}
