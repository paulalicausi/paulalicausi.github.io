import nebulasImg from './../assets/img/projects/nebulas.jpg';
import nebulasCoffeeImg from './../assets/img/projects/nebulascoffee.jpg';
import taoismImg from './../assets/img/projects/monografia.png';
import yogaImg from './../assets/img/projects/yoga.png';
import caosImg from './../assets/img/projects/caos.jpg';
import abyssImg from './../assets/img/projects/abyss.png';
import hrImg from './../assets/img/projects/hr.png';
import uniImg from './../assets/img/projects/dn.png';


const projects = [
    {
      name: "Nebulas Cafe: sci-fi & futures website",
      img: nebulasImg,
      url: "https://www.nebulascafe.com/",
      description: "This is my personal project where I write and publish original science fiction stories about philosophical reflections on the future of humanity, consciousness, and the cosmos. I designed, developed and created all content (idea, design, UI/UX, and full-stack development using custom WordPress theme, HTML/CSS, PHP, JavaScript, and Git).",
      time: "2023 - Present",
      keywords: "science fiction, creative writing, speculative futures, WordPress, UI/UX, content creation, philosophy, futures thinking",
      category: ["narrative", "technology"]
    }, 
    {
      name: "Nebulas & Coffee: Substack blog",
      img: nebulasCoffeeImg,
      url: "https://nebulasandcoffee.substack.com/",
      description: "Nebulas Cafe's little sister. Essays, thoughts, reviews and short reflections about the world, nature, technology, and the future.",
      time: "2023 - Present",
      keywords: "technology, reviews, content creation, creative writing, philosophy, systems thinking",
      category: ["narrative", "philosophy"]
    }, 
    {
      name: "Taoism and enviroment",
      url: "https://rid.ugr.edu.ar/handle/20.500.14125/2010",
      img: taoismImg,
      description: "Project that explores how taoist philosophy can offer an alternative framework to rethink the human–nature relationship and inspire more sustainable ways of living.",
      time: "2025",
      keywords: "philosophy, eastern philosophy, taoism, ecology, environmental ethics, systems thinking",
      category: ["philosophy"]
    }, 
    {
      name: "Yoga and Holistic Health Blog",
      url: "https://yogaugr.wordpress.com/",
      img: yogaImg,
      description: "Developed the new blog for the Yoga and Holistic Health Degree from Universidad del Gran Rosario. I participed in content creation, writing and website development.",
      time: "2025",
      keywords: "philosophy, eastern philosophy, yoga, holistic health, content creation, writing",
      category: ["technology"]
    }, 
    {
      name: "The Abyss: a contemplative narrative experience",
      url: "https://paulalicausi.github.io/the_abyss?lang=en",
      img: abyssImg,
      description: "A digital, contemplative sci-fi experience developed for my newsletter, designed as a minimalist ReactJS app that invites the reader to reflect on inner and outer space.",
      time: "2025",
      keywords: "science fiction, mindfulness, UI/UX, digital storytelling, creative writing, ReactJS",
      category: ["narrative", "technology"]
    }, 
    {
      name: "El Renacer del Caos: speculative fiction story",
      url: "https://tecnofuturos.substack.com/p/el-renacer-del-caos",
      img: caosImg,
      description: "A short story developed as part of a Futures Studies course. It explores topics such as entropy, artificial intelligence and the philosophical implications of technological collapse and regeneration.",
      time: "2024",
      keywords: "speculative fiction, science fiction, creative writing, philosophy of technology, IA, entropy",
      category: ["narrative", "philosophy"]
    }, 
    {
      name: "3D Hertzsprung-Russell Diagram",
      url: "https://github.com/paulalicausi/3d-hr-diagram",
      img: hrImg,
      description: "Python script that generates a 3D Hertzsprung–Russell diagram using stellar data (temperature, magnitude, radius) to visualize spectral classifications.",
      time: "2025",
      keywords: "Phyton, data analysis, astronomy, scientific visualization",
      category: ["technology"]
    },
    {
      name: "Digital nomads: identity & technology in the information age",
      url: "http://hdl.handle.net/2133/26218",
      img: uniImg,
      description: "My final university thesis: a qualitative study on how digital nomads construct identity and lifestyle in the context of remote work and global connectivity. Based on in depth interviews and a theoretical framework on capitalism and communication.",
      time: "2023",
      keywords: "technology, digital nomads, identity, informational capitalism, philosophy of technology, communication studies",
      category: ["philosophy"]
    }, 
];

export default projects;
