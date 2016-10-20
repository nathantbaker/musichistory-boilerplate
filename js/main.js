console.log("hello world");

var songs = [
  "The Nights of Wines and Roses > by Japandroids on the album Celebration Rock",
  "Legs > by Z*ZTop on the album Eliminator",
  "The Logical Song > by Supertr@amp on the album Breakfast in America",
  "Another Brick in the Wall > by Pink Floyd on the album The Wall",
  "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction",
  "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill",
  "What Do You Mean? > by Justin Bieber on the album Purpose"
];

// Target where we're injecting songs
var html = document.getElementById("songs");
html.innerHTML = "<h1>hi!</h1>";

for (var i = 0; i < songs.length; i++) {
  console.log("Song", i + 1 );
}

// Students must use JavaScript to create a list of songs in the `index.html` file for their Music History project.

// 1. Loop over the array and remove any words or characters that obviously don't belong.
// 1. Students must find and replace the `>` character in each item with a `-` character.
// 1. Must add each string to the DOM in `index.html` in the main content area.

//  ------------------------------------------------
// |  {Song name} by {Artist} on the album {Album}  |
//  ------------------------------------------------
