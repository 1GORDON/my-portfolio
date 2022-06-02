const menuButton = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu-items');
const menuItems = Array.from(document.querySelectorAll('.menu-item'));
const menuIcon = document.querySelector('.menu-icon');
const contentBody = document.querySelector('.content-body');
const logo = document.querySelector('.logo-wrapper');

const filterStyle = () => {
  contentBody.style.filter = 'none';
  logo.style.filter = 'none';
};

const toggleMenu = () => {
  menuList.classList.toggle('active');
  menuButton.classList.toggle('active');
};

menuButton.addEventListener('click', () => {
  toggleMenu();

  if (menuButton.classList.contains('active')) {
    menuIcon.src = './images/Close-button.svg';
    contentBody.style.filter = 'blur(7px)';
    logo.style.filter = 'blur(7px)';
  } else {
    filterStyle();
    window.location.reload();
  }
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    toggleMenu();
    menuList.classList.remove('active');
    filterStyle();
    menuIcon.src = './images/Union.png';
  });
});

// Refresh page when resizing to desktop mode
window.addEventListener('resize', () => {
  if (contentBody.clientWidth >= 992 && menuButton.classList.contains('active')) {
    window.location.reload();
  }
});

// Project Card Data
const data = [
  {
    project_img: './images/gordon.png',
    project_title: 'Book an Appointment',
    project_info_title: 'Microverse',
    counter_image: './images/Counter.svg',
    project_info_text: ['Front-End', 'Back-End', '2022'],
    project_description: 'I built this project with a team of four for the Final Capstone Project while at Microverse. It is based on an app to book an appointment with a doctor. We followed the given design of the website, but we personalized the content. This project uses two apps, one is a backend which is a rails APi and a React frontend.',
    tags: ['React', 'Rails', 'Redux', 'javascript'],
    live_version: 'https://frontend-doctor-api1.netlify.app/',
    source_code: 'https://github.com/sja-thedude/book-an-appointment-backend',
  },
  {
    project_img: './images/budget.png',
    project_title: 'Manage Budget',
    project_info_title: 'Microverse',
    counter_image: './images/Counter.svg',
    project_info_text: ['Back-End', '2022'],
    project_description: 'This is a Ruby on Rails project. It is about building a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    tags: ['Ruby', 'Rails', 'PostgreSQL'],
    live_version: 'https://fast-scrubland-47961.herokuapp.com/',
    source_code: 'https://github.com/1GORDON/Manage-budget',
  },
  {
    project_img: './images/bookstore.png',
    project_title: 'Bookstore',
    project_info_title: 'Microverse',
    counter_image: './images/Counter.svg',
    project_info_text: ['Front-End', '2021'],
    project_description: 'The Bookstore is an application for displaying a list of books, adding a book, and removing a selected book. I built this application using React and Redux and a remote API to fetch and display books with their corresponding categories.',
    tags: ['React', 'Redux', 'javascript'],
    live_version: 'https://bookstore-style.netlify.app/',
    source_code: 'https://github.com/1GORDON/Bookstore',
  },
  {
    project_img: './images/space.png',
    project_title: 'Spacex Traveler\'s Hub',
    project_info_title: 'Microverse',
    counter_image: './images/Counter.svg',
    project_info_text: ['Front-End', '2021'],
    project_description: 'The Space Travelers\' Hub is a React app where we used, components, hooks, state, redux, and run tests. It consists of Rockets, Missions, and the My Profile section. The Rockets section displays a list of all available SpaceX rockets. The Missions section displays a list of current missions along with their brief description and participation status. The Dragons section displays a list of all available SpaceX dragons. The My Profile section displays all reserved rockets and space missions.',
    tags: ['React', 'Redux', 'javascript'],
    live_version: 'https://sjathedude-spacetravellershub.netlify.app/',
    source_code: 'https://github.com/sja-thedude/Space-Travelers-Hub',
  },
  {
    project_img: './images/calculator.png',
    project_title: 'Math Magicians',
    project_info_title: 'Microverse',
    counter_image: './images/Counter.svg',
    project_info_text: ['Front-End', '2021'],
    project_description: 'In this project, I built an Application that performs Mathematical computations, displays a home page, and also displays a quote from a remote API. This was built using Javascript, React Router, and API. It displays SPA.',
    tags: ['React', 'Redux', 'React-router'],
    live_version: 'https://math-magicians-gordon.netlify.app/',
    source_code: 'https://github.com/1GORDON/Math-Magicians',
  },
  {
    project_img: './images/awesome.png',
    project_title: 'Awesome Books',
    project_info_title: 'Microverse',
    counter_image: './images/Counter.svg',
    project_info_text: ['Front-End', '2021'],
    project_description: 'This project allows users to add/remove books from a list. This was achieved using JavaScript objects and arrays, JavaScript Classes, and Single Page Application (SPA).',
    tags: ['HTML', 'css', 'javascript'],
    live_version: 'https://1gordon.github.io/Awesome-books/',
    source_code: 'https://github.com/1GORDON/Awesome-books',
  },
  {
    project_img: './images/capstone1.png',
    project_title: 'Summer Concert Series',
    project_info_title: 'Microverse',
    counter_image: './images/Counter.svg',
    project_info_text: ['Front-End', '2021'],
    project_description: 'This is my Capstone Project for Module 1 at Microverse where I was required to build a website that provided information about the upcoming conference. I built this using HTML, CSS, and JavaScript.',
    tags: ['html', 'css', 'javascript'],
    live_version: 'https://capstone-module1.netlify.app/',
    source_code: 'https://github.com/1GORDON/Capstone-Module1',
  },
];

// Populate Project Card using an array of project data objects
const portfolio = document.querySelector('.works');
portfolio.removeChild(portfolio.firstElementChild);

data.forEach((project) => {
  const ul = document.createElement('ul');
  ul.className = 'project-card';
  portfolio.appendChild(ul);

  // First List Item
  let li = document.createElement('li');
  li.className = 'project-img-wrapper';
  li.innerHTML = `<img src=${project.project_img} alt=${project.project_title} class='Project-img'>`;
  ul.appendChild(li);

  // Second List Item
  li = document.createElement('li');
  li.className = 'project-content-block';
  ul.appendChild(li);

  const projectHeader = document.createElement('div');
  projectHeader.className = 'project-header';
  li.appendChild(projectHeader);

  const h1 = document.createElement('h1');
  h1.className = 'project-title';
  h1.innerHTML = project.project_title;
  projectHeader.appendChild(h1);

  const projectInfo = document.createElement('div');
  projectInfo.className = 'project-info';
  projectHeader.appendChild(projectInfo);

  const h2 = document.createElement('h2');
  h2.className = 'project-info-title';
  h2.innerHTML = project.project_info_title;
  projectInfo.appendChild(h2);

  project.project_info_text.forEach((infoText) => {
    const img = document.createElement('img');
    img.src = project.counter_image;
    img.alt = 'counter';
    projectInfo.appendChild(img);

    const p = document.createElement('p');
    p.className = 'project-info-item';
    p.innerHTML = infoText;
    projectInfo.appendChild(p);
  });

  const projectDescription = document.createElement('p');
  projectDescription.className = 'project-description';
  projectDescription.innerHTML = project.project_description;
  li.appendChild(projectDescription);

  // li child ul
  const tags = document.createElement('ul');
  tags.className = 'tags';
  li.appendChild(tags);

  project.tags.forEach((tagText) => {
    const tagItem = document.createElement('li');
    tagItem.className = 'tag-item';
    tagItem.textContent = tagText;
    tags.appendChild(tagItem);
  });

  // li last child
  const actionContainer = document.createElement('div');
  actionContainer.className = 'action-container';
  li.appendChild(actionContainer);

  const actionButton = document.createElement('button');
  actionButton.className = 'action-btn see-project';
  actionButton.type = 'button';
  actionButton.textContent = 'See project';
  actionContainer.appendChild(actionButton);
});

// Desktop and Mobile pop-up Toogle
const seeProjectBtn = Array.from(document.querySelectorAll('.see-project'));
const closeModalBtn = document.querySelector('.modal-close-button');
const modal = document.querySelector('.modal-container');
const body = document.querySelector('body');

// Handle see project button click
seeProjectBtn.forEach((button, index) => {
  button.addEventListener('click', () => {
    modal.style.display = 'flex';
    body.style.overflow = 'hidden';

    // Populate Pop-up Modal
    const modalData = data[index];
    const modalTags = Array.from(document.querySelectorAll('.works-modal .tag-item'));
    const modalCounterImg = Array.from(document.querySelectorAll('.works-modal .project-info img'));
    const infoItems = Array.from(document.querySelectorAll('.works-modal .project-info-item'));

    document.querySelector('.works-modal .project-title').innerHTML = modalData.project_title;
    document.querySelector('.works-modal .project-info-title').innerHTML = modalData.project_info_title;
    document.querySelector('.works-modal .Project-img').src = modalData.project_img;
    document.querySelector('.works-modal .project-description').innerHTML = modalData.project_description;
    document.querySelector('.works-modal .see-live').href = modalData.live_version;
    document.querySelector('.works-modal .see-source').href = modalData.source_code;

    modalCounterImg.forEach((infoImg) => {
      infoImg.src = modalData.counter_image;
      infoImg.alt = modalData.project_title;
    });
    infoItems.forEach((infoItem, idx) => {
      infoItem.innerHTML = modalData.project_info_text[idx];
    });
    modalTags.forEach((tag, idx) => {
      tag.innerHTML = modalData.tags[idx];
    });

    // Handle modal buttons
    document.querySelector('.works-modal .see-live').onclick = () => {
      window.location.href = modalData.live_version;
    };
    document.querySelector('.works-modal .see-source').onclick = () => {
      window.location.href = modalData.source_code;
    };
  });
});

// Handle modal close button click
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  body.style.overflow = 'auto';
});

// Handle Form Validation and Localstorage
const form = document.querySelector('.contact-form');
const email = document.getElementById('email');
const userName = document.getElementById('name');
const message = document.getElementById('message');
const error = document.querySelector('.error-message');

// Form validation on submit
form.addEventListener('submit', (e) => {
  const messages = [];

  if (email.value !== email.value.toLowerCase()) {
    messages.push('* Please enter a valid email address.');
    messages.push('* Email address must be in lowercase.');
  }

  if (messages.length > 0) {
    e.preventDefault();
    error.innerHTML = messages.join('<br/>');
    email.style.border = '2px solid #df0000';
    email.style.borderRadius = '3px';
  }
});

// Store form data in localStorage
let formData = { name: '', email: '', message: '' };

const saveToLocalStorage = () => {
  localStorage.setItem('form_data', JSON.stringify(formData));
};

userName.addEventListener('change', () => {
  formData.name = userName.value;
  saveToLocalStorage();
});
email.addEventListener('change', () => {
  formData.email = email.value;
  saveToLocalStorage();
});
message.addEventListener('change', () => {
  formData.message = message.value;
  saveToLocalStorage();
});

window.onload = () => {
  if (localStorage.getItem('form_data') !== null) {
    formData = JSON.parse(localStorage.getItem('form_data'));
    userName.value = formData.name;
    email.value = formData.email;
    message.value = formData.message;
  }
};