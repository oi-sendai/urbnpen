var weatherDirective = angular.module('weatherDirective', []);

weatherDirective.directive( 'weather', function(
  $stateParams
  ) {
    return {
      restrict: 'AE',
      replace: true,
      template: '<div id="weather" class="show-weather">something',
      // scope:{tstvalue: "=tstvalue"}
      link: function(scope, elem, attrs) {
        console.log(scope.list.location);
        var we = scope.list.location;
console.log(we);
          $.simpleWeather({
                location: we,
        //     woeid: '',
        //     unit: 'f',
            success: function(weather) {

              html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
          
              $(".show-weather").html(html);
            },
            error: function(error) {
              $(".show-weather").html('<p>'+error+'</p>');
            }
          });
      }
    }

  });

// $(document).ready(function() {
// if the final scope is good use aristotal

// });