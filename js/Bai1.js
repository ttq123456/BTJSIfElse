/**
 * Bài 1: Sắp xếp 03 số nguyên theo thứ tự tăng dần
 * Khối 1: Input
 *      Nhập vào 3 số nguyên num1, num2, num3
 * 
 * Khối 2: Xử lý
 *      B1: khởi tạo biến và lấy giá trị từ form
 *      B2: so sánh num1 với num2, num3, nếu num1>num2 đổi vị trí num1, num2
 *          so sánh num2 vs num3, num2 > num3 thì đổi vị trí num2, num3
 *      B3: thông báo kết quả ra giao diện
 *      
 *
 * Khối 3: Output
 *  Ba số nguyên đã được sắp xếp tăng dần
 */

function sapxep() {
    var num1 = document.getElementById("number1").value ;
    var num2 = document.getElementById("number2").value ;
    var num3 = document.getElementById("number3").value ;
    var tg=0;
    if (num1 > num2) {
        tg=num1;
        num1 = num2;
        num2 = tg;
    }
    if (num1 > num3) {
        tg = num1;
        num1 = num3;
        num3 = tg;
    }
    if (num2 > num3) {
        tg = num2;
        num2 = num3;
        num3 = tg;
    }
    console.log(num1,num2,num3);
    document.getElementById("arrange").innerHTML = num1 + " "+ num2 + " " + num3 ;

}

    document.getElementById("btnSapXep").onclick = sapxep ;