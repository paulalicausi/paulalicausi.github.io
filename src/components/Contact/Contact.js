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
                    <p>I help shape ideas with clarity, depth, and purpose. Here's how I can support your mission:</p>
                    <ul>
                        <li>Development of <span>custom websites</span> and digital experiences.</li>
                        <li>Workshops and <span>courses</span> on programming and <span>front-end development</span>.</li>
                        <li><span>Writing</span>, editing, and <span>content development</span> on technology, philosophy, science, and futures.</li>
                        <li><span>Speculative fiction</span>, <span>worldbuilding</span>, and narrative to support creative projects, publications or strategic communication. </li>
                    </ul>     
                    <p>If you resonate with my work, have questions or simply want to say hello, I'd love to hear from you. I'm always open to connect, collaborate, and explore. Contact me at <a href="mailto:paulicausi@gmail.com">paulicausi@gmail.com</a>.</p>
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
    </section>
    );
}

export default Contact;