var songs = [
  "Legs > by Z*ZTop on the album Eliminator",
  "The Logical Song > by Supertr@amp on the album Breakfast in America",
  "Another Brick in the Wall > by Pink Floyd on the album The Wall",
  "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction",
  "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill"
];

// adding a song to the beggining and end, because requirements
songs.unshift("The Nights of Wines and Roses > by Japandroids on the album Celebration Rock");
songs.push("What Do You Mean? > by Justin Bieber on the album Purpose");

for (var i = 0; i < songs.length; i++) {
  // replace > for - and remove characters that don't belong
  songs[i] = songs[i].replace(">", "-").replace(/[@*(!]/g, "");
}

// Target where and what we're injecting
var html = document.getElementById("songs");
var htmlBefore = "<article><p>";
var htmlAfter = "</article></p>";

// Inject songs into HTML
for (var i = 0; i < songs.length; i++) {
  var stringToAdd = htmlBefore + songs[i] + htmlAfter;
  html.innerHTML += stringToAdd;
}