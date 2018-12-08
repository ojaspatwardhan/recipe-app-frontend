export class UserServiceClient {

  private username: string;
  private userId: any;

  getUserId() {
    return this.userId;
  }

  setUserId(id) {
    this.userId = id;
  }

  getUsername() {
    return this.username;
  }

  setUsername(username) {
    this.username = username;
  }

  updateUser(user) {
    return fetch("http://localhost:4000/api/user/" + user._id, {
      method: "PUT",
      credentials: "include",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json"
      }
    }).then((response) => response.json());
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
    }).then((response) => response.json()).catch(res => {
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
