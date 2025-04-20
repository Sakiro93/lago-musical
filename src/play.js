// play.js
const { songs, ignore } = require('./songs');

function playSong(song_init) {
    if (ignore.includes(song_init)) {
        return ["....silencio...."];
    }
    
    for (const song of songs) {
        const index = song.indexOf(song_init); 
        
        if (index !== -1 && index < song.length - 1) {
            return song.slice(index + 1);
        }
    }
    
    return [];
}

module.exports = { playSong };
