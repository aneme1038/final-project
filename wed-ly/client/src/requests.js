import axios from 'axios';

const baseUrl = 'http://localhost:3000/tasks/'

class Requests {
  //Get Tasks
  //following code block is grabbed and used to help learn and solve this issue of connecting or making requests to my backend using VueJS from https://github.com/bradtraversy/microposts_fullstack_vue. He helpfully goes over how I could make requests to my backend using this code. While i will likely not use this file, it does show me a method of making a request. However, in testing this file, I did not get anything to show or work and decided to go a different route.

    //static here, even though we have a class, we don't have to instantiate a 'new' object so using static is something I can do here to grab information.
  static getTasks() {
    return new Promise(async (resolve, reject) => {
      //try and catch statement
      try {
        //declare response based on baseUrl
        const response = await axios.get(baseUrl);
        //declare the data coming in from response
        const data = response.data;
        //if successful, call resolve
        resolve(
          data.map(task => ({
            ...task,
            createdAt: new Date(task.createdAt)
          }))
        )
      } catch(error) {
        //if error, call reject
        reject(error)
      }
    })
  }
  //Create Tasks
  static insertTask(text) {
    return axios.task(baseUrl, {
      //ES6 you can use just text
      text
    })
  }
  //Delete Tasks
  static deleteTask(id) {
    return axios.delete(`${baseUrl}${id}`)
  }
}

export default Requests;
