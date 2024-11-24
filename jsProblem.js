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
        return "Invalid Email"
    }
    const emailName = email.split('@');
    const  name = emailName[0];
    const domainName = emailName[1];
    const result = name + " sent you an email from "+ domainName;
    return result;
}
// console.log(sendNotification('zihad@gmail.com'));
// console.log(sendNotification("farhan34@yahoo.com"));
// console.log(sendNotification('nadim.naem5@outlook.com'));
// console.log(sendNotification("fahim234.hotmail.com"));
// console.log(sendNotification("sadia8icloud.com"));