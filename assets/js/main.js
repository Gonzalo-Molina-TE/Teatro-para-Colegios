/**
 * Lógica principal interactiva para Teatro Para Colegios (teatroparacolegios.cl)
 * Actualizado con soporte para Catálogos Oficiales Individuales en PDF
 */

document.addEventListener("DOMContentLoaded", () => {
  // Estado de la aplicación
  let currentCycleFilter = "all";
  let currentSearchQuery = "";
  const playsGrid = document.getElementById("plays-grid");
  const playsCountBadge = document.getElementById("plays-count");
  const searchInput = document.getElementById("play-search-input");
  const cycleButtons = document.querySelectorAll(".filter-btn");

  // Elementos del Modal
  const modal = document.getElementById("play-modal");
  const modalClose = document.getElementById("modal-close-btn");
  const modalBackdrop = document.getElementById("play-modal");
  const modalImage = document.getElementById("modal-image");
  const modalImageBg = document.getElementById("modal-image-bg");
  const modalImageZoomLink = document.getElementById("modal-image-zoom-link");
  const modalTitle = document.getElementById("modal-title");
  const modalSubtitle = document.getElementById("modal-subtitle");
  const modalCategory = document.getElementById("modal-category");
  const modalCatalogBadge = document.getElementById("modal-catalog-badge");
  const modalCycles = document.getElementById("modal-cycles");
  const modalDuration = document.getElementById("modal-duration");
  const modalSynopsis = document.getElementById("modal-synopsis");
  const modalOat = document.getElementById("modal-oat");
  const modalTech = document.getElementById("modal-tech");
  const modalGuide = document.getElementById("modal-guide");
  const modalQuoteBtn = document.getElementById("modal-quote-btn");
  const modalPrintBtn = document.getElementById("modal-print-btn");

  // Elementos de Catálogo en Modal
  const modalCatalogBox = document.getElementById("modal-catalog-box");
  const modalCatalogDesc = document.getElementById("modal-catalog-desc");
  const modalCatalogDownloadBtn = document.getElementById("modal-catalog-download-btn");
  const modalCatalogViewBtn = document.getElementById("modal-catalog-view-btn");

  // Contenedores enriquecidos en Modal
  const modalGeneralObjContainer = document.getElementById("modal-general-obj-container");
  const modalGeneralObj = document.getElementById("modal-general-obj");
  const modalSpecificObjContainer = document.getElementById("modal-specific-obj-container");
  const modalSpecificObj = document.getElementById("modal-specific-obj");
  const modalArtisticTeamContainer = document.getElementById("modal-artistic-team-container");
  const modalArtisticTeam = document.getElementById("modal-artistic-team");
  const modalStagingContainer = document.getElementById("modal-staging-container");
  const modalStaging = document.getElementById("modal-staging");

  // Form elements
  const quoteForm = document.getElementById("school-quote-form");
  const quotePlaySelect = document.getElementById("quote-play-select");

  // 1. Inicializar selector de obras en el formulario
  function populatePlaySelect() {
    if (!quotePlaySelect || !window.PLAYS_DATA) return;
    quotePlaySelect.innerHTML = '<option value="">-- Selecciona una obra (opcional) --</option>';
    window.PLAYS_DATA.forEach((play) => {
      const opt = document.createElement("option");
      opt.value = play.title;
      opt.textContent = `${play.title} (${play.category})`;
      quotePlaySelect.appendChild(opt);
    });
  }

  // 2. Renderizado de tarjetas de obras
  function renderPlays() {
    if (!playsGrid || !window.PLAYS_DATA) return;

    const filtered = window.PLAYS_DATA.filter((play) => {
      // Filtro por ciclo
      const matchesCycle =
        currentCycleFilter === "all" || play.cycles.includes(currentCycleFilter);

      // Filtro por búsqueda de texto
      const q = currentSearchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        play.title.toLowerCase().includes(q) ||
        play.subtitle.toLowerCase().includes(q) ||
        play.category.toLowerCase().includes(q) ||
        play.synopsis.toLowerCase().includes(q) ||
        play.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCycle && matchesQuery;
    });

    if (playsCountBadge) {
      playsCountBadge.textContent = `${filtered.length} ${filtered.length === 1 ? 'obra disponible' : 'obras disponibles'}`;
    }

    if (filtered.length === 0) {
      playsGrid.innerHTML = `
        <div class="col-span-full py-16 text-center bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-brand-orange mb-4 text-2xl">
            🎭
          </div>
          <h3 class="text-xl font-bold text-brand-blue mb-2">No encontramos obras que coincidan con tu búsqueda</h3>
          <p class="text-gray-500 max-w-md mx-auto mb-6 text-sm">
            Prueba ajustando el término de búsqueda o seleccionando "Todas las Obras" para explorar el catálogo completo.
          </p>
          <button id="reset-search-btn" class="btn-primary">Ver todas las obras</button>
        </div>
      `;
      const resetBtn = document.getElementById("reset-search-btn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          currentCycleFilter = "all";
          currentSearchQuery = "";
          if (searchInput) searchInput.value = "";
          cycleButtons.forEach((b) => b.classList.toggle("active", b.dataset.cycle === "all"));
          renderPlays();
        });
      }
      return;
    }

    playsGrid.innerHTML = filtered
      .map((play) => {
        const cycleBadges = play.cycleLabels
          .map((label) => {
            let tagClass = "tag-segundo-ciclo";
            if (label.includes("Parvularia")) tagClass = "tag-preescolar";
            else if (label.includes("1º a 4º")) tagClass = "tag-primer-ciclo";
            else if (label.includes("Medio")) tagClass = "tag-media";
            else if (label.includes("Docentes") || label.includes("Padres")) tagClass = "tag-comunidad";
            return `<span class="cycle-tag ${tagClass}">${label}</span>`;
          })
          .join("");

        const pdfBadge = play.hasSpecificCatalog
          ? `<span class="absolute bottom-3 left-3 bg-emerald-700/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow flex items-center gap-1">
               <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
               Catálogo PDF
             </span>`
          : '';

        return `
        <article class="play-card group" data-play-id="${play.id}">
          <div class="play-card-img-wrapper cursor-pointer" onclick="window.openPlayModal('${play.id}')">
            <img 
              src="${play.image}" 
              alt="Afiche de ${play.title}" 
              class="play-card-img" 
              loading="lazy"
              onerror="this.src='https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80'"
            />
            <span class="play-card-badge">${play.category}</span>
            ${play.featured ? '<span class="play-featured-ribbon">Destacada</span>' : ''}
            ${pdfBadge}
          </div>
          
          <div class="p-5 flex-1 flex flex-col justify-between">
            <div>
              <div class="mb-2.5">
                ${cycleBadges}
              </div>
              <h3 class="text-lg font-bold text-brand-blue group-hover:text-brand-orange transition-colors cursor-pointer line-clamp-2 mb-1.5" onclick="window.openPlayModal('${play.id}')">
                ${play.title}
              </h3>
              <p class="text-xs font-semibold text-brand-turquoise uppercase tracking-wider mb-2.5">
                ${play.subtitle}
              </p>
              <p class="text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                ${play.synopsis}
              </p>
            </div>

            <div class="pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
              <span class="text-xs text-gray-500 font-medium flex items-center gap-1">
                ⏱️ ${play.duration.split('+')[0]}
              </span>
              <div class="flex items-center gap-2">
                <button 
                  class="btn-secondary !py-2 !px-3.5 !text-xs flex items-center gap-1" 
                  onclick="window.openPlayModal('${play.id}')"
                  title="Ver ficha técnica y catálogo PDF"
                >
                  <span>Ficha & Catálogo</span>
                </button>
                <button 
                  class="btn-primary !py-2 !px-3.5 !text-xs" 
                  onclick="window.preselectAndScroll('${encodeURIComponent(play.title)}')"
                  title="Cotizar esta obra para mi colegio"
                >
                  Cotizar
                </button>
              </div>
            </div>
          </div>
        </article>
      `;
      })
      .join("");
  }

  // 3. Control de filtros de ciclo
  cycleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      cycleButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCycleFilter = btn.dataset.cycle || "all";
      renderPlays();
    });
  });

  // 4. Control de búsqueda
  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener("input", (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        currentSearchQuery = e.target.value;
        renderPlays();
      }, 250);
    });
  }

  // 5. Modal de Ficha Técnica & Catálogo Individual
  window.openPlayModal = function (playId) {
    const play = window.PLAYS_DATA.find((p) => p.id === playId);
    if (!play || !modal) return;

    modalImage.src = play.image;
    modalImage.alt = `Afiche de ${play.title}`;
    if (modalImageBg) {
      modalImageBg.src = play.image;
    }
    if (modalImageZoomLink) {
      modalImageZoomLink.href = play.image;
    }
    modalTitle.textContent = play.title;
    modalSubtitle.textContent = play.subtitle;
    modalCategory.textContent = play.category;
    modalDuration.textContent = play.duration;
    modalSynopsis.textContent = play.synopsis;
    modalTech.textContent = play.technicalNeeds;
    modalGuide.textContent = play.pedagogicalGuide;

    // Configuración de la sección de Catálogo Oficial (PDF)
    if (play.hasSpecificCatalog) {
      if (modalCatalogBadge) {
        modalCatalogBadge.className = "inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200";
        modalCatalogBadge.innerHTML = "✓ Catálogo Individual Oficial (PDF)";
      }
      if (modalCatalogDesc) {
        modalCatalogDesc.innerHTML = `<strong>Dossier Oficial Completo:</strong> Incluye fundamentación, objetivos, elenco artístico, requerimientos técnicos y fotografías de la obra.`;
      }
      if (modalCatalogDownloadBtn) {
        modalCatalogDownloadBtn.href = play.catalogPdf;
        modalCatalogDownloadBtn.setAttribute("download", play.catalogPdf.split("/").pop());
        modalCatalogDownloadBtn.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg> <span>Descargar Catálogo (PDF)</span>`;
      }
      if (modalCatalogViewBtn) {
        modalCatalogViewBtn.href = play.catalogPdf;
        modalCatalogViewBtn.innerHTML = `<span>Ver Catálogo Online</span>`;
      }
    } else {
      if (modalCatalogBadge) {
        modalCatalogBadge.className = "inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 border border-sky-200";
        modalCatalogBadge.innerHTML = "📑 Cartelera Escolar 2026";
      }
      if (modalCatalogDesc) {
        modalCatalogDesc.innerHTML = `Descarga la Cartelera Escolar 2026 oficial o solicita la ficha técnica extendida directamente a nuestro equipo.`;
      }
      if (modalCatalogDownloadBtn) {
        modalCatalogDownloadBtn.href = play.catalogPdf;
        modalCatalogDownloadBtn.removeAttribute("download");
        modalCatalogDownloadBtn.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg> <span>Descargar Cartelera 2026</span>`;
      }
      if (modalCatalogViewBtn) {
        modalCatalogViewBtn.href = `https://wa.me/56956672302?text=${encodeURIComponent("Hola Teatro Para Colegios, quisiera solicitar el dossier específico de la obra " + play.title)}`;
        modalCatalogViewBtn.innerHTML = `<span>Solicitar Dossier por WhatsApp</span>`;
      }
    }

    // Objetivo General
    if (play.generalObjective && modalGeneralObjContainer && modalGeneralObj) {
      modalGeneralObj.textContent = play.generalObjective;
      modalGeneralObjContainer.classList.remove("hidden");
    } else if (modalGeneralObjContainer) {
      modalGeneralObjContainer.classList.add("hidden");
    }

    // Objetivos Específicos
    if (play.specificObjectives && play.specificObjectives.length > 0 && modalSpecificObjContainer && modalSpecificObj) {
      modalSpecificObj.innerHTML = play.specificObjectives
        .map((obj) => `<li class="flex items-start gap-2"><span class="text-brand-turquoise font-bold mt-0.5">•</span><span>${obj}</span></li>`)
        .join("");
      modalSpecificObjContainer.classList.remove("hidden");
    } else if (modalSpecificObjContainer) {
      modalSpecificObjContainer.classList.add("hidden");
    }

    // Ficha Artística
    if (play.artisticTeam && modalArtisticTeamContainer && modalArtisticTeam) {
      let teamHtml = "";
      if (play.artisticTeam.direction) teamHtml += `<div><strong>Dirección:</strong> ${play.artisticTeam.direction}</div>`;
      if (play.artisticTeam.dramaturgy) teamHtml += `<div><strong>Dramaturgia:</strong> ${play.artisticTeam.dramaturgy}</div>`;
      if (play.artisticTeam.cast) teamHtml += `<div><strong>Elenco:</strong> ${play.artisticTeam.cast}</div>`;
      if (play.artisticTeam.design) teamHtml += `<div><strong>Diseño Integral:</strong> ${play.artisticTeam.design}</div>`;
      if (play.artisticTeam.technicalCrew) teamHtml += `<div><strong>Equipo Técnico:</strong> ${play.artisticTeam.technicalCrew}</div>`;
      if (play.artisticTeam.soundAndLighting) teamHtml += `<div><strong>Iluminación y Sonido:</strong> ${play.artisticTeam.soundAndLighting}</div>`;
      if (play.artisticTeam.coordinator) teamHtml += `<div><strong>Coordinación:</strong> ${play.artisticTeam.coordinator}</div>`;
      modalArtisticTeam.innerHTML = teamHtml;
      modalArtisticTeamContainer.classList.remove("hidden");
    } else if (modalArtisticTeamContainer) {
      modalArtisticTeamContainer.classList.add("hidden");
    }

    // Puesta en Escena
    if (play.stagingElements && play.stagingElements.length > 0 && modalStagingContainer && modalStaging) {
      modalStaging.innerHTML = play.stagingElements
        .map((el) => `<li class="flex items-start gap-2"><span class="text-brand-orange font-bold mt-0.5">✦</span><span>${el}</span></li>`)
        .join("");
      modalStagingContainer.classList.remove("hidden");
    } else if (modalStagingContainer) {
      modalStagingContainer.classList.add("hidden");
    }

    // Ciclos
    modalCycles.innerHTML = play.cycleLabels
      .map((label) => `<span class="cycle-tag tag-segundo-ciclo text-xs">${label}</span>`)
      .join("");

    // OAT list
    modalOat.innerHTML = play.oat
      .map((item) => `<li class="flex items-start gap-2"><span class="text-brand-orange mt-0.5 font-bold">✓</span><span>${item}</span></li>`)
      .join("");

    // Botón de imprimir / guardar
    if (modalPrintBtn) {
      modalPrintBtn.onclick = () => {
        window.print();
      };
    }

    // Botón de cotizar en el modal
    modalQuoteBtn.onclick = () => {
      closeModal();
      window.preselectAndScroll(play.title);
    };

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      closeModal();
    }
  });

  // 6. Pre-selección en cotizador y scroll
  window.preselectAndScroll = function (playTitle) {
    const decodedTitle = decodeURIComponent(playTitle);
    if (quotePlaySelect) {
      quotePlaySelect.value = decodedTitle;
    }
    const cotizarSection = document.getElementById("cotizar");
    if (cotizarSection) {
      cotizarSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 7. Manejo del Formulario de Cotización Escolar
  if (quoteForm) {
    quoteForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const schoolName = document.getElementById("quote-school")?.value || "";
      const commune = document.getElementById("quote-commune")?.value || "";
      const contactPerson = document.getElementById("quote-name")?.value || "";
      const role = document.getElementById("quote-role")?.value || "";
      const phone = document.getElementById("quote-phone")?.value || "";
      const email = document.getElementById("quote-email")?.value || "";
      const cycle = document.getElementById("quote-cycle")?.value || "No especificado";
      const playName = quotePlaySelect?.value || "Por definir / asesoría";
      const studentsCount = document.getElementById("quote-students")?.value || "Por definir";
      const funding = document.getElementById("quote-funding")?.value || "Fondos SEP / PME";
      const comments = document.getElementById("quote-comments")?.value || "Ninguno";

      // Mensaje estructurado para WhatsApp
      const whatsappText = `¡Hola Teatro Para Colegios! 🎭\n\nQuisiera solicitar una cotización formal para mi establecimiento:\n` +
        `• *Colegio:* ${schoolName}\n` +
        `• *Comuna/Región:* ${commune}\n` +
        `• *Contacto:* ${contactPerson} (${role})\n` +
        `• *Teléfono:* ${phone}\n` +
        `• *Correo:* ${email}\n` +
        `• *Obra de Interés:* ${playName}\n` +
        `• *Ciclo Escolar:* ${cycle}\n` +
        `• *Nº Estimado de Alumnos:* ${studentsCount}\n` +
        `• *Financiamiento:* ${funding}\n` +
        `• *Detalles adicionales:* ${comments}\n\n` +
        `Agradezco me puedan contactar con los valores y disponibilidad de fechas. Muchas gracias.`;

      const whatsappUrl = `https://wa.me/56956672302?text=${encodeURIComponent(whatsappText)}`;

      // Mostrar modal de confirmación
      const submitSuccessBox = document.getElementById("quote-success-box");
      if (submitSuccessBox) {
        submitSuccessBox.classList.remove("hidden");
        submitSuccessBox.scrollIntoView({ behavior: "smooth" });
      }

      // Abrir WhatsApp en pestaña nueva
      window.open(whatsappUrl, "_blank");
    });
  }

  // 8. Acordeón FAQ
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    if (!questionBtn || !answer) return;

    questionBtn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Cerrar otros
      faqItems.forEach((other) => {
        other.classList.remove("active");
        const otherAnswer = other.querySelector(".faq-answer");
        if (otherAnswer) otherAnswer.style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        item.classList.remove("active");
        answer.style.maxHeight = null;
      }
    });
  });

  // 9. Menú Hamburguesa Móvil
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }

  // Inicializar
  populatePlaySelect();
  renderPlays();
});
