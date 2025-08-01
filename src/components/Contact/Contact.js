import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import contactStyles from './Contact.module.css';
import image from '../../assets/img/me.png';

const Contact = () => {

    return(
    <section className={`page container ${contactStyles.contact}`}>
        <h2>└── /Mission: Work together! /</h2>
        <div className="col-12 col-lg-9">
            <div className="row">
                <div className="col-12 col-xl-8 order-xl-2">
                    <p>Through narrative, philosophy, and code, I help shape ideas with clarity, depth, and purpose. Here's how I can support your mission:</p>
                    <ul>
                        <li>Custom <span>website development</span> and maintenance.</li>
                        <li>Workshops and <span>courses</span> on <span>front-end development</span>, storytelling with code, and creative digital experiences.</li>
                        <li>Speculative <span>fiction</span> and <span>worldbuilding</span> for narrative and digital projects.</li>
                        <li><span>Creative</span> and <span>content writing</span> on science, technology, and philosophy.</li>
                        <li>Narrative and futures exploration to support <span>strategic storytelling</span>.</li>
                        <li>Content development and consulting focused on <span>Eastern philosophy</span>, holistic health, and <span>environmental awareness</span>.</li>
                        <li>Sessions or workshops on yoga philosophy, mindfulness, and <span>contemplative practices</span> to support creative and reflective work in personal or collaborative works.</li>
                    </ul>                
                </div>
                <div className="col-12 col-xl-4 order-xl-1">
                    <div className={`row ${contactStyles.getInTouch}`}>
                        <div className="col-!2 col-sm-6 col-xl-12">
                            <img src={image} alt="Pixel art image of a woman using a computer with cosmic background" />
                        </div>
                        <div className="col-12 col-sm-6 col-xl-12">
                            <p>If you resonate with my work, have questions or simply want to say hello, I'd love to hear from you. I'm always open to connect, collaborate, and explore new ideas. Contact me at <a href="mailto:paulicausi@gmail.com">paulicausi@gmail.com</a>.</p>
                            <div className="mt-3">
                                <a href="https://www.linkedin.com/in/paula-licausi-57b5a2167/" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href="https://github.com/paulalicausi " target="_blank">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </section>
    );
}

export default Contact;