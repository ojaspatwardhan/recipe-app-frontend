export class AdvertisementServiceClient {

  /*
  local url - http://localhost:4200/
  heroku url -  https://dbms-recipe-app-backend.herokuapp.com/
  */


    findAdvertisementByName(name) {
      return fetch("http://localhost:4200/api/advertisement/" + name).then((response) => response.json());
    }

    createAdvertisement(advertisement) {
      console.log(advertisement);
      return fetch("http://localhost:4200/api/advertisement", {
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
        return fetch("http://localhost:4200/api/advertisement/").then((response) => response.json());
    }

    findAdvertisementById(id){
        return fetch("http://localhost:4200/api/advertisement/" + id).then((response) => response.json());
    }

    updateAdvertisement(advertisement){
        return fetch("http://localhost:4200/api/advertisement/"+advertisement._id,{
            method: "PUT",
            credentials: "include",
            body: JSON.stringify(advertisement),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => response.json());
    }

    deleteAdvertisement(id){
        return fetch("http://localhost:4200/api/advertisement/" + id, {
            method: "DELETE"
        }).then(response => response.json());
    }

  }
