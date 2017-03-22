function changeHeader() {
  $('span').first().addClass("header-role")
}
$(changeHeader);

function changeButton() {
  $('button').first().addClass("btn")
}
$(changeButton);

function mailConnect() {
  $('div.dark-gray').children('h2.orange.center-text').prepend('<a href = "mailto:signup@gmawji.com?Subject=Lets%20Connect" target="_top"> Let\'s Connect </a>');
}
$(mailConnect);

function educationLinks() {
  $('div.education-entry').next().next().next().children('a').attr('href', 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001')[0];

  $('div.education-entry').next().next().next().children('a').attr('target', '_blank')[0];

  $('div.education-entry').next().next().next().children('a').attr('href', 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001')[1];

  $('div.education-entry').next().next().next().children('a').attr('target', '_blank')[1];

  $('div.education-entry').next().next().next().children('a').attr('href', 'https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004')[2];

  $('div.education-entry').next().next().next().children('a').attr('target', '_blank')[2];

  $('div.education-entry').next().next().next().children('a').attr('href', 'https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004')[3];

  $('div.education-entry').next().next().next().children('a').attr('target', '_blank')[3];
}
$(educationLinks);
