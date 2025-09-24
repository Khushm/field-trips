// Trip Data (add more years/photos easily)
const trips = [
  {
    year: "2019",
    title: "Houston Energy Expo",
    desc: "Visited drilling sites and explored advanced subsurface technologies.",
    images: [
      "images/2019/img1.jpg",
      "images/2019/img2.jpg",
      "images/2019/img3.jpg"
    ]
  },
  {
    year: "2020",
    title: "Marcellus Shale Visit",
    desc: "Hands-on shale gas extraction experience in Pennsylvania.",
    images: [
      "images/2020/img1.jpg",
      "images/2020/img2.jpg",
      "images/2020/img3.jpg"
    ]
  }
];

const gallery = document.getElementById('gallery');

// Build cards
trips.forEach((trip, tIndex) => {
  const card = document.createElement('div');
  card.className = `card`;
  card.dataset.year = trip.year;

  const cover = document.createElement('img');
  cover.src = trip.images[0];
  cover.alt = trip.title;
  cover.addEventListener('click', () => openLightbox(trip.images, 0));

  const content = document.createElement('div');
  content.className = 'card-content';
  content.innerHTML = `<h3>${trip.title}</h3><p>${trip.desc}</p>`;

  // Accordion toggle
  const details = document.createElement('div');
  details.className = 'details';
  trip.images.slice(1).forEach((imgSrc, i) => {
    const thumb = document.createElement('img');
    thumb.src = imgSrc;
    thumb.style.width = "100%";
    thumb.style.marginTop = "10px";
    thumb.style.cursor = "pointer";
    thumb.addEventListener('click', () => openLightbox(trip.images, i+1));
    details.appendChild(thumb);
  });

  content.addEventListener('click', () => card.classList.toggle('open'));

  card.append(cover, content, details);
  gallery.appendChild(card);
});

// Year filtering
document.querySelectorAll('#yearFilter li').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('#yearFilter li.active').classList.remove('active');
    btn.classList.add('active');
    const year = btn.dataset.year;
    document.querySelectorAll('.card').forEach(c => {
      c.style.display = (year === 'all' || c.dataset.year === year) ? 'block' : 'none';
    });
  });
});

// Lightbox logic
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSet = [];
let currentIndex = 0;

function openLightbox(images, index) {
  currentSet = images;
  currentIndex = index;
  lightboxImg.src = currentSet[currentIndex];
  lightbox.style.display = 'flex';
}
function showImage(offset) {
  currentIndex = (currentIndex + offset + currentSet.length) % currentSet.length;
  lightboxImg.src = currentSet[currentIndex];
}

closeBtn.onclick = () => lightbox.style.display = 'none';
prevBtn.onclick = () => showImage(-1);
nextBtn.onclick = () => showImage(1);
lightbox.onclick = e => { if (e.target === lightbox) lightbox.style.display = 'none'; };
