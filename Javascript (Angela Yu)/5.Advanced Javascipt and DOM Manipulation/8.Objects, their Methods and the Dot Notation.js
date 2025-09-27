function HouseKeeper (yearsOfExperience, name, cleaningReportoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningReportoire = cleaningReportoire;
    this.clean = function name() {
        alert("Cleaning in progress...")
    }
}


var houseKeeper = new HouseKeeper(9, "Tom", ["lobby", "bedroom"]);
console.log(houseKeeper.clean());