$(document).ready(function(){
    var nguoiDungService = new NguoiDungService();

    layDanhSachNguoiDung();

    function setHeaderFooterModal(title, titleButton, idButton){
        $(".modal-title").html(title);

        var footer = `
        <button id="${idButton}" class="btn btn-success">${titleButton}</button>
        `
        $(".modal-footer").html(footer);
    }

    $("#btnThemNguoiDung").click(function(){
       setHeaderFooterModal("Thêm người dùng", "Thêm mới", "btnThem");
    })

$("body").delegate(".btnSua", "click", function(){
    setHeaderFooterModal("Sửa người dùng", "Cập nhật", "btnCapNhat");
    var taiKhoan = $(this).data('taikhoan');
    var nguoiDung = nguoiDungService.layThongTinNguoiDung(taiKhoan);
    
    $("#TaiKhoan").attr("disabled", "disable");

    $("#TaiKhoan").val(nguoiDung.TaiKhoan);
    $("#HoTen").val(nguoiDung.HoTen);
    $("#MatKhau").val(nguoiDung.MatKhau);
    $("#Email").val(nguoiDung.Email);
    $("#SoDienThoai").val(nguoiDung.SoDT);
    $("#loaiNguoiDung").val(nguoiDung.MaLoaiNguoiDung);    
    
}) 
   /* 
    //lấy thông tin từ table theo dòng tr
    var tr = $(this).closest(".cltr");
    var taikhoan = tr.find(".cltaikhoan").html();
    var hoten = tr.find(".clhoten").html();
    var matkhau = tr.find(".clmatkhau").html();
    var email = tr.find(".clemail").html();
    var sdt = tr.find(".clsdt").html();
    var loaiNguoiDung = tr.find(".clloainguoidung").html();

    // load lại thông tin lên form
    $("#TaiKhoan").val(taikhoan);
    $("#HoTen").val(hoten);
    $("#MatKhau").val(matkhau);
    $("#Email").val(email);
    $("#SoDienThoai").val(sdt);
    $("#loaiNguoiDung").val(loaiNguoiDung);    
})
// cập nhật
$("body").delegate("#btnCapNhat","click",function(){
    var taiKhoan = $("#TaiKhoan").val();
    var hoTen = $("#HoTen").val();
    var matKhau = $("#MatKhau").val();
    var email = $("#Email").val();
    var soDT = $("#SoDienThoai").val();
    var loaiNguoiDung = $("#loaiNguoiDung").val();
    var nguoiDung = new NguoiDung(taiKhoan, matKhau, hoTen, email, soDT, loaiNguoiDung);
    nguoiDungService.CapNhatThongTinNguoiDung(nguoiDung);
})
*/

$("body").delegate(".btnXoa", "click", function(){
    var taiKhoan = $(this).data('taikhoan');
    nguoiDungService.xoaNguoiDung(taiKhoan);
})

$("body").delegate("#btnThem", "click", function(){
    var taiKhoan = $("#TaiKhoan").val();
    var hoTen = $("#HoTen").val();
    var matKhau = $("#MatKhau").val();
    var email = $("#Email").val();
    var soDT = $("#SoDienThoai").val();
    var loaiNguoiDung = $("#loaiNguoiDung").val();

    var nguoiDung = new NguoiDung(taiKhoan, matKhau, hoTen, email, soDT, loaiNguoiDung);

    nguoiDungService.themNguoiDung(nguoiDung);
})
//Cập nhật
$("body").delegate("#btnCapNhat", "click", function(){
    var taiKhoan = $("#TaiKhoan").val();
    var hoTen = $("#HoTen").val();
    var matKhau = $("#MatKhau").val();
    var email = $("#Email").val();
    var soDT = $("#SoDienThoai").val();
    var loaiNguoiDung = $("#loaiNguoiDung").val();

    var nguoiDung = new NguoiDung(taiKhoan, matKhau, hoTen, email, soDT, loaiNguoiDung);
    nguoiDungService.CapNhatThongTinNguoiDung(nguoiDung);
})

    function layDanhSachNguoiDung(){
        nguoiDungService.layDanhSachNguoiDung();
        
    }

//Search
$("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#tblDanhSachNguoiDung tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

})   

