import experience from '../../content/experience.js';
import education from '../../content/education.js';
import Accordion from 'react-bootstrap/Accordion';
import { translations } from '../../content/translations.js';

const Experience = ({ language = 'en' }) => {
    const copy = translations[language].experience;
    const localize = (item) => language === 'es' ? { ...item, ...item.es } : item;

    return(
    <section className="experience page container">
        <div className="col-12 col-lg-9">
            <h2>└── {copy.title}</h2>
            <p className='py-3'>{copy.intro}</p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{copy.professional}</Accordion.Header>
                    <Accordion.Body>
                        <div className="row mission-list">
                            {experience.it.map((exp, index) => {
                                const localizedExp = localize(exp);
                                return (
                                    <div className="col-12" key={index}>
                                        <div className="mission-item">
                                            <h3><strong>{localizedExp.name}</strong> / {localizedExp.company}</h3>
                                            <p>{localizedExp.time}</p>
                                            <p>{copy.log}</p> <ul dangerouslySetInnerHTML={{ __html: localizedExp.description }} />
                                            <p className="keywords"><i>{localizedExp.keywords}</i></p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>{copy.education}</Accordion.Header>
                  <Accordion.Body>
                    <div className="row mission-list">
                        {education.academic.map((ed, index) => {
                            const localizedEducation = localize(ed);
                            return (
                                <div className="col-12" key={index}>
                                    <div className="mission-item">
                                        <h3><strong>{localizedEducation.title}</strong></h3>
                                        <p>{localizedEducation.place}</p>
                                        <p>{localizedEducation.time}</p>
                                        <p className="keywords"><i>{localizedEducation.keywords}</i></p>
                                    </div>
                                </div>
                            );
                        })}
                      </div>
                </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>{copy.volunteering}</Accordion.Header>
                    <Accordion.Body>
                        <div className="row mission-list">
                            {experience.volunteer.map((exp, index) => {
                                const localizedExp = localize(exp);

                                return (
                                    <div className="col-12" key={index}>
                                        <div className="mission-item">
                                            <h3><strong>{localizedExp.name}</strong> / {localizedExp.company}</h3>
                                            <p>{copy.duration} {localizedExp.time}</p>
                                            <p>{copy.log} {localizedExp.description}</p>
                                            <p className="keywords"><i>{localizedExp.keywords}</i></p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    </section>
    );
}

export default Experience;