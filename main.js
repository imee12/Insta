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
//instaPage.getPhotosByTag("charleston");
//instaPage.getPhotosinParis();
//instaPage.getPhotosinStockholm();
instaPage.getDrug();
instaPage.getEtsy();
instaPage.getMeme();
instaPage.getBeer();
instaPage.getStarWars();

},

initEvents: function (){
console.log('init events');





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
          $('section').append('<img src="' + item.images.standard_resolution.url + '">');

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




getDrug: function () {

  $.ajax({
    url: 'https://api.fda.gov/drug/event.json?search=patient.drug.openfda.pharm_class_epc:%22nonsteroidal+anti-inflammatory+drug%22&count=patient.reaction.reactionmeddrapt.exact',
    type: 'GET',
    datatype: 'JSONP',
    success: function (data) {

      console.log(data);
      _.each(data, function(item, idx, arr) {
        _.each(item, function (currentItem, idx, arry){
          $('.beer').append('<p>' + currentItem.term + '</p>');

        });

});
},

      error: function (error) {
      console.log(error);
    }
})

},



getEtsy: function () {
  $.ajax({
    url: 'https://openapi.etsy.com/v2/listings/active?api_key=ifoluwur9fetbg8e4nc8ovxt',
    type: 'GET',
    datatype: 'JSONP',
    success: function (data) {
      _.each(data, function(item, index, array){
      _.each(item, function( currentItem, index, array){
            $('.etsy').append('<p>' + currentItem.title + '</p>');
            $('.etsy').append('<p>' + currentItem.description + '</p>');
          //  $('article').append('<img src="' + currentItem.url + '">');


      });
  });
},

error: function (error) {
console.log(error);
}

})

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
      _.each(data, function(item, idx, arr) {
        _.each(item, function (currentItem, index, array) {
          //$('footer').append('<img src="' + currentItem.imageUrl + '">');
          $('footer').append('<p>' + currentItem.urlName + '</p>')
  });
});
  },
      error: function (error) {
      console.log(error);
    }
  })
},

getBeer: function () {
 $.ajax({
    url: 'http://beermapping.com/webservice/loccity/a4de7de6344a91b1c6702f215f623247/charleston,sc',
    type: 'GET',
    datatype: 'JSONP',
    success: function (data) {
      //console.log(instaPage.memeConfig.baseurl + "_Select_ByTrending";
      console.log(data);
      _.each(data, function(item, idx, arr) {
        //_.each(item, function (currentItem, index, array) {
            $('.beer').append('<p>' + item.name + '</p>');
//  });
});
  },
      error: function (error) {
      console.log(error);
    }
  })
},

getStarWars: function () {
 $.ajax({
    url: 'http://swapi.co/api/people/1/',

    type: 'GET',
    datatype: 'JSONP',
    success: function (data) {
      //console.log(instaPage.memeConfig.baseurl + "_Select_ByTrending";
      console.log(data);
      //_.each(data, function(item, idx, arr) {
       //_.each(item, function (currentItem, index, array) {
            $('.star').append('<p>' + data.name + '</p>');

//  });
//});
  },
      error: function (error) {
      console.log(error);
    }
  })
}













};
