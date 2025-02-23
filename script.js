// Hàm để cập nhật hình ảnh và văn bản khi hover
function upDate(previewPic) {
    // Kiểm tra sự kiện có được kích hoạt hay không
    console.log("Event triggered!");
    console.log("Alt:", previewPic.alt);
    console.log("Source:", previewPic.src);

    // Thay đổi background image của div có id là image
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";

    // Thay đổi nội dung văn bản của div có id là image
    document.getElementById('image').innerHTML = previewPic.alt;
}

// Hàm để hoàn tác khi không còn hover
function unDo() {
    // Đặt lại background image và văn bản như ban đầu
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}
