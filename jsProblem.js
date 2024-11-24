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
    
    let demo = 0;
    for (const yours of name){
        if (typeof yours === 'string'){
            demo.push(yours);
            
        }
        return false;
    }

    return demo;
    
}
// let sdf = checkDigitsInName(Raj123)
// console.log(sdf);
// console.log(checkDigitsInName("n9ayeem"));
// console.log(checkDigitsInName('e1mu3'));
// console.log(checkDigitsInName("Suman"));
// console.log(checkDigitsInName("Name2024"));
// console.log(checkDigitsInName("!@#"));
// console.log(checkDigitsInName(["Raj"]));



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

