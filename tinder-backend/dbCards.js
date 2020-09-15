import mongoose from "mongoose";
// database schema
// outline the structure of the tinder cards inside the db

// this is how our db fields are gonna be built
const cardSchema = mongoose.Schema({
  name: String,
  imgUrl: String,
});

// export the whole schema, define collection name, and pass in the cardSchema
// in nosql Database: collection > [documents] > collection > [documents] > ....
export default mongoose.model("cards", cardSchema);
