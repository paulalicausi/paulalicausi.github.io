import experience from '../../content/experience.js';
import Accordion from 'react-bootstrap/Accordion';

const Experience = () => {
    return(
    <section className="experience page container">
        <div className="col-12 col-lg-9">
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>└── /Mission: IT experience/</Accordion.Header>
                    <Accordion.Body>
                        <div className="row mission-list">
                            {experience.it.map((exp, index) => (
                                <div className="col-12" key={index}>
                                    <div className="mission-item">
                                        <h3>├── <strong>{exp.name}</strong> / {exp.company}</h3>
                                        <p>{exp.time}</p>
                                        <p>Log: {exp.description}</p>
                                        <p className="keywords"><i>{exp.keywords}</i></p>                                    
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>└── /Mission: Communication & philosophy experience/</Accordion.Header>
                    <Accordion.Body>
                        <div className="row mission-list">
                            {experience.writing.map((exp, index) => (
                                <div className="col-12" key={index}>
                                    <div className="mission-item">
                                        <h3>├── <strong>{exp.name}</strong> / {exp.company}</h3>
                                        <p>{exp.time}</p>
                                        <p>Log: {exp.description}</p>
                                        <p className="keywords"><i>{exp.keywords}</i></p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>└── /Mission: Volunteer experience/</Accordion.Header>
                    <Accordion.Body>
                        <div className="row mission-list">
                            {experience.volunteer.map((exp, index) => (
                                <div className="col-12" key={index}>
                                    <div className="mission-item">
                                        <h3>├── <strong>{exp.name}</strong> / {exp.company}</h3>
                                        <p>Duration: {exp.time}</p>
                                        <p>Log: {exp.description}</p>
                                        <p className="keywords"><i>{exp.keywords}</i></p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </section>
    );
}

export default Experience;