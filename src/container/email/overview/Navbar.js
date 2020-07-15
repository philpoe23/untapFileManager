import React, { useState } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { Input, Form } from 'antd';
import FeatherIcon from 'feather-icons-react';
import propTypes from 'prop-types';
import { EmailNav } from './style';
import { Button } from '../../../components/buttons/buttons';
import Title from '../../../components/heading/heading';

const EamilNavbar = ({ path }) => {
  const [state, setState] = useState({
    labels: ['personal', 'social', 'promotions'],
    newlabel: '',
    addNewDisplay: false,
  });
  const { labels, newlabel, addNewDisplay } = state;

  const addNewLabels = e => {
    e.preventDefault();

    setState({
      ...state,
      addNewDisplay: true,
    });
  };

  const cancelAddNewLabels = e => {
    e.preventDefault();
    e.stopPropagation();
    setState({
      ...state,
      addNewDisplay: false,
    });
  };

  const handeleChange = e => {
    e.preventDefault();
    e.stopPropagation();
    setState({
      ...state,
      labels: [...labels, newlabel],
      newlabel: '',
    });
  };

  const onLabelChange = e => {
    setState({
      ...state,
      newlabel: e.target.value,
    });
  };

  return (
    <>
      <EmailNav>
        <ul>
          <li>
            <NavLink to={`${path}inbox`}>
              <FeatherIcon icon="inbox" size={18} />
              <span className="nav-text">
                <span>Inbox</span>
                <span className="badge badge-primary">3</span>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to={`${path}starred`}>
              <FeatherIcon icon="star" size={18} />{' '}
              <span className="nav-text">
                {' '}
                <span>Starred</span>{' '}
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to={`${path}sent`}>
              <FeatherIcon icon="send" size={18} />
              <span className="nav-text">
                {' '}
                <span>Sent</span>{' '}
              </span>{' '}
            </NavLink>
          </li>
          <li>
            <NavLink to={`${path}drafts`}>
              <FeatherIcon icon="edit" size={18} />
              <span className="nav-text">
                {' '}
                <span>Drafts</span>{' '}
              </span>{' '}
              <span className="badge badge-primary">12</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={`${path}spam`}>
              <FeatherIcon icon="alert-octagon" size={18} />
              <span className="nav-text">
                {' '}
                <span>Spam</span>{' '}
              </span>{' '}
            </NavLink>
          </li>
          <li>
            <NavLink to={`${path}trash`}>
              <FeatherIcon icon="trash" size={18} />
              <span className="nav-text">
                {' '}
                <span>Trash</span>{' '}
              </span>{' '}
            </NavLink>
          </li>
        </ul>
        <div className="nav-labels">
          <p>Labels</p>
          <ul>
            {labels.map(label => {
              return (
                <li key={label}>
                  <NavLink to={`${path + label}`}>
                    <FeatherIcon icon="list" size={18} /> {label}
                  </NavLink>
                </li>
              );
            })}

            <li onKeyPress={() => {}} onClick={addNewLabels} role="menuitem">
              <NavLink onClick={addNewLabels} to={`${path}newLabels`}>
                <FeatherIcon icon="plus" size={18} /> Add New Labels
              </NavLink>
              {addNewDisplay && (
                <div className="add-label">
                  <Form onSubmit={handeleChange}>
                    <Title label={3}>Add New Label</Title>
                    <Input
                      onChange={onLabelChange}
                      value={newlabel}
                      name={newlabel}
                      type="text"
                      placeholder="Enter label name"
                    />
                    <div className="btn-group">
                      <Button size="default" onClick={handeleChange} type="primary">
                        Add Label
                      </Button>
                      <Button onClick={cancelAddNewLabels} type="default">
                        Cancel
                      </Button>
                    </div>
                  </Form>
                </div>
              )}
            </li>
          </ul>
        </div>
      </EmailNav>
    </>
  );
};

EamilNavbar.propTypes = {
  path: propTypes.string.isRequired,
};

export default EamilNavbar;
