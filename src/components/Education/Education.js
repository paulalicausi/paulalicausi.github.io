import Accordion from 'react-bootstrap/Accordion';
import education from '../../content/education.js';

const Education = () => {

    return(
      <section className="education page container">
        <div className="col-12 col-lg-9">
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                  <Accordion.Header>└── /Mission: Academic education/</Accordion.Header>
                  <Accordion.Body>
                    <div className="row mission-list">
                        {education.academic.map((ed, index) => (
                            <div className="col-12" key={index}>
                                <div className="mission-item">
                                    <h3>├── <strong>{ed.title}</strong></h3>
                                    <p>{ed.place}</p>
                                    <p>{ed.time}</p>
                                  <p className="keywords"><i>{ed.keywords}</i></p>                                   
                                </div>
                            </div>
                        ))}
                      </div>
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
        </div>
      </section>
    );
}

export default Education;