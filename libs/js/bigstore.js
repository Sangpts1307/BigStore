/**
 * Validate form search
 */
$('#btn-search').on('click', function () {
    let keySearch = $("#txt-search").val();
    if (keySearch.length <= 0) {
        alert("Please incorrect key search!");
        return false;
    } else if (keySearch.length > 255) {
        alert("Key search > 0 and < 255");
    } else {
        $('#form-search').submit();
    }
});
var time = new Date();
$("#year-copy-right").text(time.getFullYear());

// load more
// * LÀM MẢNG TẬP HỢP ĐỂ MIX TÊN + ẢNH
var arrayProductName = [
    "Moisturiser (500g)",
    "Sunflower Oil (5kg)",
    "Kabuli Chana(1kg) (1kg)",
    "Moong (1kg)"
];
var arrayProductImage = [
    "of.png",
    "of1.png",
    "of2.png",
    "of3.png",
    "of4.png",
];
$('#show-more').on('click', function () {
    let appendHtml = '';
    for (let i = 0; i < 4; i++) {
        let rand = Math.floor(Math.random() * 3) + 0;
        appendHtml += '<div class="col-md-3 product-item">'
        +'<div class="pro-item-content">'
        +'    <div class="item-img text-center">'
        +'        <img src="images/'+arrayProductImage[rand]+'" alt="">'
        +'    </div>'
        +'    <div class="container">'
        +'        <h5 class="product-name">"'+arrayProductName[rand]+'"</h5>'
        +'        <div class="col-md-12">'
        +'            <div class="row">'
        +'                <div class="col-md-6">'
        +'                    <p> <span class="price"><strike>$7.00</strike></span> <span class="sales">$6.00</span></p>'
        +'                </div>'
        +'                <div class="col-md-6 rattings">'
        +'                    <i class="fa fa-star bg-star"></i>'
        +'                    <i class="fa fa-star bg-star"></i>'
        +'                    <i class="fa fa-star bg-star"></i>'
        +'                    <i class="fa fa-star"></i>'
        +'                    <i class="fa fa-star"></i>'
        +'                </div>'
        +'                <p class="add-to-cart text-center">Add to Cart</p>'
        +'            </div>'
        +'        </div>'
        +'    </div>'
        +'</div>'
        +'</div>';
    }
    $('#_products').append(appendHtml);
});

/**
 * Validate form login
 */
$('#form-login').validate({
    rules : {
        email : {
            "required": true,
            "email": true
        },
        password : {
            "required": true,
        }
    },
    messages : {
        email : {
            "required": "Bạn hãy nhập email!",
            "email": "Email không đúng định dạng",
        },
        password: { 
            "required": "Bạn hãy nhập password"
        }
    },
    submitHandle: function (form) {
        form.submit();
    }
});

/**
 * Validate form register
 */
$('#form-register').validate({
    rules : {
        username : {
            "required": true
        },
        email : {
            "required": true,
            "email": true
        },
        password : {
            "required": true,
        },
        re_password : {
            "required": true,
            "equalTo": "#txt_register_password"
        }
    }, 
    messages : {
        username: {
            "required": "Bạn hãy nhập tên người dùng!"
        },
        email : {
            "required": "Bạn hãy nhập email!",
            "email": "Email không đúng định dạng",
        },
        password: { 
            "required": "Bạn hãy nhập password"
        },
        re_password: {
            "required": "Bạn hãy nhập mật khẩu xác thực!",
            "equalTo": "Mật khẩu xác thực không khớp!"
        }
    },
    submitHandle: function (form) {
        form.submit();
    }
});