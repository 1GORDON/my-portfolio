const myFunction = () => {
  document.getElementById('drop-down').classList.add('view');
  document.getElementById('firstPage').classList.add('blurry-background');
};

const myFunction1 = () => {
  document.getElementById('drop-down').classList.remove('view');
  document.getElementById('firstPage').classList.remove('blurry-background');
};

const modalContainer = document.querySelector('.modal-container');
const butCloseModal = document.querySelector('.modal-top-close-icon');
const projectParentContainer = document.querySelector('.projects');

const headingSection = document.querySelector('.heading1');
const mainSection = document.querySelector('.main-section');
const aboutSection = document.querySelector('.About');
const noAboutSection = document.querySelector('.no-about');
const firstPageSection = document.getElementById('firstPage');
const contactSection = document.getElementById('Contact');

// will blur the elements
const blurElements = (elements, show) => {
  elements.forEach((element) => {
    if (show) {
      element.classList.add('blurry-background');
    } else {
      element.classList.remove('blurry-background');
    }
  });
};

// it opens the modal;
const openModal = () => {
  modalContainer.style.display = 'block';
  blurElements([headingSection, mainSection, aboutSection, noAboutSection, firstPageSection, contactSection], true);
};

// it closes the modal;
const closeModal = () => {
  modalContainer.style.display = 'none';
  blurElements([headingSection, mainSection, aboutSection, noAboutSection, firstPageSection, contactSection], false);
};

const projects = [
  {
    title: 'Tonic',
    summary: ['CANOPY', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign\-ups required.',
    image: {
      mobileUrl: './images/snapshot-profile-1.png',
      desktopUrl: './images/card-img1.png',
      alt: 'card 1 image'
    },
    technologies: ['html', 'css', 'javascript'],
    sourceCodeUrl: 'https://github.com/1GORDON/my-portfolio',
    liveDemoUrl: 'https://1gordon.github.io/my-portfolio/',
    direction: 'normal'
  },
  {
    title: 'Multi-post stories',
    summary: ['CANOPY', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign\-ups required.',
    image: {
      mobileUrl: './images/snapshort-profile-2.png',
      desktopUrl: './images/card-img2.png',
      alt: 'card 2 image'
    },
    technologies: ['html', 'css', 'javascript'],
    sourceCodeUrl: 'https://github.com/1GORDON/my-portfolio',
    liveDemoUrl: 'https://1gordon.github.io/my-portfolio/',
    direction: 'switch'
  },
  {
    title: 'Tonic',
    summary: ['CANOPY', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign\-ups required.',
    image: {
      mobileUrl: './images/snapshort-profile-3.png',
      desktopUrl: './images/card-img3.png',
      alt: 'card 3 image'
    },
    technologies: ['html', 'css', 'javascript'],
    sourceCodeUrl: 'https://github.com/1GORDON/my-portfolio',
    liveDemoUrl: 'https://1gordon.github.io/my-portfolio/',
    direction: 'normal'
  },
  {
    title: 'Multi-post stories',
    summary: ['CANOPY', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign\-ups required.',
    image: {
      mobileUrl: './images/snapshort-profile-4.png',
      desktopUrl: './images/card-img4.png',
      alt: 'card 4 image'
    },
    technologies: ['html', 'css', 'javascript'],
    sourceCodeUrl: 'https://github.com/1GORDON/my-portfolio',
    liveDemoUrl: 'https://1gordon.github.io/my-portfolio/',
    direction: 'switch'
  }
];

// will hold our HTML elements
let projectCard = '';

// iterate through the project
projects.forEach((project) => {
  projectCard += `
  <section id="Portfolio" class="card">
    <section class="for-cards ${project.direction}">
      <img
        class="card-img hide-on-lg"
        src="${project.image.mobileUrl}"
        alt="${project.image.alt}"
      />
      <img
      class="card-img1 hide-on-sm show-on-lg"
      src="${project.image.desktopUrl}"
      alt="${project.image.alt}"
    />
    </section>
    <section class="tonic for-cards">
      <h1>${project.title}</h1>
      <div>
        <ul class="list">`;

  // loop through each project summary and display it in the li
  project.summary.forEach((item, index) => {
    projectCard += `<li>
      ${item}`;
    if (index < 2) {
      projectCard += `<img src="images/counter-1.png" alt="counter1"/>
      </li>`;
    }
  });

  projectCard += `</ul>
      </div>
      <p class="content">
        A daily selection of privately personalized reads; no accounts or
        sign-ups required.
      </p>
      <br />
      <div class="buttons">
        <ul class="list">
          <li><div class="tag">html</div></li>
          <li><div class="tag">css</div></li>
          <li><div class="tag">javascript</div></li>
        </ul>
        <button class="see-project-button">See Project</button>
      </div>
    </section>
  </section>`;
});

// inject the HMTL element
projectParentContainer.innerHTML = projectCard;

// get all elements with the class see-project-button
document.querySelectorAll('.see-project-button').forEach((element) => {
  element.addEventListener('click', openModal);
});

// closes the modal when clicked
butCloseModal.addEventListener('click', closeModal);

const name = document.getElementById("name");
const email = document.getElementById("email");
// const form = document.querySelector("form");
const errorElement = document.getElementById("error");

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()){
    e.preventDefault();
    errorElement.style.display = 'block';
    errorElement.textContent = 'Invalid email, Please use lowercase';
  }
});
