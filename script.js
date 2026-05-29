const players = [
  {
    name: "Michael Jordan",
    era: "Chicago Bulls dynasty",
    teams: ["Bulls", "Wizards", "SG"],
    x: 50,
    y: 45,
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Michael_Jordan_in_2014.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/a/ae/Michael_Jordan_in_2014.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Michael_Jordan%2C_1997.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/9b/Michael_Jordan_1987.jpg"
    ],
    summary: "When I think of the NBA's competitive standard, I see Jordan hanging in the air, punishing the midrange, and turning June into his stage.",
    honors: ["6x NBA champion", "6x Finals MVP", "5x NBA MVP", "14x All-Star", "10x scoring champion", "1988 Defensive Player of the Year"]
  },
  {
    name: "LeBron James",
    era: "Longevity and total control",
    teams: ["Cavaliers", "Heat", "Lakers", "SF"],
    x: 30,
    y: 28,
    image: "https://upload.wikimedia.org/wikipedia/commons/2/25/LeBron_James_Lakers.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/2/25/LeBron_James_Lakers.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/b/bf/LeBron_James_%2851965425061%29_%28cropped%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/LeBron_James_%2831927191583%29.jpg"
    ],
    summary: "To me, LeBron is the full-court thunderclap: a freight train in transition, a quarterback in the half court, and a timeline that refuses to end.",
    summaryZh: "以前锋身材掌控全场的持球核心，拥有历史级耐久度、传球视野、冲筐压力和季后赛适配能力。",
    honors: ["4x NBA champion", "4x Finals MVP", "4x NBA MVP", "20x All-Star", "NBA all-time scoring leader", "NBA 75th Anniversary Team"]
  },
  {
    name: "Kobe Bryant",
    era: "Mamba mentality",
    teams: ["Lakers", "SG"],
    x: 70,
    y: 28,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Kobe_Bryant_2014.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/9/96/Kobe_Bryant_2014.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/5/56/Kobe_Bryant_8.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/82/Kobe_Bryant_2015.jpg"
    ],
    summary: "Kobe feels like the final possession itself: footwork, fadeaways, cold eyes, and a crowd already expecting the impossible.",
    honors: ["5x NBA champion", "2x Finals MVP", "2008 NBA MVP", "18x All-Star", "2x scoring champion", "11x All-NBA First Team"]
  },
  {
    name: "Stephen Curry",
    era: "Three-point revolution",
    teams: ["Warriors", "PG"],
    x: 50,
    y: 15,
    image: "https://upload.wikimedia.org/wikipedia/commons/2/27/Stephen_Curry_Shooting_%28cropped%29.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/2/27/Stephen_Curry_Shooting_%28cropped%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/8c/Stephen_Curry_dribbling_2016_%28cropped%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/33/Stephen_Curry_2.jpg"
    ],
    summary: "Curry is the moment the defense panics before he even crosses half court, because one clean window can turn into three points and a roar.",
    honors: ["4x NBA champion", "2022 Finals MVP", "2x NBA MVP", "2016 unanimous MVP", "NBA all-time three-point leader", "10x All-Star"]
  },
  {
    name: "Magic Johnson",
    era: "Showtime conductor",
    teams: ["Lakers", "PG"],
    x: 19,
    y: 50,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Magic_Johnson_2014.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/0/03/Magic_Johnson_2014.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/5/5f/Magic_Johnson_Lakers.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Magic_Johnson_and_Larry_Bird.jpg"
    ],
    summary: "Magic is how I explain joy in basketball: the ball flying ahead, the break opening up, and a pass arriving like it was scripted by the crowd.",
    honors: ["5x NBA champion", "3x Finals MVP", "3x NBA MVP", "12x All-Star", "4x assists leader", "NBA 75th Anniversary Team"]
  },
  {
    name: "Larry Bird",
    era: "Celtics precision",
    teams: ["Celtics", "SF"],
    x: 81,
    y: 50,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Larry_Bird_Lipofsky.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/9/9d/Larry_Bird_Lipofsky.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/90/Larry_Bird_2012.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Magic_Johnson_and_Larry_Bird.jpg"
    ],
    summary: "Bird is the quiet warning before the shot drops: no wasted motion, no fear of the moment, just a jumper that feels inevitable.",
    honors: ["3x NBA champion", "2x Finals MVP", "3x NBA MVP", "12x All-Star", "9x All-NBA First Team", "NBA 75th Anniversary Team"]
  },
  {
    name: "Shaquille O'Neal",
    era: "Paint dominance",
    teams: ["Magic", "Lakers", "Heat", "C"],
    x: 37,
    y: 63,
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Shaquille_O%27Neal_Free_Throw.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/Shaquille_O%27Neal_Free_Throw.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/6/6c/Shaquille_O%27Neal_2017.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Shaquille_O%27Neal_2011.jpg"
    ],
    summary: "Shaq is the paint turning into a danger zone, every catch under the rim feeling like the backboard might need backup.",
    honors: ["4x NBA champion", "3x Finals MVP", "2000 NBA MVP", "15x All-Star", "2x scoring champion", "NBA 75th Anniversary Team"]
  },
  {
    name: "Tim Duncan",
    era: "Spurs foundation",
    teams: ["Spurs", "PF"],
    x: 63,
    y: 63,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/14/Tim_Duncan.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/1/14/Tim_Duncan.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Tim_Duncan_2009.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/Tim_Duncan_2011.jpg"
    ],
    summary: "Duncan is the calm I respect most: bank shot, perfect angle, right rotation, and a dynasty built without needing to shout.",
    honors: ["5x NBA champion", "3x Finals MVP", "2x NBA MVP", "15x All-Star", "15x All-Defensive Team", "NBA 75th Anniversary Team"]
  },
  {
    name: "Kareem Abdul-Jabbar",
    era: "Skyhook empire",
    teams: ["Bucks", "Lakers", "C"],
    x: 50,
    y: 79,
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Kareem_Abdul-Jabbar_May_2014.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/a/a0/Kareem_Abdul-Jabbar_May_2014.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/5/53/Kareem_Abdul-Jabbar_1974.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/b/b9/Kareem_Abdul-Jabbar_2011.jpg"
    ],
    summary: "Kareem is basketball elegance stretched across decades, the skyhook rising so high it feels like the defense is only watching history.",
    honors: ["6x NBA champion", "2x Finals MVP", "6x NBA MVP", "19x All-Star", "2x scoring champion", "NBA 75th Anniversary Team"]
  },
  {
    name: "Kevin Durant",
    era: "Seven-foot scoring",
    teams: ["Thunder", "Warriors", "Nets", "Suns"],
    x: 15,
    y: 74,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Kevin_Durant_%28Wizards_v._Warriors%2C_1-24-2019%29_%28cropped%29.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Kevin_Durant_%28Wizards_v._Warriors%2C_1-24-2019%29_%28cropped%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/7/7b/Kevin_Durant_2019.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/Kevin_Durant_2021.jpg"
    ],
    summary: "Durant is the scorer I describe as unfair: guard rhythm, seven-foot release, and a jumper that barely notices the contest.",
    summaryZh: "接近无法防守的得分手，兼具后卫技术、超高出手点、转换进攻和总冠军级别的单打创造力。",
    honors: ["2x NBA champion", "2x Finals MVP", "2014 NBA MVP", "14x All-Star", "4x scoring champion", "NBA 75th Anniversary Team"]
  },
  {
    name: "Giannis Antetokounmpo",
    era: "Modern two-way force",
    teams: ["Bucks", "PF"],
    x: 85,
    y: 74,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Giannis_Antetokounmpo_%2851915153421%29_%28cropped%29.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Giannis_Antetokounmpo_%2851915153421%29_%28cropped%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/Giannis_Antetokounmpo_2018.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/4/45/Giannis_Antetokounmpo_2022.jpg"
    ],
    summary: "Giannis is downhill chaos with a champion's heartbeat, covering the floor in a few strides and making the rim feel too close.",
    summaryZh: "攻防一体的现代怪物，凭借臂展、推进冲击、防守覆盖和篮下终结把雄鹿重新带回冠军行列。",
    honors: ["2021 NBA champion", "2021 Finals MVP", "2x NBA MVP", "2020 Defensive Player of the Year", "8x All-Star", "NBA 75th Anniversary Team"]
  },
  {
    name: "Nikola Jokic",
    era: "Center as system",
    teams: ["Nuggets", "C"],
    x: 50,
    y: 60,
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Nikola_Jokic_free_throw_%28cropped%29.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/7/7b/Nikola_Jokic_free_throw_%28cropped%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/a/a3/Nikola_Jokic_2020.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/0/0f/Nikola_Jokic_2019.jpg"
    ],
    summary: "Jokic is the game slowed down in his hands, every cutter, fake, and soft touch appearing one second before everyone else understands it.",
    summaryZh: "约基奇像把比赛时间放慢了一拍，空切、假动作和柔和手感总是在别人反应过来之前完成。",
    honors: ["2023 NBA champion", "2023 Finals MVP", "3x NBA MVP", "6x All-Star", "3x All-NBA First Team", "Western Conference Finals MVP"]
  },
  {
    name: "James Harden",
    era: "The Beard isolation engine",
    teams: ["Thunder", "Rockets", "Nets", "Clippers"],
    x: 26,
    y: 86,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Harden_dribbling_midcourt%2C_Cavaliers_vs_Nets_on_January_17%2C_2022_%28cropped%29.jpg/800px-Harden_dribbling_midcourt%2C_Cavaliers_vs_Nets_on_January_17%2C_2022_%28cropped%29.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Harden_dribbling_midcourt%2C_Cavaliers_vs_Nets_on_January_17%2C_2022_%28cropped%29.jpg/800px-Harden_dribbling_midcourt%2C_Cavaliers_vs_Nets_on_January_17%2C_2022_%28cropped%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/James_Harden.jpg/800px-James_Harden.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/James_Harden_Rockets_cropped.jpg/800px-James_Harden_Rockets_cropped.jpg"
    ],
    summary: "Harden is the rhythm change I always mention: dribble, pause, stepback, whistle, and suddenly the defense is solving math at full speed.",
    summaryZh: "历史级单打得分手和挡拆组织者，后撤步三分改变了外线进攻的空间几何。",
    honors: ["2018 NBA MVP", "11x All-Star", "6x All-NBA First Team", "3x scoring champion", "2x assists leader", "NBA 75th Anniversary Team"]
  },
  {
    name: "Paul George",
    era: "Two-way wing scorer",
    teams: ["Pacers", "Thunder", "Clippers", "76ers"],
    x: 74,
    y: 86,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/1_paul_george_2026.jpg/800px-1_paul_george_2026.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/1_paul_george_2026.jpg/800px-1_paul_george_2026.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_George_Pacers.jpg/800px-Paul_George_Pacers.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Paul_George_defending_LeBron_James_%28February_15%2C_2017%29.jpg/800px-Paul_George_defending_LeBron_James_%28February_15%2C_2017%29.jpg"
    ],
    summary: "Paul George is smooth pressure on the wing, the kind of player who can glide into a jumper and still guard the best scorer on the other end.",
    summaryZh: "技术流锋线持球手，兼具顶级防守条件、急停跳投、转换终结和季后赛高光得分能力。",
    honors: ["9x All-Star", "6x All-NBA", "4x All-Defensive Team", "2013 Most Improved Player", "2019 steals leader", "2016 Olympic gold medalist"]
  },
  {
    name: "Kawhi Leonard",
    era: "The Klaw playoff closer",
    teams: ["Spurs", "Raptors", "Clippers", "SF"],
    x: 86,
    y: 34,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Kawhi_Leonard_%287440607%29_%28cropped%29.jpg/800px-Kawhi_Leonard_%287440607%29_%28cropped%29.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Kawhi_Leonard_%287440607%29_%28cropped%29.jpg/800px-Kawhi_Leonard_%287440607%29_%28cropped%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Kawhi_Leonard_Dunk_cropped.jpg/800px-Kawhi_Leonard_Dunk_cropped.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/1_kawhi_leonard_2019_nba_finals.jpg/800px-1_kawhi_leonard_2019_nba_finals.jpg"
    ],
    summary: "Kawhi is silence with consequences: two hands on defense, one bounce to the midrange, and a playoff building suddenly getting nervous.",
    summaryZh: "冷静精准的季后赛得分手和顶级锋线防守者，力量、长臂、手感和中距离控制力极具压迫感。",
    honors: ["2x NBA champion", "2x Finals MVP", "2x Defensive Player of the Year", "7x All-Star", "7x All-NBA", "7x All-Defensive Team"]
  },
  {
    name: "Victor Wembanyama",
    era: "Alien blueprint",
    teams: ["Spurs", "France", "C/PF"],
    x: 14,
    y: 34,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Victor_Wembanyama_San_Antonio_Spurs_2024.jpg/800px-Victor_Wembanyama_San_Antonio_Spurs_2024.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Victor_Wembanyama_San_Antonio_Spurs_2024.jpg/800px-Victor_Wembanyama_San_Antonio_Spurs_2024.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Victor_Wembanyama.jpg/800px-Victor_Wembanyama.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Victor_Wembanyama_Mets_92_%282%29.jpg/800px-Victor_Wembanyama_Mets_92_%282%29.jpg"
    ],
    summary: "Wembanyama is the future walking in early, blocking shots that look open and taking shots that should not belong to someone that tall.",
    summaryZh: "新世代天赋模板，盖帽覆盖、控球、臂展、投篮手感和防守范围都远超传统内线想象。",
    honors: ["2024 Rookie of the Year", "All-Rookie First Team", "NBA blocks leader", "Olympic silver medalist", "French Player of the Year", "No. 1 pick in 2023"]
  },
  {
    name: "Luka Doncic",
    era: "Slow-motion maestro",
    teams: ["Mavericks", "Slovenia", "PG"],
    x: 33,
    y: 42,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Luka_Doncic_%2851175598947%29.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/1/19/Luka_Doncic_%2851175598947%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/6/6c/Luka_Doncic_%2851176525298%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/9b/Luka_Doncic_%2851915482170%29.jpg"
    ],
    summary: "Luka is the late-clock illusion I love to point out: a shoulder fake, a smile, one step of separation, and the defense is already behind the play.",
    summaryZh: "东契奇是我最喜欢讲的慢节奏魔术：一个肩部假动作，一个微笑，一步空间，防守就已经落在回合后面。",
    honors: ["5x All-Star", "5x All-NBA First Team", "2019 Rookie of the Year", "2024 scoring champion", "2024 Western Conference champion", "EuroLeague champion and MVP"]
  }
];

players.forEach((player) => {
  player.image = filePath(player.image);
  player.gallery = player.gallery.map(filePath);
});

const edges = [
  ["Michael Jordan", "LeBron James"], ["Michael Jordan", "Kobe Bryant"],
  ["Michael Jordan", "Magic Johnson"], ["Michael Jordan", "Larry Bird"],
  ["Michael Jordan", "Shaquille O'Neal"], ["Michael Jordan", "Tim Duncan"],
  ["LeBron James", "Kobe Bryant"], ["LeBron James", "Stephen Curry"],
  ["LeBron James", "Kareem Abdul-Jabbar"], ["LeBron James", "Kevin Durant"],
  ["LeBron James", "Giannis Antetokounmpo"], ["LeBron James", "Nikola Jokic"],
  ["Kobe Bryant", "Stephen Curry"], ["Kobe Bryant", "Shaquille O'Neal"],
  ["Stephen Curry", "Kevin Durant"], ["Stephen Curry", "Nikola Jokic"],
  ["Magic Johnson", "Larry Bird"], ["Magic Johnson", "Kareem Abdul-Jabbar"],
  ["Larry Bird", "Tim Duncan"], ["Shaquille O'Neal", "Tim Duncan"],
  ["Shaquille O'Neal", "Kareem Abdul-Jabbar"], ["Tim Duncan", "Kareem Abdul-Jabbar"],
  ["Kevin Durant", "Giannis Antetokounmpo"], ["Giannis Antetokounmpo", "Nikola Jokic"],
  ["LeBron James", "James Harden"], ["Stephen Curry", "James Harden"],
  ["Kevin Durant", "James Harden"], ["James Harden", "Paul George"],
  ["Paul George", "Kawhi Leonard"], ["Kawhi Leonard", "Giannis Antetokounmpo"],
  ["Kawhi Leonard", "LeBron James"], ["Victor Wembanyama", "Giannis Antetokounmpo"],
  ["Victor Wembanyama", "Nikola Jokic"], ["Victor Wembanyama", "Kareem Abdul-Jabbar"],
  ["Paul George", "Kobe Bryant"], ["Luka Doncic", "Nikola Jokic"],
  ["Luka Doncic", "LeBron James"], ["Luka Doncic", "James Harden"],
  ["Luka Doncic", "Stephen Curry"], ["Luka Doncic", "Kevin Durant"],
  ["Luka Doncic", "Victor Wembanyama"]
];

const nodeLayer = document.querySelector("#node-layer");
const canvas = document.querySelector("#court-web");
const grid = document.querySelector("#player-grid");
const modal = document.querySelector("#player-modal");
const modalTitle = document.querySelector("#modal-title");
const modalEra = document.querySelector("#modal-era");
const modalSummary = document.querySelector("#modal-summary");
const modalMeta = document.querySelector("#modal-meta");
const modalGallery = document.querySelector("#modal-gallery");
const modalHonors = document.querySelector("#modal-honors");
const modalVideo = document.querySelector("#modal-video");
let visiblePlayers = [];
let particles = [];
let animationFrame = 0;

function filePath(src) {
  if (!src.includes("upload.wikimedia.org")) return src;
  const fileName = decodeURIComponent(src.split("/").pop() || "");
  const normalized = fileName.replace(/^800px-/, "");
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(normalized)}`;
}

function playerSlug(name) {
  return name
    .toLowerCase()
    .replace(/'/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function renderMissingVideo(player, mp4Path, webmPath) {
  modalVideo.innerHTML = `
    <div class="video-missing">
      <div>
        <strong>${player.name} mixtape</strong>
        <span>Place a local video here for instant playback:<br><code>${mp4Path}</code><br><code>${webmPath}</code></span>
      </div>
    </div>
  `;
}

function createNode(player, index) {
  const button = document.createElement("button");
  button.className = "player-node";
  button.style.left = `${player.x}%`;
  button.style.top = `${player.y}%`;
  button.type = "button";
  button.setAttribute("aria-label", `Open ${player.name} details`);
  button.innerHTML = `<img src="${player.image}" alt="${player.name}" loading="lazy"><span>${player.name}</span>`;
  button.querySelector("img").addEventListener("error", () => removePlayerWithoutImage(player.name), { once: true });
  button.addEventListener("click", () => openPlayer(index));
  return button;
}

function createCard(player, index) {
  const card = document.createElement("article");
  card.className = "player-card";
  card.tabIndex = 0;
  card.innerHTML = `
    <div>
      <img src="${player.image}" alt="${player.name}" loading="lazy">
      <h3>${player.name}</h3>
      <p>${player.summary}</p>
      ${player.summaryZh ? `<p class="zh-card">${player.summaryZh}</p>` : ""}
    </div>
    <div class="tag-row">${player.teams.map((tag) => `<span>${tag}</span>`).join("")}</div>
  `;
  card.querySelector("img").addEventListener("error", () => removePlayerWithoutImage(player.name), { once: true });
  card.addEventListener("click", () => openPlayer(index));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") openPlayer(index);
  });
  return card;
}

function renderPlayers() {
  visiblePlayers = players.filter((player) => !player.hidden);
  nodeLayer.innerHTML = "";
  grid.innerHTML = "";
  visiblePlayers.forEach((player, index) => {
    nodeLayer.appendChild(createNode(player, index));
    grid.appendChild(createCard(player, index));
  });
  seedParticles();
  startWebAnimation();
}

function removePlayerWithoutImage(playerName) {
  const player = players.find((item) => item.name === playerName);
  if (!player || player.hidden) return;
  player.hidden = true;
  renderPlayers();
}

function seedParticles() {
  const rect = canvas.getBoundingClientRect();
  const count = Math.max(130, Math.round((rect.width * rect.height) / 5200));
  particles = Array.from({ length: count }, (_, index) => ({
    x: Math.random() * rect.width,
    y: Math.random() * rect.height,
    r: 0.45 + Math.random() * 1.55,
    vx: -0.045 + Math.random() * 0.09,
    vy: -0.025 + Math.random() * 0.05,
    hue: index % 7 === 0 ? "orange" : index % 11 === 0 ? "blue" : "white",
    phase: Math.random() * Math.PI * 2
  }));
}

function startWebAnimation() {
  if (animationFrame) cancelAnimationFrame(animationFrame);
  const tick = (time) => {
    drawWeb(time);
    animationFrame = requestAnimationFrame(tick);
  };
  animationFrame = requestAnimationFrame(tick);
}

function drawWeb(time = 0) {
  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.round(rect.width * dpr);
  canvas.height = Math.round(rect.height * dpr);
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, rect.width, rect.height);
  ctx.globalCompositeOperation = "source-over";

  const pulse = (Math.sin(time / 900) + 1) / 2;

  ctx.save();
  const nebula = ctx.createRadialGradient(rect.width * 0.5, rect.height * 0.5, 0, rect.width * 0.5, rect.height * 0.5, rect.width * 0.48);
  nebula.addColorStop(0, `rgba(242, 107, 33, ${0.09 + pulse * 0.04})`);
  nebula.addColorStop(0.36, "rgba(30, 139, 255, 0.045)");
  nebula.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = nebula;
  ctx.fillRect(0, 0, rect.width, rect.height);
  ctx.restore();

  ctx.save();
  particles.forEach((star) => {
    star.x += star.vx;
    star.y += star.vy;
    if (star.x < -8) star.x = rect.width + 8;
    if (star.x > rect.width + 8) star.x = -8;
    if (star.y < -8) star.y = rect.height + 8;
    if (star.y > rect.height + 8) star.y = -8;
    const twinkle = 0.38 + Math.abs(Math.sin(time / 650 + star.phase)) * 0.62;
    const color = star.hue === "orange"
      ? `rgba(242, 107, 33, ${0.35 * twinkle})`
      : star.hue === "blue"
        ? `rgba(30, 139, 255, ${0.3 * twinkle})`
        : `rgba(246, 241, 232, ${0.52 * twinkle})`;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r * twinkle, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  });
  ctx.restore();

  const point = (player) => ({
    x: (player.x / 100) * rect.width,
    y: (player.y / 100) * rect.height
  });

  ctx.globalCompositeOperation = "lighter";
  edges.forEach(([aName, bName], i) => {
    const a = visiblePlayers.find((player) => player.name === aName);
    const b = visiblePlayers.find((player) => player.name === bName);
    if (!a || !b) return;
    const start = point(a);
    const end = point(b);
    const gradient = ctx.createLinearGradient(start.x, start.y, end.x, end.y);
    const shimmer = 0.18 + Math.abs(Math.sin(time / 1100 + i)) * 0.34;
    gradient.addColorStop(0, i % 2 ? `rgba(242,107,33,${0.22 + shimmer})` : `rgba(213,173,85,${0.16 + shimmer})`);
    gradient.addColorStop(0.5, `rgba(246,241,232,${0.06 + shimmer * 0.28})`);
    gradient.addColorStop(1, `rgba(30,139,255,${0.08 + shimmer * 0.45})`);
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 0.8 + shimmer * 1.2;
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
  });

  visiblePlayers.forEach((player) => {
    const p = point(player);
    const starGlow = 0.4 + Math.abs(Math.sin(time / 760 + p.x)) * 0.6;
    const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, Math.max(72, rect.width * 0.07));
    glow.addColorStop(0, `rgba(255, 246, 220, ${0.2 + starGlow * 0.28})`);
    glow.addColorStop(0.28, `rgba(242, 107, 33, ${0.12 + starGlow * 0.2})`);
    glow.addColorStop(1, "rgba(242, 107, 33, 0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(p.x, p.y, Math.max(72, rect.width * 0.07), 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(p.x, p.y, Math.max(42, rect.width * 0.044), 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(246,241,232,${0.09 + starGlow * 0.1})`;
    ctx.lineWidth = 1;
    ctx.stroke();
  });
  ctx.globalCompositeOperation = "source-over";
}

function openPlayer(index) {
  const player = visiblePlayers[index];
  const slug = playerSlug(player.name);
  const mp4Path = `assets/videos/${slug}.mp4`;
  const webmPath = `assets/videos/${slug}.webm`;
  document.querySelectorAll(".modal-zh").forEach((node) => node.remove());
  modalTitle.textContent = player.name;
  modalEra.textContent = player.era;
  modalSummary.textContent = player.summary;
  modalSummary.insertAdjacentHTML("afterend", player.summaryZh ? `<p class="modal-zh">${player.summaryZh}</p>` : "");
  modalMeta.innerHTML = player.teams.map((tag) => `<span>${tag}</span>`).join("");
  modalGallery.innerHTML = player.gallery.map((src) => `<img src="${src}" alt="${player.name}" loading="lazy">`).join("");
  modalGallery.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", () => img.remove(), { once: true });
  });
  modalVideo.innerHTML = `
    <video
      controls
      preload="metadata"
      poster="${player.image}"
      title="${player.name} local highlight mixtape">
      <source src="${mp4Path}" type="video/mp4">
      <source src="${webmPath}" type="video/webm">
    </video>
  `;
  modalVideo.querySelector("video").addEventListener("error", () => renderMissingVideo(player, mp4Path, webmPath), { once: true });
  modalHonors.innerHTML = player.honors.map((honor) => `<li>${honor}</li>`).join("");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-close]").forEach((control) => {
  control.addEventListener("click", closeModal);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

window.addEventListener("resize", () => {
  seedParticles();
  drawWeb();
});
renderPlayers();
