// ======= Translations =======
const translations = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navRooms: "Rooms",
    navBooking: "Book Now",
    navGallery: "Gallery",
    roomsHeading: "Our Rooms",
    deluxeTitle: "Deluxe Room",
    deluxeDesc: "Spacious and elegant with modern amenities.",
    deluxePrice: "$130 / night",
    suiteTitle: "Executive Suite",
    suiteDesc: "Luxury suite with city view and premium service.",
    suitePrice: "$210 / night",
    standardTitle: "Standard Room",
    standardDesc: "Comfortable and affordable for every traveler.",
    standardPrice: "$90 / night",
    familyTitle: "Family Suite",
    familyDesc: "Perfect for families with extra space and comfort.",
    familyPrice: "$160 / night",
    bookBtn: "Book Now",
    aboutHeading: "About The Grand Haven Hotel",
    aboutPara1: "Welcome to The Grand Haven Hotel, your luxurious home away from home in Ghana. We pride ourselves on exceptional service, elegant rooms, and world-class amenities. Whether you're visiting for business or leisure, our hotel ensures comfort, style, and a memorable experience.",
    aboutPara2: "Our facilities include a swimming pool, spa, fine dining restaurant, and conference halls. Every detail has been designed with our guests in mind, creating a perfect balance of relaxation and sophistication.",
    roomsHeading: "Our Rooms",
    footerText: "© 2025 The Grand Haven Hotel. All rights reserved.",
    contactHeading: "Contact Us",
    contactPara: "We’d love to hear from you! Fill in the form below or reach us directly."
  },
  fr: {
    navHome: "Accueil",
    navAbout: "À propos",
    navRooms: "Chambres",
    navBooking: "Réserver",
    navGallery: "Galerie",
    deluxeTitle: "Chambre Deluxe",
    deluxeDesc: "Spacieuse et élégante avec des équipements modernes.",
    deluxePrice: "130 $ / nuit",
    suiteTitle: "Suite Exécutive",
    suiteDesc: "Suite de luxe avec vue sur la ville et service premium.",
    suitePrice: "210 $ / nuit",
    standardTitle: "Chambre Standard",
    standardDesc: "Confortable et abordable pour tous les voyageurs.",
    standardPrice: "90 $ / nuit",
    familyTitle: "Suite Familiale",
    familyDesc: "Parfaite pour les familles avec plus d'espace et de confort.",
    familyPrice: "160 $ / nuit",
    bookBtn: "Réserver",
    aboutHeading: "À propos de The Grand Haven Hotel",
    aboutPara1: "Bienvenue au Grand Haven Hotel, votre maison luxueuse loin de chez vous au Ghana. Nous sommes fiers d'offrir un service exceptionnel, des chambres élégantes et des équipements de classe mondiale. Que vous soyez en voyage d'affaires ou d'agrément, notre hôtel garantit confort, style et une expérience mémorable.",
    aboutPara2: "Nos installations comprennent une piscine, un spa, un restaurant gastronomique et des salles de conférence. Chaque détail a été conçu pour nos clients, créant un équilibre parfait entre détente et sophistication.",
    roomsHeading: "Nos Chambres",
    footerText: "© 2025 L'Hôtel Grand Haven. Tous droits réservés.",
    contactHeading: "Contactez-nous",
    contactPara: "Nous aimerions avoir de vos nouvelles ! Remplissez le formulaire ci-dessous ou contactez-nous directement."
  },
  es: {
    navHome: "Inicio",
    navAbout: "Acerca de",
    navRooms: "Habitaciones",
    navBooking: "Reservar",
    navGallery: "Galería",
    deluxeTitle: "Habitación Deluxe",
    deluxeDesc: "Espaciosa y elegante con comodidades modernas.",
    deluxePrice: "130 $ / noche",
    suiteTitle: "Suite Ejecutiva",
    suiteDesc: "Suite de lujo con vista a la ciudad y servicio premium.",
    suitePrice: "210 $ / noche",
    standardTitle: "Habitación Estándar",
    standardDesc: "Cómoda y asequible para todos los viajeros.",
    standardPrice: "90 $ / noche",
    familyTitle: "Suite Familiar",
    familyDesc: "Perfecta para familias con más espacio y comodidad.",
    familyPrice: "160 $ / noche",
    bookBtn: "Reservar",
    aboutHeading: "Acerca de The Grand Haven Hotel",
    aboutPara1: "Bienvenido a The Grand Haven Hotel, su lujoso hogar lejos de casa en Ghana. Nos enorgullecemos de un servicio excepcional, habitaciones elegantes y comodidades de clase mundial. Ya sea que viaje por negocios o placer, nuestro hotel garantiza comodidad, estilo y una experiencia memorable.",
    aboutPara2: "Nuestras instalaciones incluyen una piscina, spa, restaurante gourmet y salas de conferencias. Cada detalle ha sido diseñado pensando en nuestros huéspedes, creando un equilibrio perfecto entre relajación y sofisticación.",
    roomsHeading: "Nuestras Habitaciones",
    footerText: "© 2025 El Hotel Grand Haven. Todos los derechos reservados.",
    contactHeading: "Contáctenos",
    contactPara: "¡Nos encantaría saber de usted! Complete el formulario a continuación o contáctenos directamente."
  }
};

// ======= Apply Language =======
function applyLanguage(lang) {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  const langBtn = document.getElementById("langBtn");
  if (langBtn) langBtn.textContent = lang.toUpperCase() + " ▾";
}

// ======= Set Language =======
function setLanguage(lang) {
  localStorage.setItem("preferredLang", lang);
  applyLanguage(lang);
}

// ======= Load Saved Language =======
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferredLang") || "en";
  applyLanguage(savedLang);

  // Handle language dropdown clicks
  document.querySelectorAll(".dropdown-content a").forEach(item => {
    item.addEventListener("click", e => {
      e.preventDefault();
      const lang = item.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  // Highlight current nav link
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.getAttribute("href") === currentPage) link.classList.add("active");
  });

  // Optional: Animate headings (if class 'page-heading' exists)
  const heading = document.querySelector(".page-heading");
  if (heading) {
    setTimeout(() => heading.classList.add("animate"), 300);
  }
});
