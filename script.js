/* =========================
   Cinemate — script.js
   ========================= */

/* ----- Movie dataset -----
   Türler: aksiyon, romantik, komedi, korku, dram, bilimkurgu
   Her türde 5 film: title, year, rating (örnek), poster path, short desc
---------------------------*/

const movies = {
  aksiyon: [
    { title: "John Wick", year: 2014, rating: "7.4", poster: "https://www.arttablo.com/upload/U-john-wick-film-afisi-sinema-kanvas-tablo1527666076-800.jpg", desc: "Eski tetikçi intikam için geri döner; hızlı tempolu aksiyon."},
    { title: "Mad Max: Fury Road", year: 2015, rating: "8.1", poster: "https://tr.web.img4.acsta.net/pictures/15/04/14/18/30/215297.jpg", desc: "Distopik çorak arazide nefes kesen kovalamaca."},
    { title: "Extraction", year: 2020, rating: "6.7", poster: "https://s3.cloud.ngn.com.tr/kitantik/images/2022-07-17/1br9qfyl5odiqet1kay.jpg", desc: "Kurtarma görevinde adrenalin dolu sahneler."},
    { title: "Mission: Impossible – Fallout", year: 2018, rating: "7.7", poster: "https://tr.web.img2.acsta.net/c_310_420/pictures/bzp/03/2152.jpg", desc: "Büyük ölçekli casusluk ve akrobatik aksiyon."},
    { title: "The Dark Knight", year: 2008, rating: "9.0", poster: "https://play-lh.googleusercontent.com/auIs5tjWlLYaFPGClZOJ7m5YVbnX6uBvz0X02r8TkwFKdzE53ww2MqWSS9gU0YNqoYwvpg", desc: "Süper kahraman ögeleriyle karanlık gerilim."}
  ],
  romantik: [
    { title: "The Notebook", year: 2004, rating: "7.8", poster: "https://play-lh.googleusercontent.com/MGZioJEEiRHyC0kNqBBew_WPCbrK9a1ARy89CBgUbV5UcObaNDt5E0yTutuJKrDXwUbtzh-BUxlms9L_KA", desc: "Duygusal aşk hikayesi; nostaljik atmosfer."},
    { title: "La La Land", year: 2016, rating: "8.0", poster: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_FMjpg_UX1000_.jpg", desc: "Müzik ve aşkın birleştiği renkli bir film."},
    { title: "Pride & Prejudice", year: 2005, rating: "7.8", poster: "https://media.s-bol.com/ZZgPz87oRQ8R/66QzLQN/144x210.jpg", desc: "Klasik edebi uyarlama, zarif duygusallık."},
    { title: "Before Sunrise", year: 1995, rating: "8.1", poster: "https://m.media-amazon.com/images/M/MV5BZDZhZmI1ZTUtYWI3NC00NTMwLTk3NWMtNDc0OGNjM2I0ZjlmXkEyXkFqcGc@._V1_.jpg", desc: "Bir gece içinde kurulan bağın hikayesi."},
    { title: "Eternal Sunshine of the Spotless Mind", year: 2004, rating: "8.3", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbw41ci1xxQGtti179gBLlaiaRe5Icwu_RJQ&s", desc: "Bellek, aşk ve kırılganlık üzerine sıradışı bir anlatı."}
  ],
  komedi: [
    { title: "The Hangover", year: 2009, rating: "7.7", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO-GsZ9QVL9kC1EBOUzUBJ58pkoHm3YeUjGQ&s", desc: "Beklenmedik ve çılgın bir bekarlığa veda macerası."},
    { title: "Yes Man", year: 2008, rating: "6.8", poster: "https://m.media-amazon.com/images/M/MV5BZWQ4YzBiMzgtM2ZhZC00ZDQ5LWFiZjgtNmFlNzZlMTBkZTJhXkEyXkFqcGc@._V1_.jpg", desc: "Hayata evet demenin eğlenceli dönüşümleri."},
    { title: "Superbad", year: 2007, rating: "7.6", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-yl3RySRoEzCM54VMjlgt7TJ6yi55Gi4o4w&s", desc: "Gençlik komedisi, arkadaşlık ve kötü planlar."},
    { title: "Mean Girls", year: 2004, rating: "7.0", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQfaSXn362KRPIf6afwuqX79kwnpv0M89PRQ&s", desc: "Lise hayatı üzerine keskin ve komik gözlemler."},
    { title: "The Grand Budapest Hotel", year: 2014, rating: "8.1", poster: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_FMjpg_UX1000_.jpg", desc: "Wes Anderson’ın renkli, nükteli anlatısı."}
  ],
  korku: [
    { title: "The Conjuring", year: 2013, rating: "7.5", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo1w35AsAv2sISXApGQxf8hD_gO4d_A_ZC3Q&s", desc: "Klasik ev-tüyleri, gerilim odaklı."},
    { title: "It", year: 2017, rating: "7.4", poster: "https://m.media-amazon.com/images/M/MV5BZDFhODExOTctNTFkZS00NjE1LWE2MWMtY2Q1ZThhMGY5NjJkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", desc: "Çocukluk korkuları ve kasabayı saran tehdit."},
    { title: "Hereditary", year: 2018, rating: "7.3", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpl4Xc3R920eCuf7j_PlUmqkEtZY9g7j61KA&s", desc: "Aile draması içinde yoğun psikolojik gerilim."},
    { title: "A Quiet Place", year: 2018, rating: "7.5", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcSx0eqHw7ZGjtVQA7NUjPQWvaRO7QWAtPtw&s", desc: "Sessiz kalmanın hayatta kalma meselesi olduğu bir dünya."},
    { title: "Get Out", year: 2017, rating: "7.7", poster: "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg", desc: "Sosyal gerilimle harmanlanmış tür gerilimi."}
  ],
  dram: [
    { title: "The Shawshank Redemption", year: 1994, rating: "9.3", poster: "https://www.istanbulsanatevi.com/wp-content/uploads/2017/05/esaretin-bedeli-film-afisi-the-shawshank-redemption.jpg", desc: "Umudun ve dostluğun güçlü hikayesi."},
    { title: "Forrest Gump", year: 1994, rating: "8.8", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxtSbzvmzfTs4e73JaYqqVpFAfaL3kF4fxfg&s", desc: "Sıcak, kahramanca ve duygusal bir yolculuk."},
    { title: "Parasite", year: 2019, rating: "8.6", poster: "https://upload.wikimedia.org/wikipedia/tr/0/0d/Parazit_2019.jpg", desc: "Sosyal sınıf çatışmasının sert bir hicvi."},
    { title: "Whiplash", year: 2014, rating: "8.5", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP84YZtk6WteBd3KpAKCqEEK_AhRvgOky_SQ&s", desc: "Bağırış çağırış içinde başarıya takıntı."},
    { title: "Moonlight", year: 2016, rating: "7.4", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrLrBXJUPK7dK5Qec2nK_tx7NUGKNx6o0t5Q&s", desc: "Kimlik ve aidiyet üzerine zarif bir anlatı."}
  ],
  scifi: [
    { title: "Inception", year: 2010, rating: "8.8", poster: "https://m.media-amazon.com/images/M/MV5BZjhkNjM0ZTMtNGM5MC00ZTQ3LTk3YmYtZTkzYzdiNWE0ZTA2XkEyXkFqcGc@._V1_.jpg", desc: "Rüya içinde rüya, yüksek tempolu zihin oyunu."},
    { title: "Interstellar", year: 2014, rating: "8.6", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRags4nxKL0so5_4ZQMubnfUDqo2x_9pDn2dQ&s", desc: "Kozmik görsel şölen ve duygusal merkeze sahip."},
    { title: "The Matrix", year: 1999, rating: "8.7", poster: "https://m.media-amazon.com/images/I/613ypTLZHsL._AC_UF1000,1000_QL80_.jpg", desc: "Gerçeğin doğasını sorgulayan aksiyon-simülasyon."},
    { title: "Blade Runner 2049", year: 2017, rating: "8.0", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMQm4oMJqoEUSPbRv9TKlm7aRSEn207FH1RQ&s", desc: "Melankolik, görsel olarak çarpıcı bir gelecek."},
    { title: "Ex Machina", year: 2014, rating: "7.7", poster: "https://m.media-amazon.com/images/I/71UxhMFjSlL._UF894,1000_QL80_.jpg", desc: "Yapay zekâ ve etik eksenli psikolojik gerilim."}
  ]
};

/* ---------- Helper: DOM references ---------- */
const recEl = document.getElementById("recommendations");
const genreSelect = document.getElementById("genreSelect");
const queryInput = document.getElementById("query");
const askBtn = document.getElementById("askBtn");

const chatToggle = document.getElementById("chatToggle");
const chat = document.getElementById("chat");
const closeChat = document.getElementById("closeChat");
const chatBody = document.getElementById("chatBody");
const chatInput = document.getElementById("chatInput");
const chatSend = document.getElementById("chatSend");

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalInfo = document.getElementById("modalInfo");
const modalClose = document.getElementById("modalClose");

/* ---------- Initialize genre select ---------- */
function populateGenres(){
  const keys = Object.keys(movies);
  keys.forEach(k => {
    const opt = document.createElement("option");
    opt.value = k;
    opt.textContent = k.charAt(0).toUpperCase() + k.slice(1);
    genreSelect.appendChild(opt);
  });
}
populateGenres();

/* ---------- Render recommendations (defaults: all genres, first 12) ---------- */
function renderRecommendations(filterGenre = "") {
  recEl.innerHTML = "";
  // gather list
  let list = [];
  if(filterGenre && movies[filterGenre]){
    list = [...movies[filterGenre]];
  } else {
    Object.keys(movies).forEach(g => {
      list = list.concat(movies[g]);
    });
  }
  // shuffle & limit for variety
  list = shuffle(list).slice(0, 18);

  list.forEach(m => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img class="poster" src="${m.poster}" alt="${m.title} poster" loading="lazy" />
      <div class="meta">
        <div class="title">${m.title} <span style="font-weight:600;color:#bbb">(${m.year})</span></div>
        <div class="genres"><span class="badge">${m.rating}★</span></div>
        <div class="summary" style="opacity:0.9">${truncate(m.desc, 110)}</div>
      </div>
    `;
    card.addEventListener("click", ()=> openModal(m));
    recEl.appendChild(card);
  });
}
function truncate(s, n){ return s.length>n ? s.slice(0,n-1)+"…" : s; }
function shuffle(a){ return a.sort(()=> Math.random()-0.5); }
renderRecommendations();

/* ---------- Modal ---------- */
function openModal(m){
  modalImg.src = m.poster;
  modalInfo.innerHTML = `<h2 style="margin:4px 0">${m.title} <small style="color:#bbb">(${m.year})</small></h2>
                         <p style="margin:8px 0;color:#ddd">${m.desc}</p>
                         <p style="margin-top:12px"><strong>Puan:</strong> ${m.rating} / 10</p>`;
  modal.classList.remove("hidden");
}
modalClose.addEventListener("click", ()=> modal.classList.add("hidden"));
modal.addEventListener("click", (e)=> { if(e.target===modal) modal.classList.add("hidden"); });

/* ---------- Controls: askBtn ---------- */
askBtn.addEventListener("click", () => {
  const q = queryInput.value.trim().toLowerCase();
  const selected = genreSelect.value;
  if(q){
    // Basit anlama: eğer içerikte bir tür geçiyorsa o türe göre öner
    const foundGenre = Object.keys(movies).find(g => q.includes(g));
    if(foundGenre){
      addBotMessage(`Tamam! ${foundGenre} türünden öneriler getiriyorum 🎬`);
      renderRecommendations(foundGenre);
    } else if(selected){
      addBotMessage(`Seçili türe göre öneriler gösteriliyor: ${selected}`);
      renderRecommendations(selected);
    } else {
      // eğer sorguda film adı örn "La La Land benzeri" -> tür bulmaya çalış
      const keywords = q.split(/\s+/);
      // basit keyword -> tür eşlemeleri
      const mapping = { romantik: "romantik", komedi: "komedi", aksiyon: "aksiyon", korku: "korku", dram: "dram", bilim: "scifi", bilimkurgu: "scifi", "sci-fi":"scifi", "sci fi":"scifi" };
      const mk = keywords.map(k => mapping[k]).find(Boolean);
      if(mk){
        addBotMessage(`${mk} türünden birkaç öneri hazırladım.`);
        renderRecommendations(mk);
      } else {
        // fallback: karışık türden karışık öneri
        addBotMessage("Harika bir seçim! Sana karışık türlerden popüler 12 film listesi hazırladım.");
        renderRecommendations("");
      }
    }
  } else if(genreSelect.value){
    addBotMessage(`${genreSelect.value} türünden öneriler gösteriliyor.`);
    renderRecommendations(genreSelect.value);
  } else {
    addBotMessage("Hangi türe bakmak istersin? Yukarıdaki menüden seçebilir veya bir şey yazabilirsin.");
  }
});

/* ---------- Chat widget logic (kendi basit botumuz) ---------- */
chatToggle.addEventListener("click", ()=> {
  chat.classList.toggle("hidden");
});
closeChat.addEventListener("click", ()=> chat.classList.add("hidden"));

chatSend.addEventListener("click", ()=> handleChatInput());
chatInput.addEventListener("keydown",(e)=> { if(e.key==="Enter") handleChatInput(); });

function handleChatInput(){
  const txt = chatInput.value.trim();
  if(!txt) return;
  addUserMessage(txt);
  chatInput.value = "";
  // Simüle "typing"
  addBotMessage("Yazıyor...");
  setTimeout(()=> {
    // remove last bot "yazıyor..."
    if(chatBody.lastChild && chatBody.lastChild.classList.contains("bot") && chatBody.lastChild.textContent==="Yazıyor...") {
      chatBody.lastChild.remove();
    }
    // Very simple NLP rules: genre mention or ask for "benzeri"
    const lower = txt.toLowerCase();
    const keys = Object.keys(movies);
    const mentioned = keys.find(k => lower.includes(k));
    if(mentioned){
      addBotMessage(`${mentioned} türünden 5 öneri:`);
      movies[mentioned].slice(0,5).forEach(m => addBotMessage(`• ${m.title} (${m.year}) — ${m.rating}★`));
    } else if(lower.includes("benzeri") || lower.includes("gibi")){
      // try find hint movie
      const found = Object.values(movies).flat().find(m => lower.includes(m.title.toLowerCase().split(" ")[0]));
      if(found){
        // recommend same genre (approx)
        const genre = Object.keys(movies).find(g => movies[g].some(x=>x.title===found.title));
        addBotMessage(`${found.title} benzeri filmler arıyorsun. ${genre} türünden öneriler:`);
        movies[genre].slice(0,5).forEach(m => addBotMessage(`• ${m.title} (${m.year})`));
      } else {
        addBotMessage("Tamam, zevkine göre birkaç tür seçip öneri hazırladım:");
        // mix sample
        const mixed = Object.keys(movies).map(g=>movies[g][0]).slice(0,6);
        mixed.forEach(m => addBotMessage(`• ${m.title} — ${m.rating}★`));
      }
    } else if(lower.includes("aksi") || lower.includes("aksiyon")){
      addBotMessage("Aksiyon seviyorsun — hızlı tempolu 5 film: ");
      movies.aksiyon.slice(0,5).forEach(m => addBotMessage(`• ${m.title} (${m.year})`));
    } else {
      // fallback: suggest popular mix
      addBotMessage("Güzel! İşte farklı türlerden karışık 6 öneri:");
      const sample = [];
      Object.keys(movies).forEach(k => sample.push(...movies[k].slice(0,1)));
      sample.slice(0,6).forEach(m => addBotMessage(`• ${m.title} — ${m.rating}★`));
    }
  }, 700 + Math.random()*700);
}

function addBotMessage(text){
  const d = document.createElement("div");
  d.className = "bot";
  d.innerHTML = text;
  chatBody.appendChild(d);
  chatBody.scrollTop = chatBody.scrollHeight;
}
function addUserMessage(text){
  const d = document.createElement("div");
  d.className = "user";
  d.textContent = text;
  chatBody.appendChild(d);
  chatBody.scrollTop = chatBody.scrollHeight;
}

/* ---------- Poster lazy-loading note already used (loading="lazy") ---------- */

/* ---------- Curtain animation (cinema opening) ---------- */
const leftCurtain = document.querySelector(".curtain.left");
const rightCurtain = document.querySelector(".curtain.right");
// after short delay, open curtains
setTimeout(()=> {
  leftCurtain.classList.add("open");
  rightCurtain.classList.add("open");
}, 800);

// Reveal content with fade — small effect
document.querySelector(".hero").style.opacity = 0;
setTimeout(()=> {
  document.querySelector(".hero").style.transition = "opacity 700ms ease";
  document.querySelector(".hero").style.opacity = 1;
}, 1400);

/* ---------- Utility: click poster to open modal handled in renderRecommendations ---------- */

/* ---------- Click outside modal to close handled earlier ---------- */