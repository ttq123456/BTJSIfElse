/**
 * Khối 1: Nhấp vào 3 cạnh của tam giác canh1, canh2, canh3
 * 
 * KHối 2: Xử lý
 *      - Khởi tạo biến và lấy giá trị từ form
 *      - kiểm tra có phải là 3 cạnh của tam giác hay ko, tổng hai cạnh phải lớn hơn cạnh còn lại
 *          nếu đúng thì tiếp tục điều kiện, sai in ra giá trị không hợp lệ
 *      - kiểm tra tam giác đều: canh1 == canh2 && canh2 == canh 3;
 *      nếu không: kiểm tra tam giác cân: canh1 == canh2 || canh1 == canh3 || canh2==canh3
 *      nếu không: kiểm tra tam giác vuông:  math.pow(canh1,2) = a, math.pow(canh2,2)=b;  math.pow(canh3,2) =c
 *                  (a == b + c) || (b == a+c) || (c== a+b)
 *      ngược lại là tam giác thường
 *      - thông báo kết quả ra màn hình
 * 
 * Khối 3: Output
 *      Loại tam giác  
 */

function TamGiac() {
    var canh1 = document.getElementById("edge1").value ;
    var canh2 = document.getElementById("edge2").value ;
    var canh3 = document.getElementById("edge3").value ;
    
    canh1 = Number(canh1);
    canh2 = Number(canh2);
    canh3 = Number(canh3);

    var tg = "";
    var a = Math.pow(canh1,2);
    var b = Math.pow(canh2,2);
    var c = Math.pow(canh3,2);
    if ((canh1 + canh2 > canh3) && (canh1 + canh3 > canh2) && (canh2 + canh3 > canh1)){
        if ((canh1 == canh2) && (canh2 == canh3)){
            tg = "Tam giác đều";
        }
        else if (canh1 == canh2 || canh1 == canh3 || canh2==canh3) {
            tg = "Tam giác cân";
        }
        else if ( (a == b + c) || (b == a+c) || (c== a+b)) {
            tg = "Tam giác vuông";
        }
        else tg= "Tam giác thường";
    }
    else alert("Các cạnh nhập vào không hợp lệ, mời nhập lại");

    document.getElementById("txtTamGiac").innerHTML = tg ;
}

document.getElementById("btnTG").onclick = TamGiac;
    
