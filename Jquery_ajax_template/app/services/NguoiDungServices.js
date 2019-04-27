function NguoiDungService(){

    // this.danhSachNguoiDung = [];

    this.layDanhSachNguoiDung = function(){
        $.ajax({
            url:"http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung",
            type:"GET" //Lấy dữ liệu về 
        })
        .done(function(result){
            taoBang(result);
            localStorage.setItem("DSND", JSON.stringify(result));
        })
        .fail(function(error){
            console.log(error);
        })
    }

    this.themNguoiDung = function(nguoiDung){
        $.ajax({
            url:"http://svcy.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung",
            type:"POST",
            data: nguoiDung
        })
        .done(function(result){
            if(result === "tai khoan da ton tai !"){
                alert(result);
            }else{
                location.reload();
            }
        })
        .fail(function(error){
            console.log(error);
        })
    }

    this.xoaNguoiDung = function(taiKhoan){
        $.ajax({
            url:"http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${taiKhoan}",
            type:"DELETE"
        })
        .done(function(result){
            console.log(result);
        })
        .fail(function(error){
            console.log(error);
        })
    }
//Cập nhật
this.CapNhatThongTinNguoiDung = function(nguoiDung){
    var jsonNguoiDung = JSON.stringify(nguoiDung);
    $.ajax({
        url:"http://svcy.myclass.vn/api/QuanLyTrungTam/CapNhatThongTinNguoiDung",
        type:"PUT",
        contentType: "application/json",
        dataType: "json",
        data: jsonNguoiDung
    })
    .done(function(result){
        location.reload();
    })
    .fail(function(error){
        console.log(error);
    })
}

//Lấy thông tin người dùng 
this.layThongTinNguoiDung = function(taiKhoan){
    var danhSachNguoiDung = JSON.parse(localStorage.getItem("DSND"));
//     var nguoiDung;

//     danhSachNguoiDung.map(function(item){
//         if(item.TaiKhoan === taiKhoan){
//             nguoiDung = item;
//             return item;
//             }
//         })
//         return nguoiDung;
//     }
// }

return danhSachNguoiDung.find(function(item){
    return item.TaiKhoan === taiKhoan;
        })
    }
}

//Bất đồng bộ
function taoBang(danhSachMang){
    console.log(danhSachMang);
    var tblBody = ``;

    danhSachMang.map(function(item, index){
        tblBody += `
        <tr class="cltr">
            <td>${index+1}</td>
            <td class="cltaikhoan">${item.TaiKhoan}</td>
            <td class="clmatkhau">${item.MatKhau}</td>
            <td class="clhoten">${item.HoTen}</td>
            <td class="clemail">${item.Email}</td>
            <td class="clsdt">${item.SoDT}</td>
            <td class = "clloainguoidung">${item.MaLoaiNguoiDung}</td>
            <td>
            <button class="btn btn-success btnSua" data-taikhoan="${item.TaiKhoan}" data-toggle="modal" data-target="#myModal">Sửa</button>
            <button class="btn btn-danger btnXoa" data-taikhoan="${item.TaiKhoan}">Xóa</button>
            </td>
        </tr>
        `
    })

   
    $("#tblDanhSachNguoiDung").html(tblBody);
}