const sidenav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sidenav);
const collapsibble = document.querySelectorAll('.collapsible');
M.Collapsible.init(collapsibble, {})

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 600,
    interval: 3000
});