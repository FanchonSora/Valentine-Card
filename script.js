// Biến đếm số lần nhấn "No"
let noClickCount = 0;

// Timer tự động chọn "yes" sau 30 giây nếu không có tương tác
let autoSelectTimer = setTimeout(function() {
  // Tự động chọn "yes"
  selectOption('yes', true);
}, 30000);

// Hàm xử lý sự kiện khi click nút
// Tham số thứ hai "isAuto" dùng để đánh dấu là lựa chọn tự động hay không
function selectOption(option, isAuto) {
  // Hủy timer nếu có click từ người dùng
  clearTimeout(autoSelectTimer);

  if (option === 'yes') {
    flashRainbowColors(function() {
      // Thay đổi nội dung của phần tử có id "question"
      document.getElementById('question').innerText = 'ẾCH LÀ CỦA MÈO RỒI';

      // Ẩn cả nút "Yes" và "No"
      document.getElementById('yes-button').hidden = true;
      document.getElementById('no-button').hidden = true;

      // Hiển thị hình ảnh cat-heart.gif
      displayCatHeart();

      // Nếu lựa chọn được kích hoạt tự động, hiển thị thông điệp “Đồng ý” bên dưới hình ảnh
      if (isAuto) {
        displaySilentAgree();
      }

      // Kích hoạt hiệu ứng pháo hoa
      launchFireworks();

      // Sau 20 giây, thay đổi nội dung câu hỏi thành "Hehe"
      setTimeout(function() {
        document.getElementById('question').innerText = 'Hehe';
      }, 20000);
    });
  } else if (option === 'no') {
    noClickCount++;
    if (noClickCount === 1) {
      document.getElementById('no-button').innerText = 'Ếch có chắc hăm?';
    } else if (noClickCount === 2) {
      document.getElementById('no-button').innerText = 'Tại sao lại hăm, đồng ý?';
    } else if (noClickCount === 3) {
      document.getElementById('no-button').innerText = 'Một ly hồng trà ngô gia, đồng ý đi!';
    } else if (noClickCount === 4) {
      document.getElementById('no-button').innerText = 'Giờ là nhiều ly hồng trà ngô gia luôn ấy, đồng ý đii !!!';
    } else if (noClickCount === 5) {
      document.getElementById('no-button').innerText = 'PLEASE POOKIE';
    } else if (noClickCount === 6) {
      document.getElementById('no-button').innerText = 'But :<<';
    } else if (noClickCount === 7) {
      document.getElementById('no-button').innerText = 'Chị nghẻo bây giờ';
    } else if (noClickCount === 8) {
      document.getElementById('no-button').innerText = 'Ngỏm thật đóa !!!';
    } else if (noClickCount === 9) {
      document.getElementById('no-button').innerText = 'Em đang nói chuyện với hồn ma gòi';
    } else if (noClickCount === 10) {
      document.getElementById('no-button').innerText = 'Ơ thui đồng ý đi mà';
    } else if (noClickCount === 11) {
      document.getElementById('no-button').innerText = 'Khóc bây giờ !!!';
    } else if (noClickCount === 12) {
      document.getElementById('no-button').innerText = 'Waeee';
    } else if (noClickCount > 12) {
      document.getElementById('no-button').hidden = true;
    }
    // Tăng kích thước font của nút "Yes" mỗi lần nhấn "No"
    var yesButton = document.getElementById('yes-button');
    var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
    var newSize = parseFloat(currentFontSize) * 1.2;
    yesButton.style.fontSize = newSize + 'px';
  } else {
    alert('Invalid option!');
  }
}

// Hàm flash đổi màu nền kiểu cầu vồng và gọi callback khi hoàn tất
function flashRainbowColors(callback) {
  var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
  var i = 0;
  var interval = setInterval(function() {
    document.body.style.backgroundColor = colors[i];
    i = (i + 1) % colors.length;
  }, 200);

  setTimeout(function() {
    clearInterval(interval);
    document.body.style.backgroundColor = '';
    if (callback) {
      callback();
    }
  }, 2000);
}

// Hiển thị hình ảnh cat.gif ban đầu
function displayCat() {
  var imageContainer = document.getElementById('image-container');
  var catImage = new Image();
  catImage.src = 'cat.gif'; // Đảm bảo file cat.gif có sẵn
  catImage.alt = 'Cat';
  catImage.onload = function() {
    imageContainer.appendChild(catImage);
  };
}

// Hiển thị hình ảnh cat-heart.gif
function displayCatHeart() {
  document.getElementById('image-container').innerHTML = '';
  var imageContainer = document.getElementById('image-container');
  var catHeartImage = new Image();
  catHeartImage.src = 'cat-heart.gif'; // Đảm bảo file cat-heart.gif có sẵn
  catHeartImage.alt = 'Cat Heart';
  catHeartImage.onload = function() {
    imageContainer.appendChild(catHeartImage);
    // Ẩn container chứa nút lựa chọn
    document.getElementById('options').style.display = 'none';
  };
}

// Hiển thị thông điệp "Đồng ý" bên dưới hình ảnh
function displaySilentAgree() {
  var agreeMsg = document.createElement('div');
  agreeMsg.innerText = 'Đồng ý';
  agreeMsg.style.fontSize = '24px';
  agreeMsg.style.color = '#4CAF50';
  agreeMsg.style.marginTop = '10px';
  document.getElementById('image-container').appendChild(agreeMsg);
}

// Kích hoạt hiệu ứng pháo hoa
function launchFireworks() {
  var fireworksContainer = document.createElement('div');
  fireworksContainer.id = 'fireworks-container';
  document.body.appendChild(fireworksContainer);

  for (var i = 0; i < 20; i++) {
    var firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = Math.random() * 100 + '%';
    firework.style.top = Math.random() * 100 + '%';
    fireworksContainer.appendChild(firework);
  }

  // Xóa hiệu ứng sau 5 giây
  setTimeout(function() {
    fireworksContainer.remove();
  }, 5000);
}

// Hiển thị cat.gif ban đầu
displayCat();
