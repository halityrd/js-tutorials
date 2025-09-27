function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
        var kalanYil = 90 - age;
        var ageDay = kalanYil * 365;
        var ageWeek = Math.round(kalanYil * 52);
        var ageMounth = Math.round(kalanYil * 12);
        
        console.log("You have " + ageDay + " days, " + ageWeek + " weeks, and " + ageMounth + " months left.");
        
        
        
        
        
        
    /*************Don't change the code below**********/
}
    
lifeInWeeks(56);
    