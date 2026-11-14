import nebulasImg from './../assets/img/projects/nebulas.jpg';
import taoismImg from './../assets/img/projects/monografia.png';
import yogaImg from './../assets/img/projects/yoga.png';
import caosImg from './../assets/img/projects/caos.jpg';
import abyssImg from './../assets/img/projects/abyss.png';
import hrImg from './../assets/img/projects/hr.png';
import uniImg from './../assets/img/projects/dn.png';


const projects = [
    {
      name: "Nebulas Cafe: sci-fi & futures website",
      es: {
        name: "Café Nebulas: sitio de ciencia ficción y futuros",
        description: "Este es mi proyecto personal, donde escribo y publico relatos originales de ciencia ficción con reflexiones filosóficas sobre el futuro de la humanidad, la conciencia y el cosmos. Diseñé, desarrollé y creé todo el contenido: la idea, el diseño, la experiencia de usuario y el desarrollo web.",
        time: "2023 - Actualidad",
        keywords: "ciencia ficción, escritura creativa, futuros especulativos, WordPress, UI/UX, creación de contenido, filosofía, pensamiento de futuros",
      },
      img: nebulasImg,
      url: "https://www.nebulascafe.com/",
      description: "This is my personal project where I write and publish original science fiction stories about philosophical reflections on the future of humanity, consciousness, and the cosmos. I designed, developed and created all content.",
      time: "2023 - Present",
      keywords: "science fiction, creative writing, speculative futures, WordPress, UI/UX, content creation, philosophy, futures thinking",
      category: ["narrative", "technology"]
    }, 
    {
      name: "Taoism and enviroment",
      es: {
        name: "Taoísmo y ambiente",
        description: "Proyecto que explora cómo la filosofía taoísta puede ofrecer un marco alternativo para repensar la relación entre las personas y la naturaleza e inspirar formas de vida más sostenibles.",
        keywords: "filosofía, filosofía oriental, taoísmo, ecología, ética ambiental, pensamiento sistémico",
      },
      url: "https://rid.ugr.edu.ar/handle/20.500.14125/2010",
      img: taoismImg,
      description: "Project that explores how taoist philosophy can offer an alternative framework to rethink the human–nature relationship and inspire more sustainable ways of living.",
      time: "2025",
      keywords: "philosophy, eastern philosophy, taoism, ecology, environmental ethics, systems thinking",
      category: ["philosophy"]
    },
    {
      name: "El Renacer del Caos: speculative fiction story",
      es: {
        name: "El Renacer del Caos: relato de ficción especulativa",
        description: "Relato escrito como parte del curso de posgrado Estudios de Futuros: ciencia, filosofía y ficción. Explora la entropía, la inteligencia artificial y las implicancias filosóficas del colapso y la regeneración tecnológicos.",
        keywords: "ficción especulativa, ciencia ficción, escritura creativa, filosofía de la tecnología, IA, entropía",
      },
      url: "https://tecnofuturos.substack.com/p/el-renacer-del-caos",
      img: caosImg,
      description: "A short story developed as part of a Futures Studies postgraduate course. It explores topics such as entropy, artificial intelligence and the philosophical implications of technological collapse and regeneration.",
      time: "2024",
      keywords: "speculative fiction, science fiction, creative writing, philosophy of technology, IA, entropy",
      category: ["narrative", "philosophy"]
    }, 
    {
      name: "Yoga and Holistic Health Blog",
      es: {
        name: "Blog de Yoga y Salud Integral",
        description: "Desarrollé el nuevo blog de la Licenciatura en Yoga y Salud Integral de la Universidad del Gran Rosario. Participé en la creación de contenidos, la escritura y el desarrollo del sitio web.",
        keywords: "filosofía, filosofía oriental, yoga, salud integral, creación de contenidos, escritura",
      },
      url: "https://yogaugr.wordpress.com/",
      img: yogaImg,
      description: "Developed the new blog for the Yoga and Holistic Health Degree from Universidad del Gran Rosario. I participed in content creation, writing and website development.",
      time: "2025",
      keywords: "philosophy, eastern philosophy, yoga, holistic health, content creation, writing",
      category: ["technology"]
    }, 
    {
      name: "The Abyss: a contemplative narrative experience",
      es: {
        name: "The Abyss: una experiencia narrativa contemplativa",
        description: "Experiencia digital y contemplativa de ciencia ficción creada para mi newsletter. Es una aplicación minimalista en ReactJS que invita a reflexionar sobre el espacio interior y exterior.",
        keywords: "ciencia ficción, atención plena, UI/UX, narrativa digital, escritura creativa, ReactJS",
      },
      url: "https://paulalicausi.github.io/the_abyss?lang=en",
      img: abyssImg,
      description: "A digital, contemplative sci-fi experience developed for my newsletter, designed as a minimalist ReactJS app that invites the reader to reflect on inner and outer space.",
      time: "2025",
      keywords: "science fiction, mindfulness, UI/UX, digital storytelling, creative writing, ReactJS",
      category: ["narrative", "technology"]
    }, 
    {
      name: "3D Hertzsprung-Russell Diagram",
      es: {
        name: "Diagrama de Hertzsprung-Russell en 3D",
        description: "Script de Python que genera un diagrama de Hertzsprung-Russell en 3D a partir de datos estelares —temperatura, magnitud y radio— para visualizar las clasificaciones espectrales.",
        keywords: "Python, análisis de datos, astronomía, visualización científica",
      },
      url: "https://github.com/paulalicausi/3d-hr-diagram",
      img: hrImg,
      description: "Python script that generates a 3D Hertzsprung–Russell diagram using stellar data (temperature, magnitude, radius) to visualize spectral classifications.",
      time: "2025",
      keywords: "Phyton, data analysis, astronomy, scientific visualization",
      category: ["technology"]
    },
    {
      name: "Digital nomads: identity & technology in the information age",
      es: {
        name: "Nómadas digitales: identidad y tecnología en la era de la información",
        description: "Mi tesina de grado: un estudio cualitativo sobre cómo las personas nómadas digitales construyen su identidad y estilo de vida en el contexto del trabajo remoto y la conectividad global. Se basa en entrevistas en profundidad y en un marco teórico sobre capitalismo y comunicación.",
        keywords: "tecnología, nomadismo digital, identidad, capitalismo informacional, filosofía de la tecnología, estudios de comunicación",
      },
      url: "http://hdl.handle.net/2133/26218",
      img: uniImg,
      description: "My final university thesis: a qualitative study on how digital nomads construct identity and lifestyle in the context of remote work and global connectivity. Based on in depth interviews and a theoretical framework on capitalism and communication.",
      time: "2023",
      keywords: "technology, digital nomads, identity, informational capitalism, philosophy of technology, communication studies",
      category: ["philosophy"]
    }, 
];

export default projects;
