const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cxplaceSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    lat: { type: String, required: true },
    lng: { type: String, required: true },
    phone: { type: String, required: true },
    commision: { type: String, required: true },
    buy: { type: String, required: true },
    sell: { type: String, required: true },
    hours: { type: String, required: true },
    image: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Cxplace = mongoose.model("Cxplace", cxplaceSchema);

module.exports = Cxplace;
