function moveNextCarousel() {
    var elems = document.querySelector('.carousel.carousel-slider');
    var moveRight = M.Carousel.getInstance(elems);
    moveRight.next(1);
}

function logOut(event) {
    event.preventDefault();
    sessionStorage.clear();
    window.location.href = "index.html";
}

document.addEventListener('DOMContentLoaded', function() {
    var name = sessionStorage.getItem("full-name");
    if (name) {
        var username = sessionStorage.getItem("username");
        var type = sessionStorage.getItem("type-member");
        var address = sessionStorage.getItem("address");
        var handphone = sessionStorage.getItem("handphone");
        var nik = sessionStorage.getItem("nik");

        var htmlname = document.querySelector('#name-1');
        var htmlname2 = document.querySelector('#name-2');
        var htmluname = document.querySelector('#username');
        var htmltype = document.querySelector('#type-member');
        var htmladdress = document.querySelector('#address');
        var htmlphone = document.querySelector('#phone');
        var htmlnik = document.querySelector('#nik');

        var arrname = name.split(" ")
        htmlname.textContent = "Welcome, " + arrname[0] + "!";
        htmlname2.textContent = "Name: " + name;
        htmluname.textContent = "Username: " + username;
        htmltype.textContent = "Type: " + type;
        htmladdress.textContent = "Address: " + address;
        htmlphone.textContent = "Phone: " + handphone;
        htmlnik.textContent = "NIK: " + nik;
    }
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems, {});
    var elems2 = document.querySelectorAll('.sidenav');
    var instances2 = M.Sidenav.init(elems2, {});
    var elems3 = document.querySelectorAll('.carousel');
    var instances3 = M.Carousel.init(elems3, {
        'fullWidth': 'true',
        'indicators': 'true'
    });
    var elems4 = document.querySelectorAll('.modal');
    var instances4 = M.Modal.init(elems4, {});

    setTimeout(() => {
        moveNextCarousel();
    }, 2000);
});