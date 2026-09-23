/**
 * Base de datos oficial de obras de Teatro Para Colegios (teatroparacolegios.cl)
 * Contenido extraído y curado con catálogos oficiales individuales en PDF
 */

const PLAYS_DATA = [
  {
    id: "romeo-julieta",
    title: "Romeo y Julieta: Entre Likes y Bullying",
    subtitle: "Empatía y respeto digital · Prevención del ciberacoso",
    category: "Convivencia y Redes Sociales",
    cycles: ["segundo-ciclo", "media"],
    cycleLabels: ["5º a 8º Básico", "1º a 4º Medio"],
    duration: "45 minutos aprox. + Conversatorio",
    image: "https://teatroeducativo.cl/wp-content/uploads/2026/06/Romeo_Julieta-1024x576.png",
    catalogPdf: "assets/catalogos/catalogo-romeo-y-julieta-entre-likes-y-bullying.pdf",
    hasSpecificCatalog: true,
    catalogName: "Catálogo Oficial Romeo y Julieta (PDF)",
    featured: true,
    tags: ["bullying", "ciberbullying", "redes sociales", "likes", "adolescencia", "autoestima", "empatia", "memes", "funas"],
    synopsis: "Traslada el clásico conflicto de los jóvenes amantes a un colegio contemporáneo, donde la popularidad se mide en likes y seguidores. Romeo y Julieta, dos estudiantes de mundos opuestos, se conectan por un comentario en redes sociales. Lo que comienza como una amistad genuina se transforma en un conflicto público marcado por burlas, memes y ciberacoso. Julieta deberá decidir entre mantener su estatus o actuar con empatía y valentía en un entorno digital que juzga y expone.",
    generalObjective: "Promover la reflexión sobre el uso responsable de las redes sociales y la prevención del ciberbullying, fomentando la empatía, el respeto y la valentía emocional en adolescentes y jóvenes.",
    specificObjectives: [
      "Sensibilizar sobre las consecuencias del acoso digital y la presión social en entornos virtuales.",
      "Incentivar la empatía y el respeto como herramientas para construir relaciones sanas en línea y fuera de ella.",
      "Estimular el pensamiento crítico frente a la búsqueda de popularidad y validación en redes sociales.",
      "Motivar la expresión emocional y el diálogo sobre convivencia digital en el contexto escolar."
    ],
    stagingElements: [
      "Iluminación escénica profesional frontal y efectos",
      "Música y diseño sonoro envolvente de alta fidelidad",
      "Efectos especiales y máquina de humo",
      "Interacción participativa directa con el público",
      "Escenografía y utilería contemporánea escolar"
    ],
    oat: [
      "Fomentar el respeto y la empatía en entornos digitales y presenciales.",
      "Identificar y frenar conductas de ciberacoso y hostigamiento entre pares.",
      "Desarrollar el pensamiento crítico frente a los estándares de redes sociales.",
      "Fortalecer los canales de denuncia y apoyo escolar ante situaciones de acoso."
    ],
    technicalNeeds: "Gimnasio, salón de actos o patio techado con toma 220V. La compañía provee sistema de sonido profesional, micrófonos inalámbricos y escenografía completa.",
    pedagogicalGuide: "Incluye Guía de Mediación Docente descargable con actividades para trabajar antes y después de la función en Lenguaje, Orientación y Convivencia Escolar."
  },
  {
    id: "rigob",
    title: "Rigob y el Mundo de las Pantallas",
    subtitle: "Adicción a la tecnología y su impacto en las relaciones humanas",
    category: "Salud Mental y Tecnología",
    cycles: ["primer-ciclo", "segundo-ciclo"],
    cycleLabels: ["1º a 4º Básico", "5º a 8º Básico"],
    duration: "45 minutos + Conversatorio",
    image: "https://teatroeducativo.cl/wp-content/uploads/2026/07/RiGoB-1024x576.png",
    catalogPdf: "assets/catalogos/catalogo-rigob-y-el-mundo-de-las-pantallas.pdf",
    hasSpecificCatalog: true,
    catalogName: "Catálogo Oficial Rigob y las Pantallas (PDF)",
    featured: true,
    tags: ["pantallas", "celulares", "videojuegos", "tecnologia", "desconexion", "familia", "inteligencia artificial"],
    synopsis: "Rigob, un niño alegre y curioso, recibe su primer teléfono inteligente y se ve arrastrado hacia el aislamiento emocional, dominado por la inteligencia artificial Lupi, símbolo del uso excesivo de la tecnología. Con un lenguaje escénico ágil y visualmente llamativo, la obra conecta con públicos de todas las edades. Su clímax —la explosión simbólica del celular— marca el renacer de Rigob, quien recupera su conexión con el mundo real: 'en un mundo hiperconectado, a veces hay que desconectar para volver a conectar'.",
    generalObjective: "Promover una reflexión crítica sobre el uso excesivo de la tecnología en la infancia, visibilizando sus efectos en la salud emocional, las relaciones humanas y la vida cotidiana, a través de una experiencia teatral.",
    specificObjectives: [
      "Reflexionar sobre el uso excesivo de pantallas y sus consecuencias en la vida emocional y social de niñas y niños.",
      "Promover hábitos digitales más saludables en el entorno familiar y escolar.",
      "Fomentar el desarrollo de la empatía y la conexión humana en tiempos de hiperconectividad.",
      "Conectar con la comunidad educativa en una experiencia artística y teatral participativa."
    ],
    artisticTeam: {
      direction: "Antonia Castillo",
      dramaturgy: "Antonia Castillo",
      cast: "Andrea Castillo, Felipe Arce, Micaela Quaroni y Matías Gonzáles",
      design: "Andrea Pizarro",
      technicalCrew: "Hans Grawe Poche"
    },
    oat: [
      "Tomar conciencia de los límites y tiempos adecuados para el uso de pantallas.",
      "Prevenir el sedentarismo y el aislamiento social provocado por el exceso digital.",
      "Fomentar la comunicación directa y el juego compartido en el colegio y el hogar.",
      "Reflexionar sobre la influencia de algoritmos e inteligencias artificiales en nuestras vidas."
    ],
    technicalNeeds: "Espacio techado con toma eléctrica 220V. Autonomía técnica integral (sonido, micrófonos y escenografía).",
    pedagogicalGuide: "Ficha pedagógica con pauta de autorregulación del tiempo de pantalla para estudiantes y familias."
  },
  {
    id: "matilda",
    title: "Matilda en el Bosque de la Valentía",
    subtitle: "Prevención del Bullying a través de la autoconfianza y la resiliencia",
    category: "Autoestima y Convivencia",
    cycles: ["preescolar", "primer-ciclo"],
    cycleLabels: ["Educación Parvularia", "1º a 4º Básico"],
    duration: "45 minutos + Reflexión",
    image: "https://teatroeducativo.cl/wp-content/uploads/2026/07/Matilda-1024x576.png",
    catalogPdf: "assets/catalogos/catalogo-matilda-en-el-bosque-de-la-valentia.pdf",
    hasSpecificCatalog: true,
    catalogName: "Catálogo Oficial Matilda en el Bosque (PDF)",
    featured: true,
    tags: ["autoestima", "valentia", "bullying", "naturaleza", "resiliencia", "amistad", "infancia", "miedos"],
    synopsis: "Matilda, una niña solitaria que enfrenta las constantes burlas de sus compañeros de colegio, encuentra refugio en el bosque donde descubre su extraordinaria habilidad para comunicarse con los seres vivos. Guiada por Luchito, un búho muy divertido, emprende la búsqueda del árbol sabio junto a Coco el cocodrilo y Zorro. A través de estas amistades aprende el valor de la valentía y su propio poder interior, regresando a su escuela fortalecida para transformar la percepción de sus pares y crear lazos sanos.",
    generalObjective: "Inspirar a los niños y niñas a confiar en sí mismos y promover el autocuidado de las emociones y sus cuerpos a través de enfrentar sus miedos.",
    specificObjectives: [
      "Motivar a los niños y niñas a confiar en sí mismos y en sus capacidades únicas.",
      "Inspirar a desarrollar un pensamiento positivo, empático y resiliente frente a la adversidad.",
      "Promover el autocuidado del cuerpo y el respeto mutuo en la comunidad escolar."
    ],
    artisticTeam: {
      direction: "Ricardo Hernández Salgado",
      dramaturgy: "Ricardo Hernández Salgado",
      cast: "Antonia Castillo Navarro y Ricardo Hernández",
      design: "Equipo Teatro Educativo",
      technicalCrew: "Hans Grawe Poche"
    },
    oat: [
      "Reforzar la autoimagen positiva, la autovaloración y la confianza personal.",
      "Sensibilizar sobre el daño que provocan las burlas, apodos y conductas de exclusión.",
      "Enseñar estrategias de resiliencia y petición de apoyo a figuras protectoras.",
      "Despertar el respeto y la admiración por el entorno natural y los seres vivos."
    ],
    technicalNeeds: "Espacio plano techado y enchufe 220V. Iluminación y sonido suministrados íntegramente por el elenco.",
    pedagogicalGuide: "Actividades de aula con enfoque en habilidades socioemocionales de la Agencia de Calidad de la Educación."
  },
  {
    id: "ley-karin",
    title: "Ley Karin: El Respeto está de Moda",
    subtitle: "Convivencia laboral, prevención de acoso y buen trato institucional",
    category: "Convivencia Laboral y Ley Karin",
    cycles: ["comunidad"],
    cycleLabels: ["Docentes, Asistentes de la Educación y Equipos Directivos"],
    duration: "45 minutos + Taller de Aplicación",
    image: "https://teatroeducativo.cl/wp-content/uploads/2025/10/ley_karin-1024x576.jpg",
    catalogPdf: "assets/catalogos/catalogo-ley-karin.pdf",
    hasSpecificCatalog: true,
    catalogName: "Catálogo Oficial Ley Karin (PDF)",
    featured: true,
    tags: ["ley karin", "acoso laboral", "acoso sexual", "docentes", "asistentes de educacion", "clima laboral", "ley 21643"],
    synopsis: "Propuesta teatral creada en el marco de la Ley 21.643 ('Ley Karin') que combina humor, ironía e interacción con el público para abordar de manera didáctica temas cruciales: acoso sexual, acoso laboral, violencia en el trabajo, sexismo y conductas incívicas. A través de situaciones cotidianas que a menudo están normalizadas, la obra desmitifica conductas y genera una profunda reflexión para construir ambientes laborales escolares seguros, protectores y respetuosos.",
    generalObjective: "Sensibilizar y fomentar la reflexión sobre la Ley 21.643 ('Ley Karin'), entregando herramientas prácticas para identificar conductas de acoso y violencia laboral y fortalecer un clima escolar saludable.",
    specificObjectives: [
      "Comprender los alcances prácticos y jurídicos de la Ley Karin en establecimientos educacionales.",
      "Identificar conductas normalizadas de maltrato, discriminación sexista y hostigamiento.",
      "Conocer los protocolos obligatorios de prevención, denuncia y medidas de resguardo.",
      "Construir un ambiente de trabajo colaborativo basado en la dignidad y el respeto irrestricto."
    ],
    artisticTeam: {
      direction: "Equipo Teatro Educativo",
      dramaturgy: "Ricardo Hernández",
      cast: "Daniela Galleguillos, Felipe Arce, Antonia Castillo y Felipe Rojas",
      technicalCrew: "Ángel Rubio y Hans Grawe",
      coordinator: "Elizabeth Zapata"
    },
    stagingElements: [
      "8 par Led RGBW con controlador DMX e iluminación frontal",
      "Máquina de humo y 2 torres de iluminación",
      "6 micrófonos lavalier con cápsula cardioide Mipro act 30t + 1 micrófono vocal handheld Mipro act 50h",
      "5 parlantes activos 600w clase D db Technologies Opera 10 con mixer digital 16 canales QSC Touchmix",
      "Furgón propio de traslado, 2 hrs de montaje previo y 2 hrs de desmontaje"
    ],
    oat: [
      "Fomentar la convivencia democrática y el buen trato entre todos los estamentos escolares.",
      "Reconocer y erradicar situaciones de acoso o violencia institucional.",
      "Promover la resolución pacífica de conflictos laborales en el ámbito educativo."
    ],
    technicalNeeds: "Auditorio, gimnasio, cancha o sala multiuso. Disponibilidad 2 hrs antes para montaje técnico y camarín.",
    pedagogicalGuide: "Dossier de aplicación práctica con casos tipo y protocolos de cumplimiento legal institucional."
  },
  {
    id: "los-profes",
    title: "Los Profes",
    subtitle: "Una comedia sobre Convivencia Escolar, vocación y trabajo en equipo",
    category: "Docentes y Convivencia Escolar",
    cycles: ["comunidad"],
    cycleLabels: ["Docentes, Asistentes y Equipos Directivos"],
    duration: "40 min obra + 20 min conversación (60 min total)",
    image: "assets/images/los-profes.jpg",
    catalogPdf: "assets/catalogos/catalogo-los-profes.pdf",
    hasSpecificCatalog: true,
    catalogName: "Catálogo Oficial Los Profes (PDF)",
    featured: true,
    tags: ["los profes", "docentes", "profesores", "asistentes de educacion", "vocacion", "trabajo en equipo", "convivencia escolar", "sala de profesores", "clima laboral", "recreo", "aniversario"],
    synopsis: "'Los Profes' nos invita, en tono de comedia, a sumergirnos en el mundo cotidiano de los profesores: sus conflictos, roces, diferencias de visión sobre la enseñanza y su verdadera pasión por educar. Durante el ansiado recreo largo, cuatro profesores son citados a una misteriosa reunión. Entre reclamos y sospechas de recibir más trabajo, descubren que el objetivo es organizar una celebración especial para el aniversario del colegio. Lo que parecía una molestia, se transforma en una oportunidad para cuestionarse, reencontrarse y trabajar en equipo.",
    generalObjective: "Sensibilizar a profesoras, profesores y asistentes de la educación sobre la importancia de la vocación docente y el trabajo en equipo, a través de un montaje teatral lúdico y reflexivo.",
    specificObjectives: [
      "Revalorizar la vocación educativa de docentes y asistentes de la educación, reconociendo su rol esencial en la formación integral de las y los estudiantes.",
      "Fortalecer el trabajo en equipo entre todos los miembros de la comunidad escolar, promoviendo la colaboración, la comunicación efectiva y el apoyo mutuo.",
      "Fomentar una convivencia escolar positiva, basada en el respeto, la empatía y el compromiso de cada actor educativo."
    ],
    artisticTeam: {
      direction: "Alberto Castillo",
      dramaturgy: "Patricio Campos",
      cast: "Antonia Castillo Navarro, Ambar Villalobos, Daniela Galleguillos Rosas, Felipe Rojas Faundez e Italo Spotorno Maldonado",
      design: "Compañía de Teatro Educativo",
      graphicDesign: "Gonzalo Molina López",
      soundAndLighting: "Hans Grawe Poch"
    },
    stagingElements: [
      "Montaje ágil y adaptable a sala de profesores, gimnasio, auditorio o casino escolar",
      "Sonido e iluminación provistos por la compañía",
      "Espacio de conversación y reflexión colectiva de 20 minutos post-función",
      "Ambientación realista de sala de profesores y dinámicas cotidianas del colegio"
    ],
    oat: [
      "Fortalecer el clima organizacional y la convivencia positiva en la comunidad docente.",
      "Revalorizar el rol formativo y humano de los educadores en la sociedad.",
      "Promover la resolución asertiva y colaborativa de conflictos interpersonales entre colegas."
    ],
    technicalNeeds: "Auditorio, sala multiuso, salón de profesores o patio techado con enchufe 220V. Autonomía técnica garantizada por la compañía.",
    pedagogicalGuide: "Pauta de diálogo y taller reflexivo para jornadas docentes, aniversarios institucionales y planificación escolar."
  },
  {
    id: "conectados-corazon",
    title: "Conectados con el Corazón",
    subtitle: "Educación Sexual Adolescente, afectividad y autocuidado",
    category: "Afectividad y Sexualidad",
    cycles: ["segundo-ciclo", "media"],
    cycleLabels: ["6º Básico hasta 4º Medio"],
    duration: "45 minutos + Foro guiado",
    image: "https://teatroeducativo.cl/wp-content/uploads/2026/07/Conectados-1024x576.png",
    catalogPdf: "assets/catalogos/catalogo-conectados-con-el-corazon.pdf",
    hasSpecificCatalog: true,
    catalogName: "Catálogo Oficial Conectados con el Corazón (PDF)",
    featured: true,
    tags: ["sexualidad", "afectividad", "consentimiento", "prevencion its", "embarazo adolescente", "amor", "preservativo"],
    synopsis: "Esta obra nos sumerge en el mundo de los adolescentes, abordando de manera lúdica y entretenida las complejidades y emociones que rodean las primeras experiencias sexuales. A través de una comedia teatral juvenil fundamentada en investigaciones y datos del Ministerio de Salud (MINSAL), combina diversión con una reflexión sincera sobre el respeto, el amor, el autocuidado y la importancia del uso de métodos de protección.",
    generalObjective: "Concientizar a jóvenes y comunidad educativa sobre el respeto, el amor, el autocuidado y la importancia del uso del preservativo en las relaciones afectivas.",
    specificObjectives: [
      "Generar en la comunidad educativa un espacio seguro de diálogo y reflexión respecto a la sexualidad adolescente.",
      "Informar a los jóvenes estudiantes sobre sexualidad responsable, consentimiento y prevención de ITS.",
      "Promover la participación colectiva de la comunidad educativa mediante una jornada teatral de alto impacto."
    ],
    artisticTeam: {
      direction: "Alberto Castillo Astudillo",
      dramaturgy: "Patricio Campos",
      cast: "Ambar Villalobos Baeza, Daniela Galleguillos Rosas, Felipe Rojas Faundez y Felipe Arce Silva",
      design: "Compañía de Teatro Educativo",
      graphicDesign: "Gonzalo Molina López",
      soundAndLighting: "Hans Grawe Poch"
    },
    oat: [
      "Entender la sexualidad humana como una dimensión integral de afecto, respeto y cuidado mutuo.",
      "Promover el consentimiento explícito y la libre determinación en las relaciones íntimas.",
      "Prevenir Infecciones de Transmisión Sexual (ITS) y embarazos no planificados en adolescentes.",
      "Derribar mitos y desinformaciones que circulan en internet respecto a la sexualidad."
    ],
    technicalNeeds: "Auditorio o gimnasio techado con punto eléctrico 220V. Equipamiento técnico integral propio.",
    pedagogicalGuide: "Pauta de diálogo para el Programa de Afectividad, Sexualidad y Género del establecimiento."
  },
  {
    id: "conejilove",
    title: "Conejilove: El Bosque del Respeto y del Amor",
    subtitle: "Inclusión, diversidad y valoración de la neurodiversidad",
    category: "Inclusión y Neurodiversidad",
    cycles: ["preescolar", "primer-ciclo"],
    cycleLabels: ["Educación Parvularia", "1º a 4º Básico"],
    duration: "45 minutos + Dinámica",
    image: "https://teatroeducativo.cl/wp-content/uploads/2026/06/Conejilove-1024x576.png",
    catalogPdf: "https://teatroeducativo.cl/wp-content/uploads/2026/07/Cartelera-Obras-Teatro-Educativo-2026.pdf",
    hasSpecificCatalog: false,
    catalogName: "Ficha Técnica y Cartelera 2026 (PDF)",
    featured: true,
    tags: ["inclusion", "neurodiversidad", "tea", "respeto", "primera infancia", "empatia", "buen trato"],
    synopsis: "Una tierna y colorida experiencia teatral especialmente creada para los más pequeños. A través de personajes encantadores, canciones pegajosas y dinámicas participativas, la obra invita a descubrir cómo las diferencias nos enriquecen. La llegada de Conejito Azul transforma el bosque, enseñando a la comunidad animal que cada ser percibe y siente el mundo a su manera. Ideal para promover la integración de estudiantes TEA y con necesidades educativas especiales desde la infancia.",
    oat: [
      "Comprender y valorar las diferencias individuales y la neurodiversidad.",
      "Fomentar conductas de ayuda mutua, afecto y respeto en la sala de clases.",
      "Aprender a expresar emociones de forma positiva y sin violencia.",
      "Promover la inclusión de compañeras y compañeros con distintas capacidades."
    ],
    technicalNeeds: "Espacio plano techado o sala multiuso. 220V. Montaje técnico 100% autónomo por parte de la compañía.",
    pedagogicalGuide: "Ficha didáctica ilustrada con preguntas de reflexión y dinámicas de dibujo para pre-kínder a 4º básico."
  },
  {
    id: "chaflan",
    title: "El Gran Circo del Mago Chaflán",
    subtitle: "El buen trato como magia, amistad y resolución pacífica",
    category: "Buen Trato y Emociones",
    cycles: ["preescolar", "primer-ciclo"],
    cycleLabels: ["Educación Parvularia", "1º a 4º Básico"],
    duration: "45 minutos + Interacción",
    image: "https://teatroeducativo.cl/wp-content/uploads/2026/06/Chaflan-1024x576.png",
    catalogPdf: "https://teatroeducativo.cl/wp-content/uploads/2026/07/Cartelera-Obras-Teatro-Educativo-2026.pdf",
    hasSpecificCatalog: false,
    catalogName: "Ficha Técnica y Cartelera 2026 (PDF)",
    featured: false,
    tags: ["buen trato", "magia", "convivencia", "frustracion", "perdon", "amistad", "circo"],
    synopsis: "Experiencia mágica y llena de humor que cautiva a niñas y niños desde el primer minuto. A través de trucos sorprendentes, canciones y risas, la historia sigue al carismático mago Chaflán, quien al perder la paciencia con sus amigos descubre que los mejores trucos no funcionan sin amabilidad y respeto. Un viaje lleno de ternura donde aprenderá a reconocer sus errores, pedir disculpas sinceras y cultivar la verdadera amistad.",
    oat: [
      "Reconocer el impacto de las palabras y acciones en los sentimientos de los demás.",
      "Desarrollar habilidades de autocontrol y tolerancia a la frustración.",
      "Valorar la disculpa y la reparación como herramientas de convivencia pacífica.",
      "Fortalecer el compañerismo y el trabajo colaborativo en el aula."
    ],
    technicalNeeds: "Patio techado, gimnasio o escenario. Conexión eléctrica estándar. Sonido y escenografía provistos por nosotros.",
    pedagogicalGuide: "Guía docente con rúbrica de actividades socioemocionales para el aula."
  },
  {
    id: "dame-tu-like",
    title: "Dame tu Like",
    subtitle: "Prevención del ciberbullying, fama digital y rol del testigo",
    category: "Convivencia y Redes Sociales",
    cycles: ["segundo-ciclo", "media"],
    cycleLabels: ["5º a 8º Básico", "1º a 4º Medio"],
    duration: "50 minutos + Conversatorio",
    image: "https://teatroeducativo.cl/wp-content/uploads/2026/07/Dame-tu-Like-1024x576.png",
    catalogPdf: "https://teatroeducativo.cl/wp-content/uploads/2026/07/Cartelera-Obras-Teatro-Educativo-2026.pdf",
    hasSpecificCatalog: false,
    catalogName: "Ficha Técnica y Cartelera 2026 (PDF)",
    featured: false,
    tags: ["ciberbullying", "redes sociales", "funas", "testigos", "solidaridad", "empatia", "musica"],
    synopsis: "Sofía es una talentosa estudiante de 16 años cuyo sueño es triunfar en la música. Sin embargo, un malentendido amplificado por comentarios malintencionados en redes sociales detona una feroz campaña de ciberbullying y funas en su contra. La obra visibiliza el inmenso dolor psicológico de la víctima, pero sobre todo interpela el papel de los 'espectadores pasivos', demostrando cómo la valentía de un testigo activo puede frenar el acoso y salvar una vida.",
    oat: [
      "Visibilizar las consecuencias emocionales y psicológicas del acoso digital.",
      "Activar la responsabilidad ética de los testigos para denunciar y apoyar a la víctima.",
      "Desnaturalizar la cultura de la agresión y la 'funa' como resolución de conflictos.",
      "Promover la solidaridad escolar y el cuidado mutuo en comunidades educativas."
    ],
    technicalNeeds: "Auditorio, gimnasio o patio techado. Conexión 220V. Compañía equipada con amplificación y microfonía.",
    pedagogicalGuide: "Guía de mediación escolar con casos de estudio prácticos para Consejo de Curso y Orientación."
  },
  {
    id: "tu-eres-otro-yo",
    title: "Tú eres otro Yo",
    subtitle: "Diversidad, derechos humanos y no discriminación (Ley Zamudio)",
    category: "Inclusión y Derechos Humanos",
    cycles: ["segundo-ciclo", "media"],
    cycleLabels: ["6º Básico a 4º Medio"],
    duration: "45 minutos + Foro",
    image: "https://teatroeducativo.cl/wp-content/uploads/2025/10/Tu-eres-otro-Yo-1024x576.jpg",
    catalogPdf: "https://teatroeducativo.cl/wp-content/uploads/2026/07/Cartelera-Obras-Teatro-Educativo-2026.pdf",
    hasSpecificCatalog: false,
    catalogName: "Ficha Técnica y Cartelera 2026 (PDF)",
    featured: true,
    tags: ["ley zamudio", "diversidad", "no discriminacion", "derechos humanos", "inclusion", "racismo", "genero"],
    synopsis: "Inspirada en el marco de la Ley Zamudio, esta potente obra teatral retrata escenas cotidianas y profundas sobre la discriminación: prejuicios raciales, rechazo a la diversidad sexual, exclusión de personas con capacidades diferentes y estereotipos sociales. Con una dramaturgia ágil, emotiva y directa, invita a los estudiantes a mirarse como iguales y a comprender que vulnerar la dignidad del prójimo es dañarnos a nosotros mismos.",
    oat: [
      "Promover el respeto irrestricto a los derechos humanos y la dignidad de cada persona.",
      "Prevenir actitudes homofóbicas, racistas, clasistas o discriminatorias en la comunidad.",
      "Comprender la Ley 20.609 (Ley Zamudio) y su relevancia en la convivencia democrática.",
      "Fomentar una cultura de empatía activa, diálogo y acogida de la pluralidad."
    ],
    technicalNeeds: "Espacio techado con toma de corriente. La compañía monta sistema de audio y ambientación completos.",
    pedagogicalGuide: "Dossier pedagógico de formación ciudadana y derechos humanos para docentes."
  },
  {
    id: "lenteja",
    title: "Lenteja, una Coneja Diferente",
    subtitle: "Aceptación de diferencias, perseverancia e inclusión motriz",
    category: "Inclusión y Diversidad",
    cycles: ["preescolar", "primer-ciclo"],
    cycleLabels: ["Educación Parvularia", "1º a 4º Básico"],
    duration: "45 minutos + Cierre lúdico",
    image: "https://teatroeducativo.cl/wp-content/uploads/2026/07/Lenteja-1024x576.png",
    catalogPdf: "https://teatroeducativo.cl/wp-content/uploads/2026/07/Cartelera-Obras-Teatro-Educativo-2026.pdf",
    hasSpecificCatalog: false,
    catalogName: "Ficha Técnica y Cartelera 2026 (PDF)",
    featured: false,
    tags: ["inclusion", "discapacidad", "perseverancia", "no a las burlas", "empatia", "superacion"],
    synopsis: "Lenteja es una conejita que nació con una patita más corta y un ritmo diferente al de los demás conejos. Cuando decide inscribirse en la carrera anual de 'Conejiburla', muchos se burlan y dudan de sus capacidades. Sin embargo, con paciencia, tenacidad, honestidad y el apoyo de verdaderos amigos, Lenteja demuestra que la verdadera meta no es ganar a toda costa, sino superar los propios miedos y respetar la diversidad de talentos y ritmos de cada uno.",
    oat: [
      "Fomentar la inclusión de estudiantes con discapacidad motriz o ritmos de aprendizaje diversos.",
      "Erradicar los apodos, la segregación y la burla hacia las características corporales.",
      "Inculcar valores de perseverancia, esfuerzo personal y juego limpio.",
      "Celebrar los logros colectivos y la ayuda recíproca entre compañeros."
    ],
    technicalNeeds: "Gimnasio o patio techado con electricidad 220V. Autonomía técnica garantizada.",
    pedagogicalGuide: "Ficha de actividades para Educación Física, Orientación y Artes Visuales."
  },
  {
    id: "no-mas-bullying",
    title: "No más Bullying",
    subtitle: "Obra psicosocial sobre relaciones entre pares, víctimas y victimarios",
    category: "Prevención de la Violencia",
    cycles: ["segundo-ciclo", "media"],
    cycleLabels: ["5º Básico a 4º Medio"],
    duration: "50 minutos + Foro-Debate",
    image: "https://teatroeducativo.cl/wp-content/uploads/2024/06/no-mas-bullying-2.webp",
    catalogPdf: "https://teatroeducativo.cl/wp-content/uploads/2026/07/Cartelera-Obras-Teatro-Educativo-2026.pdf",
    hasSpecificCatalog: false,
    catalogName: "Ficha Técnica y Cartelera 2026 (PDF)",
    featured: true,
    tags: ["bullying", "acoso escolar", "violencia", "familia", "salud mental", "convivencia", "comunicacion"],
    synopsis: "Montaje teatral psicosocial estructurado en cuadros dinámicos que desnudan la intimidad del mundo escolar adolescente. Aborda con crudeza y sensibilidad los roles de la víctima, el victimario y los observadores cómplices, así como la falta de contención afectiva, la presión por encajar y la relación entre padres e hijos. Una obra catártica que genera debates profundos en los colegios y moviliza a la acción comunitaria para frenar la violencia.",
    oat: [
      "Reconocer las distintas manifestaciones del bullying: físico, psicológico, verbal y social.",
      "Comprender las dinámicas de poder y los factores que motivan conductas agresivas.",
      "Estimular la comunicación asertiva entre estudiantes, docentes y familias.",
      "Implementar compromisos de no violencia y protocolos de sana convivencia escolar."
    ],
    technicalNeeds: "Auditorio, teatro escolar o gimnasio cerrado. Toma de corriente. Sonido profesional propio.",
    pedagogicalGuide: "Pauta de mediación escolar con preguntas gatilladoras para talleres post-obra."
  },
  {
    id: "reinos-opuestos",
    title: "Reinos Opuestos",
    subtitle: "Migración, convivencia intercultural y riqueza de la diversidad",
    category: "Interculturalidad y Convivencia",
    cycles: ["primer-ciclo", "segundo-ciclo"],
    cycleLabels: ["1º a 8º Básico"],
    duration: "45 minutos + Reflexión",
    image: "https://teatroeducativo.cl/wp-content/uploads/2026/07/Reinos-Opuestos-1024x576.png",
    catalogPdf: "https://teatroeducativo.cl/wp-content/uploads/2026/07/Cartelera-Obras-Teatro-Educativo-2026.pdf",
    hasSpecificCatalog: false,
    catalogName: "Ficha Técnica y Cartelera 2026 (PDF)",
    featured: false,
    tags: ["migracion", "interculturalidad", "discriminacion", "trabajo en equipo", "alegria", "colores"],
    synopsis: "En el reino de Abar todo es blanco y negro, rígido, silencioso y severo. Un día llegan los gardanos, un pueblo lleno de colores, ritmos, bailes y entusiasmo. Inicialmente rechazados por ser 'extraños y ruidosos', una amenaza común sobre el reino obligará a ambos pueblos a colaborar. Al descubrir el valor de sus respectivas culturas, construyen una comunidad más rica, solidaria e inclusiva donde nadie sobra.",
    oat: [
      "Apreciar la migración y la diversidad cultural como oportunidades de enriquecimiento mutuo.",
      "Prevenir conductas xenófobas y prejuicios hacia comunidades migrantes en la escuela.",
      "Fomentar la cooperación, la flexibilidad y el trabajo en equipo ante desafíos comunes.",
      "Construir espacios escolares inclusivos y abiertos a diversas expresiones culturales."
    ],
    technicalNeeds: "Patio techado o gimnasio con punto 220V. Equipamiento escénico y de audio provisto por la compañía.",
    pedagogicalGuide: "Guía pedagógica de Historia, Ciencias Sociales y Formación Ética."
  },
  {
    id: "tesoro-margarita",
    title: "El Tesoro de Margarita",
    subtitle: "Autocuidado del cuerpo, límites personales y prevención del abuso infantil",
    category: "Autocuidado y Protección",
    cycles: ["preescolar", "primer-ciclo"],
    cycleLabels: ["Educación Parvularia", "1º a 4º Básico"],
    duration: "45 minutos + Mediación",
    image: "https://teatroeducativo.cl/wp-content/uploads/2026/07/Margarita-1024x576.png",
    catalogPdf: "https://teatroeducativo.cl/wp-content/uploads/2026/07/Cartelera-Obras-Teatro-Educativo-2026.pdf",
    hasSpecificCatalog: false,
    catalogName: "Ficha Técnica y Cartelera 2026 (PDF)",
    featured: true,
    tags: ["autocuidado", "abuso infantil", "secretos buenos y malos", "cuerpo", "consentimiento", "derechos"],
    synopsis: "Margarita se adentra en un fascinante videojuego en busca de su mayor tesoro: su propio cuerpo. Acompañada por personajes que la orientan en cada nivel, desbloquea poderes esenciales: el Poder de la Alerta ante situaciones incómodas, el Poder de decir NO con firmeza, y el Conocimiento de los Derechos de las Niñas y Niños. Una obra delicada, pedagógica y esencial para educar en la prevención de vulneraciones de derechos sin infundir miedo.",
    oat: [
      "Reconocer las partes íntimas del cuerpo y el derecho fundamental a la privacidad.",
      "Diferenciar entre caricias de afecto seguro y toques inapropiados que generan incomodidad.",
      "Comprender la diferencia entre secretos sorpresa y secretos que duelen o atemorizan.",
      "Identificar la red de confianza de adultos protectores en el colegio y la familia."
    ],
    technicalNeeds: "Espacio techado con toma eléctrica. La compañía lleva todo el sonido, micrófonos y escenografía.",
    pedagogicalGuide: "Material psicoeducativo validado para equipos de Convivencia Escolar y Psicología."
  },
  {
    id: "el-amor-no-duele",
    title: "El Amor no Duele",
    subtitle: "Prevención de la violencia en el pololeo y relaciones afectivas sanas",
    category: "Afectividad y Género",
    cycles: ["segundo-ciclo", "media"],
    cycleLabels: ["7º Básico a 4º Medio"],
    duration: "50 minutos + Foro-Debate",
    image: "https://teatroeducativo.cl/wp-content/uploads/2026/07/Amor-no-Duele-1024x576.png",
    catalogPdf: "https://teatroeducativo.cl/wp-content/uploads/2026/07/Cartelera-Obras-Teatro-Educativo-2026.pdf",
    hasSpecificCatalog: false,
    catalogName: "Ficha Técnica y Cartelera 2026 (PDF)",
    featured: true,
    tags: ["violencia en el pololeo", "celos", "relaciones toxicas", "genero", "redes de apoyo", "respeto"],
    synopsis: "Daniela, una destacada estudiante de 16 años, inicia una relación sentimental con Franco. Al principio todo parece perfecto, pero sutilmente aparecen celos desmedidos, control sobre su ropa, revisión de su teléfono y aislamiento de sus amistades. La obra visibiliza el ciclo de la violencia de pareja en la adolescencia y entrega un mensaje contundente: el amor jamás debe implicar miedo, control o dolor, subrayando el valor de denunciar y pedir ayuda a tiempo.",
    oat: [
      "Identificar las señales tempranas de manipulación, celos obsesivos y control en el pololeo.",
      "Cuestionar los mitos del amor romántico que naturalizan la posesión y el sufrimiento.",
      "Promover relaciones de pareja basadas en la libertad, el respeto recíproco y la igualdad.",
      "Informar sobre la legislación chilena de protección frente a la violencia en parejas adolescentes."
    ],
    technicalNeeds: "Auditorio, salón o gimnasio techado con corriente 220V. Montaje técnico integral.",
    pedagogicalGuide: "Guía docente de afectividad y género para talleres de orientación y prevención de violencia."
  },
  {
    id: "lobo-corazon-verde",
    title: "Un Lobo de Corazón Verde",
    subtitle: "Educación ambiental, cuidado del bosque nativo y reciclaje",
    category: "Medio Ambiente y Ecología",
    cycles: ["preescolar", "primer-ciclo"],
    cycleLabels: ["Educación Parvularia", "1º a 4º Básico"],
    duration: "45 minutos + Dinámica",
    image: "https://teatroeducativo.cl/wp-content/uploads/2026/07/Lobo-Corazon-Verde-1024x576.png",
    catalogPdf: "https://teatroeducativo.cl/wp-content/uploads/2026/07/Cartelera-Obras-Teatro-Educativo-2026.pdf",
    hasSpecificCatalog: false,
    catalogName: "Ficha Técnica y Cartelera 2026 (PDF)",
    featured: false,
    tags: ["medio ambiente", "reciclaje", "bosque", "planeta", "tres chanchitos", "sustentabilidad"],
    synopsis: "Ingeniosa vuelta de tuerca a la tradicional fábula de 'Los Tres Chanchitos'. En esta versión ecológica, el Lobo es un incansable guardián de la naturaleza con un gran corazón verde, mientras que los tres chanchitos representan el descuido, la contaminación y el consumismo desmedido en el bosque. A través del humor y la música, los chanchitos aprenderán la importancia de reducir, reutilizar y reciclar para sanar el planeta.",
    oat: [
      "Generar conciencia sobre el cuidado de los ecosistemas y los recursos naturales.",
      "Aprender la regla de las 3R (Reducir, Reutilizar y Reciclar) en el colegio y el hogar.",
      "Fomentar hábitos ecológicos cotidianos: ahorro de agua y energía, no botar basura.",
      "Promover la responsabilidad comunitaria frente al cambio climático y la deforestación."
    ],
    technicalNeeds: "Gimnasio o patio cubierto con enchufe 220V. Equipamiento técnico propio.",
    pedagogicalGuide: "Guía de Ciencias Naturales y Educación Tecnológica con proyectos de reciclaje escolar."
  },
  {
    id: "gatos-paris",
    title: "Gatos en París",
    subtitle: "Tenencia responsable de mascotas y respeto por todos los seres vivos",
    category: "Tenencia Responsable y Empatía",
    cycles: ["preescolar", "primer-ciclo"],
    cycleLabels: ["Educación Parvularia", "1º a 4º Básico"],
    duration: "45 minutos + Interacción",
    image: "https://teatroeducativo.cl/wp-content/uploads/2026/07/Gatos-Paris-1024x576.png",
    catalogPdf: "https://teatroeducativo.cl/wp-content/uploads/2026/07/Cartelera-Obras-Teatro-Educativo-2026.pdf",
    hasSpecificCatalog: false,
    catalogName: "Ficha Técnica y Cartelera 2026 (PDF)",
    featured: false,
    tags: ["tenencia responsable", "animales", "mascotas", "ley cholito", "respeto", "paris", "empatia"],
    synopsis: "Ambientada en los románticos tejados y callejuelas de París, esta tierna historia aborda la convivencia armónica entre humanos y animales. A través de divertidas situaciones y personajes felinos, la obra enseña que las mascotas son seres sintientes que merecen amor, alimentación adecuada, cuidados veterinarios y un hogar seguro, alineándose con los principios de la Ley de Tenencia Responsable en Chile.",
    oat: [
      "Comprender las obligaciones del cuidado, salud y protección de animales de compañía.",
      "Desarrollar la empatía y la compasión hacia animales abandonados o en situación de calle.",
      "Fomentar la higiene y la convivencia limpia en espacios públicos escolares y comunitarios.",
      "Reconocer a los animales como seres vivos con derechos y necesidades fundamentales."
    ],
    technicalNeeds: "Espacio techado con toma 220V. Sonido y escenografía a cargo de la compañía.",
    pedagogicalGuide: "Ficha didáctica de Ciencias y Formación Valórica para Educación Básica."
  },
  {
    id: "jaula-ninos",
    title: "La Jaula de los Niños",
    subtitle: "Prevención de drogas, alcohol y Ley de Responsabilidad Penal Adolescente",
    category: "Prevención de Sustancias y Legalidad",
    cycles: ["media"],
    cycleLabels: ["1º a 4º Medio"],
    duration: "50 minutos + Debate guiado",
    image: "https://teatroeducativo.cl/wp-content/uploads/2024/06/17912185051777324.webp",
    catalogPdf: "https://teatroeducativo.cl/wp-content/uploads/2026/07/Cartelera-Obras-Teatro-Educativo-2026.pdf",
    hasSpecificCatalog: false,
    catalogName: "Ficha Técnica y Cartelera 2026 (PDF)",
    featured: true,
    tags: ["drogas", "alcohol", "ley penal adolescente", "cimarra", "consecuencias", "decisiones", "juventud"],
    synopsis: "Nicolás y un grupo de compañeros hacen 'la cimarra' para celebrar el cumpleaños de una amiga. Lo que comienza como una fiesta descontrolada termina en una tragedia provocada por el abuso de alcohol y estupefacientes, llevando a los jóvenes a enfrentar un tribunal bajo la Ley 20.084 de Responsabilidad Penal Adolescente. Un montaje impactante, realista y sin filtros que remece conciencias y abre debates urgentes sobre las consecuencias de las decisiones impulsivas.",
    oat: [
      "Analizar los efectos devastadores del consumo abusivo de drogas y alcohol en la salud y la vida.",
      "Conocer las responsabilidades legales y penales que rigen a los jóvenes mayores de 14 años.",
      "Desarrollar habilidades de autocuidado, resistencia a la presión de grupo y toma de decisiones éticas.",
      "Crear factores protectores en la comunidad escolar frente a situaciones de riesgo."
    ],
    technicalNeeds: "Auditorio o teatro cerrado con capacidad eléctrica. Sistema de audio profesional propio.",
    pedagogicalGuide: "Dossier preventivo SENDA para docentes de Enseñanza Media y equipos de orientación."
  },
  {
    id: "hansel-gretel",
    title: "Hansel y Gretel en la Aventura de la Comida",
    subtitle: "Alimentación saludable, vida activa y prevención de la comida chatarra",
    category: "Vida Saludable y Nutrición",
    cycles: ["preescolar", "primer-ciclo"],
    cycleLabels: ["Educación Parvularia", "1º a 4º Básico"],
    duration: "45 minutos + Dinámica",
    image: "https://teatroeducativo.cl/wp-content/uploads/2026/07/Hansel-Gretel-1024x576.png",
    catalogPdf: "https://teatroeducativo.cl/wp-content/uploads/2026/07/Cartelera-Obras-Teatro-Educativo-2026.pdf",
    hasSpecificCatalog: false,
    catalogName: "Ficha Técnica y Cartelera 2026 (PDF)",
    featured: false,
    tags: ["alimentacion sana", "nutricion", "comida chatarra", "vida activa", "salud infantil", "habitos"],
    synopsis: "Cansados de los consejos saludables de sus padres, Hansel y Gretel escapan en busca del paraíso de la comida chatarra y las golosinas. En su travesía conocen a una bruja que fue expulsada de su gremio por ser buena persona. Al notar los malos hábitos alimenticios de los niños y su falta de energía, la bruja decide ayudarlos a descubrir lo divertido y sabroso que es comer frutas, verduras y llevar una vida llena de movimiento.",
    oat: [
      "Distinguir alimentos nutritivos de aquellos ultraprocesados dañinos para el crecimiento.",
      "Promover la actividad física regular y la hidratación saludable con agua.",
      "Fomentar colaciones escolares saludables en el establecimiento educacional.",
      "Prevenir la obesidad infantil y enfermedades asociadas desde temprana edad."
    ],
    technicalNeeds: "Patio techado o gimnasio con punto 220V. Equipamiento técnico propio.",
    pedagogicalGuide: "Guía de autocuidado y vida sana para programas de salud escolar (Junaeb / Mineduc)."
  },
  {
    id: "super-mapadres",
    title: "Super Mapadres",
    subtitle: "Escuela para padres: crianza positiva, límites y alianza familia-escuela",
    category: "Comunidad y Familias",
    cycles: ["comunidad"],
    cycleLabels: ["Padres, Madres y Apoderados"],
    duration: "55 minutos + Taller reflexivo",
    image: "https://teatroeducativo.cl/wp-content/uploads/2026/07/MaPadres-1024x576.png",
    catalogPdf: "https://teatroeducativo.cl/wp-content/uploads/2026/07/Cartelera-Obras-Teatro-Educativo-2026.pdf",
    hasSpecificCatalog: false,
    catalogName: "Ficha Técnica y Cartelera 2026 (PDF)",
    featured: true,
    tags: ["apoderados", "crianza", "comunicacion", "familia", "limites", "escuela para padres", "afecto"],
    synopsis: "Divertida y emotiva obra orientada a centros de padres y asambleas de apoderados. Mediante escenas teatrales cotidianas y reconocibles, retrata los desafíos que viven los progenitores al enfrentar las distintas etapas de desarrollo de sus hijos: pataletas, tecnología desmedida, rebeldía adolescente y falta de tiempo. Fortalece la corresponsabilidad parental y entrega herramientas de escucha activa y límites respetuosos para trabajar unidos con el colegio.",
    oat: [
      "Fortalecer la alianza estratégica y el diálogo colaborativo entre la familia y la escuela.",
      "Entregar pautas de crianza positiva sin recurrir a la violencia ni al castigo físico.",
      "Manejar acuerdos claros respecto a pantallas, normas familiares y responsabilidades.",
      "Acompañar los cambios emocionales y psicosociales de niños y jóvenes con empatía y paciencia."
    ],
    technicalNeeds: "Gimnasio o auditorio con punto eléctrico. La compañía provee iluminación, microfonía y sonido.",
    pedagogicalGuide: "Cartilla para reuniones de apoderados y talleres de formación parental."
  },
  {
    id: "regalo-navidad",
    title: "Un Regalo de Navidad",
    subtitle: "Generosidad, empatía y trabajo cooperativo en la fiesta escolar",
    category: "Valores y Celebraciones",
    cycles: ["preescolar", "primer-ciclo"],
    cycleLabels: ["Educación Parvularia", "1º a 4º Básico"],
    duration: "45 minutos + Cierre festivo",
    image: "https://teatroeducativo.cl/wp-content/uploads/2026/07/Navidad-768x432.png",
    catalogPdf: "https://teatroeducativo.cl/wp-content/uploads/2026/07/Cartelera-Obras-Teatro-Educativo-2026.pdf",
    hasSpecificCatalog: false,
    catalogName: "Ficha Técnica y Cartelera 2026 (PDF)",
    featured: false,
    tags: ["navidad", "generosidad", "trabajo en equipo", "celebracion", "infancia", "valores"],
    synopsis: "Cautivadora obra navideña que transporta al mágico universo del taller del Viejito Pascuero. Un sorpresivo contratiempo amenaza con dejar a los niños sin regalos: los paquetes han desaparecido misteriosamente. Con la ayuda de duendes traviesos y la participación activa del público infantil, descubrirán que el mejor regalo de todos no cabe en una caja de zapatos, sino en el corazón: compartir, ser solidarios y trabajar unidos.",
    oat: [
      "Fomentar el valor de la generosidad y el desapego material en épocas festivas.",
      "Reconocer la importancia de la colaboración y el trabajo en equipo ante dificultades.",
      "Vivir las celebraciones escolares desde el afecto, la inclusión y la alegría colectiva.",
      "Promover la gratitud hacia la familia, compañeros y educadores al cierre del año escolar."
    ],
    technicalNeeds: "Patio techado o gimnasio con punto 220V. Montaje técnico completo.",
    pedagogicalGuide: "Ficha lúdica de cierre de año para actividades de reflexión y expresión artística."
  }
];

// Exportación para navegador
if (typeof window !== "undefined") {
  window.PLAYS_DATA = PLAYS_DATA;
}
