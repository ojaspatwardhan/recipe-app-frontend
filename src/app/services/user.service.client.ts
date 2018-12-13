export class UserServiceClient {

  /*
  local url - http://localhost:4000/
  heroku url -  https://dbms-recipe-app-backend.herokuapp.com/
  */

  private username: string;
  private userId: any;

  //Getter and Setters
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

  //User methods

  logout() {
    return fetch("https://dbms-recipe-app-backend.herokuapp.com/api/user/logout", {
      method: "POST",
      credentials: "include"
    });
  }

  removeUser(id) {
    console.log(id);
    return fetch("https://dbms-recipe-app-backend.herokuapp.com/api/user/" + id, {
      method: "DELETE"
    })
    .then(response => response.text());
  }

  createUserByAdmin(username, password, firstName, lastName, email, address, role) {
    const user = {
      username: username,
      password: password,
      first_name: firstName,
      last_name: lastName,
      email: email,
      address_1: address,
      role: role
    };
    return fetch("https://dbms-recipe-app-backend.herokuapp.com/api/user/admin", {
      body: JSON.stringify(user),
      credentials: "include",
      method: "POST",
      headers: {
        "content-type": "application/json"
      }
    }).then(response => response.json());
  }

  findUserById(id) {
    return fetch("https://dbms-recipe-app-backend.herokuapp.com/api/user/id/" + id).then((response) => response.json());
  }

  findAllUsers() {
    // console.log("inside findAllUsers");
    return fetch("https://dbms-recipe-app-backend.herokuapp.com/api/user/users", {
      credentials: "include"
    }).then((response) => response.json());
  }

  updateUser(user) {
    console.log("inside updateUser");
    return fetch("https://dbms-recipe-app-backend.herokuapp.com/api/user/" + user._id, {
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
    return fetch("https://dbms-recipe-app-backend.herokuapp.com/api/user/signup", {
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
    return fetch("https://dbms-recipe-app-backend.herokuapp.com/api/user/profile/" + username, {
      method: "GET"
    }).then((response) => response.json());
  }

  loginUser(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch("https://dbms-recipe-app-backend.herokuapp.com/api/user/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => response.json()).catch((res) => {
      console.log(res);
    });
  }

  enrollUserInCookingSchool(schoolId, id) {
    console.log(schoolId);
    return fetch("https://dbms-recipe-app-backend.herokuapp.com/api/user/school/" + id, {
        method: "PUT",
        body: JSON.stringify({
          schoolId: schoolId,
          id: id
        }),
        credentials: "include",
        headers: {
          "content-type": "application/json"
        }
    }).then(response => response.json());
  }

  unEnrollUserFromCookingSchool(schoolId, id) {
    console.log(id + " " + "inside user");
    return fetch("https://dbms-recipe-app-backend.herokuapp.com/api/user/user/unenroll", {
        method: "PUT",
        body: JSON.stringify({
          schoolId: schoolId,
          id: id
        }),
        credentials: "include",
        headers: {
          "content-type": "application/json"
        }
    }).then(response => response.json());
  }
}
