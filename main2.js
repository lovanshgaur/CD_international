var tl = gsap.timeline({});
tl.from(".load", {
  opacity: 0,
  y: 1100,
  duration: 1.5,
  height: "10vh",
  ease: "power2.out",
});
tl.to(".load", {
  height: "10vh",
});
tl.to(
  ".load img",
  {
    height: "100%",
    duration: 0,
  },
  "<"
);
tl.from(
  "main",
  {
    opacity: 0,
    y: 1000,
  },
  "<"
);
tl.from(".campus-card", {
  opacity: 0,
  x: -1000,
  stagger: 0.1,
});
tl.from(
  ".campus-view",
  {
    opacity: 0,
    x: 1000,
  },
  "<"
);

// Add onComplete callback to run campusShow after animations
tl.eventCallback("onComplete", () => {
  campusShow(1); // Run campusShow with the desired initial campus ID
});

const data = [
  {
    id: 1,
    branchName: "Sector-71 Branch",
    address: "Sector 71, Near CHD Avenue, Gurgaon-Haryana- 122001",
    videoAddress: "hero_overview.mp4",
    link: "index.html",
  },
  {
    id: 2,
    branchName: "Maruti Kunj Branch",
    address: "Maruti Kunj, Sohna Road, Gurgaon-Haryana- 122102",
    videoAddress: "hero_overview.mp4",
    link: "index.html",
  },
  {
    id: 3,
    branchName: "Sector-48 Branch",
    address: "CD Senior Secondary School, Gurgaon-Haryana- 122101",
    videoAddress: "hero_overview.mp4",
    link: "index.html",
  },
  {
    id: 4,
    branchName: "Shiv Nagar Branch",
    address: "Vivekanand Educational Society, Runs Vivekanand International School",
    videoAddress: "hero_overview.mp4",
    link: "index.html",
  },
];

let cards = document.querySelectorAll(".campus-card");
let campus = document.getElementById("campus-details");
let campusVid = document.getElementById("campus-overview");

function campusShow(n) {
    campus.innerHTML = ""
    let html = `
      <h1>${data[n - 1].branchName}</h1>
      <p> ${data[n - 1].address}</p>
      <button><a href="${data[n - 1].link}">Visit Website</a></button>
    `;
    
    let videoElement = document.createElement('video');
    videoElement.src = data[n - 1].videoAddress;
    videoElement.autoplay = true;
    videoElement.loop = true;
    videoElement.muted = true;
    videoElement.innerHTML = 'Your browser does not support the video tag.';
    
    videoElement.addEventListener('loadeddata', () => {
      campus.innerHTML = html;
    });
    campusVid.innerHTML = '';
    campusVid.appendChild(videoElement);
  }
  

cards.forEach((card) => {
  card.addEventListener("click", () => {
    let i = card.getAttribute("data-id");
    campusShow(i);
  });
});
