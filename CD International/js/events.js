const events = [
  {
    name: "Event 1",
    date: "2024-09-26",
    image: "assets/img/about1.jpg",
    details: "Details about Event 1.",
  },
  {
    name: "Event 2",
    date: "2024-10-05",
    image: "assets/img/about2.jpg",
    details: "Details about Event 2.",
  },
  {
    name: "Event 3",
    date: "2024-10-12",
    image: "assets/img/about3.jpg",
    details: "Details about Event 3.",
  },
  {
    name: "Event 4",
    date: "2024-10-18",
    image: "assets/img/about4.jpg",
    details: "Details about Event 4.",
  },
  {
    name: "Event 5",
    date: "2024-10-25",
    image: "assets/img/about5.jpg",
    details: "Details about Event 5.",
  },
  {
    name: "Event 6",
    date: "2024-11-02",
    image: "assets/img/about_box1.jpg",
    details: "Details about Event 6.",
  },
  {
    name: "Event 7",
    date: "2024-11-09",
    image: "assets/img/about_box2.jpg",
    details: "Details about Event 7.",
  },
  {
    name: "Event 8",
    date: "2024-11-16",
    image: "assets/img/about_box3.jpg",
    details: "Details about Event 8.",
  },
  {
    name: "Event 9",
    date: "2024-11-23",
    image: "assets/img/about_box4.jpg",
    details: "Details about Event 9.",
  },
  {
    name: "Event 10",
    date: "2024-11-30",
    image: "assets/img/about_box5.jpg",
    details: "Details about Event 10.",
  },
  {
    name: "Event 11",
    date: "2024-12-07",
    image: "assets/img/about_box6.jpg",
    details: "Details about Event 11.",
  },
  {
    name: "Event 12",
    date: "2024-12-14",
    image: "assets/img/about1.jpg",
    details: "Details about Event 12.",
  },
  {
    name: "Event 13",
    date: "2024-12-21",
    image: "assets/img/about1.jpg",
    details: "Details about Event 13.",
  },
  {
    name: "Event 14",
    date: "2024-12-28",
    image: "assets/img/about1.jpg",
    details: "Details about Event 14.",
  },
  {
    name: "Event 15",
    date: "2025-01-04",
    image: "assets/img/about1.jpg",
    details: "Details about Event 15.",
  },
  {
    name: "Event 16",
    date: "2025-01-11",
    image: "assets/img/about1.jpg",
    details: "Details about Event 16.",
  },
  {
    name: "Event 17",
    date: "2025-01-18",
    image: "assets/img/about1.jpg",
    details: "Details about Event 17.",
  },
  {
    name: "Event 18",
    date: "2025-01-25",
    image: "assets/img/about1.jpg",
    details: "Details about Event 18.",
  },
  {
    name: "Event 19",
    date: "2025-02-01",
    image: "assets/img/about1.jpg",
    details: "Details about Event 19.",
  },
  {
    name: "Event 20",
    date: "2025-02-08",
    image: "assets/img/about1.jpg",
    details: "Details about Event 20.",
  },
  {
    name: "Event 21",
    date: "2025-02-15",
    image: "assets/img/about1.jpg",
    details: "Details about Event 21.",
  },
  {
    name: "Event 22",
    date: "2025-02-22",
    image: "assets/img/about1.jpg",
    details: "Details about Event 22.",
  },
  {
    name: "Event 23",
    date: "2025-03-01",
    image: "assets/img/about1.jpg",
    details: "Details about Event 23.",
  },
  {
    name: "Event 24",
    date: "2025-03-08",
    image: "assets/img/about1.jpg",
    details: "Details about Event 24.",
  },
];

const gallery = document.querySelector(".event-gallery");
const eventShown = document.querySelector(".event-shown");

function renderEventDetails(event, index) {
  document.querySelectorAll(".gallery-image").forEach((image, imgIndex) => {
    if (imgIndex === index) {
      image.classList.add("displayed"); 
    } else {
      image.classList.remove("displayed"); 
    }
  });

  eventShown.innerHTML = `
    <h2>${event.name}</h2>
    <div class="event-img"><img src="${event.image}" alt="${event.name}"></div>
    <p>${event.details}</p>
    <span>Date: ${event.date}</span>
  `;
}

events.forEach((event, index) => {
  const img = document.createElement("img");
  img.src = event.image;
  img.alt = event.name;
  img.classList.add("gallery-image");

  img.addEventListener("click", () => {
    renderEventDetails(event, index);
  });

  gallery.appendChild(img);
});

renderEventDetails(events[0], 0);
