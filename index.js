let numbers = [];
let numbers1 = [];
let numbersint = [];


function addNumber() {
   // DOM
let number = +document.getElementById("number").value;
   // thêm số vào mảng
numbers.push(number);
document.getElementById("showInfoTotal").innerHTML = "Các số vừa nhập là : " + numbers;
}

// 1. Tổng các số dương trong mảng.
function sum() {
    let total = 0;
    for (let i = 0;  i < numbers.length; i++) {
        if (numbers[i] > 0 ) {
            total += numbers[i];
        }
    }
    document.getElementById("sum").innerHTML = "Tổng các số dương là : " + total;
}
// 2. Đếm có bao nhiêu số dương trong mảng.
function count() {
    let number = 0;
    for (let i = 0;  i < numbers.length; i++) {
        if (numbers[i] > 0 ) {
            number++;
        }
    }
    document.getElementById("count").innerHTML = "Có tất cả " + number + "  số dương" ;
}
// 3. Tìm số nhỏ nhất trong mảng.
function min() {
    let number = numbers[0];
    for (let i = 1;  i < numbers.length; i++) {
        if (numbers[i] < number ) {
            number = numbers[i];
        }
    }
    document.getElementById("min").innerHTML = "Số nhỏ nhất là: " + number ;
}
// 4. Tìm số dương nhỏ nhất trong mảng.
function minInt() {
    let number = [];
    for (let i = 0;  i < numbers.length; i++) {
        if (numbers[i] > 0 ) {
            number.push(numbers[i]);
        }
    }
    let number1 = number[0];
    if (number.length >0 ) {
        for (let i=1; i < number.length; i++) {
            if (number[i] < number1) {
                number1 =number[i];
            } 
        }
    }else  {
        number1 = "không có số dương nào trong mảng";
    }
    document.getElementById("minInt").innerHTML = "Số dương nhỏ nhất là: " + number1 ;
}
// 5. Tìm số chẵn cuối cùng trong mảng.
function find() {
    let number = 0;
    for (let i = 0;  i < numbers.length; i++) {
        if (numbers[i] %2 == 0 && numbers[i] >= 0) {
            number = (numbers[i]);
        }
    }
    document.getElementById("find").innerHTML = "Số chẵn cuối cùng là: " + number ;
}
// 6. Đổi chỗ 2 giá trị trong mảng theo vị trí
function change() {
    let inputs1 = +document.getElementById("input1").value;
    let inputs2 = +document.getElementById("input2").value;

    let numbers2 = numbers;
    let number2 = numbers2[inputs1];
    numbers2[inputs1] = numbers2[inputs2];
    numbers2[inputs2] = number2;

    document.getElementById("change").innerHTML = "Mảng sau khi đổi chỗ là:  " + numbers2 ;
}
// 7. Sắp xếp mảng theo thứ tự tăng dần.
function swap() {
        let sortUp= numbers.sort((a, b) => a - b);
        document.getElementById("swap").innerHTML =   "Mảng sau khi sắp xếp là : " + sortUp;     
}
// 8. Tìm số nguyên tố đầu tiên trong mảng.
function check(number){
    let SNT = true;
    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0){
            SNT = false;
            break;
        }
    }
    return SNT;
}
function findPrime() {
    let number = "";
    for (let i = 0; i < numbers.length; i++) {
        let Prime = check(numbers[i]);
        if(Prime && numbers[i] > 1) {
            number = numbers[i];
        break;
        }  else {
            number = "-1";
        }
    }

    document.getElementById("findPrime").innerHTML = "Số nguyên tố đầu tiên là: " + number ;
}
// 9. Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
function add() {
    // DOM
    let numberint = +document.getElementById("number1").value;
    
    // thêm số vào mảng
    numbersint.push(numberint);
    document.getElementById("showInt").innerHTML = "Các số vừa nhập là : " + numbersint;
}
function Int () {
    let numberint = 0;
    for (let i=0; i < numbersint.length; i++) {
        let dem = Number.isInteger(numbersint[i]);
        if (dem) {
        numberint++;  
        }
    }
    document.getElementById("Int").innerHTML = "Các số nguyên là: " + numberint;
}
// 10. So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
function vergelyk() {
    let number1 =0;
    let number=0;
    let i;
    for (i=0; number1 < numbers.length; number1++) {
        if (numbers[number1] > 0) {
            number++;
        } else if (numbers[number1] < 0) {
            i++;
        }
    }
    if (number > i) {
        document.getElementById("vergelyk").innerHTML = "Số dương > số âm";
    } else if ( number < i) {
        document.getElementById("vergelyk").innerHTML = "Số dương < số âm ";
    } else {
        document.getElementById("vergelyk").innerHTML = "Số dương = số âm ";
    }
}


