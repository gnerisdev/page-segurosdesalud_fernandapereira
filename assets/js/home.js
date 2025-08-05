document.addEventListener('DOMContentLoaded', function () {
  const categorias = [
    {
      nome: 'Salud y Familia',
      seguros: [
        {
          id: 'sanitasMasSalud',
          title: 'Sanitas Más Salud',
          icon: 'fa-solid fa-hospital-user',
          image: './assets/images/seguros/01.jpeg',
          intro: ' El seguro más completo de Sanitas',
          topics: [
            'Incluye hospitalización, urgencias, consultas, especialistas y pruebas diagnósticas.',
            'Cobertura dental incluida.',
            'Acceso a la mejor red médica de España.',
            'Incluye videoconsultas y App Sanitas.',
            'Disponible con o sin copago (elige según tu presupuesto).',
            'Válido para trámites de NIE, visado o residencia.',
            'Ideal para personas que buscan un seguro completo y sin preocupaciones.'
          ]
        },
        {
          id: 'sanitasFamilias',
          title: 'Sanitas Más Salud Familias',
          icon: 'fa-solid fa-family',
          image: './assets/images/seguros/02.jpg',
          intro: 'Versión familiar del plan Más Salud',
          topics: [
            'Incluye los mismos servicios que el plan Más Salud.',
            'Puedes asegurar a tu pareja, hijos o toda la familia en un solo contrato.',
            'Precio especial y descuentos para grupos familiares.',
            'Opciones con pediatría, ginecología y urgencias infantiles.',
            'Perfecto para familias o parejas que desean cobertura completa juntos.'
          ]
        },
        {
          id: 'sanitasTopQuantum',
          title: 'Sanitas Top Quantum',
          icon: 'fa-solid fa-dna',
          image: './assets/images/seguros/03.avif',
          intro: 'Sanitas Top Quantum',
          topics: [
            'Acceso preferente a centros premium y especialistas top',
            'Coberturas ampliadas: genética, medicina de precisión, tratamientos innovadores',
            'Gestor de salud personal 24h',
            'Ideal para quien busca excelencia en salud privada.'
          ]
        },
        {
          id: 'sanitasAvanza',
          title: 'Sanitas Avanza',
          icon: 'fa-solid fa-hand-holding-dollar',
          image: './assets/images/seguros/04.avif',
          intro: 'Seguro más económico de Sanitas',
          topics: [
            'Consultas con especialistas, análisis, pruebas y urgencias.',
            'No incluye hospitalización ni cirugías programadas.',
            'Con copagos, para mantener una prima mensual más baja.',
            'Incluye atención dental básica.',
            'Recomendado para quienes quieren un seguro más barato, pero con acceso a especialistas y servicios médicos básicos.'
          ]
        },
        {
          id: 'sanitasAccede',
          title: 'Sanitas Accede',
          icon: 'fa-solid fa-headset',
          image: './assets/images/seguros/05.png',
          intro: 'Seguro digital, económico y con acceso rápido a la salud privada.',
          topics: [
            'Consultas con especialistas sin necesidad de ir al médico de familia.',
            'Exámenes y análisis incluidos.',
            'Atención digital por videoconsulta 24h con médicos de varias especialidades.',
            'Acceso a la amplia red Sanitas para servicios presenciales también.',
            'Cobertura dental básica incluida.',
            'Sin carencia (excepto partos y psicología).',
            'Con copagos (pago por uso: ideal para quien usa poco y quiere ahorrar).'
          ]
        },
        {
          id: 'sanitasOptima',
          title: 'Sanitas Óptima',
          icon: 'fa-solid fa-heart-pulse',
          image: './assets/images/seguros/optima.jpeg',
          intro: 'Seguro de salud con acceso completo a especialistas.',
          topics: [
            'Consultas con especialistas y medicina general.',
            ' Exámenes, diagnósticos y tratamientos incluidos.',
            'Videoconsulta 24h con especialistas.',
            'Cobertura dental básica incluida.',
            'No incluye hospitalización ni cirugías programadas.',
            'Sin carencia (excepto partos y psicología).',
            'Con copagos moderados (pago por uso de los servicios).'
          ]
        },
        {
          id: 'sanitasOptima',
          title: 'Seguro médico de Sanitas para mayores',
          icon: 'fa-solid fa-heart-pulse',
          image: './assets/images/seguros/06.jpg',
          intro: 'A un precio reducido, sin límite de edad.',
          topics: [
            'Sin límite de edad de contratación.',
            'Sin carencias en casi todos los servicios.',
            'El y sin cuestinario de salud.',
          ]
        }
      ]
    },
    {
      nome: 'Profesionales y Empresas',
      seguros: [
        {
          id: 'sanitasProfesionales',
          title: 'Sanitas Profesionales (sin copagos)',
          icon: 'fa-solid fa-user-tie',
          image: './assets/images/seguros/07.png',
          intro: 'Sanitas Profesionales (sin copagos)',
          topics: [
            'Hospitalización, cirugías, especialistas, pruebas diagnósticas',
            'Medicina preventiva, salud mental, ginecología, pediatría',
            'Sin carencias (salvo partos y tratamientos especiales)',
            'Incluye cobertura fiscal (modelo 036 o 037)',
            'Ideal para profesionales por cuenta propia que buscan cobertura total.'
          ]
        },
        {
          id: 'sanitasProfesionalesOptima',
          title: 'Sanitas Profesionales Óptima',
          icon: 'fa-solid fa-briefcase-medical',
          image: './assets/images/seguros/08.jpg',
          intro: 'Sanitas Profesionales Óptima',
          topics: [
            'Mismas coberturas que el plan “sin copagos”, pero con pago por uso',
            'Cuota mensual más económica',
            'Perfecto para quien quiere un seguro completo y pagar menos si no lo usa mucho.'
          ]
        },
        {
          id: 'sanitasProfesionalesPlus',
          title: 'Sanitas Profesionales Plus',
          icon: 'fa-solid fa-shield-halved',
          image: './assets/images/seguros/09.webp',
          intro: 'Sanitas Profesionales Plus',
          topics: [
            'Incluye todas las coberturas del plan anterior',
            'Habitación individual en hospital con cama para acompañante',
            'Cobertura internacional en viajes',
            'Recomendado para profesionales exigentes que viajan o desean más comodidad.'
          ]
        }
      ]
    },
    {
      nome: 'Específicos y Estudiantes',
      seguros: [
        {
          id: 'sanitasEstudiantes',
          title: 'Seguro de Salud para Estudiantes',
          icon: 'fa-solid fa-graduation-cap',
          image: './assets/images/seguros/estudante.jpeg',
          intro: 'Seguro ideal para estudiantes extranjeros que vienen a estudiar a España.',
          topics: [
            'Cobertura completa: consultas, especialistas, exámenes, urgencias y hospitalización.',
            'Sin carencia (cobertura desde el primer día, excepto partos y psicología).',
            'Incluye asistencia dental básica.',
            'Acceso a videoconsultas y App Sanitas.',
            'Cobertura en toda España con la red médica Sanitas.',
            'Válido para visado de estudiante (NIE) – aceptado por los consulados españoles.',
            'Documento de cobertura en español con cláusula exigida por el consulado.',
            'Precio especial para estudiantes. Sin copagos (todo incluido).',
            'Contratación rápida con pasaporte y carta de aceptación de la escuela.'
          ]
        },
        {
          id: 'sanitasDentalPremium',
          title: 'Sanitas Dental Premium',
          icon: 'fa-solid fa-tooth',
          image: './assets/images/seguros/11.webp',
          intro: 'Sanitas Dental Premium sin Copago',
          topics: [
            'Cobertura de más de 60 tratamientos sin coste adicional (limpiezas, empastes, extracciones, radiografías, etc.)',
            'Acceso a red de clínicas dentales propias y concertadas',
            'Gestión digital y recordatorios de revisiones',
            'Precio fijo mensual, sin sorpresas',
            'Ideal para quienes quieren cuidar su salud bucal sin preocuparse por copagos.'
          ]
        }
      ]
    }
  ];

  const segurosContainer = document.getElementById('seguros-container');
  const modalsContainer = document.getElementById('modals-container');

  let segurosHTML = '';
  let modalsHTML = `
    <div class="modal fade" id="infoModal" tabindex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="infoModalLabel">Detalhes do Seguro</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <img id="modal-image" src="" class="img-fluid" style="max-height: 200px; width: 100%; object-fit: cover; object-position: top;" alt="Imagem do seguro">
          <div class="modal-body" style="overflow-y: hidden;">
            <h4 id="modal-title"></h4>
            <p id="modal-intro" class="text-muted"></p>
            <div style="max-height: 300px; overflow-y: auto;">
                <ul id="modal-topics" class="list-unstyled"></ul>
            </div>
          </div>
          <div class="modal-footer">
            <a id="modal-whatsapp-link" href="#" target="_blank" class="btn btn-success">WhatsApp</a>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Inserir o HTML do modal na página
  modalsContainer.innerHTML = modalsHTML;

  let seguroIndex = 0; // Adicionamos um contador para os seguros
  categorias.forEach(categoria => {
    segurosHTML += `<div class="sec-title centered mt-3 mb-3"><h4>${categoria.nome}</h4></div>`;
    segurosHTML += `<div class="row clearfix">`;

    categoria.seguros.forEach(seguro => {
      let topicsToShow;
      // Condição para exibir todos os tópicos se for um dos 3 primeiros seguros
      if (seguroIndex < 3) {
        topicsToShow = seguro.topics;
      } else {
        topicsToShow = seguro.topics.slice(0, 3);
      }
      
      const htmlTopics = topicsToShow
        .map(topic => `<li><i class="fa-solid fa-check"></i> ${topic}</li>`).join('');

      segurosHTML += `
        <div class="security-block col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
                <div class="image">
                  <img src="${seguro.image}" alt="${seguro.title}" />
                </div>
                <div class="lower-content">
                    <div class="upper-box">
                        <h5>${seguro.title}</h5>
                        <p>${seguro.intro}</p>
                    </div>
                    <div class="text">
                      <ul>${htmlTopics}</ul>
                    </div>
                </div>
                  <button class="theme-btn btn-style-one open-info-modal" data-seguro-id="${seguro.id}">
                    <span class="txt">
                      Ver más
                      <span class="fa-solid fa-arrow-right"></span>
                    </span>
                  </button>
            </div>
        </div>
      `;
      seguroIndex++; // Incrementa o contador para cada seguro processado
    });
    segurosHTML += `</div>`;
  });

  // Inserir todo o HTML gerado de uma só vez
  segurosContainer.innerHTML = segurosHTML;

  const infoModalElement = document.getElementById('infoModal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalIntro = document.getElementById('modal-intro');
  const modalTopicsList = document.getElementById('modal-topics');
  const modalWhatsappLink = document.getElementById('modal-whatsapp-link');

  // Lógica para abrir o modal de informações
  document.querySelectorAll('.open-info-modal').forEach(button => {
    button.addEventListener('click', function () {
      const seguroId = this.dataset.seguroId;
      const seguro = categorias.flatMap(c => c.seguros).find(s => s.id === seguroId);

      // Preencher o modal com os dados do seguro clicado
      modalImage.src = seguro.image;
      modalImage.alt = seguro.title;
      modalTitle.textContent = seguro.title;
      modalIntro.textContent = seguro.intro;

      // Limpar a lista de tópicos anterior
      modalTopicsList.innerHTML = '';

      // Adicionar os novos tópicos como itens de lista
      seguro.topics.forEach(topic => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fa-solid fa-check text-success me-2"></i>${topic}`;
        modalTopicsList.appendChild(li);
      });

      // Atualizar o link do WhatsApp
      const whatsappText = `Olá, gostaria de saber mais sobre o seguro ${seguro.title}.`;
      modalWhatsappLink.href = `https://wa.me/34604928130?text=${encodeURIComponent(whatsappText)}`;

      const infoModal = new bootstrap.Modal(infoModalElement);
      infoModal.show();
    });
  });
});