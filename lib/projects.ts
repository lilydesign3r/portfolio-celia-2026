export type UserPersona = {
  name: string
  age: number
  role: string
  location: string
  quote: string
  background: string
  goals: string[]
  behaviors: string[]
  image?: string
}

export type StatCard = { value: string; label: string; sub?: string }

export type ProjectContent = {
  context: string
  objective: string
  surveyStats?: StatCard[]
  researchImages?: string[]
  researchCaptions?: string[]
  benchmarkImages?: string[]
  process: { label: string; text: string; text2?: string; image?: string; image2?: string; image3?: string; imageCaption?: string }[]
  personas?: UserPersona[]
  appScreens?: string[]
  mazeFlow?: string
  mazeStats?: StatCard[]
  mazeComments?: string[]
  result?: string
  tools?: string
  duration?: string
  deliverables?: string[]
  aiNote?: string
}

export type Project = {
  id: string
  slug: string
  color: string
  accent: string
  textColor: string
  colorDark?: string
  textColorDark?: string
  characterIndex: number
  es: {
    title: string
    role: string
    type: string
    description: string
    tags: string[]
    content?: ProjectContent
  }
  en: {
    title: string
    role: string
    type: string
    description: string
    tags: string[]
    content?: ProjectContent
  }
  prototypeUrl?: string
  presentationUrl?: string
  liveUrl?: string
  liveLabel?: string
  videoUrl?: string
  videoPoster?: string
}

export const projects: Project[] = [
  {
    id: 'try',
    slug: 'try',
    color: '#e8d9b0',
    accent: '#c4a970',
    textColor: '#1a1a1a',
    characterIndex: 6,
    es: {
      title: 'TRY*',
      role: 'UX/UI Designer',
      type: 'Mobile App',
      description: 'App que conecta a jóvenes con profesionales verificados para resolver dudas reales sobre estudios y trabajos, mediante mentorías 1:1 y experiencias prácticas.',
      tags: ['Design Thinking', 'Atomic Design', 'Branding', 'Prototype', 'Maze'],
      content: {
        context: 'A los 17–18 años te piden decidir "qué vas a ser" como si fuera una elección obvia. En la práctica, muchos jóvenes lo viven con ansiedad: comparaciones, presión familiar y miedo a equivocarse. La información existe, pero es fría (grados, salidas, rankings) y rara vez responde a lo importante: ¿cómo es de verdad ese trabajo? ¿encajo yo ahí? TRY* nace para convertir la orientación en algo humano: conversaciones reales con profesionales y experiencias prácticas, sin juicios.',
        objective: 'Diseñar una experiencia móvil que ayude a pasar de la incertidumbre a la claridad mediante tres acciones simples: explorar, preguntar y probar. Definí flujos y pantallas que permiten descubrir perfiles verificados, iniciar mentorías 1:1 y acceder a "Días conmigo", cuidando especialmente el tono visual (calma + seguridad) y la consistencia del sistema UI. Validé el prototipo con Maze e iteré el onboarding para mejorar comprensión y acceso rápido al contenido.',
        surveyStats: [
          { value: '54', label: 'Encuestados', sub: 'dic 2025' },
          { value: '87%', label: 'Entre 15–30 años', sub: 'público objetivo' },
          { value: '57%', label: 'Mujeres', sub: '41% hombres' },
          { value: '48%', label: 'Estudiando carrera', sub: '30% trabajando' },
        ],
        researchImages: [
          '/projects/try/netnografia-1.png',
          '/projects/try/netnografia-2.png',
          '/projects/try/netnografia-3.png',
          '/projects/try/netnografia-4.png',
          '/projects/try/netnografia-5.png',
        ],
        benchmarkImages: [
          '/projects/try/moodboard.png',
        ],
        appScreens: [
          '/projects/try/screen-onboarding.png',
          '/projects/try/screen-home.png',
          '/projects/try/screen-chats.png',
          '/projects/try/screen-perfil.png',
        ],
        mazeFlow: '/projects/try/maze-flow.png',
        mazeStats: [
          { value: '76%', label: 'Comprensión del onboarding', sub: 'sin explicación previa' },
          { value: '71%', label: 'Facilidad de uso 5/5', sub: 'puntuación máxima' },
          { value: '0', label: 'Errores críticos', sub: 'detectados en el test' },
        ],
        process: [
          {
            label: 'Research',
            text: 'Métodos: desk research, netnografía, **benchmarking**, DAFO, encuesta + entrevistas.\n\nConclusión: muchos jóvenes toman decisiones académicas con poca claridad y parte acaban arrepintiéndose porque la orientación llega tarde, es superficial y no permite "probar" profesiones antes de comprometerse. El bloqueo se explica menos por falta de interés y más por **ansiedad, miedo a equivocarse, comparación social y falta de referentes reales**. En el mercado existen plataformas educativas y profesionales, pero ninguna combina lo que los jóvenes dicen necesitar: **orientación humana + experiencias reales + acompañamiento seguro**.',
            image: '/projects/try/research-tiktok-1.png',
          },
          {
            label: 'Site map & Wireframes',
            text: 'Site map completo de la app con todos los flujos: onboarding, exploración de perfiles, solicitud de mentoría 1:1 y acceso a "Días conmigo". Wireframes de baja fidelidad para validar la estructura antes de pasar a alta fidelidad.',
            image: '/projects/try/sitemap.png',
            image2: '/projects/try/wireframes.png',
          },
          {
            label: 'UI Kit & Alta fidelidad',
            text: 'Sistema de diseño con **Atomic Design**: tokens de color, tipografía y espaciado. Componentes reutilizables para mantener consistencia en todas las pantallas. Tono visual elegido: **calma + seguridad**, sin presión.',
            image: '/projects/try/uikit-1.png',
            image2: '/projects/try/uikit-2.png',
            image3: '/projects/try/uikit-3.png',
          },
          {
            label: 'Test con Maze',
            text: 'Objetivo: comprobar si los usuarios entendían qué es TRY* y podían completar los primeros pasos sin fricción.\n\nResultados: 76% comprensión del onboarding · 71% valoró la facilidad de uso con 5/5. La propuesta se percibe como fácil de usar con curva de entrada amable, sin errores críticos.\n\nMejoras identificadas: reforzar el mensaje inicial del onboarding · ofrecer accesos más directos al contenido · ajustar la transición al Home al pulsar el asterisco para que la exploración sea más evidente.',
          },
        ],
        personas: [
          {
            name: 'Tomás Rey',
            age: 47,
            role: 'Ingeniero industrial',
            location: 'Madrid',
            quote: '"Ojalá alguien me hubiera explicado todo esto cuando tenía 18 años."',
            background: 'Ingeniero industrial senior y responsable técnico. Siente responsabilidad por orientar a jóvenes porque ve que tienen muchas opciones y poca guía.',
            goals: ['Compartir experiencia laboral y dejar impacto positivo', 'Ofrecer mini-experiencias prácticas donde su tiempo aporte valor real'],
            behaviors: ['Paciente, metódico, calmado, pragmático', 'Selectivo con apps nuevas — usa tecnología solo por trabajo', 'A veces se siente "quedándose atrás" con herramientas nuevas'],
            image: '/projects/try/persona-tomas.png',
          },
          {
            name: 'Lina Choi',
            age: 20,
            role: 'Estudiante que dejó la carrera',
            location: 'Barcelona',
            quote: '"Sé lo que NO quiero… pero no sé lo que SÍ quiero."',
            background: 'Abandonó una carrera y trabaja en empleos temporales. Busca probar profesiones reales sin volver a comprometerse a 4 años de carrera.',
            goals: ['Descubrir su vocación probando profesiones reales', 'Comparar áreas (arte, marketing, tech, moda) sintiéndose acompañada sin juicios'],
            behaviors: ['Creativa, sensible, observadora, indecisa', 'Nativa digital — busca respuestas en TikTok, usa el móvil para todo', 'Le da vergüenza pedir ayuda; no confía en tests vocacionales genéricos'],
            image: '/projects/try/persona-lina.png',
          },
        ],
        result: 'Producto end-to-end en 3 semanas: research · user personas · site map · wireframes · UI Kit · prototipo de alta fidelidad · test de usabilidad Maze.',
        tools: 'Figma · Maze',
        duration: '3 semanas',
        deliverables: ['User Research', 'Competitor Analysis', 'User Personas', 'User Flow', 'Wireframes', 'UI Kit', 'Prototipo interactivo', 'Test de usabilidad (Maze)'],
      },
    },
    en: {
      title: 'TRY*',
      role: 'UX/UI Designer',
      type: 'Mobile App',
      description: 'App connecting young people with verified professionals to answer real questions about studies and work, through 1:1 mentorships and hands-on experiences.',
      tags: ['Design Thinking', 'Atomic Design', 'Branding', 'Prototype', 'Maze'],
      content: {
        context: 'At 17–18, you\'re asked to decide "what you\'ll be" as if it were obvious. Many young people experience this with anxiety: comparisons, family pressure and fear of getting it wrong. The information exists but it\'s cold (degrees, job prospects, rankings) and rarely answers what really matters: what is that job actually like? Does it suit me? TRY* was born to make guidance human: real conversations with professionals and hands-on experiences, without judgement.',
        objective: 'Design a mobile experience that helps move from uncertainty to clarity through three simple actions: explore, ask and try. I defined flows and screens to discover verified profiles, start 1:1 mentorships and access "A Day With Me" experiences, focusing on the visual tone (calm + safety) and UI system consistency. I validated the prototype with Maze and iterated on the onboarding.',
        surveyStats: [
          { value: '54', label: 'Survey responses', sub: 'Dec 2025' },
          { value: '87%', label: 'Aged 15–30', sub: 'target audience' },
          { value: '57%', label: 'Women', sub: '41% men' },
          { value: '48%', label: 'Currently studying', sub: '30% working' },
        ],
        researchImages: [
          '/projects/try/netnografia-1.png',
          '/projects/try/netnografia-2.png',
          '/projects/try/netnografia-3.png',
          '/projects/try/netnografia-4.png',
          '/projects/try/netnografia-5.png',
        ],
        researchCaptions: [
          "I'm 20 and I don't know what to do with my life.",
          "This happens a lot at our age — sometimes we see others achieving what the world says is right, but... are they actually happy with all that?",
          "Guys, help — I'm in my second semester of architecture and I feel like I made the wrong choice. I don't know what to do. I feel bad, empty and lost, because I don't know what to follow if I leave this degree.",
          "This year I turn 21 and I feel like I'm late to everything, like everything is happening and I'm not part of it.",
          '',
        ],
        benchmarkImages: [
          '/projects/try/moodboard.png',
        ],
        appScreens: [
          '/projects/try/screen-onboarding.png',
          '/projects/try/screen-home.png',
          '/projects/try/screen-chats.png',
          '/projects/try/screen-perfil.png',
        ],
        mazeFlow: '/projects/try/maze-flow.png',
        mazeStats: [
          { value: '76%', label: 'Onboarding comprehension', sub: 'without prior explanation' },
          { value: '71%', label: 'Rated usability 5/5', sub: 'maximum score' },
          { value: '0', label: 'Critical errors', sub: 'detected in testing' },
        ],
        process: [
          {
            label: 'Research',
            text: 'Methods: desk research, netnography, **benchmarking**, SWOT, survey + interviews.\n\nFinding: many young people make decisions with little clarity and end up regretting them because guidance comes too late and doesn\'t let them "try" professions before committing. The block comes from **anxiety, fear of mistakes, social comparison and lack of real role models**. No platform combines what young people say they need: **human guidance + real experiences + safe support**.',
            image: '/projects/try/research-tiktok-1.png',
            imageCaption: "I need help. I feel like I chose the wrong degree. I feel useless in most of my classes — I've only been here two weeks but I don't have the courage to leave because I'm afraid people will judge me. I've always wanted to study something in healthcare, and now I feel like I'm in a totally different field :(",
          },
          {
            label: 'Site map & Wireframes',
            text: 'Full app site map with all main flows: onboarding, profile exploration, 1:1 mentorship requests and access to "A Day With Me". Low-fidelity wireframes to validate structure before moving to high fidelity.',
            image: '/projects/try/sitemap.png',
            image2: '/projects/try/wireframes.png',
          },
          {
            label: 'UI Kit & High Fidelity',
            text: 'Design system with **Atomic Design**: color, typography and spacing tokens. Reusable components for consistency across all screens. Chosen visual tone: **calm + safety**, no pressure.',
            image: '/projects/try/uikit-1.png',
            image2: '/projects/try/uikit-2.png',
            image3: '/projects/try/uikit-3.png',
          },
          {
            label: 'Maze Test',
            text: 'Goal: check if users understood what TRY* is and could complete the first steps without friction.\n\nResults: 76% onboarding comprehension · 71% rated usability 5/5. The product feels easy to use with a gentle learning curve, no critical errors.\n\nImprovements identified: strengthen the initial onboarding message · offer more direct access to content · adjust the Home transition when tapping the asterisk.',
          },
        ],
        personas: [
          {
            name: 'Tomás Rey',
            age: 47,
            role: 'Industrial engineer',
            location: 'Madrid',
            quote: '"I wish someone had explained all this to me when I was 18."',
            background: 'Senior industrial engineer and technical lead. Feels responsible for guiding young people because he sees they have many options but little guidance.',
            goals: ['Share work experience and leave a positive impact', 'Offer hands-on mini-experiences where his time adds real value'],
            behaviors: ['Patient, methodical, calm, pragmatic', 'Selective with new apps — uses technology only for work', 'Sometimes feels "left behind" with new tools'],
            image: '/projects/try/persona-tomas.png',
          },
          {
            name: 'Lina Choi',
            age: 20,
            role: 'Student who dropped out',
            location: 'Barcelona',
            quote: '"I know what I DON\'T want… but not what I DO want."',
            background: 'Dropped out of university and works temp jobs. Wants to try real professions without committing to another 4-year degree.',
            goals: ['Discover her vocation by trying real professions', 'Compare areas (art, marketing, tech, fashion) with support and no judgement'],
            behaviors: ['Creative, sensitive, observant, indecisive', 'Digital native — finds answers on TikTok, uses phone for everything', 'Embarrassed to ask for help; doesn\'t trust generic aptitude tests'],
            image: '/projects/try/persona-lina.png',
          },
        ],
        result: 'End-to-end product in 3 weeks: research · user personas · site map · wireframes · UI Kit · high-fidelity prototype · Maze usability test.',
        tools: 'Figma · Maze',
        duration: '3 weeks',
        deliverables: ['User Research', 'Competitor Analysis', 'User Personas', 'User Flow', 'Wireframes', 'UI Kit', 'Interactive Prototype', 'Usability Test (Maze)'],
      },
    },
    prototypeUrl: 'https://www.figma.com/proto/RswytnVWUudseLW1YYXHie/PROYECTO-FINAL-ENTREGABLE?page-id=1%3A3048&node-id=161-1602&p=f&viewport=498%2C31%2C0.08&t=F18dyf9TWpjiws25-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=161%3A1602&show-proto-sidebar=1',
    presentationUrl: 'https://www.figma.com/deck/Odm0r0PRIAUOUhm38otL4I',
  },
  {
    id: 'omniloy',
    slug: 'omniloy',
    color: '#0d1b3e',
    accent: '#2152cc',
    textColor: '#ffffff',
    characterIndex: 0,
    es: {
      title: 'Medical SaaS Redesign',
      role: 'Product Designer',
      type: 'Landing Page',
      description: 'Rediseño de la landing page de Omniloy, plataforma médica SaaS. Estrategia de copy basada en Value Equation + animaciones con Figma Make.',
      tags: ['Concept Creation', 'UX Writing', 'Prototype', 'Figma Make'],
      content: {
        context: 'Omniloy es una plataforma SaaS para el sector médico. Su landing page no comunicaba bien la propuesta de valor ni competía visualmente con referencias del sector como Sully.ai. El reto: rediseñar la web cuidando tanto la UI como el copy, y añadir animaciones de microinteracción estilo SaaS.',
        objective: 'Crear una landing page que convenza desde el primer scroll, combinando un diseño visual sólido con una estrategia de copy basada en la psicología del valor percibido.',
        process: [
          {
            label: 'Moodboard & Competencia',
            text: 'Análisis de los principales competidores del sector médico SaaS (Sully.ai y otros). Construcción de moodboard con referencias visuales para definir el tono: profesional, limpio y moderno.',
            image: '/projects/omniloy/moodboard.png',
          },
          {
            label: 'Wireframe',
            text: 'Wireframe de baja fidelidad de la landing completa para definir la estructura y el flujo narrativo antes de pasar al diseño visual.',
            image: '/projects/omniloy/wireframe.png',
          },
          {
            label: 'Foundations & UI Kit',
            text: 'Establecimiento de colores y tipografía del sistema. Todo el contenido atomizado al milímetro: cada botón, card y elemento gráfico tiene su lugar en el UI Kit.',
            image: '/projects/omniloy/foundations.png',
            image2: '/projects/omniloy/uikit.png',
          },
          {
            label: 'Estrategia de copy',
            text: 'Basada en "Ofertas Irresistibles" de Alex Hormozi:\n\n**Valor percibido** = (**resultado soñado** × probabilidad de conseguirlo) / (tiempo + esfuerzo)\n\n→ **Resultado soñado**: métricas impactantes al inicio de la página\n→ **Probabilidad**: testimonios de médicos que ya usan el servicio\n→ **Tiempo y esfuerzo**: timeline de implementación claro y sencillo',
          },
          {
            label: 'Animaciones con Figma Make',
            text: 'Frame completo exportado a Figma Make. Usando **Claude Code**, expliqué qué tipo de microinteracciones necesitaba (estilo SaaS moderno) y tras pequeñas correcciones obtuve el resultado final animado. **Primer proyecto donde integré IA directamente en el flujo de producción**.',
          },
        ],
        appScreens: [
          '/projects/omniloy/screen-hero.png',
          '/projects/omniloy/screen-hospital.png',
          '/projects/omniloy/screen-testimonials.png',
        ],
        result: 'Landing page con copy estratégico, UI Kit completo y microinteracciones animadas. Primer proyecto donde usé IA (Claude Code) como parte activa del proceso de diseño.',
        tools: 'Figma · Figma Make · Claude Code',
        deliverables: ['Moodboard', 'Wireframe', 'UI Kit', 'Prototipo animado', 'Copy estratégico'],
        aiNote: 'IA integrada en el proceso: usé Claude Code para animar la landing en Figma Make, describiendo las microinteracciones que necesitaba y ajustando el resultado.',
      },
    },
    en: {
      title: 'Medical SaaS Redesign',
      role: 'Product Designer',
      type: 'Landing Page',
      description: 'Redesign of Omniloy\'s landing page, a medical SaaS platform. Copy strategy based on Value Equation + animations with Figma Make.',
      tags: ['Concept Creation', 'UX Writing', 'Prototype', 'Figma Make'],
      content: {
        context: 'Omniloy is a SaaS platform for the medical sector. Their landing page wasn\'t communicating the value proposition clearly or competing visually with sector references like Sully.ai. The challenge: redesign the website focusing on both UI and copy, and add SaaS-style micro-interaction animations.',
        objective: 'Create a landing page that convinces from the first scroll, combining solid visual design with a copy strategy based on the psychology of perceived value.',
        process: [
          {
            label: 'Moodboard & Competitors',
            text: 'Analysis of main medical SaaS competitors (Sully.ai and others). Moodboard built with visual references to define the tone: professional, clean and modern.',
            image: '/projects/omniloy/moodboard.png',
          },
          {
            label: 'Wireframe',
            text: 'Low-fidelity wireframe of the full landing to define structure and narrative flow before moving to visual design.',
            image: '/projects/omniloy/wireframe.png',
          },
          {
            label: 'Foundations & UI Kit',
            text: 'Color and typography setup. All content atomized: every button, card and graphic element has its place in the UI Kit.',
            image: '/projects/omniloy/foundations.png',
            image2: '/projects/omniloy/uikit.png',
          },
          {
            label: 'Copy Strategy',
            text: 'Based on Alex Hormozi\'s "Irresistible Offers":\n\n**Perceived value** = (**dream outcome** × probability) / (time + effort)\n\n→ **Dream outcome**: impactful metrics at the top of the page\n→ **Probability**: testimonials from doctors already using the service\n→ **Time and effort**: clear, simple implementation timeline',
          },
          {
            label: 'Animations with Figma Make',
            text: 'Full frame exported to Figma Make. Using **Claude Code**, I described the micro-interactions I needed (modern SaaS style) and after small adjustments got the final animated result. **First project where I integrated AI directly into the production workflow**.',
          },
        ],
        appScreens: [
          '/projects/omniloy/screen-hero.png',
          '/projects/omniloy/screen-hospital.png',
          '/projects/omniloy/screen-testimonials.png',
        ],
        result: 'Landing page with strategic copy, complete UI Kit and animated micro-interactions. First project where I used AI (Claude Code) as an active part of the design process.',
        tools: 'Figma · Figma Make · Claude Code',
        deliverables: ['Moodboard', 'Wireframe', 'UI Kit', 'Animated prototype', 'Strategic copy'],
        aiNote: 'AI integrated in the process: used Claude Code to animate the landing in Figma Make, describing the micro-interactions needed and adjusting the result.',
      },
    },
    liveUrl: 'https://www.figma.com/make/VmLAYQ37oeyrC0f83LkXyW/Landing-Omniloy-V3?fullscreen=1&t=07MiKBjDO2e4VWtt-1',
  },
  {
    id: 'malaje',
    slug: 'malaje',
    color: '#111111',
    accent: '#c9a84c',
    textColor: '#ffffff',
    colorDark: '#f0ebe2',
    textColorDark: '#111111',
    characterIndex: 3,
    videoUrl: '/projects/malaje/proceso.mp4',
    videoPoster: '/projects/malaje/screen-home.png',
    liveUrl: 'https://www.instagram.com/reel/DW6qW0yjVh5/?igsh=dzd6Y3VvZnZyMGY0',
    liveLabel: 'Ver en Instagram',
    prototypeUrl: 'https://www.figma.com/proto/ynW3fhYtqiX1GEz48b5xeW/Malaje?node-id=8-148&p=f&viewport=207%2C86%2C0.12&t=kqEjzfX3skeQaXoO-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=8%3A148&page-id=8%3A147',
    es: {
      title: 'Malaje',
      role: 'UI Designer',
      type: 'eCommerce',
      description: 'Sistema de diseño completo para una marca de joyería española: identidad visual, UI Kit, cuatro categorías de producto y flujo de compra con animaciones.',
      tags: ['Atomic Design', 'Design System', 'AI-assisted', 'Prototype', 'eCommerce'],
      content: {
        context: 'Quería diseñar una marca de joyería con actitud pero sin complicarse. Cuatro líneas de producto: pulseras, pendientes, anillos y collares. Tenía claro que la identidad tenía que hablar antes de que el usuario leyera ni una palabra.',
        objective: 'Construir el sistema de diseño completo desde cero: identidad, foundations, UI Kit y un prototipo navegable con el flujo de compra funcionando.',
        process: [
          {
            label: 'Contexto y referencia visual',
            text: 'Lo primero fue definir qué tipo de marca quería que fuera Malaje. No una joyería de lujo inaccesible, ni algo de fast fashion. Algo en el medio: piezas con carácter, para llevar de día a noche, sin darle demasiadas vueltas.',
            image: '/projects/malaje/moodboard.png',
            text2: 'El moodboard fue clave para aterrizarlo. Quería fondos blancos, fotografía directa, tipografía que no compitiera con la joya. De ahí saqué la paleta — azul marino y beige — dos colores que se apoyan sin pelearse.',
          },
          {
            label: 'Foundations',
            text: 'Antes de tocar ningún componente, documenté todo el sistema base. Elegí la paleta con intención: el azul para dar solidez y confianza, el beige para suavizar y aportar calidez. Y Cormorant como tipografía, elegante sin ser rígida.',
            image: '/projects/malaje/foundations.png',
          },
          {
            label: 'Componentes',
            text: 'El primer componente que diseñé fue la tarjeta de producto. Le di dos estados: la joya sobre fondo blanco, limpia y sin distracciones, y la joya puesta en un modelo, para que quien la vea pueda imaginársela en sí mismo. A partir de ahí construí el resto.',
            image: '/projects/malaje/uikit-overview.png',
          },
          {
            label: 'Páginas de producto',
            text: 'Con el sistema listo, monté cuatro páginas de categoría: pulseras, pendientes, anillos y collares. Misma estructura en todas, distinto contenido. El hover lo tenía claro desde el principio: al pasar el ratón, la imagen cambia del producto aislado a la persona llevándolo puesto.',
            image: '/projects/malaje/screens-overview.png',
            text2: 'Para móvil mantuve la misma lógica: menú hamburguesa, grid de dos columnas y acceso directo a cada categoría desde el hero.',
            image2: '/projects/malaje/screen-categories.png',
          },
        ],
        appScreens: [
          '/projects/malaje/screen-home.png',
          '/projects/malaje/screen-bracelets.png',
          '/projects/malaje/screen-earrings.png',
          '/projects/malaje/screen-mobile.png',
        ],
        result: 'Sistema de diseño completo y prototipo navegable: identidad, UI Kit, cuatro categorías de producto con hover contextual y flujo de compra.',
        tools: 'Figma · Photoshop · Claude Code',
        duration: '5 días',
        deliverables: ['Branding', 'UI Kit', 'Design System', 'Prototipo navegable', 'Flujo de compra'],
        aiNote: 'Reto de diseño público documentado en redes. Conecté **Claude Code** a Figma vía MCP para las partes más mecánicas: renombrar capas, organizar el UI Kit, estructurar secciones. Eso me liberó tiempo para lo que importa.',
      },
    },
    en: {
      title: 'Malaje',
      role: 'UI Designer',
      type: 'eCommerce',
      description: 'Complete design system for a Spanish jewelry brand: visual identity, UI Kit, four product categories and shopping flow with animations.',
      tags: ['Atomic Design', 'Design System', 'AI-assisted', 'Prototype', 'eCommerce'],
      content: {
        context: 'I wanted to design a jewelry brand with attitude but without overcomplicating it. Four product lines: bracelets, earrings, rings and necklaces. The identity had to speak before the user read a single word.',
        objective: 'Build the complete design system from scratch: brand identity, foundations, UI Kit and a navigable prototype with a working shopping flow.',
        process: [
          {
            label: 'Context and visual references',
            text: 'The first thing I did was figure out what kind of brand Malaje should be. Not an inaccessible luxury jeweler, not fast fashion. Something in between: pieces with character, to wear day to night, without overthinking it.',
            image: '/projects/malaje/moodboard.png',
            text2: 'The moodboard was key to pin it down. I wanted white backgrounds, direct photography, typography that doesn\'t compete with the jewelry. That\'s where the palette came from — navy and beige — two colors that hold each other up without fighting.',
          },
          {
            label: 'Foundations',
            text: 'Before touching any component, I documented the whole base system. I chose the palette with intention: blue for solidity and confidence, beige to soften and add warmth. And Cormorant as the typeface — elegant without being stiff.',
            image: '/projects/malaje/foundations.png',
          },
          {
            label: 'Components',
            text: 'The first component I designed was the product card. Two states: the jewelry on a white background, clean and distraction-free, and the jewelry on a model, so whoever sees it can imagine wearing it. I built everything else from that one piece.',
            image: '/projects/malaje/uikit-overview.png',
          },
          {
            label: 'Product pages',
            text: 'With the system ready, I built four category pages: bracelets, earrings, rings and necklaces. Same structure across all of them, different content. The hover was clear from the start: mouse over a product and the image switches from the isolated piece to a person wearing it.',
            image: '/projects/malaje/screens-overview.png',
            text2: 'For mobile I kept the same logic: hamburger menu, two-column grid and direct access to each category from the hero.',
            image2: '/projects/malaje/screen-categories.png',
          },
        ],
        appScreens: [
          '/projects/malaje/screen-home.png',
          '/projects/malaje/screen-bracelets.png',
          '/projects/malaje/screen-earrings.png',
          '/projects/malaje/screen-mobile.png',
        ],
        result: 'Complete design system and navigable prototype: brand identity, UI Kit, four product categories with contextual hover and shopping flow.',
        tools: 'Figma · Photoshop · Claude Code',
        duration: '5 days',
        deliverables: ['Branding', 'UI Kit', 'Design System', 'Navigable prototype', 'Shopping flow'],
        aiNote: 'Public design challenge documented on social media. I connected **Claude Code** to Figma via MCP for the mechanical parts: renaming layers, organising the UI Kit, structuring sections. That freed up time for what actually matters.',
      },
    },
  },
  {
    id: 'metro',
    slug: 'metro',
    color: '#c2d3f5',
    accent: '#1a4fd6',
    textColor: '#0d1b3e',
    characterIndex: 7,
    es: {
      title: 'Metro Madrid',
      role: 'UX/UI Designer',
      type: 'Web',
      description: 'Auditoría heurística (Nielsen) de la web de Metro de Madrid con propuesta de rediseño centrada en claridad de navegación, lenguaje del usuario y control.',
      tags: ['Evaluación Heurística', 'Rediseño Web', 'UX Research'],
      content: {
        context: 'En una web de transporte, la gente no navega "por placer": entra con prisa y necesita respuestas claras. En la web de Metro de Madrid detectamos puntos recurrentes de confusión (menú, etiquetas, interacción mapa/texto), exceso de ruido visual y microcopy poco orientativo, lo que genera frustración y pérdida de control.',
        objective: 'Identificar fricciones mediante evaluación heurística (10 principios de Nielsen), priorizarlas por severidad y convertirlas en decisiones de rediseño concretas: simplificar navegación, mejorar consistencia y UX writing, y ajustar interacciones para que el usuario mantenga el control en todo momento.',
        process: [
          {
            label: 'Evaluación Heurística',
            text: 'Análisis de la home y elementos clave de la web detectando problemas, asociando cada uno a un principio heurístico de Nielsen, asignando nivel de severidad (1–4) y proponiendo recomendación de mejora.',
          },
          {
            label: 'Hallazgos principales',
            text: '→ **Consistencia y estándares**: elementos que parecen una cosa (cards/slider) pero se comportan como enlaces externos, rompiendo expectativas.\n→ **Control y libertad**: un slider que al transicionar devuelve al usuario arriba, haciendo perder el punto de lectura (frustración alta).\n→ **Estética y minimalismo**: exceso de texto y ruido/redundancias; la interfaz no ayuda a identificar "qué falla" con claridad.\n→ **Lenguaje del usuario**: etiquetas de menú poco intuitivas (ej. "Locos por el metro y transparencia") y UX writing general poco orientativo.\n→ **Claridad de tareas**: "Origen/Destino" se perciben como barras de búsqueda sin indicación suficiente; confunde el modelo mental.\n→ **Affordance en interacción**: el mapa no se abre al clicar el propio mapa, sino el texto; comportamiento contrario a lo esperado.',
          },
          {
            label: 'Rediseño — Top menú',
            text: 'En el antes se aprecia una **carga visual excesiva** que compite con las tareas principales. La navegación tiene **baja prominencia** (cuesta localizar el menú) y la **jerarquía visual** no guía la atención.',
            image: '/projects/metro/menu-antes.png',
            text2: 'En el después lo resolvemos con un **menú persistente en la parte superior**, una jerarquía más clara y una pantalla más limpia, reduciendo ruido y mejorando la orientación durante la navegación.\n\nHeurísticas: Estética y diseño minimalista · Consistencia y estándares · Visibilidad del estado del sistema.',
            image2: '/projects/metro/menu-despues.png',
          },
          {
            label: 'Rediseño — Buscador',
            text: 'En el antes se percibe una **carga visual alta** y un bloque de planificación **poco autoexplicativo**: "Origen" y "Destino" resultan **ambiguos** (parecen barras de búsqueda sin señalización clara) y el texto no guía bien la acción, lo que aumenta la fricción al iniciar la tarea.',
            image: '/projects/metro/search-antes-clean.png',
            text2: 'En el después lo resolvemos **clarificando la jerarquía del formulario** (labels y campos más reconocibles), reduciendo ruido y apoyándonos en un microcopy más orientado a tarea, para que el usuario entienda rápidamente **qué introducir** y **qué ocurre a continuación**.\n\nHeurísticas: Estética y diseño minimalista · Concordancia con el mundo real (lenguaje del usuario) · Consistencia y estándares.',
            image2: '/projects/metro/search-despues-clean.png',
          },
          {
            label: 'Rediseño — Sección Información',
            text: 'En el antes las tarjetas se perciben como un carrusel de contenido, pero **no se comportan como tal**: al hacer clic, muchas llevan a **enlaces externos**, lo que rompe las expectativas del usuario.',
            image: '/projects/metro/info-antes.png',
            text2: 'En el después lo resolvemos con un bloque de **Acceso Rápido** con categorías orientadas a tarea, sin saltos inesperados.\n\nHeurísticas: Consistencia y estándares · Control y libertad del usuario · Estética y diseño minimalista.',
            image2: '/projects/metro/info-despues.png',
          },
        ],
        appScreens: [
          '/projects/metro/menu-despues.png',
          '/projects/metro/search-despues-clean.png',
          '/projects/metro/info-despues.png',
        ],
        result: 'De 6 hallazgos heurísticos a 3 secciones completamente rediseñadas. Cada decisión de diseño está anclada a un principio de Nielsen: nada es arbitrario, todo tiene argumento.',
        tools: 'Figma',
        deliverables: ['Auditoría heurística', 'Análisis de severidad', 'Recomendaciones', 'Prototipo de rediseño'],
      },
    },
    en: {
      title: 'Metro Madrid',
      role: 'UX/UI Designer',
      type: 'Web',
      description: 'Heuristic audit (Nielsen) of the Madrid Metro website with a redesign proposal focused on navigation clarity, user language and control.',
      tags: ['Heuristic Evaluation', 'Web Redesign', 'UX Research'],
      content: {
        context: 'On a transport website, people don\'t browse "for pleasure": they\'re in a hurry and need clear answers. On the Madrid Metro website, we identified recurring points of confusion (menu, labels, map/text interaction), excessive visual noise and unhelpful microcopy, leading to frustration and loss of control.',
        objective: 'Identify friction through heuristic evaluation (Nielsen\'s 10 principles), prioritize by severity and turn findings into concrete redesign decisions: simplify navigation, improve consistency and UX writing, and adjust interactions so users stay in control.',
        process: [
          {
            label: 'Heuristic Evaluation',
            text: 'Analysis of the homepage and key web elements, identifying problems, linking each to a Nielsen heuristic, assigning severity level (1–4) and proposing improvement recommendations.',
          },
          {
            label: 'Key findings',
            text: '→ **Consistency and standards**: elements that look like one thing (cards/slider) but behave as external links, breaking expectations.\n→ **Control and freedom**: a slider that on transition scrolls the user back to the top, losing their reading position (high frustration).\n→ **Aesthetics and minimalism**: excess text and noise/redundancies; the interface doesn\'t help identify "what\'s wrong" clearly.\n→ **User language**: unintuitive menu labels (e.g. "Locos por el metro y transparencia") and generally unhelpful UX writing.\n→ **Task clarity**: "Origin/Destination" look like search bars without sufficient indication; confuses the mental model.\n→ **Affordance**: the map doesn\'t open when clicking the map itself, but adjacent text — the opposite of expected behaviour.',
          },
          {
            label: 'Redesign — Top menu',
            text: 'In the before state, there is **excessive visual load** competing with the main tasks. Navigation has **low prominence** (the menu is hard to find) and the **visual hierarchy** doesn\'t guide attention.',
            image: '/projects/metro/menu-antes.png',
            text2: 'In the after state, we solve this with a **persistent top menu**, clearer hierarchy and a cleaner screen, reducing noise and improving orientation during navigation.\n\nHeuristics: Aesthetic minimalism · Consistency and standards · System status visibility.',
            image2: '/projects/metro/menu-despues.png',
          },
          {
            label: 'Redesign — Search',
            text: 'In the before state, there is **high visual load** and a planning block that is **not self-explanatory**: "Origin" and "Destination" are **ambiguous** (they look like search bars without clear signposting) and the text doesn\'t guide the action well, increasing friction when starting the task.',
            image: '/projects/metro/search-antes-clean.png',
            text2: 'In the after state, we solve this by **clarifying the form hierarchy** (more recognizable labels and fields), reducing noise and using task-oriented microcopy, so the user quickly understands **what to enter** and **what happens next**.\n\nHeuristics: Aesthetic minimalism · Real-world match (user language) · Consistency and standards.',
            image2: '/projects/metro/search-despues-clean.png',
          },
          {
            label: 'Redesign — Information',
            text: 'In the before state, cards look like a content carousel but **don\'t behave as one**: clicking many of them leads to **external links**, breaking user expectations.',
            image: '/projects/metro/info-antes.png',
            text2: 'In the after state, we solve this with a **Quick Access** block using task-oriented categories, with no unexpected jumps.\n\nHeuristics: Consistency and standards · User control and freedom · Aesthetic minimalism.',
            image2: '/projects/metro/info-despues.png',
          },
        ],
        appScreens: [
          '/projects/metro/menu-despues.png',
          '/projects/metro/search-despues-clean.png',
          '/projects/metro/info-despues.png',
        ],
        result: 'From 6 heuristic findings to 3 fully redesigned sections. Every design decision is anchored to a Nielsen principle: nothing is arbitrary, everything has a reason.',
        tools: 'Figma',
        deliverables: ['Heuristic audit', 'Severity analysis', 'Recommendations', 'Redesign prototype'],
      },
    },
    liveUrl: 'https://www.figma.com/proto/QJzUkKVsReoopj4EFu7UV9/Metro-Madrid',
  },
  {
    id: 'ricla',
    slug: 'ricla',
    color: '#1e3d2a',
    accent: '#c9856a',
    textColor: '#ffffff',
    characterIndex: 4,
    liveUrl: 'https://www.instagram.com/reel/DW6qW0yjVh5/',
    liveLabel: 'Ver en Instagram',
    videoUrl: '/projects/ricla/proceso.mp4',
    videoPoster: '/projects/ricla/overview.png',
    es: {
      title: 'Ricla',
      role: 'UI Designer',
      type: 'Design System',
      description: 'UI Kit para Bodegas Ricla (Madrid, 1867). Sistema de diseño con 57 variables, 14 text styles, 21 componentes, menú digital móvil y pantalla web 1440px.',
      tags: ['Atomic Design', 'Design System', 'Foundations', 'AI-assisted'],
      content: {
        context: 'Bodegas Ricla lleva desde 1867 sirviendo callos, vermut y conservas en la calle Cuchilleros. Sin presencia digital, lo único que encontrabas en Google era una reseña de TripAdvisor con dos estrellas. El problema no era el local, era que no había manera de reservar ni de saber dónde estaba antes de llegar.',
        objective: 'Diseñar el sistema digital que le faltaba: UI Kit, web responsive y móvil con flujo de reservas. Todo construido desde la identidad del sitio, no desde una plantilla.',
        process: [
          {
            label: 'Contexto y referencia visual',
            text: 'La reseña lo dejaba claro: "Taberna a la cual nos encantaba ir, pero desde hace años es imposible conseguir mesa..." El problema era real y concreto. El siguiente paso fue buscar referencias visuales que encajaran con lo que es el sitio: una taberna de 1867 en el centro de Madrid, no un brunch bar.',
            image: '/projects/ricla/proposito.png',
            text2: 'El moodboard recogió referencias de otras tabernas centenarias madrileñas: servilletas de papel impreso, tipografía embossed, ilustraciones de fachadas. De ahí salieron el **verde botella** y el **salmón** — colores que ya estaban en la cerámica y el toldo del local.',
            image2: '/projects/ricla/moodboard.png',
          },
          {
            label: 'Foundations',
            text: '**57 variables** de diseño: paleta (Verde #2E6644, Salmón #C9856A, Negro), **DT Morelish** como display font y **Gambarino** para los títulos de carta. Espaciado en grid de 4pt y breakpoints Mobile 390px / Desktop 1440px.',
            image: '/projects/ricla/foundations-colors.png',
            image2: '/projects/ricla/foundations-typography.png',
          },
          {
            label: 'Componentes',
            text: '**21 componentes** con variantes e interacciones — el botón tiene **8 variantes** (primario, secundario, ghost, disabled…). Estructura **Atomic Design**: átomos → moléculas → organismos, dividida en 6 secciones: Fundamentos, Iconos, Componentes, Referencia visual, Contenido y Fotografía.',
            image: '/projects/ricla/components.png',
            image2: '/projects/ricla/uikit-overview.png',
          },
          {
            label: 'Pantalla móvil',
            text: '**Mobile-first** de principio a fin. Hero con foto de la fachada, carta con precios (tapas, guisos, bebidas), reseñas de clientes y galería de platos. El flujo de reserva está integrado en la misma página.',
            image: '/projects/ricla/mobile-hero.png',
            image2: '/projects/ricla/mobile-reviews.png',
          },
          {
            label: 'Pantalla web',
            text: 'La web a **1440px** tiene la misma estructura que el móvil, reorganizada para pantalla grande: hero con navegación, carta en columnas, testimonios, galería y footer con horario.',
            image: '/projects/ricla/web-hero.png',
            image2: '/projects/ricla/web-footer.png',
          },
        ],
        appScreens: [
          '/projects/ricla/mobile-hero.png',
          '/projects/ricla/mobile-menu.png',
          '/projects/ricla/web-hero.png',
          '/projects/ricla/web-footer.png',
        ],
        result: '**57 variables**, **14 text styles**, **21 componentes**. Pantallas mobile-first y web 1440px listas para implementar. Reto de diseño documentado públicamente, con IA integrada en el flujo desde el principio.',
        tools: 'Figma',
        deliverables: ['UI Kit', 'Design System', 'Pantalla móvil', 'Pantalla web 1440px'],
        aiNote: 'Reto de diseño público documentado en redes. **Claude Code** se integró en el flujo para las tareas más tediosas: organizar el UI Kit, nombrar capas y estructurar el sistema de diseño.',
      },
    },
    en: {
      title: 'Ricla',
      role: 'UI Designer',
      type: 'Design System',
      description: 'UI Kit for Bodegas Ricla (Madrid, 1867). Design system with 57 variables, 14 text styles, 21 components, mobile digital menu and 1440px web screen.',
      tags: ['Atomic Design', 'Design System', 'Foundations', 'AI-assisted'],
      content: {
        context: 'Bodegas Ricla has been serving callos, vermouth and conservas on Calle Cuchilleros since 1867. With no digital presence, the only thing you\'d find on Google was a two-star TripAdvisor review. The problem wasn\'t the place — there was just no way to book a table or find it before showing up.',
        objective: 'Build the digital system it was missing: UI Kit, responsive web and mobile with a reservation flow. All built from the venue\'s own identity, not a template.',
        process: [
          {
            label: 'Context and visual references',
            text: 'The review said it all: "A tavern we used to love going to, but for years it\'s been impossible to get a table..." The problem was real and specific. Next step: find visual references that matched what the place actually is — a 1867 taverna in central Madrid, not a brunch bar.',
            image: '/projects/ricla/proposito.png',
            text2: 'The moodboard pulled references from other century-old Madrid tavernas: printed paper napkins, embossed typography, facade illustrations. From there came the **bottle green** and **salmon** — colours already in the venue\'s ceramics and awning.',
            image2: '/projects/ricla/moodboard.png',
          },
          {
            label: 'Foundations',
            text: '**57 design variables**: palette (Verde #2E6644, Salmón #C9856A, Negro), **DT Morelish** as display font and **Gambarino** for menu headings. 4pt spacing grid and breakpoints Mobile 390px / Desktop 1440px.',
            image: '/projects/ricla/foundations-colors.png',
            image2: '/projects/ricla/foundations-typography.png',
          },
          {
            label: 'Components',
            text: '**21 components** with variants and interactions — the button alone has **8 variants** (primary, secondary, ghost, disabled…). **Atomic Design** structure: atoms → molecules → organisms, split into 6 sections: Foundations, Icons, Components, Visual references, Content and Photography.',
            image: '/projects/ricla/components.png',
            image2: '/projects/ricla/uikit-overview.png',
          },
          {
            label: 'Mobile screen',
            text: '**Mobile-first** all the way through. Hero with the facade photo, priced menu (tapas, stews, drinks), client reviews and a dish gallery. The reservation flow is built directly into the page.',
            image: '/projects/ricla/mobile-hero.png',
            image2: '/projects/ricla/mobile-reviews.png',
          },
          {
            label: 'Web screen',
            text: 'The **1440px** web has the same structure as the mobile, reorganised for a bigger screen: hero with navigation, multi-column menu, testimonials, gallery and footer with opening hours.',
            image: '/projects/ricla/web-hero.png',
            image2: '/projects/ricla/web-footer.png',
          },
        ],
        appScreens: [
          '/projects/ricla/mobile-hero.png',
          '/projects/ricla/mobile-menu.png',
          '/projects/ricla/web-hero.png',
          '/projects/ricla/web-footer.png',
        ],
        result: '**57 variables**, **14 text styles**, **21 components**. Mobile-first and 1440px web screens ready to implement. Publicly documented design challenge, with AI integrated in the workflow from day one.',
        tools: 'Figma',
        deliverables: ['UI Kit', 'Design System', 'Mobile screen', 'Web screen 1440px'],
        aiNote: 'Public design challenge documented on social media. **Claude Code** was integrated into the workflow for the tedious parts: organising the UI Kit, naming layers and structuring the design system.',
      },
    },
  },
]
