const player = new Plyr('#player');
const players = Array.from(document.querySelectorAll('.players')).map(p => new Plyr(p));
