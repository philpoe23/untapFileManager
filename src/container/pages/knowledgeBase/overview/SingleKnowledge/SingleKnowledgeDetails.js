import React, { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import { Collapse } from 'antd';
import { Link } from 'react-router-dom';
import { KnowledgeDetailsWrap } from '../../style';

const { Panel } = Collapse;
const SingleKnowledgeDetails = () => {
  const [state, setstate] = useState({
    key: 0,
  });
  const callback = key => {
    setstate({ ...state, key });
  };
  return (
    <KnowledgeDetailsWrap>
      <div className="knowledge-deetails">
        <h2 className="knowledge-deetails__title">Switch between accounts</h2>
        <div className="knowledge-deetails__single--block">
          <h4>Configuration</h4>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet….
          </p>
          <Link className="btn-more">Read More</Link>
        </div>
        <div className="knowledge-deetails__single--block">
          <h4>Research and experiments</h4>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus.
          </p>
          <div className="knowledge-details-img">
            <img src={require(`../../../../../static/img/knowledgebase/wp-research.png`)} alt="StrikingDash" />
          </div>
        </div>
        <div className="knowledge-deetails__single--block">
          <div className="knowledge-details-collapse">
            <Collapse onChange={callback}>
              <Panel
                header={
                  <div className="knowledge-details-collapse__title">
                    <Link>
                      <h4>Measuring elevation</h4>
                    </Link>
                  </div>
                }
                key="1"
              >
                <div className="knowledge-details-collapse__text">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet….
                  </p>
                </div>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
    </KnowledgeDetailsWrap>
  );
};

export default SingleKnowledgeDetails;
