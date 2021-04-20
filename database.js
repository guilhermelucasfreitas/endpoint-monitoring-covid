import mongoose from 'mongoose';


class Database {
    constructor() {
        this.init();
    }
    init() {
        mongoose.connect('mongodb+srv://visitor:yUW1RNLAu16meEgM@cluster0.tq2zz.mongodb.net/monitoring-covid', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("Successful conection with MongoDB");
        }).catch((error) => {
            console.log("Error: Unsuccessful connection with MongoDB");
        });
    }
}

export default new Database();