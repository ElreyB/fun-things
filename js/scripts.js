$(document).ready(function() {
  $("#favorite-things").submit(function(event) {
    event.preventDefault();
    var favoriteThings = [];
    $("#favorite-things > div > input").each(function() {
      favoriteThings.push(this.value);
    });

    var selectFavorites = [];
    selectFavorites.push(favoriteThings[1]);
    selectFavorites.push(favoriteThings[0]);
    selectFavorites.push(favoriteThings[2]);

    selectFavorites.forEach(function(fave) {
      $(".favorites").append("<li>" + fave + "</li>");
    });
  });
});
