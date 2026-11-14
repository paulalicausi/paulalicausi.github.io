import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import contactStyles from './Contact.module.css';
import { translations } from '../../content/translations.js';

const Contact = ({ language = 'en' }) => {
    const copy = translations[language].contact;

    return(
    <section className={`page container ${contactStyles.contact}`}>
        <h2>└── {copy.title}</h2>
        <div className="col-12 col-lg-9">
            <div className="row">
                <div className="col-12 col-xl-8 order-xl-2">
                    <p>{copy.intro} <a href="mailto:paulicausi@gmail.com">paulicausi@gmail.com</a>.</p>
                            <div className="mt-3">
                                <a href="https://www.linkedin.com/in/paula-licausi-57b5a2167/" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href="https://github.com/paulalicausi " target="_blank" rel="noreferrer">
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