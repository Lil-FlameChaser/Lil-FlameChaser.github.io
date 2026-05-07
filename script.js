// Данные для песен с путями к файлам и обложкам
const albumsData = {
    'band-history': {
        cover: "photos/photo_2026-04-30_00-40-17.jpg",
        albumTitle: "Pre-Fallen Era",
        songs: [
            { title: "Evanescence Demos Vol.1", url: "songs/pre_fallen_era/Evanescence - Demos Compilation (Remastered) [Pre-Fallen].mp3", duration: "1:12:17" },
            { title: "Evanescence Demos Vol.2", url: "songs/pre_fallen_era/Evanescence - Demos Compilation (Remastered) [Pre-Fallen] Part 2.mp3", duration: "57:24" }
        ]
    },
    'fallen-era': {
        cover: "photos/Evanescence_-_Fallen.png",
        albumTitle: "Fallen",
        songs: [
            { title: "Going Under", url: "songs/Fallen/Evanescence_-_Going_Under_47885097.mp3", duration: "3:34" },
            { title: "Bring Me To Life", url: "songs/Fallen/Evanescence_-_Bring_Me_To_Life_47885099.mp3", duration: "3:56" },
            { title: "Everybody's Fool", url: "songs/Fallen/Evanescence_-_Everybodys_Fool_47885100.mp3", duration: "3:15" },
            { title: "My Immortal", url: "songs/Fallen/Evanescence_-_My_Immortal_47885115.mp3", duration: "4:24" },
            { title: "Haunted", url: "songs/Fallen/Evanescence_-_Haunted_47885104.mp3", duration: "3:06" },
            { title: "Tourniquet", url: "songs/Fallen/Evanescence_-_Tourniquet_47885105.mp3", duration: "4:38" },
            { title: "Imaginary", url: "songs/Fallen/Evanescence_-_Imaginary_47885106.mp3", duration: "4:17" },
            { title: "Taking Over Me", url: "songs/Fallen/Evanescence_-_Taking_Over_Me_47885107.mp3", duration: "3:50" },
            { title: "Hello", url: "songs/Fallen/Evanescence_-_Hello_47885109.mp3", duration: "3:40" },
            { title: "My Last Breath", url: "songs/Fallen/Evanescence_-_My_Last_Breath_47885111.mp3", duration: "4:07" },
            { title: "Whisper", url: "songs/Fallen/Evanescence_-_Whisper_47885112.mp3", duration: "5:27" }
        ]
    },
    'tod-era': {
        cover: "photos/Evanescence_-_The_Open_Door.png",
        albumTitle: "The Open Door",
        songs: [
            { title: "Sweet Sacrifice", url: "songs/The_Open_Door/Evanescence_-_Sweet_Sacrifice_80037865.mp3", duration: "3:05" },
            { title: "Call Me When You're Sober", url: "songs/The_Open_Door/Evanescence_-_Call_Me_When_Youre_Sober_79573004.mp3", duration: "3:34" },
            { title: "Weight of the World", url: "songs/The_Open_Door/Evanescence_-_Weight_Of_The_World_48123517.mp3", duration: "3:37" },
            { title: "Lithium", url: "songs/The_Open_Door/Evanescence_-_Lithium_48123521.mp3", duration: "3:44" },
            { title: "Cloud Nine", url: "songs/The_Open_Door/Evanescence_-_Cloud_Nine_48123523.mp3", duration: "4:22" },
            { title: "Snow White Queen", url: "songs/The_Open_Door/Evanescence_-_Snow_White_Queen_18368.mp3", duration: "4:22" },
            { title: "Lacrymosa", url: "songs/The_Open_Door/Evanescence_-_Lacrymosa_48123527.mp3", duration: "3:37" },
            { title: "Like You", url: "songs/The_Open_Door/Evanescence_-_Like_You_48123529.mp3", duration: "4:16" },
            { title: "Lose Control", url: "songs/The_Open_Door/Evanescence_-_Lose_Control_48123531.mp3", duration: "4:50" },
            { title: "The Only One", url: "songs/The_Open_Door/Evanescence_-_The_Only_One_48123534.mp3", duration: "4:40" },
            { title: "Your Star", url: "songs/The_Open_Door/Evanescence_-_Your_Star_48123536.mp3", duration: "4:43" },
            { title: "All That I'm Living For", url: "songs/The_Open_Door/Evanescence_-_All_That_I_Am_Living_For_62748231.mp3", duration: "3:48" },
            { title: "Good Enough", url: "songs/The_Open_Door/Evanescence_-_Good_Enough_48123540.mp3", duration: "5:31" }
        ]
    },
    'evanescence-era': {
        cover: "photos/Evanescence_-_Evanescence_(album).png",
        albumTitle: "Evanescence",
        songs: [
            { title: "What You Want", url: "songs/Evanescence/Evanescence_-_What_You_Want_64431749.mp3", duration: "3:41" },
            { title: "Made Of Stone", url: "songs/Evanescence/Evanescence_-_Made_of_Stone_64431751.mp3", duration: "3:44" },
            { title: "The Change", url: "songs/Evanescence/Evanescence_-_The_Change_64431753.mp3", duration: "3:42" },
            { title: "My Heart Is Broken", url: "songs/Evanescence/Evanescence_-_My_Heart_Is_Broken_64431755.mp3", duration: "4:29" },
            { title: "The Other Side", url: "songs/Evanescence/Evanescence_-_The_Other_Side_64431757.mp3", duration: "4:05" },
            { title: "Erase This", url: "songs/Evanescence/Evanescence_-_Erase_This_64431760.mp3", duration: "3:55" },
            { title: "Lost In Paradise", url: "songs/Evanescence/Evanescence_-_Lost_in_Paradise_64431762.mp3", duration: "4:42" },
            { title: "Sick", url: "songs/Evanescence/Evanescence_-_Sick_64431764.mp3", duration: "3:30" },
            { title: "The End Of The Dream", url: "songs/Evanescence/Evanescence_-_End_of_the_Dream_64431766.mp3", duration: "3:49" },
            { title: "Never Go Back", url: "songs/Evanescence/Evanescence_-_Never_Go_Back_64431770.mp3", duration: "4:27" },
            { title: "Swimming Home", url: "songs/Evanescence/Evanescence_-_Swimming_Home_64431771.mp3", duration: "3:43" }
        ]
    },
    'synthesis-era': {
        cover: "photos/Evanescence_-_Synthesis.png",
        albumTitle: "Synthesis",
        songs: [
            { title: "Overture", url: "songs/Synthesis/Evanescence_-_Overture_Synthesis_Instrumental_69635373.mp3", duration: "0:55" },
            { title: "Never Go Back", url: "songs/Synthesis/Evanescence - Never Go Back.mp3", duration: "4:20" },
            { title: "Hi-Lo", url: "songs/Synthesis/Evanescence - Hi-Lo (Feat. Lindsey Stirling).mp3", duration: "4:18" },
            { title: "My Heart Is Broken", url: "songs/Synthesis/Evanescence - My Heart Is Broken.mp3", duration: "4:34" },
            { title: "Lacrymosa", url: "songs/Synthesis/Evanescence - Lacrymosa.mp3", duration: "4:42" },
            { title: "The End Of The Dream", url: "songs/Synthesis/Evanescence - The End of the Dream.mp3", duration: "4:25" },
            { title: "Bring Me To Life (Synthesis)", url: "songs/Synthesis/Evanescence - Bring Me to Life.mp3", duration: "4:18" },
            { title: "Unraveling (Interlude)", url: "songs/Synthesis/Evanescence - Unraveling (Interlude).mp3", duration: "1:07" },
            { title: "Imaginary", url: "songs/Synthesis/Evanescence - Imaginary.mp3", duration: "4:03" },
            { title: "Secret Door", url: "songs/Synthesis/Evanescence - Secret Door.mp3", duration: "3:48" },
            { title: "Lithium", url: "songs/Synthesis/Evanescence - Lithium.mp3", duration: "4:06" },
            { title: "Lost In Paradise", url: "songs/Synthesis/Evanescence - Lost In Paradise.mp3", duration: "4:44" },
            { title: "Your Star", url: "songs/Synthesis/Evanescence - Your Star.mp3", duration: "4:46" },
            { title: "My Immortal", url: "songs/Synthesis/Evanescence - My Immortal.mp3", duration: "4:25" },
            { title: "The In-Between (Piano Solo)", url: "songs/Synthesis/Evanescence - The In-Between (Piano Solo).mp3", duration: "2:16" },
            { title: "Imperfection", url: "songs/Synthesis/Evanescence - Imperfection.mp3", duration: "4:07" }
        ]
    },
    'tbt-era': {
        cover: "photos/EvanescenceTheBitterTruth.png",
        albumTitle: "The Bitter Truth",
        songs: [
            { title: "Artifact/The Turn", url: "songs/The_Bitter_Truth/Evanescence - Artifact_The Turn.mp3", duration: "2:27" },
            { title: "Broken Pieces Shine", url: "songs/The_Bitter_Truth/Evanescence - Broken Pieces Shine.mp3", duration: "3:29" },
            { title: "The Game Is Over", url: "songs/The_Bitter_Truth/Evanescence - The Game Is Over.mp3", duration: "3:38" },
            { title: "Yeah Right", url: "songs/The_Bitter_Truth/Evanescence - Yeah Right.mp3", duration: "3:01" },
            { title: "Feeding the Dark", url: "songs/The_Bitter_Truth/Evanescence - Feeding the Dark.mp3", duration: "3:48" },
            { title: "Wasted On You", url: "songs/The_Bitter_Truth/Evanescence - Wasted On You.mp3", duration: "4:24" },
            { title: "Better Without You", url: "songs/The_Bitter_Truth/Evanescence - Better Without You.mp3", duration: "4:05" },
            { title: "Use My Voice", url: "songs/The_Bitter_Truth/Evanescence - Use My Voice.mp3", duration: "3:27" },
            { title: "Take Cover", url: "songs/The_Bitter_Truth/Evanescence - Take Cover.mp3", duration: "3:14" },
            { title: "Far From Heaven", url: "songs/The_Bitter_Truth/Evanescence - Far From Heaven.mp3", duration: "3:16" },
            { title: "Part Of Me", url: "songs/The_Bitter_Truth/Evanescence - Part of Me.mp3", duration: "3:27" },
            { title: "Blind Belief", url: "songs/The_Bitter_Truth/Evanescence - Blind Belief.mp3", duration: "3:56" }
        ]
    },
    'lw': {
        cover: "photos/Evanescence_-_Lost_Whispers.png",
        albumTitle: "Lost Whispers",
        songs: [
            { title: "Lost Whispers (intro)", url: "songs/Lost Whispers/Evanescence - Lost Whispers.mp3", duration: "0:55" },
            { title: "Even In Death (2016 version)", url: "songs/Lost Whispers/Evanescence_-_Even_In_Death_2016_Version_80758385.mp3", duration: "4:21" },
            { title: "Missing", url: "songs/Lost Whispers/Evanescence_-_Missing_79474796.mp3", duration: "4:03" },
            { title: "Farther Away", url: "songs/Lost Whispers/Evanescence_-_Farther_Away_81317033.mp3", duration: "4:56" },
            { title: "Breathe No More", url: "songs/Lost Whispers/Evanescence_-_Breathe_No_More_B-Side_Version_B-Side_Version_62716952.mp3", duration: "3:44" },
            { title: "If You Don't Mind", url: "songs/Lost Whispers/Evanescence - If You Don't Mind.mp3", duration: "2:57" },
            { title: "Together Again", url: "songs/Lost Whispers/Evanescence_-_Together_Again_80228638.mp3", duration: "3:15" },
            { title: "The Last Song I'm Wasting On You", url: "songs/Lost Whispers/Evanescence - The Last Song I'm Wasting on You.mp3", duration: "4:26" },
            { title: "A New Way To Bleed", url: "songs/Lost Whispers/Evanescence_-_New_Way_to_Bleed_64431773.mp3", duration: "3:42" },
            { title: "Say You Will", url: "songs/Lost Whispers/Evanescence_-_Say_You_Will_64431778.mp3", duration: "3:42" },
            { title: "Disappear", url: "songs/Lost Whispers/Evanescence_-_Disappear_64431779.mp3", duration: "3:37" },
            { title: "Secret Door", url: "songs/Lost Whispers/Evanescence_-_Secret_Door_64431780.mp3", duration: "3:51" }
        ]
    }
};

// Глобальные переменные
let globalAudio = new Audio();
let currentAlbumData = null;
let currentSongIndex = -1;

// Форматирование времени
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Функция для извлечения доминирующего цвета из изображения
function getDominantColor(imageElement) {
    return new Promise((resolve) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = imageElement.width;
        canvas.height = imageElement.height;
        ctx.drawImage(imageElement, 0, 0, canvas.width, canvas.height);
        
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        let r = 0, g = 0, b = 0;
        let count = 0;
        
        for (let i = 0; i < data.length; i += 4) {
            r += data[i];
            g += data[i + 1];
            b += data[i + 2];
            count++;
        }
        
        r = Math.floor(r / count);
        g = Math.floor(g / count);
        b = Math.floor(b / count);
        
        resolve(`rgb(${r}, ${g}, ${b})`);
    });
}

// Обновить градиент плеера
async function updatePlayerGradient(coverUrl) {
    const player = document.querySelector('.global-player');
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = coverUrl;
    
    img.onload = async () => {
        const dominantColor = await getDominantColor(img);
        player.style.background = `linear-gradient(135deg, ${dominantColor}30, #0a0a0a)`;
        player.style.backdropFilter = 'blur(10px)';
    };
}

// Воспроизвести песню по индексу
function playSongByIndex(index) {
    if (!currentAlbumData || index >= currentAlbumData.songs.length) {
        if (currentSongIndex + 1 >= currentAlbumData?.songs.length) {
            stopCurrentSong();
            hidePlayer();
        }
        return;
    }
    
    currentSongIndex = index;
    const song = currentAlbumData.songs[currentSongIndex];
    
    globalAudio.src = song.url;
    globalAudio.load();
    globalAudio.play().catch(e => console.log('Автовоспроизведение заблокировано'));
    
    // Обновляем плеер
    document.querySelector('.player-cover').src = currentAlbumData.cover;
    document.querySelector('.player-song-title').textContent = song.title;
    document.querySelector('.player-album-title').textContent = currentAlbumData.albumTitle;
    document.querySelector('.global-play-btn').textContent = '⏸';
    
    // Обновляем градиент
    updatePlayerGradient(currentAlbumData.cover);
    
    // Обновляем активный класс в списке
    document.querySelectorAll('.active-song').forEach(li => {
        li.classList.remove('active-song');
    });
    
    const allSongs = document.querySelectorAll('ul li');
    for (let i = 0; i < allSongs.length; i++) {
        if (allSongs[i].textContent.trim() === song.title) {
            allSongs[i].classList.add('active-song');
            allSongs[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
            break;
        }
    }
    
    showPlayer();
}

// Переключить на предыдущую песню
function playPreviousSong() {
    if (currentAlbumData && currentSongIndex - 1 >= 0) {
        playSongByIndex(currentSongIndex - 1);
    }
}

// Переключить на следующую песню
function playNextSong() {
    if (currentAlbumData && currentSongIndex + 1 < currentAlbumData.songs.length) {
        playSongByIndex(currentSongIndex + 1);
    } else {
        stopCurrentSong();
        hidePlayer();
    }
}

// Остановить текущую песню
function stopCurrentSong() {
    if (globalAudio && !globalAudio.paused) {
        globalAudio.pause();
        globalAudio.currentTime = 0;
    }
    
    document.querySelectorAll('.active-song').forEach(li => {
        li.classList.remove('active-song');
    });
    
    const playBtn = document.querySelector('.global-play-btn');
    if (playBtn) playBtn.textContent = '▶';
    
    const progressSlider = document.querySelector('.player-progress-slider');
    const timeCurrent = document.querySelector('.global-time-current');
    if (progressSlider) progressSlider.value = 0;
    if (timeCurrent) timeCurrent.textContent = '0:00';
}

// Показать/скрыть плеер
function showPlayer() {
    const player = document.querySelector('.global-player');
    if (player) {
        player.style.display = 'flex';
    }
}

function hidePlayer() {
    const player = document.querySelector('.global-player');
    if (player) {
        player.style.display = 'none';
    }
}

// Создать глобальный плеер
function createGlobalPlayer() {
    if (document.querySelector('.global-player')) return;
    
    const playerHTML = `
        <div class="global-player" style="display: none;">
            <div class="player-header" id="playerHeader">
                <span class="player-title">🎵 Evanescence Player</span>
                <button class="player-close-btn">✕</button>
            </div>
            <div class="player-cover-container">
                <img class="player-cover" src="" alt="Обложка альбома">
            </div>
            <div class="player-song-title">Evanescence</div>
            <div class="player-album-title">Выберите песню</div>
            <div class="player-progress-container">
                <input type="range" class="player-progress-slider" min="0" max="100" step="0.1" value="0">
            </div>
            <div class="player-time">
                <span class="global-time-current">0:00</span>
                <span class="global-time-total">0:00</span>
            </div>
            <div class="player-controls">
                <button class="player-prev-btn">⏮</button>
                <button class="global-play-btn">▶</button>
                <button class="player-next-btn">⏭</button>
            </div>
            <div class="player-volume">
                <button class="global-volume-btn">🔊</button>
                <input type="range" class="global-volume-slider" min="0" max="1" step="0.01" value="0.7">
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', playerHTML);
    
    const player = document.querySelector('.global-player');
    const playBtn = player.querySelector('.global-play-btn');
    const prevBtn = player.querySelector('.player-prev-btn');
    const nextBtn = player.querySelector('.player-next-btn');
    const progressSlider = player.querySelector('.player-progress-slider');
    const timeCurrent = player.querySelector('.global-time-current');
    const timeTotal = player.querySelector('.global-time-total');
    const volumeSlider = player.querySelector('.global-volume-slider');
    const volumeBtn = player.querySelector('.global-volume-btn');
    const closeBtn = player.querySelector('.player-close-btn');
    
    // Drag and drop с плавным перемещением
    const header = player.querySelector('#playerHeader');
    let isDragging = false;
    let dragOffsetX = 0;
    let dragOffsetY = 0;
    let animationFrameId = null;
    
    // Добавляем will-change для плавности
    player.style.willChange = 'left, top';
    
    function updatePosition(left, top) {
        left = Math.min(Math.max(0, left), window.innerWidth - player.offsetWidth);
        top = Math.min(Math.max(0, top), window.innerHeight - player.offsetHeight);
        
        player.style.left = left + 'px';
        player.style.top = top + 'px';
        player.style.right = 'auto';
        player.style.bottom = 'auto';
    }
    
    header.addEventListener('mousedown', (e) => {
        if (e.target === closeBtn) return;
        isDragging = true;
        
        const rect = player.getBoundingClientRect();
        dragOffsetX = e.clientX - rect.left;
        dragOffsetY = e.clientY - rect.top;
        
        player.style.cursor = 'grabbing';
        player.style.transition = 'none';
        
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        
        animationFrameId = requestAnimationFrame(() => {
            let newLeft = e.clientX - dragOffsetX;
            let newTop = e.clientY - dragOffsetY;
            updatePosition(newLeft, newTop);
            animationFrameId = null;
        });
    });
    
    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            player.style.cursor = '';
            player.style.transition = '';
            
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
        }
    });
    
    // Прогресс-бар
    let isSeeking = false;
    
    globalAudio.addEventListener('loadedmetadata', () => {
        timeTotal.textContent = formatTime(globalAudio.duration);
        progressSlider.max = globalAudio.duration;
    });
    
    globalAudio.addEventListener('timeupdate', () => {
        if (!isSeeking && globalAudio.duration) {
            timeCurrent.textContent = formatTime(globalAudio.currentTime);
            progressSlider.value = globalAudio.currentTime;
        }
    });
    
    progressSlider.addEventListener('mousedown', () => {
        isSeeking = true;
    });
    
    progressSlider.addEventListener('input', (e) => {
        const time = parseFloat(e.target.value);
        globalAudio.currentTime = time;
        timeCurrent.textContent = formatTime(time);
    });
    
    progressSlider.addEventListener('mouseup', () => {
        isSeeking = false;
    });
    
    globalAudio.addEventListener('ended', () => {
        playNextSong();
    });
    
    playBtn.addEventListener('click', () => {
        if (globalAudio.src && !globalAudio.paused) {
            globalAudio.pause();
            playBtn.textContent = '▶';
        } else if (globalAudio.src) {
            globalAudio.play();
            playBtn.textContent = '⏸';
        }
    });
    
    prevBtn.addEventListener('click', () => {
        playPreviousSong();
    });
    
    nextBtn.addEventListener('click', () => {
        playNextSong();
    });
    
    volumeSlider.addEventListener('input', (e) => {
        globalAudio.volume = parseFloat(e.target.value);
        volumeBtn.textContent = globalAudio.volume === 0 ? '🔇' : '🔊';
    });
    
    volumeBtn.addEventListener('click', () => {
        if (globalAudio.volume > 0) {
            globalAudio.volume = 0;
            volumeSlider.value = '0';
            volumeBtn.textContent = '🔇';
        } else {
            globalAudio.volume = 0.7;
            volumeSlider.value = '0.7';
            volumeBtn.textContent = '🔊';
        }
    });
    
    closeBtn.addEventListener('click', () => {
        stopCurrentSong();
        globalAudio.src = '';
        currentAlbumData = null;
        currentSongIndex = -1;
        hidePlayer();
    });
}

// Привязка кликов к песням
function bindSongClick(eraClass, albumData) {
    const eraElement = document.querySelector(`.${eraClass}`);
    if (!eraElement) return;
    
    const allSongs = eraElement.querySelectorAll('ul li');
    allSongs.forEach((songItem, index) => {
        if (index >= albumData.songs.length) return;
        
        songItem.removeEventListener('click', songItem._clickHandler);
        
        const clickHandler = () => {
            stopCurrentSong();
            currentAlbumData = albumData;
            playSongByIndex(index);
        };
        
        songItem._clickHandler = clickHandler;
        songItem.addEventListener('click', clickHandler);
        songItem.style.cursor = 'pointer';
    });
}

// Добавляем стили
function addPlayerStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .active-song {
            background: rgba(139, 0, 0, 0.5);
            border-left: 3px solid #8b0000;
            padding-left: calc(8px - 3px);
        }
        
        ul li {
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        ul li:hover {
            background: rgba(139, 0, 0, 0.3);
            transform: translateX(5px);
        }
        
        .global-player {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 9999;
            background: rgba(17, 17, 17, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            border: 1px solid #8b0000;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
            flex-direction: column;
            width: 280px;
            padding: 15px;
            transition: box-shadow 0.3s ease;
        }
        
        .global-player:hover {
            box-shadow: 0 6px 25px rgba(139, 0, 0, 0.3);
        }
        
        .player-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 15px;
            cursor: move;
            user-select: none;
        }
        
        .player-title {
            font-size: 12px;
            color: #b0b0b0;
            font-weight: 500;
        }
        
        .player-close-btn {
            background: none;
            border: none;
            color: #b0b0b0;
            cursor: pointer;
            font-size: 18px;
            transition: all 0.3s ease;
        }
        
        .player-close-btn:hover {
            color: #8b0000;
        }
        
        .player-cover-container {
            width: 100%;
            aspect-ratio: 1;
            border-radius: 12px;
            overflow: hidden;
            margin-bottom: 15px;
        }
        
        .player-cover {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .player-song-title {
            font-size: 16px;
            font-weight: 600;
            color: #e0e0e0;
            text-align: center;
            margin-bottom: 5px;
        }
        
        .player-album-title {
            font-size: 12px;
            color: #b0b0b0;
            text-align: center;
            margin-bottom: 15px;
        }
        
        .player-progress-container {
            width: 100%;
            margin-bottom: 8px;
        }
        
        .player-progress-slider {
            width: 100%;
            height: 4px;
            -webkit-appearance: none;
            background: #333;
            border-radius: 2px;
            outline: none;
            cursor: pointer;
        }
        
        .player-progress-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #8b0000;
            cursor: pointer;
            transition: transform 0.1s ease;
        }
        
        .player-progress-slider::-webkit-slider-thumb:hover {
            transform: scale(1.2);
        }
        
        .player-time {
            display: flex;
            justify-content: space-between;
            font-size: 11px;
            color: #b0b0b0;
            margin-bottom: 15px;
        }
        
        .player-controls {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 25px;
            margin-bottom: 15px;
        }
        
        .player-prev-btn, .player-next-btn, .global-play-btn {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #8b0000;
            border: none;
            color: white;
            font-size: 16px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .player-prev-btn:hover, .player-next-btn:hover, .global-play-btn:hover {
            background: #b30000;
            transform: scale(1.05);
        }
        
        .player-volume {
            display: flex;
            align-items: center;
            gap: 10px;
            justify-content: center;
        }
        
        .global-volume-slider {
            width: 100px;
            height: 4px;
            -webkit-appearance: none;
            background: #333;
            border-radius: 2px;
            outline: none;
        }
        
        .global-volume-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #8b0000;
            cursor: pointer;
        }
        
        .global-volume-btn {
            background: none;
            border: none;
            color: #b0b0b0;
            cursor: pointer;
            font-size: 16px;
            transition: all 0.3s ease;
        }
        
        .global-volume-btn:hover {
            color: #8b0000;
        }
        
        @media (max-width: 480px) {
            .global-player {
                width: 260px;
                padding: 12px;
            }
        }
    `;
    document.head.appendChild(style);
}

// Запуск
document.addEventListener('DOMContentLoaded', () => {
    addPlayerStyles();
    createGlobalPlayer();
    
    for (const [eraClass, albumData] of Object.entries(albumsData)) {
        bindSongClick(eraClass, albumData);
    }
});