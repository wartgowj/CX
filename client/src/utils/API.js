import axios from "axios";

export default {
//Functions that get/put/post from/to the database


    getCxplaces: function () {
        return axios.get("/api/cxplaces");
    },
 
    getCxplace: function (id) {
        return axios.get("/api/cxplaces/" + id);
    },

    updateCxplace: function (id, obj) {
        return axios.put("/api/cxplaces/" + id, obj);
    }
};
