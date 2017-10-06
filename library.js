// A Library has a `name` and a `creator` (both strings), has many playlists
function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

// A Playlist has a `name`, has many tracks
function Playlist(name) {
  this.name = name;
  this.tracks = [];
}

// A Track has a `title`, `rating` (an int from 1-5), `length` (int in seconds)
function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

Object.setPrototypeOf(Library.prototype, Playlist.prototype);
Object.setPrototypeOf(Playlist.prototype, Track.prototype);

// Track objects can be added to an instance of a Playlist
Playlist.prototype.addTrack = function(track) {
  this.tracks.push(track);
};

// Each Playlist also has an `overallRating` fn which will calculate the rating by averaging the rating of its tracks
Playlist.prototype.overallRating = function() {
  let aveRating = 0;
  for (let idx in this.tracks) {
    aveRating += this.tracks[idx].rating;
  }
  return aveRating / this.tracks.length;
};

// Each Playlist also has a `totalDuration` fn which will sum the duration of all its tracks
Playlist.prototype.totalDuration = function() {
  let total = 0;
  for (let idx in this.tracks) {
    total += this.tracks[idx].length;
  }
  return `${total} seconds`;
};

// Playlist objects can be added to an instance of a library
Library.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist);
};

const library = new Library('Library', 'Mij');
const playlist = new Playlist(`Mij's Playlist`);
const song = new Track('All Star', 5, 130);
const song2 = new Track('Song 2', 3, 100);

playlist.addTrack(song);
playlist.addTrack(song2);
console.log(playlist.overallRating());
console.log(playlist.totalDuration());
library.addPlaylist(playlist);

console.log(song);
console.log(song2);
console.log(playlist);
console.log(library.playlists);
