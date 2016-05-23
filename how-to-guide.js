
// Using Giphy API
/* Resource for onload function and server status syntax:
 *  Javascript & JQuery by Jon Duckett
 *  Page 379.
 */

/* Build URL skeleton for API call */
var url = 'http://api.giphy.com/v1/gifs/search?q=';
var apiKey = '&api_key=dc6zaTOxFJmzC';
var searchTerm = "funny kid";

  console.log("Search Term was: " + searchTerm + "\n");

var newSearchTerm = searchTerm.replace(/ /g, "+");

  console.log("Search Term is now: " + newSearchTerm + "\n");



url = url + newSearchTerm + apiKey;

  // new request to Giphy API
  var xhr = new XMLHttpRequest();

    // Asynchronous Request
    xhr.onload = function() {
      if(xhr.status === 200) {
        var responseObject = JSON.parse(xhr.responseText);

        // log request to console
        console.log("Request sent:\n");
        console.log(responseObject);

	      // log each image url to console
        for (var i = 0; i < 25; i++) {
        console.log("Image " + i + ":\n" + responseObject.data[i].embed_url);


        }

        for (var i=0; i < 10; i++) {
          var img = document.getElementById('results');
          var addImg = document.createElement('img');
          addImg.src = responseObject.data[i].images.fixed_width_small.url;
          img.appendChild(addImg);
        }


      }
    };

    xhr.open('GET', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(null);





    var randURL = 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC';



    document.addEventListener('DOMContentLoaded', bindButtons);

    function bindButtons() {

      document.getElementById('random').addEventListener('click', function(event) {
        genRandImage(randURL);

      });

    }

    function genRandImage(randURL) {

          var xhrTwo = new XMLHttpRequest();

          xhrTwo.open('GET', randURL, true);
          xhrTwo.setRequestHeader('Content-Type', 'application/json');

          // Asynchronous Request
          xhrTwo.onload = function() {
            if(xhrTwo.status === 200) {
              var responseObject = JSON.parse(xhrTwo.responseText);


                var img = document.getElementById('results2');
                var addImg = document.createElement('img');
                addImg.src = responseObject.data[0].images.fixed_width.url;
                img.appendChild(addImg);
              }



          };


          xhrTwo.send(null);
          event.preventDefault();

    }
