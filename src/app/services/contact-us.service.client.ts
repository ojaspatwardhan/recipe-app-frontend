export class ContactUsServiceClient {

    /*
    local url - http://localhost:4000/
    heroku url -  https://dbms-recipe-app-backend.herokuapp.com/
    */


      findQueryByEmail(email) {
        return fetch("http://localhost:4000/api/contact-us/" + email).then((response) => response.json());
      }

      createQuery(query) {
        console.log(query);
        return fetch("http://localhost:4000/api/contact-us", {
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
          return fetch("http://localhost:4000/api/contact-us/").then((response) => response.json());
      }

      findQueryById(id){
          return fetch("http://localhost:4000/api/contact-us/" + id).then((response) => response.json());
      }

}
