/**
 * Bài 2 : Chào hỏi
 * KHối 1: Input
 *     Người dùng chọn người sử dụng máy
 * 
 * Khối 2: Xử lý
 *      b1: lấy giá trị từ form
 *      b2: so sánh người dùng là ai thì đưa ra lời chào phù hợp   
 *      b3: thông báo kết quả ra màn hình  
 * 
 * 
 * Khối 3: Output
 *      Hiển thị lời chào người dùng
 * 
 */

function chaohoi(){
    var member = document.getElementById("thanhVien").value ;
    var kq="";
    switch (member) {
        case "B":
            kq = "Xin chào Bố!"
            break;
        case "M":
            kq = "Xin chào Mẹ!"
            break;
        case "A":
            kq = "Xin chào Anh trai!"
            break;
        case "E":
            kq = "Xin chào Em gái!"
            break;
        default:
            kq = "Bạn chưa nhập người dùng nè!"
            break;
    }

    document.getElementById("chao").innerHTML = kq;
}

document.getElementById("btnChao").onclick = chaohoi;