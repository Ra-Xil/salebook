function reset_form() {
    document.getElementById("group").reset();
}

function login_usr(){
    var x = document.getElementById('username').value
    var y = document.getElementById('password').value
    if(x == 'admin' && y == '123'){
        alert('Đăng nhập thành công');
        window.location.href = './test.html';
    }
    else if (x == ''){
    }
    else if (y == ''){  
    }
    else if (((x != 'admin') || (y != '123') )){
        alert('Tài khoản hoặc mật khẩu không đúng');
        reset_form();
    }
    
}