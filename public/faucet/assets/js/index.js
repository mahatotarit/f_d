const numbers = [3,324,12,67,100,655,300];

const chart_div_height = 75;

// get last 7 day's
const daysOfWeek = ['Sun','Mon','Tues','Wed','Thu','Fri','Sat'];
let last7Days = [];
for (let i = 0; i < 7; i++) {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - i);
  const dayName = daysOfWeek[currentDate.getDay()];
  last7Days.push(dayName);
}


// set day's name on chart column
let d_name = document.querySelectorAll('.d_name');

let last7Days_count = 6;
d_name.forEach(element => {
    element.innerHTML = last7Days[last7Days_count];
    last7Days_count--;
});

// set number's in last 7day's chart 
 let max_days_numbers = 0;
 numbers.forEach((single_num) => {
   const value = parseInt(single_num, 10);
   max_days_numbers = Math.max(max_days_numbers, value);
 });
 console.log(max_days_numbers);

 let all_uses_chart_div = document.querySelectorAll('.chart_div');
 let usese_number_span = document.querySelectorAll('.usese_number');

 let rever_set_num = 6;
 for (let i = 0; i < numbers.length; i++) {
   const value = parseInt(numbers[i], 10);
   const height = (value / max_days_numbers) * chart_div_height; 
   usese_number_span[rever_set_num].innerHTML = numbers[i];
   all_uses_chart_div[rever_set_num].style.height = height + 'px';
   rever_set_num--;
 }
