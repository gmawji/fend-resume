function changeHeader() {
  $('span').first().addClass("header-role");
}
$(changeHeader);

function changeButton() {
  $('button').first().addClass("btn");
}
$(changeButton);

function mailConnect() {
  $('div.dark-gray').children('h2.orange.center-text').prepend('<a href = "mailto:signup@gmawji.com?Subject=Lets%20Connect" target="_top"> Let\'s Connect </a>');
}
$(mailConnect);
