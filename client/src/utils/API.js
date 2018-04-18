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
