$(document).ready(function(){
  instaPage.init();

});


var instaPage = {

init: function () {
  instaPage.initStyling ();
  instaPage.initEvents ();



},

initStyling: function () {
console.log('init styling');
instaPage.getPhotosByTag("charleston");

},

initEvents: function (){
console.log('init events');

},

config: {
  baseurl: 'https://api.instagram.com/v1/',

  clientId:  '894e7d8e14284302842879cb81e2b4db',

},

getPhotosByTag: function (term) {
  $.ajax ({
  url: instaPage.config.baseurl + 'tags/' + term + '/media/recent?client_id=' + instaPage.config.clientId,
  type: 'GET',
  dataType: 'JSONP',
  success: function (data) {
    console.log(instaPage.config.baseUrl + 'tags/' + term + '/media/recent?client_id=' + instaPage.config.clientId);
    console.log(data);
    data.data.forEach(function(item, idx, arr) {
+          $('section').append('<img src="' + item.images.standard_resolution.url + '">');

});

},
    error: function (error) {
    console.log(error);
  }
});
},





};
