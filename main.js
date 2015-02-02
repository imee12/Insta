$(document).ready(function(){
  instaPage.init();

});


var instaPage = {

init: function () {
  instaPage.initStyling ();
//  instaPage.initEvents ();



},

initStyling: function () {
console.log('init styling');
instaPage.getPhotosByTag("charleston");
instaPage.getPhotosinParis();
instaPage.getPhotosinStockholm();

},

initEvents: function (){
console.log('init events');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://localhost");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Origin', "*")


};

app.configure(function() {
    app.use(allowCrossDomain);
});



},

config: {
  baseurl: 'https://api.instagram.com/v1/',
  clientId:  '894e7d8e14284302842879cb81e2b4db',
  lat: '48.8534100',
  lng: '2.3488000'

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

getPhotosinParis: function () {
   $.ajax({
      url: 'https://api.instagram.com/v1/media/search?lat=48.8534100&lng=2.3488000&client_id=894e7d8e14284302842879cb81e2b4db',
      type: 'GET',
      dataType: 'JSONP',
      success: function (data) {
        console.log(data);
        data.data.forEach(function(item, idx, arr) {
          $('aside').append('<img src="' + item.images.thumbnail.url + '">');
        });

      },
      error: function (error) {
        console.log(error);
      }
    });
  },

getPhotosinStockholm: function () {
     $.ajax({
        url: 'https://api.instagram.com/v1/media/search?lat=59.3325800&lng=18.0649000&client_id=894e7d8e14284302842879cb81e2b4db',
        type: 'GET',
        dataType: 'JSONP',
        success: function (data) {
          console.log(data);
          data.data.forEach(function(item, idx, arr) {
            $('article').append('<img src="' + item.images.thumbnail.url + '">');
          });

        },
        error: function (error) {
          console.log(error);
        }
      });
    },
















memeConfig: {
  baseurl: 'http://version1.api.memegenerator.net/Generators',


},

getMeme: function () {
  $.ajax({
    url: instaPage.memeConfig.baseurl + '_Select_ByTrending',
    type: 'GET',
    datatype: 'JSONP',
    success: function (data) {
      //console.log(instaPage.memeConfig.baseurl + "_Select_ByTrending";
      console.log(data);
      data.data.forEach(function(item, idx, arr) {
  +          $('section').append('<img src="' + instanceImageUrl + '">');

  });

  },
      error: function (error) {
      console.log(error);
    }
  })
}





};
