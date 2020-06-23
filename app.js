// //  chapter 21-25
// // Q1
// var firname = prompt("Enter first name ");
// var lasnam= prompt(" Enter last name");
// (firname +lasnam)
// alert(firname +lasnam);

// // Q2
// var mobmod = prompt("Enter Favourite Mobile Model");
// document.write("Your favourite phone is :" + mobmod+"<br>length of string:"+mobmod.length+"<br><br><br>");

// // Q3
// var worpa = ("Pakistani");
// document.write("<br>string:" + worpa);
// document.write("<br>Index of 'n':" + worpa.indexOf('n') + "<br>");

// // Q4
// var wordpa =("hello world")
// var lastindex = wordpa.lastIndexOf("l")
// document.write("String"+wordpa+"<br>"+"lastIndexOf'l'" +lastindex  +"<br><br>")
// // Q5 
// var cha = ("Pakistani")
// document.write("<br>String:" + cha)
// document.write("<br>Chracter at index" + cha.indexOf("i") + (":i<BR>"))

// // Q6
// var firname = prompt("Enter first name ");
// var lasnam = prompt(" Enter last name");
// var fulname = firname.concat(lasnam);
// alert(fulname);

// // Q7
// var city = ("Hyderabad");
// document.write("City: "+city+"<br>")
// var indxNum = city.indexOf('Hyder');
// var citytext = city.slice(0,indxNum);
// var replacingtext ='Islam';
// var citytet =city.slice(indxNum+5);
// document.write("After replacment: "+citytext +replacingtext+citytet)

// // Q8
//  var message = "Ali and Sami are best friends. They play cricket and football together.";
//  var message1 = message.replace(/and/g,"&");
//  document.write(message + "<br>" + message1 + "<br>" + message1 + "<br><br>");

// // Q9
//  var num = Number("472");
//  document.write("Value: " + num + "<br>Type: string<br>"+"Value: " + num + "<br>Type: number<br><br>");

// //  Q10
//  var uCase = prompt("Enter any word");
//  var uCase2 = uCase.toUpperCase();
//  document.write("User input: " + uCase + "<br>Upper case: " + uCase2 + "<br><br>");

// // Q11
// var titleCase = prompt("Enter any word");
// var firstletter = titleCase.slice(0,1)
// var otherletters = titleCase.slice(1)
// firstletter = firstletter.toUpperCase()
// otherletters = otherletters.toLowerCase()
// var titleCase2 = firstletter + otherletters;
// document.write("User input: " + titleCase + "<br>Title case: " + titleCase2 + "<br><br>");

// Q:12
// var num = 35.36;
// document.write(num.toString().replace(".",""));

// Q13
// var user = prompt("Enter Your Username ");
// for(i=0; i < user.length; i++){
//     if(user[i] === "!" || user[i] === "." || user[i] === "," || user[i] === "@"){
//         alert("Please Enter a Valid UserName ")
//         break
//     }   
// }
// document.write("<br />"+user);


// Q14
// var shop = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// // shop.toLowerCase()
// var matchfound = 'no';
// document.write(' Bakrey Items Available :  ', shop, '<br />');
// var ushop = prompt('Enter Bakery Item for search in Shop Available or not');
// for (i = 0; i < shop.length; i++) {
//     if (ushop === shop[i]) {
//         matchfound = 'yes';
//         break;
//     };
// };
// if (matchfound === 'no') {
//     alert('Item Not Available in Shop');
//     document.write('Item Not Available in Shop');
// } else {
//     alert(ushop, ' Available in Shop Thanks For Shopping');
//     document.write(ushop, ' Available in Shop Thanks For Shopping'+"<br><br><br>");
// };
// Q15
// var pass = prompt("Enter Your Password ");
// var i = 0;
// while(i < pass.length){
//     if (pass.length < 6){
//     alert("Your Password must be at least 6 characters long");
//     pass = prompt("Enter Your Password ");
    
//     }else if (pass[i] >=0 && pass[i]<=9){
//         alert("The first character of your password must be a letter");
//         pass = prompt("Enter Your Password ");    
        
//     } else if(pass.search(/[0-9]/) < 0){
//         alert("Enter Your Password Must Contain One Digit");
//         pass = prompt("Enter Your Password ");    
        
//     }else {
//         break;
//     }
// }

// Q16
// var university = "University of Karachi";
// var uni = university.split('');
// for (i=0; i < university.length; i++){
//     document.write('<br />',uni[i]);
// }
// chapter26 -30
// Q1
// var userin = prompt("Please Enter a positive integer", "Please Enter a positive integer")
// var a = Math.random(userin);
// var b = Math.round(userin);
// var c = Math.floor(userin)
// var d = Math.floor(userin)
// document.write("number"+a+"<br>round of value"+b+"<br>flooor value"+c+"<br>ciel value"+d+"<br><br><br>")

// // Q2
// var userin = prompt("Please Enter a negative integer", "Please Enter a negative integer")
// var a = Math.random(userin);
// var b = Math.round(userin);
// var c = Math.floor(userin)
// var d = Math.floor(userin)
// document.write("number"+a+"<br>round of value"+b+"<br>flooor value"+c+"<br>ciel value"+d+"<br><br><br>")

// Q3
// var s =(-4)
// var abs =Math.abs(s)
// var f =(5)
// var abf =Math.abs(5)
// document.write("The of absolute of "+s+" is "+abs+"<br>The of absolute of "+f+" is "+abf+"<br>")

// Q4
// var num = (4)
// var e =Math.random(num)*5
// var f =Math.floor(num)
// var num = (6)
// var e =Math.random(num)*7
// var h =Math.floor(num)
// document.write("random dice value  "+f+"<br>random dice value "+h)
// // Q5
// var coin = Math.floor( Math.random() * 2 ) +1;
// document.write('<br /><br />Random Dice Value : '+coin);
// if(coin === 2){
//     document.write('<br />Random Coin Value : Heads')
// } else{
//     document.write('<br />Random Coin Value : Tails')
// }

// Q6
// var coin = Math.floor( Math.random() * 100 ) +1;
// document.write('<br /><br />Random Dice Value : '+coin);

// // Q7
// var weight = prompt('Enter Your Weight in Kilograms ');
// document.write('<br /><br />The weight of user is : '+weight.replace("kgs","").replace("kg","").replace("kilograms","")+ ' Kilograms');

// Q8
// var rsceret = Math.floor(Math.random() * 10) +1;
// var guess = +prompt('Enter a Number Between 1 to 10 ');
// if(rsceret === guess){
//     alert('You Win!');
// } else{
//     alert('Try Again!');
// }
// // chapter 31 -34
// Q1
// var date = new Date();
// document.write(date + "<br>");

// Q2
// var d = new Date();
// var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// document.write('<br /><br /> Current Month : '+ month[d.getMonth()]);

// // Q3
// var week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// document.write('<br /><br />Today is '+ week[d.getDay()].substr(0,3));

// // Q4
// var dt = week[d.getDay()];
// if(dt === "Saturday" || dt === "Sunday"){
//     alert("It's Fun Day");
// } else {
//     alert("It's Working Day");
// }

// // Q5
// if(d.getDay()>=1 || d.getDay() <=15){
//     document.write('<br /><br />First Fifteen Days of the Month')
// }else {
//     document.write('<br /><br />Last Days of the Month<br>')
// }

// Q6
// var a = new Date();
// var b = getTime();
// var c =getMinutes();
// document.write("Current date" +a+"<br>Elapsed millisecondes since january<br>Elapsed minutes since january")
// Q7
// var hour = a.getHours();
// if(hour<12){
//     alert("It,s Am")
// }else ("its pm")
// Q8
// var d = new Date("klbfg");
// document.write(d)

// // Q9
// var rmd = new Date("06/18/2015");
// var cdate = new Date();
// var diff_t = cdate.getTime() - rmd.getTime();
// var diff_d = diff_t / (1000*60*60*24);
// alert(Math.round(diff_d)+' Days have passed since 1st Ramdan, 2015');
// document.write('<br /><br />',Math.round(diff_d),' Days have passed since 1st Ramdan, 2015');
// // Q10
// var dt = new Date("01/01/2020");
// var ddt = new Date();
// var milli = ddt.getTime() - dt.getTime();
// document.write('<br /><br />On reference date ',dt);
// document.write('<br>',milli);
// document.write('<br />'+Math.round(milli / (1000*60))+' Seconds had passed since begining of 2020')

// // Q11
// var dt = new Date();
// document.write('<br /><br />Current date ',dt);
// dt.setHours(dt.getHours() - 1);
// document.write('<br />1 hour ago, it was ',dt);

// Q:12
// var a = new Date();
// document.write("<br><br>current date: " + a);
// a.setFullYear(a.getFullYear() - 100);
// document.write("<br>100 years back, it was " + a);
// Q13
// function agecal(){
//     var dob = new Date(prompt("Enter your date of birth","Jan 1 ,1970"))
//     var dobmili = dob.getTime();
//     var today = new Date();
//     var todaymili= today.getTime();
//     var  diff= todaymili - dobmili;
//     var accuage = Math.floor(diff/(1000*60*60*24*30*12));
//     document.write(accuage);
// }
// agecal();

// Q14
// document.write("<h2>K-Electric bill</h2>")
// var custna =("NOMAN ARIF");
// var month =("february");
// var numb =410;
// var char = 16;
// var netam = numb *char
// var letpay = 350 
// var grossamo = netam +letpay
// document.write("Customer Name: "+"<b>"+custna+"</b><br>Month: "+"<b>"+month+"</b><br>"+"Number of units: "+"<b>"+numb+"</b><br>"+"Charges per unit: "+"<b>"+char+"</b>")
// document.write("<br>Net Amount Payabla (with in due date): <b>"+netam+"</b><br>Let Payment Surcharge:<b>  "+letpay+"</b><br>Gross Amount Payable (After Due Date): <b>"+grossamo )
// // Chapter 35 -38
// Q1    
// function greeting(greet){
//      document.write(greet)
// }
// greeting(new Date)

// Q2
// function greeting(){
// var a =prompt("Enter first name");
// var b= prompt("Enter last name");
// var c = (a +b)
// alert("Full name  "+c)
// }   
// greeting()

// Q3
// function add(){
//     var add =prompt("Enter Any two numbers");

// }
//  // Q5
// function ssquares(num) {
//     for (i=0; i<=num; i++){
//         var sum=0;
//         var j = i*i;
//         sum = j;
//         document.write('<br>Squares Number : '+sum);
//     }
//     document.write("<br><br>The sum of squares for numbers up to and including " +num+ " is " +sum ) ;
// }
// var num = +prompt("Enter a number for Squares :");
// ssquares(num);

// // Q6
// function factorial(x) { 
//     if (x === 0) {
//     return 1;
//     }
//     return x * factorial(x-1);
// }
// var fac = +prompt('Enter a Factorial Number ')
// document.write('<br><br>',factorial(fac),'<br><br>');

// // Q7
// function counting (startnum,endnum){
//     for (i=startnum; i <= endnum; i++){
//         document.write('<br>',i);
//     }
// }
// var startnum = +prompt('Enter a number for Start Counting ');
// var endnum = +prompt('Enter a number for End Counting ');
// document.write('<h2>Counting</h2>');
// document.write('Start Counting Number is : '+startnum+' End Counting Number is : '+endnum);
// counting(startnum,endnum);