/**
arr.push(item); //add item to the end of the array
arr.pop(); // remove the last element from an array
arr.shift(); //extract an item from the beginning
arr.unshift(...item); //add item to the beginning


thêm 1 phần tử vào đầu mảng -> đẩy vị trí các index

splice: remove element
arr.splice(start, deleteCount, replace);
arr.splice(start, deleteCount);

slice: return a copy section of array;
arr.slice(start, end); 

concat: match string to the end of the array 
arr.concat(start,end);
 */
/**
//forEach

let arr = [1,2,3];
            0 1 2
    arr.forEach(item, index, array){
        //do something
    }
 */

let arrtest = ["i", "love", "u"]
arrtest.forEach(function(el, index) {
    el + index;
});
//searching in array
//indexOf, lastIndexOf and includes
let arr2 = [2, 0, 10, "lan", false, 2];
//tim kiem so 2 trong danh sach mang arr2
arr2.indexOf(2); //0    - tìm phần tử từ đầu mảng
arr2.lastIndexOf(2) //5   - tìm phân tử từ cuối mảng
arr2.includes(2); //true   - xem phần tử có tồn tại trong mảng hay không
arr2.includes(200); //false

function searchValue(value, arr) {
    if (typeof arr !== "object") return;
    arr.indexOf(value) !== -1 ?
        console.log(`phan tu ${value} nam o vi tri so ${arr.indexOf(value)} trong mang`) :
        console.log(`gia tri ${value} khong ton tai trong mang`);
}
//find and finđIndex
let users = [
    { id: 1, name: "J" },
    { id: 2, name: "K" },
    { id: 3, name: "M" },
];
//arrow function
() => console.log(123);
let user = users.find((item) => item.id === 2);
console.log(user);
user.name //U
user.id //2

let user2 = users.findIndex((item) => item.id === 2);
//return index nếu tìm thấy, người lại thì nó sẽ trả về là -1

//filter
let arr3 = [1, 3, 4, 5];
arr3.filter(el => el > 2); //3, 4, 5
//map, sort...


//btvv
/*
    b1: viết function chuyển đổi nhận vào một tham số là string
    function convertText(param){
        //do something
    }
    convertText(background-color) ==> backgroundColor
    convertText(font-style) ==> fontStyle
*/
function convertText(param) {
    let result = param[0];
    for (let i = 1; i < param.length; i++) {
        if ((param[i] !== '-') && (param[i - 1] !== '-')) {
            result += param[i];
        } else if (param[i] === '-') {
            result += param.charAt(i + 1).toUpperCase();
        }
    }
    console.log(result);
}
convertText("font-style")
convertText("background-color")
    /**
        b2: filter
        let arr = [2, 1, 7, 10, 20];
        function getNumber(arr, start, end){
            //do something
        }
        // in ra những số nằm trong khoảng start đến end và không làm thay đổi mảng gốc
        getNumber(arr, 0, 7) // [2, 1, 7]
        getNumber(arr, 10, 15) // [10]
     */
let arrb2 = [2, 1, 7, 10, 20];

function getNumber(arr, start, end) {
    console.log(arr.filter(el => start <= el && el <= end));
}
getNumber(arrb2, 0, 7); // [2, 1, 7]
getNumber(arrb2, 10, 15); //10;

/**
    b3:
    let arr = [5,3,8,1];
    function getNumber(arr, start, end){
        //do something
    }
    // in ra những số nằm trong khoảng start đến end và làm thay đổi mảng gốc
    getNumber(arr,1, 4); //[3,1]
 */
let arrb3 = [5, 3, 8, 1];

function getNumber2(arr, start, end) {
    let k = arr.filter(el => start <= el && el <= end)
    for (let i = 0; i < k.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (k[i] == arr[j])
                arr.splice(j, 1);
        }
    }
    console.log(k);
}
getNumber2(arrb3, 1, 4);
/*
    b4: method sort
    let arr=[5, 2, 1, -20, 8];
    viết 1 function sắp xếp mảng trên theo thứ tự giảm dần [8,5,2,1,-20]
*/
let arrb4 = [5, 2, 1, -20, 8];

function sortNumber(arr) {
    console.log(arr.sort((a, b) => b - a));
}
sortNumber(arrb4);
/*
    b5: sao chép một mảng mà không làm ảnh hưởng đến mảng gốc
    let arr = [""xin", "chao","viet"];
    viết một function sao chép cho trước và trả về một mảng mới
*/
let arrb5 = ["xin", "chao", "viet"];

function copyArr(arr) {
    let map1 = arr.map(x => x);
    console.log(map1);
}
copyArr(arrb5);
/*
    b6: duyệt mảng và trả về mảng mới với nhân đôi giá trị với method map
    arr = [2, 3, 5, 6];
    => [4,6,10,12];
*/
let arrb6 = [2, 3, 5, 6];

function doubleArray(arr) {
    let map2 = arr.map(x => x * 2);
    console.log(map2);
}
doubleArray(arrb6);
/*
    b7: suffle(đảo ngược) thay đổi random các vị trí trong array 
    let arr=[1,2,3];
    suffle(arr) // [3,2,1]
    suffle(arr) // [2,1,3]
    suffle(arr) // [1,3,2]
*/
let arrb7 = [1, 2, 3];

function suffle(arr) {
    console.log(arr.sort(() => Math.random() - 0.5));
}
suffle(arrb7);
suffle(arrb7);
suffle(arrb7);
/*
    b8:
    let Lan= {
        name:'Lan',
        age: 20
    }
    let Hung={
        name: 'Hung',
        age: 18
    }
    let Mai = {
        name: 'Mai',
        age: 22
    }
    let arr = [Lan, Hung, Mai]

    expect: viết function calAverageAge(arr); //(20+18+22)/3 => ?
*/
let Lan = {
    name: 'Lan',
    age: 20
}
let Hung = {
    name: 'Hung',
    age: 18
}
let Mai = {
    name: 'Mai',
    age: 22
}
let arrb8 = [Lan, Hung, Mai]

function calAverageAge(arr) {
    let sum = 0,
        total = 0;
    for (let key in arr) {
        sum += arr[key].age;
        total++;
    }
    console.log(sum / total);
}
calAverageAge(arrb8);
/*
    b9:
    let arr = ["tien", "tung,"thap","thao","hue","tien","thap","hue","mai"]
    getUnique(arr); // tung,thao,mai
*/
let arrb9 = ["tien", "tung", "thap", "thao", "hue", "tien", "thap", "hue", "mai"];

function getUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
        let check = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (check !== arr[j]) {
                continue;
            } else if (check === arr[j]) {
                arr.splice(j, 1);
                arr.splice(i, 1);
            }
        }
    }
    console.log(arr);
}
getUnique(arrb9);