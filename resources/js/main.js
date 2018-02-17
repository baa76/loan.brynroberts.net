// Inputs
const startDate = new Date("December 4, 2017");
const startDateMs = startDate.getTime();
console.log(startDateMs);
console.log(startDate);
const currentDate = new Date();
const oneWeekMs = (1000*60*60*24*7);
const weeklyRepayment = 25;
const loanPrincipal = 5500;




// Outputs
const weeksDifference = Math.abs(startDate - currentDate);
console.log(weeksDifference);

// Number of payments(weeks) since loan start
const paymentsSinceStart =  Math.floor(weeksDifference / oneWeekMs);

// const paymentsSinceStart = weeksDifference(startDate, currentDate);
const totalPaid = paymentsSinceStart * weeklyRepayment;
console.log(`Number of payments to date: ${paymentsSinceStart}`);
console.log(`Total $ paid to date: $${totalPaid}`);

// Date of most recent payment
const findLastPayment = (startDateMs + weeksDifference);
console.log(`Find Last Payment: ${findLastPayment}`);
const roundedWeeksMs = startDateMs + (oneWeekMs * paymentsSinceStart);
const dateOfMostRecentPayment = new Date(roundedWeeksMs).toDateString();
console.log(dateOfMostRecentPayment);

// Current amount owing
const calcCurrentAmountOwing = loanPrincipal - (weeklyRepayment * paymentsSinceStart);
console.log(`Current Outstanding Loan Amount: $${calcCurrentAmountOwing}`);




// List of all payments to current date



// Date of last repayment

const getDateOfLastPayment = ((loanPrincipal / weeklyRepayment) * oneWeekMs) + startDateMs;
console.log(getDateOfLastPayment);
const dateOfLastPayment = new Date(getDateOfLastPayment).toDateString();
console.log(dateOfLastPayment);


