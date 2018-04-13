export default {


    initMap: function () {
        return console.log("connected");
    },
    
    getLocation: function (handleResults) {
    return navigator.geolocation.getCurrentPosition(function (position) {
        
        handleResults(position);
       
    })
}
};
