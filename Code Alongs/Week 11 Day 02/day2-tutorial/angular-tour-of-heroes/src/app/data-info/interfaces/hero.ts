export interface Hero {
  id: number | string,
  name: string
}


// firebase gives you a unique ID
// I want to use that FB ID as the ID of the object I POST to it
// I could either create my own ID generator OR
// post data to the endpoint, pull in that ID, and update the data so that it corresponds