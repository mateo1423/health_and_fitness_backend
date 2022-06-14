import mongo from 'mongodb'

let connection_string = "mongodb+srv://admin:1423@cluster0.phhtu3l.mongodb.net/?retryWrites=true&w=majority"

let client = new mongo.MongoClient(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let db = null

export default () => {
    return new Promise((resolve, reject) =>{

        if (db && client.isConnected()) {
            resolve(db)
        }

        client.connect(err => {
            if (err) {
                reject("Došlo je do greške!" +  err)
            }
            else {
                console.log("Uspješno spajanje na bazu!")
                let db = client.db("yeettt")
                resolve(db)
            }
        })
    })
}