(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // WhatsApp links
  const phone = "972544238899"; // 054-4238899
  const msg = encodeURIComponent("היי אדם, הגעתי מהאתר. אשמח לשמוע מה מתאים לי (ליווי/סדנה/קורס).");
  const waUrl = `https://wa.me/${phone}?text=${msg}`;

  const waIds = [
    "ctaWhatsAppTop",
    "ctaWhatsAppHero",
    "ctaWhatsAppLead",
    "ctaWhatsAppFooter",
    "ctaWhatsAppMobile",
  ];

  waIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("href", waUrl);
  });

  // Mobile menu
  const burger = document.querySelector(".burger");
  const mobileMenu = document.getElementById("mobileMenu");
  if (burger && mobileMenu) {
    burger.addEventListener("click", () => {
      const isOpen = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!isOpen));
      mobileMenu.hidden = isOpen;
    });
  }

  // Contact form: mailto fallback
  const form = document.querySelector("form#contact");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get("name");
      const phoneVal = data.get("phone");
      const goal = data.get("goal");
      const message = data.get("message") || "";

      const subject = encodeURIComponent("ליד חדש מהאתר - AdamBrutmann");
      const body = encodeURIComponent(
        `שם: ${name}\nטלפון: ${phoneVal}\nמטרה: ${goal}\n\nהודעה:\n${message}\n`
      );

      // Change email here if you want a different inbox
      window.location.href = `mailto:brutmann6@gmail.com?subject=${subject}&body=${body}`;
    });
  }
})();
