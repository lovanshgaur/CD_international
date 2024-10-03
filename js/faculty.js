const teachers =[
    {
      "name": "John Smith",
      "role": "Mathematics Teacher",
      "img": "assets/faculty/pic-1.png"
    },
    {
      "name": "Emily Johnson",
      "role": "Science Teacher",
      "img": "assets/faculty/pic-2.png"
    },
    {
      "name": "Michael Brown",
      "role": "History Teacher",
      "img": "assets/faculty/pic-3.png"
    },
    {
      "name": "Sarah Davis",
      "role": "English Teacher",
      "img": "assets/faculty/pic-4.png"
    },
    {
      "name": "Daniel Martinez",
      "role": "Art Teacher",
      "img": "assets/faculty/pic-5.png"
    },
    {
      "name": "Jessica Wilson",
      "role": "Music Teacher",
      "img": "assets/faculty/pic-6.png"
    },
    {
      "name": "Matthew Anderson",
      "role": "Physical Education Teacher",
      "img": "assets/faculty/pic-1.png"
    },
    {
      "name": "Lauren Thompson",
      "role": "Computer Science Teacher",
      "img": "assets/faculty/pic-2.png"
    },
    {
      "name": "David White",
      "role": "Chemistry Teacher",
      "img": "assets/faculty/pic-3.png"
    },
    {
      "name": "Amanda Garcia",
      "role": "Foreign Language Teacher",
      "img": "assets/faculty/pic-4.png"
    },
    {
      "name": "James Martinez",
      "role": "Physics Teacher",
      "img": "assets/faculty/pic-5.png"
    },
    {
      "name": "Jennifer Lopez",
      "role": "Drama Teacher",
      "img": "assets/faculty/pic-6.png"
    },
    {
      "name": "Andrew Clark",
      "role": "Economics Teacher",
      "img": "assets/faculty/pic-1.png"
    },
    {
      "name": "Megan Baker",
      "role": "Biology Teacher",
      "img": "assets/faculty/pic-2.png"
    },
    {
      "name": "Robert Lewis",
      "role": "Geography Teacher",
      "img": "assets/faculty/pic-3.png"
    },
    {
      "name": "Stephanie Hall",
      "role": "Sociology Teacher",
      "img": "assets/faculty/pic-4.png"
    },
    {
      "name": "Christopher Hill",
      "role": "Philosophy Teacher",
      "img": "assets/faculty/pic-5.png"
    },
    {
      "name": "Nicole Wright",
      "role": "Environmental Science Teacher",
      "img": "assets/faculty/pic-6.png"
    },
    {
      "name": "Kevin Adams",
      "role": "Engineering Teacher",
      "img": "assets/faculty/pic-1.png"
    },
    {
      "name": "Olivia Carter",
      "role": "Health Education Teacher",
      "img": "assets/faculty/pic-2.png"
    },
    {
      "name": "Samuel Ward",
      "role": "Government Teacher",
      "img": "assets/faculty/pic-3.png"
    },
    {
      "name": "Victoria Green",
      "role": "Literature Teacher",
      "img": "assets/faculty/pic-4.png"
    },
    {
      "name": "Ryan Hall",
      "role": "Statistics Teacher",
      "img": "assets/faculty/pic-5.png"
    },
    {
      "name": "Rachel Turner",
      "role": "Business Teacher",
      "img": "assets/faculty/pic-6.png"
    },
    {
      "name": "Rachel Turner",
      "role": "Business Teacher",
      "img": "assets/faculty/pic-1.png"
    }
  ]




  function createProfileCards() {
    const container = document.getElementById("faculty-cards");

    teachers.forEach(teacher => {
      const card = document.createElement("div");
      card.classList.add("profile-card");

      // Add teacher image
      const img = document.createElement("img");
      img.src = teacher.img;
      img.alt = `${teacher.name}'s profile picture`;
      card.appendChild(img);

      // Add teacher name
      const name = document.createElement("div");
      name.classList.add("profile-name");
      name.textContent = teacher.name;
      card.appendChild(name);

      // Add teacher role
      const role = document.createElement("div");
      role.classList.add("profile-role");
      role.textContent = teacher.role;
      card.appendChild(role);

      // Append the card to the container
      container.appendChild(card);
    });
  }

  // Call the function to create and display the profile cards
  createProfileCards();