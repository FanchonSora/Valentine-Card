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
  if (option === 'yes') {
    // Nếu người dùng chọn "yes", hủy timer tự động
    clearTimeout(autoSelectTimer);

    flashRainbowColors(function() {
      // Thay đổi nội dung của phần tử có id "question"
      document.getElementById('question').innerText = 'ẾCH LÀ CỦA MÈO RỒI';

      // Ẩn cả nút "Yes" và "No"
      document.getElementById('yes-button').hidden = true;
      document.getElementById('no-button').hidden = true;
      document.getElementById(agreeMsg).hidden = true;

      // Hiển thị hình ảnh cat-heart.gif
      displayCatHeart();

      // Nếu lựa chọn được kích hoạt tự động, hiển thị thông điệp “Đồng ý” bên dưới hình ảnh
      if (isAuto) {
        displaySilentAgree();
      }

      // Kích hoạt hiệu ứng pháo hoa
      launchFireworks();

      // Sau 20 giây, thay vì thay đổi nội dung thành "Hehe", hiển thị một emoji bức thư màu hồng
    setTimeout(function() {
        // Xoá nội dung hiện có của phần tử câu hỏi
        const questionDiv = document.getElementById('question');
        questionDiv.innerHTML = '';
    
        // Tạo phần tử envelope emoji
        const envelope = document.createElement('div');
        envelope.innerText = '💌'; // Emoji bức thư
        envelope.style.fontSize = '80px';
        envelope.style.cursor = 'pointer';
        envelope.style.marginTop = '20px';
    
        // Thêm emoji vào phần tử câu hỏi
        questionDiv.appendChild(envelope);
    
        // Khi click vào emoji, hiển thị nội dung thư trong format tờ giấy với chữ màu hồng
        envelope.addEventListener('click', function() {
        // Tạo khung "tờ giấy"
        const paper = document.createElement('div');
        paper.innerText = "Nói thiệt thì mèo cũng không có hay viết thư vầy đâu nên chắc mèo viết sẽ lủng củng lắm, thông cảm :3 Nói thiệt mèo không nghĩ em sẽ đồng ý nhanh vậy đâu, tại tính mèo trước giờ ích kỉ lắm nên là mèo không quan tâm người ta sẽ nghĩ gì á :v Nên là mèo lúc đầu cũng chả biết nên làm gì để em thích mèo cả kiểu mèo không có thấy mèo có gì nổi trội á, mèo tưởng sẽ phải tốn rất là lâu để tán em á tại mèo chả biết mẹ gì về mấy cái tinh tế hay chiều người này nọ cả. Èoo cái mèo mới thử cái chiều em theo kiểu nếu mèo là em mèo sẽ muốn gì á nên lâu lâu mèo hay làm mấy cái khùm khùm không ai nghĩ tới !!! Nói thật thì mèo lâu lâu cũng sợ mèo làm gì đó khác người hay là mèo vô tâm làm cho em buồn á, trước giờ mèo làm nhiều người buồn lắm rồi nma mèo hiếm khi care lắm :<< nên là em mà buồn chắc mèo die mất. Mèo không muốn làm em buồn đâu, nói thật thì em làm mèo có nhiều suy nghĩ mới lắm tại trước giờ mèo chả bao giờ để í đến xung quanh đâu nên là lâu lâu mấy câu hạt nhài kiểu nó nhạt tới mức mà chị vui luôn á hay là cách em nhìn nhận thế giới xung quanh làm mèo vui lắm á, mèo yêu em vì những thứ đó nên là đừng thắc mắc vì saooo nữa nhá !!! Mèo cũng rất vui vì em đồng ý luôn á, em với mèo có thể mới trong giai đoạn đầu của yêu đương nên có thể chưa gặp trắc trở gì nhưng hi zọng em với mèo có thể duy trì tình yêu này nhóa. Nó không chỉ là việc giữ ngọn lửa tình cảm mà còn là chấp nhận về tính 6677 của nhau nên là hi zọng em sẽ chấp nhận các tính 66778899 của mèo nhá <3 Mèo yêu em nhiều lắm !!!";
        
        // Áp dụng style "tờ giấy"
        paper.style.backgroundColor = '#fff';
        paper.style.border = '2px solid #ff4081';
        paper.style.borderRadius = '10px';
        paper.style.padding = '20px';
        paper.style.margin = '20px auto';
        paper.style.maxWidth = '80%';
        paper.style.fontSize = '20px';
        paper.style.color = '#ff4081'; // màu chữ hồng
        
        // Xoá nội dung hiện có và thêm "tờ giấy" vào div câu hỏi
        questionDiv.innerHTML = '';
        questionDiv.appendChild(paper);
        });
    }, 10000);  
    });
    } else if (option === 'no') {
    // Sau mỗi lần nhấn "No", reset lại timer 30 giây
    clearTimeout(autoSelectTimer);
    autoSelectTimer = setTimeout(function() {
      selectOption('yes', true);
    }, 20000);

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
  agreeMsg.innerText = 'IM LẶNG LÀ ĐỒNG Ý';
  agreeMsg.style.fontSize = '40px';
  agreeMsg.style.color = '#ff4081';
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
