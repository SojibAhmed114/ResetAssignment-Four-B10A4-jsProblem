//problem 01
function calculateTax(income, expenses) {

    if (income < 0 || expenses < 0 || income < expenses) {
        return "Invalid Input";
    }

    const totalIncome = income - expenses;
    const tax = totalIncome * 0.20;
    return tax;
}




// problem 02 
function sendNotification(email) {
    if (!email.includes("@")) {
        return "Invalid Email";
    }
    const emailName = email.split('@');
    const  name = emailName[0];
    const domainName = emailName[1];
    const result = name + " sent you an email from "+ domainName;
    return result;
}




// problem 03  pari nai
function checkDigitsInName(name) {
    if (typeof name !== "string") {
        return "Invalid Input";
    }
    
    for (const latter of name){
        console.log(latter);
        if (!isNaN(latter) && latter !== ""){
            return true;
        }
    }

    return false;
    
}





// problem 04
function calculateFinalScore(obj) {
    if (typeof obj !== 'object' || Array.isArray(obj)) {
        return "Invalid Input";
    }

    if (obj.isFFamily) {
        obj.isFFamily = 20;
    }

    if (obj.testScore <= 50 &&  obj.schoolGrade <= 30) {
        const marks = obj.testScore + obj.schoolGrade + obj.isFFamily;
        return marks >= 80? true : false;
    }

}



// problem 05
function  waitingTime(waitingTimes  , serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return "Invalid Input ";
    }

        let sum = 0;
    for (let i = 0; i < waitingTimes.length; i++){
        const singleTime = waitingTimes[i];
        sum += singleTime;
    }

    const avg = sum / waitingTimes.length;
    const roundAvg = Math.round(avg);

    const originalSerial = serialNumber -1;

    const nextSerial = originalSerial - waitingTimes.length;

    const totalWaitingTime = roundAvg * nextSerial;
    return totalWaitingTime;
}
