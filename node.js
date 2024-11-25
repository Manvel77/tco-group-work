// ունենք թվային զանգված , զանգվածում թողնում ենք միայն այն թվերը որը մեկ անգամ կա;
// 1.ալգորիթմի տեսակը --->  O(N);
// 2.dont use ---> indexOF  or  lastIndexOf;
//օրինակ ֊֊»;

const arr = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9];

const count = {};

arr.forEach(function(num) {
    if (count[num] === undefined) {
        count[num] = 0;
    }
    count[num]++;
    // else{
    //  count[num]++ //sikel hakaraky
    // }
});

const result = arr.filter(function(num){
    return count[num] === 1
});
console.log(result);