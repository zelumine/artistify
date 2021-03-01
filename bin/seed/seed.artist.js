require("./../../config/mongo");
// require the model hacker here
const ArtistModel = require("./../../model/Artist.js");

console.log(ArtistModel);

ArtistModel.insertMany()
.then(dbSuccess => {
    console.log(dbSuccess);
})
.catch(dbError => {
    console.log(dbError);
})