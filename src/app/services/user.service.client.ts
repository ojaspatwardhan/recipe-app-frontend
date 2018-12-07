export class UserServiceClient {

  private username: string;

  getUsername() {
    return this.username;
  }

  setUsername(username) {
    this.username = username;
  }

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
    }).then(response => response.json()).catch(res => {
      console.log(res);
    });
  }

  findProfile(username) {
    return fetch("http://localhost:4000/api/user/profile/" + username, {
      method: "GET"
    }).then((response) => response.json());
  }

  loginUser(email) {
    const user = {
      email: email
    };
    return fetch("http://localhost:4000/api/user/login", {

    });
  }
}
