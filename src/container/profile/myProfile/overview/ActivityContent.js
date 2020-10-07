import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { ActivityContents } from './style';
import { Cards } from '../../../../components/cards/frame/cards-frame';
import { Dropdown } from '../../../../components/dropdown/dropdown';

const ActivityContent = () => {
  return (
    <ActivityContents>
      <Cards headless>
        <ul>
          <li>
            <div>
              <FeatherIcon icon="inbox" size={14} />
              <img src={require('../../../../static/img/chat-author/t1.jpg')} alt="" />
              <p>
                James Send you a message <span>5 hours ago</span>
              </p>
            </div>
            <Link className="more" to="#">
              <Dropdown
                action="click"
                content={
                  <>
                    <Link to="#">
                      <span>Hide</span>
                    </Link>
                    <Link to="#">
                      <span>Delete</span>
                    </Link>
                  </>
                }
              >
                <FeatherIcon icon="more-horizontal" />
              </Dropdown>
            </Link>
          </li>
          <li>
            <div>
              <FeatherIcon icon="upload" size={14} />
              <img src={require('../../../../static/img/chat-author/t3.jpg')} alt="" />
              <p>
                Adam upload website template for sale <span>5 hours ago</span>
              </p>
            </div>
            <Link className="more" to="#">
              <Dropdown
                action="click"
                content={
                  <>
                    <Link to="#">
                      <span>Hide</span>
                    </Link>
                    <Link to="#">
                      <span>Delete</span>
                    </Link>
                  </>
                }
              >
                <FeatherIcon icon="more-horizontal" />
              </Dropdown>
            </Link>
          </li>
          <li>
            <div>
              <FeatherIcon icon="log-in" size={14} />
              <img src={require('../../../../static/img/chat-author/t2.jpg')} alt="" />
              <p>
                Mumtahin has registered <span>5 hours ago</span>
              </p>
            </div>
            <Link className="more" to="#">
              <Dropdown
                action="click"
                content={
                  <>
                    <Link to="#">
                      <span>Hide</span>
                    </Link>
                    <Link to="#">
                      <span>Delete</span>
                    </Link>
                  </>
                }
              >
                <FeatherIcon icon="more-horizontal" />
              </Dropdown>
            </Link>
          </li>
          <li>
            <div>
              <FeatherIcon icon="at-sign" size={14} />
              <img src={require('../../../../static/img/chat-author/t4.jpg')} alt="" />
              <p>
                James Send you a message <span>5 hours ago</span>
              </p>
            </div>
            <Link className="more" to="#">
              <Dropdown
                action="click"
                content={
                  <>
                    <Link to="#">
                      <span>Hide</span>
                    </Link>
                    <Link to="#">
                      <span>Delete</span>
                    </Link>
                  </>
                }
              >
                <FeatherIcon icon="more-horizontal" />
              </Dropdown>
            </Link>
          </li>
          <li>
            <div>
              <FeatherIcon icon="heart" size={14} />
              <img src={require('../../../../static/img/chat-author/t5.png')} alt="" />
              <p>
                Adam upload website template for sale <span>5 hours ago</span>
              </p>
            </div>
            <Link className="more" to="#">
              <Dropdown
                action="click"
                content={
                  <>
                    <Link to="#">
                      <span>Hide</span>
                    </Link>
                    <Link to="#">
                      <span>Delete</span>
                    </Link>
                  </>
                }
              >
                <FeatherIcon icon="more-horizontal" />
              </Dropdown>
            </Link>
          </li>
          <li>
            <div>
              <FeatherIcon icon="message-square" size={14} />
              <img src={require('../../../../static/img/chat-author/t7.png')} alt="" />
              <p>
                Mumtahin has registered <span>5 hours ago</span>
              </p>
            </div>
            <Link className="more" to="#">
              <Dropdown
                action="click"
                content={
                  <>
                    <Link to="#">
                      <span>Hide</span>
                    </Link>
                    <Link to="#">
                      <span>Delete</span>
                    </Link>
                  </>
                }
              >
                <FeatherIcon icon="more-horizontal" />
              </Dropdown>
            </Link>
          </li>
          <li>
            <div>
              <FeatherIcon icon="at-sign" size={14} />
              <img src={require('../../../../static/img/chat-author/t4.jpg')} alt="" />
              <p>
                James Send you a message <span>5 hours ago</span>
              </p>
            </div>
            <Link className="more" to="#">
              <Dropdown
                action="click"
                content={
                  <>
                    <Link to="#">
                      <span>Hide</span>
                    </Link>
                    <Link to="#">
                      <span>Delete</span>
                    </Link>
                  </>
                }
              >
                <FeatherIcon icon="more-horizontal" />
              </Dropdown>
            </Link>
          </li>
          <li>
            <div>
              <FeatherIcon icon="heart" size={14} />
              <img src={require('../../../../static/img/chat-author/t5.png')} alt="" />
              <p>
                Adam upload website template for sale <span>5 hours ago</span>
              </p>
            </div>
            <Link className="more" to="#">
              <Dropdown
                action="click"
                content={
                  <>
                    <Link to="#">
                      <span>Hide</span>
                    </Link>
                    <Link to="#">
                      <span>Delete</span>
                    </Link>
                  </>
                }
              >
                <FeatherIcon icon="more-horizontal" />
              </Dropdown>
            </Link>
          </li>
          <li>
            <div>
              <FeatherIcon icon="message-square" size={14} />
              <img src={require('../../../../static/img/chat-author/t7.png')} alt="" />
              <p>
                Mumtahin has registered <span>5 hours ago</span>
              </p>
            </div>
            <Link className="more" to="#">
              <Dropdown
                action="click"
                content={
                  <>
                    <Link to="#">
                      <span>Hide</span>
                    </Link>
                    <Link to="#">
                      <span>Delete</span>
                    </Link>
                  </>
                }
              >
                <FeatherIcon icon="more-horizontal" />
              </Dropdown>
            </Link>
          </li>
          <li>
            <div>
              <FeatherIcon icon="heart" size={14} />
              <img src={require('../../../../static/img/chat-author/t5.png')} alt="" />
              <p>
                Adam upload website template for sale <span>5 hours ago</span>
              </p>
            </div>
            <Link className="more" to="#">
              <Dropdown
                action="click"
                content={
                  <>
                    <Link to="#">
                      <span>Hide</span>
                    </Link>
                    <Link to="#">
                      <span>Delete</span>
                    </Link>
                  </>
                }
              >
                <FeatherIcon icon="more-horizontal" />
              </Dropdown>
            </Link>
          </li>
        </ul>
      </Cards>
    </ActivityContents>
  );
};

export default ActivityContent;
