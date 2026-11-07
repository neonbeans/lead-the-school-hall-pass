const devlogs = [
    {
        update: "26.11.1",
        title: "Quality of life",
        date: "November 6, 2026",
        image: "devlogs/images/26.11.1.png",
        link: "devlogs/devlog6.html",
        description: "A brand-new update with plenty of improvements!"
    },
    {
        update: "26.10.1",
        title: "The Gameplay Update",
        date: "October 21, 2026",
        image: "devlogs/images/26.10.1.png",
        link: "devlogs/devlog5.html",
        description: "Happy early Halloween! It's been a while since I've posted a proper Hall Pass update, but I'm proud of how this one..."
    },
    {
        update: "26.9.1",
        title: "Very minor update",
        date: "September 16, 2026",
        image: "devlogs/images/26.9.1.png",
        link: "devlogs/devlog4.html",
        description: "New month, which means new Hall Pass update. This update is very small due to real-life complications and..."
    },
    {
        update: "26.8.1",
        title: "Huge upgrades and updates!",
        date: "August 26, 2026",
        image: "devlogs/images/26.8.1.png",
        link: "devlogs/devlog3.html",
        description: "I am finally back with a new and exciting update for Hall Pass! This update will finally help establish th..."
    },
      {
        update: "26.7.2",
        title: "Hall Pass Update!",
        date: "July 14, 2026",
        image: "devlogs/images/26.7.2.png",
        link: "devlogs/devlog2.html",
        description: "I've decided to continue with this little remaster of Lead the School and turn it into something I actual..."
    },
    {
        update: "26.7.1",
        title: "Lead the School is back with a fresh new look and mindset!",
        date: "July 6, 2026",
        image: "images/previous-update.png",
        link: "devlogs/images/26.7.1.html",
        description: "This remake moves away from Scratch and relies on TurboWarp, giving me much more flexibility with its exte..."
    }
];

const sortedDevlogs = [...devlogs].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
);

const latestDevlog = sortedDevlogs[0];
const previousDevlog = sortedDevlogs[1];

const latestSection = document.getElementById("latest-devlog");

if (latestSection && latestDevlog) {
    latestSection.innerHTML = `
        <a href="${latestDevlog.link}" class="latest-devlog">
            <img src="${latestDevlog.image}" alt="">
            <h2>${latestDevlog.title}</h2>
            <p>${latestDevlog.description}</p>
            <span>${latestDevlog.date}</span>
        </a>
    `;
}

function createDevlogCard(devlog, index) {
    let status = "";

    if (index === 0) {
        status = "latest";
    } else if (index === 1) {
        status = "previous";
    }

    return `
        <a href="${devlog.link}" class="devlog-card ${status}">
            <img src="${devlog.image}" alt="">
            <h3>${devlog.title}</h3>
            <p>${devlog.description}</p>
        </a>
    `;
}

const devlogContainer = document.getElementById("devlog-list");

if (devlogContainer) {
    devlogContainer.innerHTML = sortedDevlogs
        .map((devlog, index) => createDevlogCard(devlog, index))
        .join("");
}
