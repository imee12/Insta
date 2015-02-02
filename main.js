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
instaPage.getDrug();

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






beerConfig: {
  baseurl: 'http://api.brewerydb.com/v2/',


},


getBeer: function () {
  $.ajax({
    url: instaPage.beerConfig.baseurl + '/beer',
    type: 'GET',
    datatype: 'JSONP',
    success: function (data) {
      //console.log(instaPage.memeConfig.baseurl + "_Select_ByTrending";
      console.log(data);
      data.data.forEach(function(item, idx, arr) {

           $('.beer').append('<p>' + name + '</p>');

  });

  },
      error: function (error) {
      console.log(error);
    }
  })
},

drugConfig: {
  basurl: 'https://api.fda.gov/drug/event.json?search=',
},
getDrug: function () {

  $.ajax({
    url: 'https://api.fda.gov/drug/event.json?search=patient.drug.openfda.pharm_class_epc:%22nonsteroidal+anti-inflammatory+drug%22&count=patient.reaction.reactionmeddrapt.exact',
    type: 'GET',
    datatype: 'JSONP',
    success: function (data) {
      //console.log(instaPage.memeConfig.baseurl + "_Select_ByTrending";
      console.log(data);
      _.each(data, function(item, idx, arr) {
        _.each(item, function (currentItem, idx, arry){
          $('.drug').append('<p>' + currentItem.term + '</p>');

        });



});

  },
      error: function (error) {
      console.log(error);
    }
  })
},

};
