export class AdvertisementServiceClient {

  /*
  local url - https://dbms-recipe-app-backend.herokuapp.com/
  heroku url -  https://dbms-recipe-app-backend.herokuapp.com/
  */


    findAdvertisementByName(name) {
      return fetch("https://dbms-recipe-app-backend.herokuapp.com/api/advertisement/" + name).then((response) => response.json());
    }

    createAdvertisement(advertisement) {
      console.log(advertisement);
      return fetch("https://dbms-recipe-app-backend.herokuapp.com/api/advertisement", {
        method: "POST",
        body: JSON.stringify(advertisement),
        headers: {
          "Content-Type": "application/json"
        }
      }).then((response) => response.json()).catch(res => {
        console.log(res);
      });
    }

    findAllAdvertisement() {
        return fetch("https://dbms-recipe-app-backend.herokuapp.com/api/advertisement/").then((response) => response.json());
    }

    findAdvertisementById(id){
        return fetch("https://dbms-recipe-app-backend.herokuapp.com/api/advertisement/" + id).then((response) => response.json());
    }

    updateAdvertisement(advertisement){
        return fetch("https://dbms-recipe-app-backend.herokuapp.com/api/advertisement/"+advertisement._id,{
            method: "PUT",
            credentials: "include",
            body: JSON.stringify(advertisement),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => response.json());
    }

    deleteAdvertisement(id){
        return fetch("https://dbms-recipe-app-backend.herokuapp.com/api/advertisement/" + id, {
            method: "DELETE"
        }).then(response => response.json());
    }

  }
