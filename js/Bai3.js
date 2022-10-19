/**
 * Khối 1: Input
 *      Nhập vào 3 số nguyên num1, num2, num3
 * 
 * Khối 2: Xử lý
 *      - Khởi tạo biến và lấy giá trị từ form
 *      - Số nào chia hết cho 2 là số chẵn, sử dụng biến đếm count để đếm số chẵn
 *      - Số số lẻ = 3 - số số chẵn
 *      - THông báo kết quả lên màn hình
 * 
 * Khối 3: Output
 *      Số lượng số chẵn, số lẻ
 */

function thongke() {
    var num1 = document.getElementById("so1").value ;
    var num2 = document.getElementById("so2").value ;
    var num3 = document.getElementById("so3").value ;
    var countChan = 0;
    var countLe = 0;

    if (num1 % 2 == 0) {
        countChan++;
    }
    if (num2 % 2 == 0) {
        countChan++;
    }
    if (num3 % 2 == 0) {
        countChan++;
    }
    countLe = 3 - countChan;
    document.getElementById("txtNotify").innerHTML = "Số chẵn: " + countChan + "; Số lẻ: " + countLe;
}

document.getElementById("btnThongke").onclick = thongke;