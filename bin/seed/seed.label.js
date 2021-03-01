require("./../../config/mongo");
// require the model hacker here
const LabelModel = require("./../../model/Label.js");

console.log(LabelModel);

LabelModel.insertMany()
.then(dbSuccess => {
    console.log(dbSuccess);
})
.catch(dbError => {
    console.log(dbError);
})