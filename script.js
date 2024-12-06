let productImg = document.getElementById('product-img');
let btns = document.querySelectorAll('.btn');

btns[0].addEventListener('click', function () {
  productImg.src = 'image1.png';
  btns.forEach(btn => {
    btn.classList.remove('active');
  });
  this.classList.add('active');
});

btns[1].addEventListener('click', function () {
  productImg.src = 'image2.png';
  btns.forEach(btn => {
    btn.classList.remove('active');
  });
  this.classList.add('active');
});
btns[2].addEventListener('click', function () {
  productImg.src = 'image3.png';
  btns.forEach(btn => {
    btn.classList.remove('active');
  });
  this.classList.add('active');
});
