

var itemList = {
    sp001: { "name": "Đắc nhân tâm", "price": 219000, "photo": "images/dacnhantam.jpg" },
				
    sp002: { "name": "Kheo ăn khéo nói sẽ có được thiên hạ", "price": 219000, "photo": "images/kheoankheonoi.jpg" },
				
	sp003: { "name": "Nhà giả kim", "price": 219000, "photo": "images/nhagiakim.jpg" },
	
	sp004: { "name": "Cách nghĩ để thành công", "price": 219000, "photo": "images/cachnghidethanhcong.webp" },

	sp005: { "name": "Hạt giống tâm hồn", "price": 219000, "photo": "images/hatgiongtamhon.webp" },

	sp006: { "name": "Quẳng gánh lo đi và vui sống", "price": 219000, "photo": "images/quanh-ganh-lo-di-va-vui-song.webp" },

	sp007: { "name": "Cuộc sống không giới hạn", "price": 219000, "photo": "images/cuoocsngkhonggioihan.jpg" },
				
			   };

/*Hàm thêm sản phẩm vào Giỏ hàng**/
function addCart(code)
{
	var number=parseInt(document.getElementById(code).value);
	var name=itemList[code].name;
	if(number==0)return;
	if(typeof localStorage[code] === "undefined"){
		window.localStorage.setItem(code,number);
	}else{
	   var current=parseInt(window.localStorage.getItem(code));
	   if(current+number>100)
	   {
			window.localStorage.setItem(code,100);
			alert("Mỗi mặt hàng chỉ có thể đặt 100 sản phẩm cho mỗi đơn hàng. Bạn đã đặt 100 sản phẩm của "+ name +" này.");
			return;		   
	   }
	   else			   
			window.localStorage.setItem(code,current+number);	   
	}
	alert("Đã cập nhật sản phẩm "+ name +" với số lượng "+ number +" vào giỏ hàng. Số lượng sản phẩm "+ name +" đã đặt là "+parseInt(window.localStorage.getItem(code))+".");	
}
