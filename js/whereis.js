$(document).ready(function()
{

  initialize();

  function initialize() {
     var mapCanvas = document.getElementById('map');
     var mapOptions = {
       center: new google.maps.LatLng(41.9452343,-87.6482464),
       zoom: 8,
       mapTypeId: google.maps.MapTypeId.ROADMAP
     }
     var map = new google.maps.Map(mapCanvas, mapOptions)
   }

});
