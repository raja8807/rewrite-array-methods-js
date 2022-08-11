let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = ["a", "b", "c", "d", "e", "f"]


function mySlice(array, start, end) {
    let newArr = [];

    let index = 0;
    for (let i = start; i < end; i++) {
        newArr[index] = array[i]
        index++
    }

    return newArr
}

// console.log(mySlice(arr,2,5));

function myShift(array) {
    let newArr = []
    let index = 0;
    for (let i = 1; i < array.length; i++) {
        newArr[index] = array[i]
        index++
    }
    return newArr
}

console.log(myShift(arr))


function myToString(array) {
    let str = array[0];
    for (let i = 1; i < array.length; i++) {
        str = str + "," + array[i];
    }
    return str
}

// console.log(myToString(arr));

function myJoin(array, seperator) {
    let str = array[0];
    for (let i = 1; i < array.length; i++) {
        str = str + seperator + array[i];
    }
    return str
}

// console.log(myJoin(arr2,"+"));

function myReverse(array) {
    let newArr = []
    let index = 0;
    for (let i = array.length - 1; i >= 0; i--) {
        newArr[index] = array[i]
        index++;
    }
    return newArr;
}

// console.log(myReverse(arr));

function myFill(array, value, start, end) {
    for (let i = start; i < end; i++) {
        array[i] = value
    }
    return array
}

// console.log(myFill(arr,"red",1,3));

function myIncludes(array, value, index) {
    if (array[index] == value) {
        return true
    } else {
        return false
    }
}

// console.log(myIncludes(arr2,"b",1));

function fun(item) {
    console.log(item + " hi");
}

function myForEach(array, foo) {
    for (let i = 0; i < array.length; i++) {
        foo(array[i])
    }
}

// myForEach(arr2,fun)

function myConcat(array1, array2) {
    let newArr = []
    let index = 0;
    for (let i = 0; i < array1.length; i++) {
        newArr[index] = array1[i]
        index++
    }

    for (let i = 0; i < array2.length; i++) {
        newArr[index] = array2[i]
        index++
        // console.log(index);
    }
    return newArr;
}

// console.log(myConcat(arr,arr2));

function myIndexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return i;
        }
    }
    return -1;
}

// console.log(myIndexOf(arr2,"a"));

let x = {
    0: 1,
    1: 2
}

function myIsArray(array){
    if(typeof array == "object"){
        if(typeof array.length == "number"){
            return true
        }else{
            return false
        }
    }else{
        return false
    }
}

// console.log(myIsArray(arr2));
// console.log(myIsArray(x));

function myMap(array,foo){
    let newArr = [];
    let index = 0;
    for(let i = 0; i<array.length;i++){
        newArr[index] = foo(array[i]);
        index++
    }
    return newArr;
}

function add2(item){
    let sum = item + 2
    return sum
}

// console.log(myMap(arr,add2));



