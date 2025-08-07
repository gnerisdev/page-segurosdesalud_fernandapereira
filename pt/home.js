document.addEventListener('DOMContentLoaded', function () {
  const categorias = [
    {
      nome: 'Saúde e Família',
      seguros: [
        {
          id: 'sanitasMasSalud',
          title: 'Sanitas Más Salud',
          icon: 'fa-solid fa-hospital-user',
          image: '../assets/images/seguros/01.jpeg',
          intro: 'O seguro mais completo da Sanitas',
          topics: [
            'Inclui hospitalização, urgências, consultas, especialistas e exames diagnósticos.',
            'Cobertura odontológica incluída.',
            'Acesso à melhor rede médica da Espanha.',
            'Inclui videoconsultas e App Sanitas.',
            'Disponível com ou sem copagamento (escolha de acordo com seu orçamento).',
            'Válido para processos de NIE, visto ou residência.',
            'Ideal para pessoas que procuram um seguro completo e sem preocupações.'
          ]
        },
        {
          id: 'sanitasFamilias',
          title: 'Sanitas Más Salud Famílias',
          icon: 'fa-solid fa-family',
          image: '../assets/images/seguros/02.jpg',
          intro: 'Versão familiar do plano Más Salud',
          topics: [
            'Inclui os mesmos serviços que o plano Más Salud.',
            'Você pode segurar seu parceiro(a), filhos ou toda a família em um único contrato.',
            'Preço especial e descontos para grupos familiares.',
            'Opções com pediatria, ginecologia e urgências infantis.',
            'Perfeito para famílias ou casais que desejam cobertura completa juntos.'
          ]
        },
        {
          id: 'sanitasTopQuantum',
          title: 'Sanitas Top Quantum',
          icon: 'fa-solid fa-dna',
          image: '../assets/images/seguros/03.avif',
          intro: 'Sanitas Top Quantum',
          topics: [
            'Acesso preferencial a centros premium e especialistas de ponta.',
            'Coberturas ampliadas: genética, medicina de precisão, tratamentos inovadores.',
            'Gestor de saúde pessoal 24h.',
            'Ideal para quem busca excelência em saúde privada.'
          ]
        },
        {
          id: 'sanitasAvanza',
          title: 'Sanitas Avanza',
          icon: 'fa-solid fa-hand-holding-dollar',
          image: '../assets/images/seguros/04.avif',
          intro: 'Seguro mais econômico da Sanitas',
          topics: [
            'Consultas com especialistas, análises, exames e urgências.',
            'Não inclui hospitalização nem cirurgias programadas.',
            'Com copagamentos, para manter uma mensalidade mais baixa.',
            'Inclui atendimento odontológico básico.',
            'Recomendado para quem quer um seguro mais barato, mas com acesso a especialistas e serviços médicos básicos.'
          ]
        },
        {
          id: 'sanitasAccede',
          title: 'Sanitas Accede',
          icon: 'fa-solid fa-headset',
          image: '../assets/images/seguros/05.png',
          intro: 'Seguro digital, econômico e com acesso rápido à saúde privada.',
          topics: [
            'Consultas com especialistas sem precisar ir ao médico de família.',
            'Exames e análises incluídos.',
            'Atendimento digital por videoconsulta 24h com médicos de várias especialidades.',
            'Acesso à ampla rede Sanitas para serviços presenciais também.',
            'Cobertura odontológica básica incluída.',
            'Sem carência (exceto partos e psicologia).',
            'Com copagamentos (pagamento por uso: ideal para quem usa pouco e quer economizar).'
          ]
        },
        {
          id: 'sanitasOptima',
          title: 'Sanitas Óptima',
          icon: 'fa-solid fa-heart-pulse',
          image: '../assets/images/seguros/optima.jpeg',
          intro: 'Seguro de saúde com acesso completo a especialistas.',
          topics: [
            'Consultas com especialistas e medicina geral.',
            ' Exames, diagnósticos e tratamentos incluídos.',
            'Videoconsulta 24h com especialistas.',
            'Cobertura odontológica básica incluída.',
            'Não inclui hospitalização nem cirurgias programadas.',
            'Sem carência (exceto partos e psicologia).',
            'Com copagamentos moderados (pagamento por uso dos serviços).'
          ]
        },
        {
          id: 'sanitasOptima',
          title: 'Seguro médico de Sanitas para idosos',
          icon: 'fa-solid fa-heart-pulse',
          image: '../assets/images/seguros/06.jpg',
          intro: 'A um preço reduzido, sem limite de idade.',
          topics: [
            'Sem limite de idade para contratação.',
            'Sem carências em quase todos os serviços.',
            'Sem questionário de saúde.'
          ]
        }
      ]
    },
    {
      nome: 'Profissionais e Empresas',
      seguros: [
        {
          id: 'sanitasProfesionales',
          title: 'Sanitas Profissionais (sem copagamentos)',
          icon: 'fa-solid fa-user-tie',
          image: '../assets/images/seguros/07.png',
          intro: 'Sanitas Profissionais (sem copagamentos)',
          topics: [
            'Hospitalização, cirurgias, especialistas, exames diagnósticos.',
            'Medicina preventiva, saúde mental, ginecologia, pediatria.',
            'Sem carências (exceto partos e tratamentos especiais).',
            'Inclui cobertura fiscal (modelo 036 ou 037).',
            'Ideal para profissionais autônomos que buscam cobertura total.'
          ]
        },
        {
          id: 'sanitasProfesionalesOptima',
          title: 'Sanitas Profissionais Óptima',
          icon: 'fa-solid fa-briefcase-medical',
          image: '../assets/images/seguros/08.jpg',
          intro: 'Sanitas Profissionais Óptima',
          topics: [
            'Mesmas coberturas que o plano “sem copagamentos”, mas com pagamento por uso.',
            'Mensalidade mais econômica.',
            'Perfeito para quem quer um seguro completo e pagar menos se não usar muito.'
          ]
        },
        {
          id: 'sanitasProfesionalesPlus',
          title: 'Sanitas Profissionais Plus',
          icon: 'fa-solid fa-shield-halved',
          image: '../assets/images/seguros/09.webp',
          intro: 'Sanitas Profissionais Plus',
          topics: [
            'Inclui todas as coberturas do plano anterior.',
            'Quarto individual no hospital com cama para acompanhante.',
            'Cobertura internacional em viagens.',
            'Recomendado para profissionais exigentes que viajam ou desejam mais conforto.'
          ]
        }
      ]
    },
    {
      nome: 'Específicos e Estudantes',
      seguros: [
        {
          id: 'sanitasEstudiantes',
          title: 'Seguro de Saúde para Estudantes',
          icon: 'fa-solid fa-graduation-cap',
          image: '../assets/images/seguros/estudante.jpeg',
          intro: 'Seguro ideal para estudantes estrangeiros que vêm estudar na Espanha.',
          topics: [
            'Cobertura completa: consultas, especialistas, exames, urgências e hospitalização.',
            'Sem carência (cobertura desde o primeiro dia, exceto partos e psicologia).',
            'Inclui assistência odontológica básica.',
            'Acesso a videoconsultas e App Sanitas.',
            'Cobertura em toda a Espanha com a rede médica Sanitas.',
            'Válido para visto de estudante (NIE) – aceito pelos consulados espanhóis.',
            'Documento de cobertura em espanhol com cláusula exigida pelo consulado.',
            'Preço especial para estudantes. Sem copagamentos (tudo incluído).',
            'Contratação rápida com passaporte e carta de aceitação da escola.'
          ]
        },
        {
          id: 'sanitasDentalPremium',
          title: 'Sanitas Dental Premium',
          icon: 'fa-solid fa-tooth',
          image: '../assets/images/seguros/11.webp',
          intro: 'Sanitas Dental Premium sem Copagamento',
          topics: [
            'Cobertura de mais de 60 tratamentos sem custo adicional (limpezas, restaurações, extrações, radiografias, etc.).',
            'Acesso à rede de clínicas odontológicas próprias e conveniadas.',
            'Gestão digital e lembretes de revisões.',
            'Preço fixo mensal, sem surpresas.',
            'Ideal para quem quer cuidar da saúde bucal sem se preocupar com copagamentos.'
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
                      Ver mais
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

  // Language
  const languageSelector = document.querySelector('.language-selector');
  const currentLanguage = document.querySelector('.current-language');

  currentLanguage.addEventListener('click', function () {
    languageSelector.classList.toggle('open');
  });

  document.addEventListener('click', function (event) {
    if (!languageSelector.contains(event.target)) {
      languageSelector.classList.remove('open');
    }
  });

  const url = window.location.pathname;
  const isPortuguese = url.startsWith('/pt');

  if (isPortuguese) {
    currentLanguage.innerHTML = `
        <img src="https://flagicons.lipis.dev/flags/4x3/pt.svg" alt="Bandeira de Portugal" />
        <span>Português</span>
        <i class="fa-solid fa-chevron-down"></i>
      `;
    languageSelector.querySelector('.language-list li:first-child').style.display = 'none';
    languageSelector.querySelector('.language-list li:last-child').style.display = 'flex';

  } else {
    currentLanguage.innerHTML = `
        <img src="https://flagicons.lipis.dev/flags/4x3/es.svg" alt="Bandeira da Espanha" />
        <span>Español</span>
        <i class="fa-solid fa-chevron-down"></i>
      `;
    languageSelector.querySelector('.language-list li:first-child').style.display = 'flex';
    languageSelector.querySelector('.language-list li:last-child').style.display = 'none';
  }
});