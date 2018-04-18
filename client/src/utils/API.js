import axios from "axios";

export default {
//Functions that get/put/post from/to the database


    getCxplaces: function () {
        return axios.get("/api/cxplaces");
    },
    // Gets the book with the given id
    getCxplace: function (id) {
        return axios.get("/api/cxplaces/" + id);
    },

    updateCxplace: function (id, obj) {
        return axios.put("/api/cxplaces/" + id, obj);
    },
    getUsers: function () {
        return axios.get("/api/users")
    },
    postUser: function () {
        return axios.post("/api/users")
    },
    getUser: function (id) {
        return axios.post("/api/users/" + id)
    },
    //DANGERZONE: THIS DELETES A USER!!!
    deleteUser: function (id) {
        return axios.delete("/api/users/" + id)
    }



    //FUTURE ADD-ONS: 
    // // Deletes the book with the given id
    // deleteBook: function (id) {
    //     return axios.delete("/api/books/" + id);
    // },
    // // Saves a book to the database
    // saveBook: function (bookData) {
    //     return axios.post("/api/books", bookData);
    // }

};
