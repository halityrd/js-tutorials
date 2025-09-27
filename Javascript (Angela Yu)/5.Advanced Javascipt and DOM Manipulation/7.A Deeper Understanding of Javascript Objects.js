// javascript object
var houseKeeper1 = {
    yearsOfExperience: 12,
    name: "Jane",
    cleaningReportoire: ["bathroom", "lobby", "bedroom"]
}

console.log(houseKeeper1);
console.log(houseKeeper1.name);

// constructor function (class)
function HouseKeeper (yearsOfExperience, name, cleaningReportoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningReportoire = cleaningReportoire;
}

var houseKeeper2 = new HouseKeeper(9, "Tom", ["lobby", "bedroom"]);
console.log(houseKeeper2);
console.log(houseKeeper2.cleaningReportoire);
