const IS_PART_TIME =1;
const IS_fULL_tIME =2;
const PART_TIME_HOURS =4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOURS=20;
const IS_PART_TIME =1;
const IS_fULL_tIME =2;
const PART_TIME_HOURS =4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOURS=20;
const WORKING_DAYS=20;
const MAX_HOURS=160;
let empHrs=0;
let workingDays=0
let empDailyWageArr = new Array();
function getWorkingHours(empCheck)
{
    switch(empCheck)
    {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_fULL_tIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
function calcDailyWage(empHrs)
{
    return empHrs*WAGE_PER_HOURS;;
}
while(empHrs<=MAX_HOURS && workingDays <= WORKING_DAYS)
{
    workingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    empHrs += getWorkingHours(empCheck);
    empDailyWageArr.push(calcDailyWage(empHrs));
}
let TotalWorkingDays=workingDays-1;
let empWage = calcDailyWage(empHrs);
console.log("\nTotal Days : "+TotalWorkingDays+"\nTotal Hours : "+empHrs+"\nEmployee Wage: "+ empWage);