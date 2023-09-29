'use strict'
// //1____________________________________________________________
// function signCheck(n1, n2, n3) {
//     // if (n1 === 0 || n2 === 0 || n3 === 0)
//     //     return 'unsigned'
//     // let s = 0;
//     // if (n1 < 0)
//     //     s++;
//     // if (n2 < 0)
//     //     s++;
//     // if (n3 < 0)
//     //     s++;
//     // if (s%2!==0)
//     //     return '-'
//     // else
//     //     return '+'

//     let obj = {
//         '1': '+',
//         '-1': '-',
//         'NaN': 'unsigned'
//     }
//     let p = n1 * n2 * n3;
//     let res = p / Math.abs(p);
//     return obj[res]
// }
// console.log('%cTask #1', 'color:red');
// console.log('-14, 5, 0 \u279C ', signCheck(-14, 5, 0));
// console.log('-8, 9, -6 \u279C ', signCheck(-8, 9, -6));
// console.log('4, 19, -2 \u279C ', signCheck(4, 19, -2));
// console.log('\n')


// //2____________________________________________________________
// function fib(n) {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }
// console.log('%cTask #2', 'color:red');
// console.log('0 \u279C ', fib(0))
// console.log('2 \u279C ', fib(2))
// console.log('10 \u279C ', fib(10))
// console.log('20 \u279C ', fib(20))
// console.log('\n')


// //3____________________________________________________________
// function orderArray(arr) {
//     let res = []
//     for (let val of arr)
//         res[val] = val;
//     let i = 0;
//     while (typeof res[i] === 'undefined') {
//         i++;
//     }
//     return res.slice(i);
// }
// console.log('%cTask #3', 'color:red');
// console.log('[4, 3, 0, 9] \u279C ', orderArray([4, 3, 0, 9]));
// console.log('[26, 30, 19, 5] \u279C ', orderArray([26, 30, 19, 5]));
// console.log('\n')


// //4____________________________________________________________
// function arraysSum(matrix) {
//     let res = []
//     for (let arr of matrix) {
//         let sum = arr.reduce((curr, next) => curr + next);
//         res.push(sum)
//     }

//     return res
// }
// console.log('%cTask #4', 'color:red');
// console.log('[[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]] \u279C ', arraysSum([[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]));
// console.log('[[8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0,-1]] \u279C ', arraysSum([[8, 35, 2], [8], [5, 6, -5, -6], [1, 3, -9, 0, -1]]));
// console.log('[[1], [2], [3], [4]] \u279C ', arraysSum([[1], [2], [3], [4]]));
// console.log('\n')


// //5____________________________________________________________
// function binaryToDecimal(binary) {
//     return parseInt(binary, 2)
// }
// console.log('%cTask #5', 'color:red');
// console.log('010 \u279C ', binaryToDecimal('010'));
// console.log('10010 \u279C ', binaryToDecimal('10010'));
// console.log('0101011 \u279C ', binaryToDecimal('0101011'));
// console.log('\n')


// //6____________________________________________________________
// function insertArray(mainArr, insertArr) {
//     return [mainArr[0], ...insertArr, mainArr[1]]
// }
// console.log('%cTask #6', 'color:red');
// console.log('[1, 10], [2, 3, 4, 5, 6, 7, 8, 9] \u279C ', insertArray([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
// console.log('[15, 150], [45, 75, 35] \u279C ', insertArray([15, 150], [45, 75, 35]));
// console.log('[[1, 2], [5, 6]], [[3, 4]]  \u279C ', insertArray([[1, 2], [5, 6]], [[3, 4]]));
// console.log('\n')


// //7____________________________________________________________
// function fac(num) {
//     let p = 1;
//     for (let i = 1; i <= num; i++) {
//         p *= i;
//     }
//     return p;
// }
// console.log('%cTask #7', 'color:red');
// console.log('5 \u279C ', fac(5))
// console.log('1 \u279C ', fac(1))
// console.log('7 \u279C ', fac(7))
// console.log('\n')


// //8____________________________________________________________
// function checkPass(pass) {
//     if (pass.length < 6 || pass.length > 16)
//         return false;
//     let validLowCase = false;
//     let validUpCase = false;
//     let validCharList = false;
//     let charList = '$#@';
//     for (let char of pass) {
//         if (char >= 'a' && char <= 'z')
//             validLowCase = true;
//         if (char >= 'A' && char <= 'Z')
//             validUpCase = true;
//         if (charList.includes(char))
//             validCharList = true;
//     }
//     return validLowCase && validUpCase && validCharList;
// }
// console.log('%cTask #8', 'color:red');
// console.log('12asdf \u279C ', checkPass('12asdf'));
// console.log('Aaza1234566# \u279C ', checkPass('Aaza1234566#'));
// console.log('\n')


// //9____________________________________________________________
// function checkPhoneNum(phoneNums) {
//     phoneNums = phoneNums.split(' ').join('');
//     if (phoneNums.length > 11 || phoneNums.length < 10)
//         return 'Bad number'
//     let digitsCount = 0;
//     let plusCount = 0;
//     for (let char of phoneNums) {
//         if (!isNaN(char))
//             digitsCount++;
//         else if (char === '+')
//             plusCount++;
//         return 'Bad number'
//     }
//     if (digitsCount !== 10) return 'Bad number';
//     if (plusCount > 1) return 'Bad number'
//     if (plusCount === 1 && phoneNums[0] === '+') return phoneNums.slice(1)
//     if (plusCount === 1 && phoneNums[0] !== '+') return 'Bad numbers';
//     return phoneNums
// }
// console.log('%cTask #9', 'color:red');
// console.log('"455678" \u279C ', checkPhoneNum('455678'));
// console.log('"339 5656888" \u279C ', checkPhoneNum('339 5656888'));
// console.log('"+0008989562" \u279C ', checkPhoneNum('+0008989562'));
// console.log('"45231489562" \u279C ', checkPhoneNum('45231489562'));
// console.log('"123+2356897452" \u279C ', checkPhoneNum('123+2356897452'));
// console.log('\n')


// //10____________________________________________________________
// function acronymConvert(phrase) {
//     return phrase.split(' ').map(item => item[0].toUpperCase()).join('');
// }
// console.log('%cTask #10', 'color:red');
// console.log('Prisoner of War \u279C ', acronymConvert('Prisoner of War'));
// console.log('Have a good night \u279C ', acronymConvert('Have a good night'));
// console.log('\n')


// //11____________________________________________________________
// function negativesProduct(arr) {
//     if (!Array.isArray(arr[0])) return 'invalid argument';
//     let res = arr.map(arr => arr.filter(item => item < 0).sort((b, a) => a - b));
//     let p = 1;
//     let noNegativeNum = true;
//     res.forEach(item => {
//         if (item.length !== 0) {
//             p *= item[0];
//             noNegativeNum = false;
//         }
//     })
//     return !noNegativeNum ? p : 'No negatives'
// }
// console.log('%cTask #11', 'color:red');
// console.log("[[2, -9, -3, 0], [1, 2], [-4 , -11, 0]] \u279C ", negativesProduct([[2, -9, -3, 0], [1, 2], [-4, -11, 0]]));
// console.log("[[3, 4], [11, 0], [5, 6, 7, 8]] \u279C ", negativesProduct([[3, 4], [11, 0], [5, 6, 7, 8]]));
// console.log("[1, 2, 3]  \u279C ", negativesProduct([1, 2, 3]));
// console.log('\n')


// //12____________________________________________________________
// function invertObj(obj) {
//     let valCount = {}
//     Object.values(obj).forEach(item => valCount[item] = (valCount[item] || 0) + 1);
//     for (let key in obj) {
//         let value = obj[key];
//         if (valCount[value] == 1) {
//             obj[value] = key;
//             delete obj[key];
//         }
//         else if (Array.isArray(obj[value])) {
//             obj[value].push(key);
//             delete obj[key];
//         }
//         else {
//             obj[value] = [key];
//             delete obj[key]
//         }
//     }
//     return obj
// }
// console.log('%cTask #12', 'color:red');
// console.log("{a: '1', b: '2' } \u279C ", invertObj({ a: '1', b: '2' }));
// console.log("{a: '1', b: '2', c: '2' } \u279C ", invertObj({ a: '1', b: '2', c: '2' }));
// console.log("{a: '1', b: '2', c: '2', d: '2' } \u279C ", invertObj({ a: '1', b: '2', c: '2', d: '2' }));
// console.log('\n')


// //13____________________________________________________________
// function sortBooks(books) {
//     return books.filter(item => item.readStatus).sort((a, b) => -a.percent + b.percent);
// }
// console.log('%cTask #13', 'color:red');
// console.log(`[
//   { book: "Catcher in the Rye", readStatus: true, percent: 40 },
//   { book: "Animal Farm", readStatus: true, percent: 20 },
//   { book: "Solaris", readStatus: false, percent: 90 },
//   { book: "The Fall", readStatus: true, percent: 50 },
//   { book: "White Nights", readStatus: false, percent: 60 },
//   { book: "After Dark", readStatus: true, percent: 70 },
// ] \u279C `, sortBooks([
//     { book: "Catcher in the Rye", readStatus: true, percent: 40 },
//     { book: "Animal Farm", readStatus: true, percent: 20 },
//     { book: "Solaris", readStatus: false, percent: 90 },
//     { book: "The Fall", readStatus: true, percent: 50 },
//     { book: "White Nights", readStatus: false, percent: 60 },
//     { book: "After Dark", readStatus: true, percent: 70 },
// ]));
// console.log('\n')


// //14____________________________________________________________
// function shallowCompare(obj1, obj2) {
//     if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//         return false
//     }
//     for (let key in obj1) {
//         if (key in obj2 && (obj1[key] === obj2[key])) {
//             return true
//         }
//         return false
//     }
//     return true
// }

// console.log('%cTask #14', 'color:red');
// console.log('{a: "1"}, {a: "1"} \u279C ', shallowCompare({ a: "1" }, { a: "1" }));
// console.log('{a: "1"}, {a: "1",b: "2"} \u279C ', shallowCompare({ a: "1" }, { a: "1", b: "2" }));
// console.log('{}, {} \u279C ', shallowCompare({}, {}));
// console.log('\n')


// //15____________________________________________________________
// function getAverageAge(users) {
//     return (users.reduce((curr, next) => curr + next.age, 0) / users.length).toFixed(1)
// }
// console.log('%cTask #15', 'color:red');
// console.log(` [
//     {
//        name: "John Doe",
//        age: 30,
//        isAdmin: false,
//     },
//     {
//        name: "Jane Smith",
//        age: 25,
//        isAdmin: true,
//     },
//     {
//        name: "Bob Johnson",
//        age: 40,
//        isAdmin: false,
//     },
// ] \u279C `, getAverageAge([
//     { name: "John Doe", age: 30, isAdmin: false, },
//     { name: "Jane Smith", age: 25, isAdmin: true, },
//     { name: "Bob Johnson", age: 40, isAdmin: false, },
// ]));
// console.log('\n')


// //16____________________________________________________________
// const cars = [
//     {
//         make: "Toyota",
//         model: "Corolla",
//         year: 2022,
//     },
//     {
//         make: "Honda",
//         model: "Civic",
//         year: 2023,
//     },
//     {
//         make: "Ford",
//         model: "Mustang",
//         year: 2021,
//     },
//     {
//         make: "Toyota",
//         model: "Camry",
//         year: 2023,
//     },
//     {
//         make: "Chevrolet",
//         model: "Silverado",
//         year: 2022,
//     },
//     {
//         make: "Toyota",
//         model: "Rav4",
//         year: 2023,
//     },
// ];
// // function showCarDetails(carsList, carName) {
// //     let details = '';
// //     carsList.forEach(item => {
// //         if (item.make.toLowerCase() === carName.toLowerCase()) {
// //             details += JSON.stringify(item).replaceAll('{', '').replaceAll('}', '') + ','
// //         }
// //     })
// //     return details.slice(0, details.length - 1)
// // }
// function showCarDetails(carsList, carName) {
//     let details = [];
//     carsList.forEach(item => {
//         if (item.make.toLowerCase() === carName.toLowerCase()) {
//             details.push(`"Make: ${item.make}, Model: ${item.model}, Year: ${item.year}"`)
//         }
//     })
//     return details.join(' , ')
// }
// console.log('%cTask #16', 'color:red');
// console.log(`Toyota \u279C `, showCarDetails(cars, 'Toyota'));
// console.log('\n')


// //17____________________________________________________________
// function rectsCompare(rect1, rect2) {
//     return rect1.width * rect1.height === rect2.width * rect2.height;
// }
// console.log('%cTask #17', 'color:red');
// console.log('{width: 5, height: 10,}, {width: 10, height: 5,} \u279C ', rectsCompare({ width: 5, height: 10, }, { width: 10, height: 5, }));
// console.log('{width: 5, height: 10,}, {width: 6, height: 8,} \u279C ', rectsCompare({ width: 5, height: 10, }, { width: 6, height: 8, }));
// console.log('{width: 10, height: 5,}, {width: 6, height: 8,} \u279C ', rectsCompare({ width: 10, height: 5, }, { width: 6, height: 8, }));
// console.log('\n')


// //18____________________________________________________________
// const bankAccount = {
//     accountNumber: "123456789",
//     balance: 1000,
//     accountHolder: "John Doe",
// };
// function deposit(account, money) {
//     if (money < 0) return 'Invalid deposit amount. Please deposit a positive amount'
//     account.balance += money;
//     return `Deposited $${money}. New balance:${account.balance}`
// }
// function withdraw(account, money) {
//     if (account.balance < money || money < 0) return 'Insufficient balance or invalid withdraw amount'
//     account.balance -= money;
//     return `Withdrew $${money}. New balance:${account.balance}`
// }
// console.log('%cTask #18', 'color:red');
// console.log(JSON.stringify(bankAccount));
// console.log('500 \u279C ', deposit(bankAccount, 500));
// console.log('-100 \u279C ', deposit(bankAccount, -100));
// console.log('200 \u279C ', withdraw(bankAccount, 200));
// console.log('5000 \u279C ', withdraw(bankAccount, 5000));


//__________________________________________________________________________________

// task 1
// function arraysConcat(arr1, arr2) {
//    return [...arr1, ...arr2]
// }
// console.log(arraysConcat([1, 2, 3, 4], [5, 6, 7, 8, 9]))

// //task 2
// function acronymConvert(phrase) {
//    return phrase.split(' ').map(item => item[0].toUpperCase()).join('');
// }
// console.log(acronymConvert('Prisoner of War'));
// console.log(acronymConvert('Have a good night'));


// // task 3
// function wordScore(word) {
//    let letterValues = {
//       a: 1,
//       a: 1,
//       e: 1,
//       i: 1,
//       o: 1,
//       u: 1,
//       l: 1,
//       n: 1,
//       r: 1,
//       s: 1,
//       t: 1,
//       d: 2,
//       g: 2,
//       b: 3,
//       c: 3,
//       m: 3,
//       p: 3,
//       f: 4,
//       h: 4,
//       v: 4,
//       w: 4,
//       y: 4,
//       k: 5,
//       j: 6,
//       x: 6,
//       q: 7,
//       z: 7
//    }
//    return word.split('').reduce((curr, next) => curr + letterValues[next], 0)
// }
// console.log(wordScore("aeioulnrst"))


// //task 4
// function getUserNames(users) {
//    return users.map(obj => obj.username)
// }
// console.log(getUserNames(
//    [
//       {
//          username: "Yuri Gagarin",
//          lang: "ru",
//       },
//       {
//          username: "Nil Armstrong",
//          lang: "ENG",
//       }
//    ]
// )
// );


// // task 5
// function getUsernameLengths(users) {
//    return users.map(({ username }) => username.length)
// }
// console.log(getUsernameLengths(
//    [
//       {
//          username: "Yuri Gagarin",
//          lang: "ru",
//       },
//       {
//          username: "Nil Armstrong",
//          lang: "ENG",
//       }
//    ]
// )
// );


// // task 6
// function parseInteger(arr) {
//    return arr.map(item => isNaN(+item) ? null : item)
// }
// console.log(parseInteger(["1", "px", "2323"]));


// //task 7
// function getNums(arr) {
//    return arr.filter(item => typeof item === 'number' && !isNaN(item))
// }
// console.log(getNums([1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166,
//    NaN]));


// //task 8
// function filterUsers(users) {
//    return users.filter(({ lang }) => lang !== 'ru')
// }
// console.log(filterUsers([
//    {
//       username: "Yuri Gagarin",
//       lang: "ru",
//    },
//    {
//       username: "Nil Armstrong",
//       lang: "ENG",
//    },
// ]));


// //task 9
// function filterByField(users, str) {
//    return users.filter(obj => obj[str])
// }

// console.log(filterByField([
//    {
//       username: "Yuri Gagarin",
//       lang: "ru",
//       isAstronaut: true,
//    },
//    {
//       username: "Nil Armstrong",
//       lang: "ENG",
//       isAstronaut: true,
//    },
//    {
//       username: "Elon Musk",
//       isAstronaut: false,
//    },
// ], "isAstronaut"));


// // task 10
// function sumNums(arr) {
//    return arr.reduce((curr, next) => next > 18 ? curr + next : curr, 0)
// }
// console.log(sumNums([1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43]));


// // task 11
// function getAverageAge(users) {
//    return users.reduce((curr, obj) => curr + obj.age, 0) / users.length
// }
// console.log(getAverageAge([
//    {
//       username: "Yuri Gagarin",
//       lang: "ru",
//       age: 56,
//    },
//    {
//       username: "Nil Armstrong",
//       lang: "ENG",
//       age: 54,
//    },
// ]));


// //task 12
// function sortBy(arr, type) {
//    if (typeof type === 'undefined')
//       return arr
//    if (type === 'Asc')
//       return arr.sort((a, b) => a - b)
//    if (type === 'Desc')
//       return arr.sort((a, b) => -a + b)
//    return 'Wrong type'
// }
// console.log(sortBy([4, 3, 2, 1], "Asc"));
// console.log(sortBy([4, 3, 2, 1]));
// console.log(sortBy([7, 8, 11, 66], "Desc"));


// console.log('%c________________________________________________________________', 'color:red');
// //task 13
// let arr = [1, 2, 3, 4, 5]
// console.log('ARRAY : ', arr)
// function fakeUnshift(arr, ...newVals) {
//    for (let i = arr.length - 1; i >= 0; i--)
//       arr[i + newVals.length] = arr[i]
//    for (let i = 0; i < newVals.length; i++)
//       arr[i] = newVals[i]
//    return arr.length
// }
// console.log('Unshift');
// console.log(fakeUnshift(arr, 10));
// console.log(arr);


// function fakeShift(arr) {
//    const firstElem = arr[0]
//    for (let i = 0; i < arr.length - 1; i++) {
//       arr[i] = arr[i + 1]
//    }
//    arr.length--
//    return firstElem
// }
// console.log('Shift');
// console.log(fakeShift(arr));
// console.log(arr);


// function fakePop(arr) {
//    if (arr.length === 0) return undefined
//    const lastElem = arr[arr.length - 1]
//    arr.length--;
//    return lastElem
// }
// console.log('Pop');
// console.log(fakePop(arr));
// console.log(arr);


// function fakePush(arr, newVal) {
//    arr[arr.length] = newVal
//    return arr.length
// }
// console.log('Push');
// console.log(fakePush(arr, 23));
// console.log(arr);


// function fakeForEach(arr, callback) {
//    for (let i = 0; i < arr.length; i++)
//       callback(arr[i], i, arr)
// }
// console.log('forEach');
// fakeForEach(arr, console.log)

// function fakeFindIndex(arr, callback) {
//    for (let i = 0; i < arr.length; i++)
//       if (callback(arr[i], i, arr))
//          return i
//    return -1
// }
// console.log('findIndex');
// console.log(fakeFindIndex(arr, (val) => {
//    return val === 1;
// }));


// function fakeFind(arr, callback) {
//    for (let i = 0; i < arr.length; i++)
//       if (callback(arr[i], i, arr))
//          return arr[i]
//    return
// }
// console.log('find');
// console.log(fakeFind(arr, (val) => {
//    return val > 4;
// }));


// function fakeEvery(arr, callback) {
//    for (let i = 0; i < arr.length; i++)
//       if (!callback(arr[i], i, arr))
//          return false
//    return true
// }
// console.log('Every')
// console.log(fakeEvery(arr, (val) => val > 0));


// function fakeSome(arr, callback) {
//    for (let i = 0; i < arr.length; i++)
//       if (callback(arr[i], i, arr))
//          return true
//    return false
// }
// console.log('Some')
// console.log(fakeSome(arr, (val) => val > 30));


// function fakeMap(arr, callback) {
//    let newArr = []
//    for (let i = 0; i < arr.length; i++)
//       newArr.push(callback(arr[i], i, arr))
//    return newArr
// }
// console.log('Map');
// console.log(fakeMap(arr, (val) => val * 10))


// function fakeFilter(arr, callback) {
//    let newArr = []
//    for (let i = 0; i < arr.length; i++)
//       if (callback(arr[i], i, arr))
//          newArr.push(arr[i])
//    return newArr
// }
// console.log('Filter');
// console.log(fakeFilter(arr, (val) => val > 1));


// function fakeReduce(arr, callback, initialValue) {
//    let startFrom = 0;
//    if (typeof initialValue === 'undefined') {
//       startFrom = 1;
//       initialValue = arr[0]
//    }
//    for (let i = startFrom; i < arr.length; i++) {
//       initialValue = callback(initialValue, arr[i], i, arr);
//    }
//    return initialValue
// }
// console.log('Reduce');
// console.log(fakeReduce(arr, (accum, val) => accum + val));


// function fakeSlice(arr, from = 0, to = arr.length) {
//    let newArr = []
//    if (from < 0)
//       from = arr.length - (-1 * from);
//    if (to < 0)
//       to = arr.length - (-1 * to);
//    for (let i = from; i < to; i++) {
//       newArr.push(arr[i])
//    }
//    if (Array.isArray(arr))
//       return newArr
//    return newArr.join('')
// }
// console.log('Slice');
// let arr3 = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(arr3.slice(-4, 6));


// function fakeSplice(arr, start, deleteCount, ...items) {
//    let deletedItems = []
//    for (let i = start; i < start + deleteCount; i++) {
//       deletedItems.push(arr[i])
//    }
//    for (let i = start; i < arr.length; i++) {

//    }
//    return deletedItems
// }


// function fakeFlat(arr) {
//    let newArr = [];
//    for (let val of arr) {
//       if (Array.isArray(val))
//          newArr.push(...fakeFlat(val))
//       else
//          newArr.push(val)
//    }
//    return newArr
// }
// console.log('FLAT');
// let mainArr = [1, [2, 3, [4, 5]], 6];
// console.log(fakeFlat(mainArr));











// const goods = [
//    {
//       name: 'butter',
//       price: 1000,
//       promotion: 5,
//    },
//    {
//       name: 'milk',
//       price: 700,
//       promotion: 10,
//    },
//    {
//       name: 'birthday candles',
//       price: 500,
//       promotion: 10,
//    },
//    {
//       name: 'fruits',
//       price: 25000,
//       promotion: 15,
//    },
//    {
//       name: 'kleenex',
//       price: 4000,
//       promotion: 24,
//    }
// ]

// const disGoods = goods.map(({ price, promotion, name }) => ({
//    name, promotion, price: price - (price * promotion / 100) + '$'
// }));
// console.log(disGoods);



// _______________________12.08_______________________________


// function minsArray(matrix) {
//     let res = []
//     for (let i = 0; i < matrix.length; i++) {
//         console.log(matrix[i]);
//         res.push(Math.min(...matrix[i]))
//     }
//     return res
// }
// console.log(minsArray([[1, 2, 3, 4, 5], [0, 1], [99, 999, 9999]]));

// let seconds = 0;
// let hh = Math.trunc(seconds / 3600) + '';
// let mm = Math.trunc(seconds / 60) - hh * 60 + '';
// let ss = seconds - mm * 60 - hh * 3600 + '';
// let strHH = hh.length === 1 ? '0' + hh:hh;
// let strMM = mm.length === 1 ? '0' + mm:mm;
// let strSS = ss.length === 1 ? '0' + ss:ss;
// console.log(`${strHH}:${strMM}:${strSS}`);


// function isWordIncluded(matrix, word) {
//     //left to right
//     let res = '';
//     for (let i = 0; i < matrix.length; i++) {
//         res = ''
//         for (let j = 0; j < matrix[i].length; j++)
//             res += matrix[i][j]
//         if (res.includes(word)) return true
//     }

//     //right to left
//     for (let i = 0; i < matrix.length; i++) {
//         res = ''
//         for (let j = matrix[i].length - 1; j >= 0; j--)
//             res += matrix[i][j]
//         if (res.includes(word)) return true
//     }

//     //top to bottom
//     for (let i = 0; i < matrix[0].length; i++) {
//         res = ''
//         for (let j = 0; j < matrix.length; j++) {
//             res += matrix[j][i]
//         }
//         if (res.includes(word)) return true
//     }

//     //bottom to top
//     for (let i = 0; i < matrix[0].length; i++) {
//         res = ''
//         for (let j = matrix.length - 1; j >= 0; j--) {
//             res += matrix[j][i]
//         }
//         if (res.includes(word)) return true
//     }
//     return false
// }


// let matrix = [
//     ['b', 'a', 'c'],
//     ['a', 'x', 'o'],
//     ['n', 'e', 'o'],
//     ['f', 'k', 'n']
// ]

// console.log(isWordIncluded(matrix, 'axe')); //true
// console.log(isWordIncluded(matrix, 'bac')); //true
// console.log(isWordIncluded(matrix, 'no'));  //true
// console.log(isWordIncluded(matrix, 'xa'));  //true
// console.log(isWordIncluded(matrix, 'xe'));  //true

// console.log(8);
// function curry(func) {
//     return function curried(...args) {
//         let argsLen = args.length;
//         let funcLen = func.length;
//         if (argsLen >= funcLen) {
//             return func(...args)
//         }
//         return function (...otherArgs) {
//             let others=otherArgs;
//             return curried(...args, ...otherArgs)
//         }
//     }
// }
// function add(x, y, z) {
//     return x + y + z
// }
// let curried = curry(add);
// console.log(curried(1)(2)(3));

// function foo(){console.log('hello')}
// console.log(5) || foo()

// let obj = {
//     name: 'Tyom',
//     age: 23,
//     gender: 'male',
//     nums: '+37493077298',
//     toString() {
//         return this.name
//     },
//     valueOf() {
//         return this.age
//     },
//     [Symbol.toPrimitive](hint) {
//         switch (hint) {
//             case 'string':
//                 return this.gender;
//             case 'number':
//                 return this.nums;
//             default:
//                 return this.gender + this.nums+' '
//         }
//     }
// }

// let obj2={}

// let privateVariable = (val = 0) => {
//     let _privateVar = val
//     return {
//         get() { return _privateVar },
//         set(newVal) { _privateVar = newVal }
//     }
// }



// function curry(func) {
//     return function curried(...args) {
//         let argsLen = args.length;
//         let funcLen = func.length
//         if (args.length >= func.length) {
//             return func(...args)
//         }
//         return function (...otherArgs) {
//             return curried(...args, ...otherArgs)
//         }
//     }
// }
// function add(x, y, z) {
//     return x + y + z
// }
// let curried = curry(add);
// console.log(curried(1)(2)(3));
// console.log(curried(1)(2, 3));
// console.log(curried(1, 2, 3));


// Write a recursive function to calculate the sum of an array of numbers
// function sum(arr) {
//     if (!arr.length)
//         return 0
//     return arr[0] + sum(arr.slice(1))
// }
// console.log(sum([1, 2, 3, 4]));

// const elfActions = {
//     fight() {
//         return `fight using ${this.weapon}`;
//     },
// };

// function createElf(name, weapon) {
//     const newElf = Object.create(elfActions);
//     newElf.name = name;
//     newElf.weapon = weapon;

//     return newElf;
// }
// const elfThranduil = createElf('Thranduil', 'arch and bow');
// console.log(elfThranduil)
// console.log(elfThranduil.fight())



// 'use strict'

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.stomach = [];
// }

// Person.prototype.eat = food => {
//     if (stomach.length < 10) {
//         this.stomach.push(food);
//     }
// }

// Person.prototype.poop = function () {
//     this.stomach.length = 0;
// }

// Person.prototype.toString = () => `${this.name}, ${this.age}`;

// const valodik = new Person('Volodya', 64);

// console.log(valodik.toString());


//Write a recursive function to perform a binary search on a sorted array.

// function binarySearch(arr, searchNum, leftIndex = -1, rightIndex = arr.length) {
//     if (!arr.length) return false
//     const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//     if (rightIndex - leftIndex > 1) {
//         if (arr[middleIndex] === searchNum)
//             return middleIndex
//         if (searchNum < arr[middleIndex]) {
//             rightIndex = middleIndex;
//             return binarySearch(arr, searchNum, leftIndex, rightIndex)
//         }
//         leftIndex = middleIndex
//         return binarySearch(arr, searchNum, leftIndex, rightIndex)
//     }
//     return false
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(binarySearch(arr, 4));



// function combinationUtil(arr, data, start, end, index, r) {
//     // Current combination is ready to be printed, print it
//     let res = []
//     if (index == r) {
//         for (let j = 0; j < r; j++) {
//            res.push(data[j]);
//         }
//     }

//     // replace index with all possible elements. The condition
//     // "end-i+1 >= r-index" makes sure that including one element
//     // at index will make a combination with remaining elements
//     // at remaining positions
//     for (let i = start; i <= end && end - i + 1 >= r - index; i++) {
//         data[index] = arr[i];
//         res.push(combinationUtil(arr, data, i + 1, end, index + 1, r));
//     }
//     return res
// }

// // The main function that prints all combinations of size r
// // in arr[] of size n. This function mainly uses combinationUtil()
// function printCombination(arr, n, r) {
//     // A temporary array to store all combination one by one
//     let data = new Array(r);

//     // Print all combination using temporary array 'data[]'
//     return combinationUtil(arr, data, 0, n - 1, 0, r);
// }

// /*Driver function to check for above function*/
// let arr = [1, 2, 3, 4, 5];
// let r = 3;
// let n = arr.length;
// console.dir(printCombination(arr, n, r));



// Javascript program to print all
// combination of size r in an array of size n

/* arr[] ---> Input Array
data[] ---> Temporary array to store current combination
start & end ---> Starting and Ending indexes in arr[]
index ---> Current index in data[]
r ---> Size of a combination to be printed */
// function combinationUtil(arr, data, start, end, index, r) {
//     // Current combination is ready to be printed, print it
//     let res = []
//     if (index == r) {
//         for (let j = 0; j < r; j++) {
//             res.push(data[j]);
//         }
//         return res;
//     }

//     // replace index with all possible elements. The condition
//     // "end-i+1 >= r-index" makes sure that including one element
//     // at index will make a combination with remaining elements
//     // at remaining positions
//     for (let i = start; i <= end && end - i + 1 >= r - index; i++) {
//         data[index] = arr[i];
//         res.push(combinationUtil(arr, data, i + 1, end, index + 1, r));
//     }
//     return res
// }

// // The main function that prints all combinations of size r
// // in arr[] of size n. This function mainly uses combinationUtil()
// function printCombination(arr, n, r) {
//     // A temporary array to store all combination one by one
//     let data = new Array(r);

//     // Print all combination using temporary array 'data[]'
//     return combinationUtil(arr, data, 0, n - 1, 0, r);
// }

// /*Driver function to check for above function*/
// let ars = [1, 2, 3, 4, 5];
// let ri = 3;
// let len = ars.length;
// console.log(printCombination(ars, len, ri).flat(2));


// function combinations(arr, s, result = [], current = [], start = 0) {
//     if (current.length === s) {
//         result.push([...current]);
//     }
//     for (let i = start; i < arr.length; i++) {
//         current.push(arr[i]);
//         combinations(arr, s, result, current, i + 1);
//         current.pop();
//     }
//     return result;
// }



//code to explain

// /**
//  * Returns all possible combinations of N elements in a given array
//  * @param {Array} arr - The input array
//  * @param {Number} N - The number of elements to choose
//  * @param {Array} result - The array to store the result
//  * @param {Array} current - The current combination
//  * @param {Number} start - The start index for the next element to choose
//  */
// function combinations(arr, N, result = [], current = [], start = 0) {
//     if (current.length === N) {
//         result.push(current.slice());
//         return;
//     }
//     for (let i = start; i < arr.length; i++) {
//         current.push(arr[i]);
//         combinations(arr, N, result, current, i + 1);
//         current.pop();
//     }
//     return result;
// }

// // Example usage:
// const arr = [1, 2, 3, 4];
// const N = 2;
// const result = combinations(arr, N);
// console.log(result); // [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]


// Sure! The `combinations` function is a recursive function that generates all possible combinations of `N` elements from a given input array`arr`.The function takes the input array`arr`, the number of elements to choose`N`, and optional parameters`result`, `current`, and`start` that are used internally by the function.

// The function works by maintaining a list of the current combination of elements in the`current` array.It starts by checking if the length of the `current` array is equal to`N`.If it is, then the current combination is complete and a copy of it is added to the `result` array.

// If the current combination is not complete, the function iterates over the remaining elements in the input array starting from the `start` index.For each element, it is added to the `current` combination and the function is called recursively with an incremented `start` index to choose the next element.After the recursive call returns, the last added element is removed from the `current` combination using the `pop` method to backtrack and try other combinations.

// The function continues to recursively choose elements and backtrack until all possible combinations have been generated.Finally, it returns the `result` array containing all combinations.

// I hope this explanation helps you understand how the code works.Is there anything else you would like to know ? 😊


// Sure! Here is a more detailed explanation of how the combinations function works:

// The combinations function takes an input array arr, the number of elements to choose N, and optional parameters result, current, and start that are used internally by the function. The result parameter is an array that stores all the generated combinations. The current parameter is an array that stores the current combination being generated. The start parameter is an index that indicates the start position in the input array for choosing the next element.

// The function starts by checking if the length of the current array is equal to N. If it is, then the current combination is complete and a copy of it is added to the result array using the push and slice methods. The slice method is used to create a shallow copy of the current array so that any changes made to it later do not affect the stored combination.

// If the current combination is not complete, the function enters a loop that iterates over the remaining elements in the input array starting from the start index. For each element, it is added to the end of the current array using the push method. Then, the function calls itself recursively with an incremented start index to choose the next element. This recursive call generates all combinations that include the current element.

// After the recursive call returns, the last added element is removed from the end of the current array using the pop method. This backtracks to remove the current element from the combination so that other combinations can be generated without it.

// The function continues to recursively choose elements and backtrack until all possible combinations have been generated. When all combinations have been generated, it returns the result array containing all combinations.

// hasMembersThatSumTo(list, total):
//     if total == 0
//         return true
//     else if total < 0 or list is empty
//         return false
//     else
//         int first = list.pop
//         return hasMembersThatSumTo(list, total - first)
//             or hasMembersThatSumTo(list, total)


// function subset(arr, total) {
//     if (total === 0) return true
//     else if (total < 0 || !arr.length) return false
//     else {
//         let first = list.pop();
//         return subset(arr, total - first)
//     }
// }


// class Shiritori {
//     #words = [];
//     #game_over = false;
//     play(word) {
//         if (this.#game_over)
//             return 'Game is over, restart it!'
//         if (typeof word !== 'string' || word.replaceAll(' ', '').length < 2)
//             return "Word's type must be string and length greater than 1"
//         const len = this.#words.length;
//         const wordToPush = word.toLowerCase();
//         if (!len || this.#words[len - 1].at(-1) === wordToPush[0] && !this.#words.includes(wordToPush)) {
//             this.#words.push(wordToPush)
//             return this.#words
//         }
//         else {
//             this.#game_over = true;
//             return 'Game over!'
//         }
//     }
//     restart() {
//         this.#words = [];
//         this.#game_over = false
//         return 'Game restared!'
//     }
//     get words() {
//         return this.#words
//     }
//     get status() {
//         return this.#game_over ? 'Game is finished' : "Game isn't finished"
//     }
// }

// let newShiritori = new Shiritori();
// console.log(newShiritori.play('hello'));
// console.log(newShiritori.play('ohayo'));
// console.log(newShiritori.words);
// console.log(newShiritori.status);


// console.log(newShiritori.play('boom'));
// console.log(newShiritori.words);
// console.log(newShiritori.status);



// class Animal {
//     #energy = 10;
//     constructor(jungle) {
//         if (this instanceof Tiger)
//             jungle.push(this)
//     }
//     get energy() {
//         return this.#energy
//     }
//     set energy(val) {
//         if (val < 0)
//             console.log(`${this.type} doesn't have enough energy`)
//         else
//             this.#energy = val;
//     }
// }

// class Tiger extends Animal {
//     constructor(jungle) {
//         super(jungle)
//         this.type = 'tiger'
//     }
//     eat() {

//     }
// }

// const jungle = []
// const tiger1 = new Tiger(jungle)
// tiger1.eat()
// console.log(jungle)



const getWeekOfMonth = (date) => {
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let newDate = new Date(year, month, 1)

  let week = 1;
  let weekDay = newDate.getDay();
  for (let i = 1; i <= day; i++) {
    if (weekDay === 7) {
      week++;
      weekDay = 1
    }
    else {
      weekDay++
    }
  }

  return week
};
console.log('2017, 11, 9', getWeekOfMonth(new Date(2017, 10, 9)));
console.log('2023, 10, 23', getWeekOfMonth(new Date(2023, 9, 23)));
console.log('2023, 6, 15', getWeekOfMonth(new Date(2023, 5, 15)));
console.log('2023, 8, 19', getWeekOfMonth(new Date(2023, 7, 19)));



