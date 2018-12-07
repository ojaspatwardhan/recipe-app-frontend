export class UserServiceClient {

  registerUser(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch("http://localhost:4000/api/user/signup", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      console.log(response.json);
    }).catch(res => {
      console.log(res);
    });
  }

  loginUser(email) {
    const user = {
      email: email
    };
    return fetch("http://localhost:4000/api/user/login", {
      
    });
  }
}
