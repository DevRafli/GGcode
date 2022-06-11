const toggleSidebar = document.querySelector("#toggle-sidebar");
const sidebar = document.querySelector(".sidebar");

toggleSidebar.addEventListener("click", () => {

    sidebar.classList.toggle("sidebar-open");
});


$('.logo-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay:true,
    autoplayspeed: 2000,
    infiniite: true
 });