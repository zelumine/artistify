require("./../../config/mongo");
// require the model hacker here
const StyleModel = require("./../../model/Style.js");

console.log(StyleModel);

StyleModel.insertMany()
.then(dbSuccess => {
    console.log(dbSuccess);
})
.catch(dbError => {
    console.log(dbError);
})