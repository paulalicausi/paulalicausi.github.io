import Accordion from 'react-bootstrap/Accordion';
import education from '../../content/education.js';

const Education = () => {

    return(
      <section className="education page container">
        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>└── /Mission: Academic education/</Accordion.Header>
                <Accordion.Body>
                     {education.academic.map((ed, index) => (
                          <div className="mission-item col-12" key={index}>
                              <div>
                                <h3>├── <strong>{ed.title}</strong></h3>
                                <p>{ed.place}</p>
                                <p>{ed.time}</p>
                                <p><i>{ed.keywords}</i></p>
                              </div>
                          </div>
                      ))}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>└── /Mission: Other courses/</Accordion.Header>
                <Accordion.Body>
                    {education.courses.map((ed, index) => (
                          <div className="mission-item col-12" key={index}>
                              <div>
                                ├── <strong>{ed.title}</strong>
                                <p>{ed.place}</p>
                                <p>{ed.description}</p>
                                <p>{ed.time}</p>
                              </div>
                          </div>
                      ))}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
      </section>
    );
}

export default Education;