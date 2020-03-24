const API_KEY = "537GHXiOKrmcYkpiwWJTEvZpFKpATQWb";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" + API_KEY;

//console.log(queryURL);

$(document).ready(function() {

    $("#search").on("click", function() {
        var keywords = $("#keywords").val();
        console.log(keywords);

        var keywordsArray = keywords.split(" ");

        console.log(keywordsArray);

        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
              console.log(response);
              //console.log(response.response.docs[0].headline.main);
              //console.log(response.response.docs[0].keywords[0].value);
        
              var articles = response.response.docs;
        
              $.each(articles, function(index, value) {
                
                var heading = articles[index].headline.main;

                var headingArray = heading.split(" ");

                $.each(keywordsArray, function(index1, value1) {

                    if (headingArray[index1] === value1) {
                        $("#articles").append("<div>" + heading + "</div>");
                    }
                });
              });
          });
         
    });

});



