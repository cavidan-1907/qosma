// const array2 = [1, 2, 3, 4, 5];
// const array3=[];
// for (let i = 0; i < array2.length; i++) {
//     array3.push(array2[i]);
// }

// for (let i = 0; i < array2.length; i++) {
//     array3.push(array2[i]**2);
// }
// console.log(array3);

//1. object yaradin (adi bir sexsin adi olsun)
//2.objectin name,maas,heigt adli keyleri ve uygun value olsun
//3. objektin icinde bki hesablayan funksiya yazin


// const Cavidan={

// ad:"Cavidan",
// kutle : 74,
// boy : 1.80,
// bki : function(){
//     const bk= this.kutle/(this.boy**2);
//     return bk.toFixed(0)
// }

// }
// console.log(Cavidan.bki());


//hesablari bir arrayda saxla (verilecek);
//50-330  15 %; diger hallarda 20%
// // cayvoylari hesablayib bir arraya yig;
// //umumi odenecek meblegleri bir arraya yig;



// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// let tipcalculataor = function (hesab) {
//     tips = [];
//     total = [];

//     for (let i = 0; i < hesab.length; i++) {
//         if (hesab[i] >= 50 && hesab[i] <= 300) {
//             let bexsis = hesab[i] * 0.15;
//             tips.push(bexsis);
//             total.push(bexsis + hesab[i]);
//         }
//         else {
//             let bexsis = hesab[i] * 0.2;
//             tips.push(bexsis);
//             total.push(bexsis + hesab[i]);
//         }
//     }

//     let s = 0;
//     for (let i = 0; i < total.length; i++) {
//         s = s + total[i];
//     }
//     let ortalama = s / total.length;
//     return [total, tips, ortalama]
// }
// console.log(tipcalculataor(bills));



// function calculateTipsAndTotals(bills) {
//     let tips = [];
//     let totals = [];
//     let sumTotal = 0;

//     for (let i = 0; i < bills.length; i++) {
//         let percentage = 0.15;

//         if (bills[i] >= 50 && bills[i] <= 300) {
//             percentage = 0.15;
//         } else {
//             percentage = 0.2;
//         }

//         let tip = bills[i] * percentage;
//         let total = bills[i] + tip;

//         tips.push(tip);
//         totals.push(total);
//         sumTotal += total;
//     }

//     let averageTotal = sumTotal / totals.length;

//     return {
//         tips,
//         totals,
//         averageTotal
//     };
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const result = calculateTipsAndTotals(bills);

// console.log("Tips:", result.tips);
// console.log("Totals:", result.totals);
// console.log("Average Total:", result.averageTotal);



// const person = {
//     name: 'John',
//     age: 30,
//     job: 'Engineer'
// };

// for (let key in person) {
//     console.log(person);
// }


const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
    console.log(number,numbers);
}
