const CONFIG = {
  theme: "vivid",
  heroUseCover: true,
  restaurant: {
    name: "Taquería El Ombligón",
    subtitle: "Tacos, wings y antojitos bien servidos",
    history: [
      "En Taquería El Ombligón celebramos el sabor de Brownsville con una cocina cercana y auténtica. Nuestra historia nace en la esquina de Boca Chica Blvd, donde cada orden se prepara con el mismo cuidado que en casa.",
      "Aquí encuentras tacos con carácter, wings jugosas, fries cargadas y hot dogs al estilo local, todo servido rápido y bien. Somos la taquería del barrio donde la variedad y el buen trato se disfrutan todos los días.",
    ],
  },
  datos: {
    direccion: "7155 Boca Chica Blvd",
    ciudadEstado: "Brownsville, Texas",
    telefono: "956-382-9979",
    whatsapp: "19563829979",
    horarios: {
      Lunes: "6:00 PM – 11:00 PM",
      Martes: "6:00 PM – 11:00 PM",
      "Miércoles": "6:00 PM – 11:00 PM",
      Jueves: "6:00 PM – 11:00 PM",
      Viernes: "6:00 PM – 11:00 PM",
      Sábado: "6:00 PM – 11:00 PM",
      Domingo: "6:00 PM – 11:00 PM",
    },
  },
  menu: [
    {
      category: "Tacos",
      items: [
        { name: "Walking Taco", price: "$15.00" },
        {
          name: "Taco Order (6)",
          price: "$11.50",
          note: "Bistec o Pastor • Each $1.80",
        },
      ],
    },
    {
      category: "Burgers",
      items: [
        { name: "Cheeseburger (w/ fries)", price: "$12.00" },
        { name: "Cheeseburger DBL (w/ fries)", price: "$15.00" },
      ],
    },
    {
      category: "Wings",
      note: "Flavors: Spicy • Buffalo • Mild • Lemon Pepper • Ranch",
      items: [
        { name: "6 pcs Wings (w/ fries + veggies)", price: "$13.00" },
        { name: "10 pcs Wings (w/ fries + veggies)", price: "$15.00" },
        { name: "20 pcs Wings (w/ veggies)", price: "$23.00" },
      ],
    },
    {
      category: "Fries & Snacks",
      items: [
        { name: "Fries", price: "$2.99" },
        { name: "Loaded Fries", price: "$8.00" },
        { name: "Chili Cheese Fries", price: "$5.00" },
      ],
    },
    {
      category: "Hot Dogs",
      items: [
        {
          name: "Chili Cheese",
          price: "$11.00",
          note: "Combo alt: $8.50 (drink + fries/chips)",
        },
        {
          name: "Mexican",
          price: "$11.50",
          note: "Combo alt: $9.00 (drink + fries/chips)",
        },
      ],
    },
    {
      category: "Drinks",
      items: [
        { name: "Joya", price: "$3.50" },
        { name: "Can", price: "$2.00" },
        { name: "Water", price: "$1.00" },
      ],
    },
    {
      category: "Extras",
      items: [
        {
          name: "Extras (each)",
          price: "$1.00",
          note: "Avocado • Bacon • Ham • Chile Toreado • Sautéed Onions",
        },
      ],
    },
  ],
  menuNotes: ["Precios sujetos a cambio."],
  assets: {
    logo: "assets/taqueria-logo.jpg",
    cover: "assets/taqueria-logo.jpg",
    qr: "assets/qr.png",
  },
};

const hero = document.querySelector(".hero");
const heroLogo = document.getElementById("hero-logo");
const heroTitle = document.getElementById("hero-title");
const heroSubtitle = document.getElementById("hero-subtitle");
const heroActions = document.getElementById("hero-actions");
const historiaContent = document.getElementById("historia-content");
const datosContent = document.getElementById("datos-content");
const menuContent = document.getElementById("menu-content");
const menuNotes = document.getElementById("menu-notes");
const footerContent = document.getElementById("footer-content");

const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${CONFIG.datos.direccion}, ${CONFIG.datos.ciudadEstado}`
)}`;

const createButton = (label, href, variant = "primary") => {
  const button = document.createElement("a");
  button.className = `button ${variant}`;
  button.href = href;
  button.target = "_blank";
  button.rel = "noopener noreferrer";
  button.textContent = label;
  return button;
};

const renderHero = () => {
  document.documentElement.setAttribute("data-theme", CONFIG.theme);
  document.title = CONFIG.restaurant.name;
  heroTitle.textContent = CONFIG.restaurant.name;
  heroSubtitle.textContent = CONFIG.restaurant.subtitle;
  heroActions.append(createButton("Ver ubicación", mapLink, "secondary"));

  if (CONFIG.heroUseCover && CONFIG.assets.cover) {
    hero.style.backgroundImage = `url(${CONFIG.assets.cover})`;
    hero.style.backgroundSize = "cover";
    hero.style.backgroundPosition = "center";
    hero.classList.add("has-cover");
  }

  if (CONFIG.assets.logo) {
    const img = document.createElement("img");
    img.alt = `${CONFIG.restaurant.name} logo`;
    img.src = CONFIG.assets.logo;
    img.onerror = () => {
      heroLogo.innerHTML = "";
    };
    heroLogo.appendChild(img);
  }
};

const renderHistoria = () => {
  CONFIG.restaurant.history.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    historiaContent.appendChild(p);
  });
};

const renderDatos = () => {
  const cards = [
    { title: "Dirección", content: CONFIG.datos.direccion },
    { title: "Ciudad", content: CONFIG.datos.ciudadEstado },
    { title: "Teléfono", content: CONFIG.datos.telefono },
    { title: "WhatsApp", content: CONFIG.datos.whatsapp },
  ];

  cards.forEach((card) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h3>${card.title}</h3><p>${card.content}</p>`;
    datosContent.appendChild(div);
  });

  const scheduleCard = document.createElement("div");
  scheduleCard.className = "card";
  scheduleCard.innerHTML = "<h3>Horarios</h3>";

  const scheduleList = document.createElement("div");
  Object.entries(CONFIG.datos.horarios).forEach(([day, time]) => {
    const row = document.createElement("p");
    row.textContent = `${day}: ${time}`;
    scheduleList.appendChild(row);
  });
  scheduleCard.appendChild(scheduleList);
  datosContent.appendChild(scheduleCard);
};

const renderMenu = () => {
  CONFIG.menu.forEach((section) => {
    const card = document.createElement("div");
    card.className = "menu-card";
    card.innerHTML = `<h3>${section.category}</h3>`;

    section.items.forEach((item) => {
      const itemRow = document.createElement("div");
      itemRow.className = "menu-item";

      const name = document.createElement("div");
      name.className = "menu-item-name";
      name.textContent = item.name;

      const price = document.createElement("div");
      price.className = "menu-item-price";
      price.textContent = item.price;

      itemRow.append(name, price);

      const wrapper = document.createElement("div");
      wrapper.appendChild(itemRow);

      if (item.note) {
        const note = document.createElement("div");
        note.className = "menu-item-note";
        note.textContent = item.note;
        wrapper.appendChild(note);
      }

      card.appendChild(wrapper);
    });

    if (section.note) {
      const note = document.createElement("p");
      note.className = "menu-note";
      note.textContent = section.note;
      card.appendChild(note);
    }

    menuContent.appendChild(card);
  });

  menuNotes.textContent = CONFIG.menuNotes.join(" ");
};

const renderFooter = () => {
  const wrapper = document.createElement("div");
  wrapper.className = "footer-content";
  wrapper.innerHTML = `
    <p>Precios sujetos a cambio. Imágenes solo ilustrativas.</p>
    <p>POWERED BY INFINIUM</p>
    <a href="#top">Volver arriba</a>
  `;
  footerContent.appendChild(wrapper);
};

renderHero();
renderHistoria();
renderDatos();
renderMenu();
renderFooter();
