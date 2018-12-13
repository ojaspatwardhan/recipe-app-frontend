export class ContactUsServiceClient {

    /*
    local url - http://localhost:4000/
    heroku url -  https://dbms-recipe-app-backend.herokuapp.com/
    */


      findQueryByEmail(email) {
        return fetch("https://dbms-recipe-app-backend.herokuapp.com/api/contact-us/" + email).then((response) => response.json());
      }

      createQuery(query) {
        console.log(query);
        return fetch("https://dbms-recipe-app-backend.herokuapp.com/api/contact-us", {
          method: "POST",
          body: JSON.stringify(query),
          headers: {
            "Content-Type": "application/json"
          }
        }).then((response) => response.json()).catch(res => {
          console.log(res);
        });
      }

      findAllQuery() {
          return fetch("https://dbms-recipe-app-backend.herokuapp.com/api/contact-us/").then((response) => response.json());
      }

      findQueryById(id){
          return fetch("https://dbms-recipe-app-backend.herokuapp.com/api/contact-us/" + id).then((response) => response.json());
      }

}
