const image = document.getElementById('cover'),
    title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    playerProgress = document.getElementById('player-progress'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play'),
    background = document.getElementById('bg-img');

const music = new Audio();

const songs = [
    {
        path:'assets/Растопи.mp3',
        displayName:'Растопи',
        cover:'assets/rastopi.jpg',
        artist:'Mekhman'
    },
    {
        path:'assets/Под Кайфом.mp3',
        displayName:'Под Кайфом',
        cover:'assets/maxresdefault.jpg',
        artist:'NYU'
    },
    {
        path:'assets/jony.mp3',
        displayName:'Jony',
        cover:'assets/jony-ty-besposhhadna-in.jpg',
        artist:'Jony'
    },
    {
        path:'assets/Hamsaye.mp3',
        displayName:'Хамсоя, Leo',
        cover:'assets/m1000x1000.jpg',
        artist:'Хамсоя, Leo'
    },
    {
        path:'assets/Edmofo x Camélia Jordana - Doudou.mp3',
        displayName:'Edmofo x Camélia Jordana',
        cover:'assets/artworks-000285499442-hyrmsv-t500x500.jpg',
        artist:'Edmofo x Camélia Jordana'
    },
    {
        path:'assets/ᴅᴇʀᴢᴋɪᴇ_ʙᴀss___ovozlipechat_bot.mp3',
        displayName:'Bass',
        cover:'assets/maxresdefault (2).jpg',
        artist:'Bass'
    },
    {
        path:'assets/Disfruto.mp3',
        displayName:'Bass',
        cover:'assets/artworks-000285499442-hyrmsv-t500x500.jpg',
        artist:'Disfruto'
    },
    {
        path:'assets/Chagixuto Gulshi .mp3',
        displayName:'Chagixuto Gulshi',
        cover:'assets/maxresdefault (3).jpg',
        artist:'Chagixuto Gulshi'
    },
    {
        path:'assets/1952796881.mp3',
        displayName:'Bass',
        cover:'assets/maxresdefault (3).jpg',
        artist:'Bass'
    }
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function playMusic() {
    isPlaying = true;
    // Change play button icon
    playBtn.classList.replace('fa-play', 'fa-pause');
    // Set button hover title
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic() {
    isPlaying = false;
    // Change pause button icon
    playBtn.classList.replace('fa-pause', 'fa-play');
    // Set button hover title
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
}

function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar() {
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}


playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);


loadMusic(songs[musicIndex]);