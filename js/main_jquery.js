$(document).ready(function () {
  $(".header_search").hide();
  $(".search").click(() => {
    $(".header_search").slideToggle(500);
  });
  $(".header_search_form_btn").click(() => {
    $(".header_search").slideUp(500);
  });
  $(".header_menu_list_item_submenu").hide();
  $(".submenu").one("mouseenter mouseleave", function (e) {
    $(this).children(".header_menu_list_item_submenu").slideToggle(200);
  });
  $(".main_slider_left_btn").click(() => {
    $(".slider").children().first().fadeToggle();
    $(".slider").children().last().fadeToggle();
  });
  $(".main_slider_right_btn").click(() => {
    $(".slider").children().first().fadeToggle();
    $(".slider").children().last().fadeToggle();
  });
  $(".slider").children().last().hide();
  setInterval(() => {
    $(".slider").children().first().fadeToggle();
    $(".slider").children().last().fadeToggle();
  }, 10000);
  $(".header_bar_menu_box").hide();
  $(".header_bar_menu_btn").click(() => {
    $(".header_bar_menu_box").slideToggle(500);
  });
});
