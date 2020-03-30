import React, { useState, Fragment } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Title from '../heading/heading';
import { Input, Form } from 'antd';
import { Button } from '../buttons/buttons';
import FeatherIcon from 'feather-icons-react';

const EamilNavbar = () => {
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
      foo: 'bar',
      addNewDisplay: false,
    });
  };

  const handeleChange = e => {
    e.preventDefault();

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
    <Fragment>
      <nav>
        <ul>
          <li>
            <FeatherIcon icon="inbox" size={18} />
            <NavLink to="/email/inbox">Inbox</NavLink>
          </li>
          <li>
            <FeatherIcon icon="star" size={18} />
            <NavLink to="/email/starred">Starred</NavLink>
          </li>
          <li>
            <FeatherIcon icon="send" size={18} />
            <NavLink to="/email/sent">Sent</NavLink>
          </li>
          <li>
            <FeatherIcon icon="edit" size={18} />
            <NavLink to="/email/drafts">Drafts</NavLink>
          </li>
          <li>
            <FeatherIcon icon="alert-octagon" size={18} />
            <NavLink to="/email/spam">Spam</NavLink>
          </li>
          <li>
            <FeatherIcon icon="trash" size={18} />
            <NavLink to="/email/trash">Trash</NavLink>
          </li>
        </ul>
        <p>Labels</p>
        <ul>
          {labels.map((label, index) => {
            return (
              <li key={index + 1}>
                <FeatherIcon icon="list" size={18} />
                <NavLink to={`/email/${label}`}>{label}</NavLink>
              </li>
            );
          })}

          <li onClick={addNewLabels}>
            <FeatherIcon icon="plus" size={18} />
            <NavLink onClick={addNewLabels} to="/email/newLabels">
              Add New Labels
            </NavLink>
            {addNewDisplay && (
              <div>
                <Form onSubmit={handeleChange}>
                  <Title label={3}>Add New Label</Title>
                  <Input
                    onChange={onLabelChange}
                    value={newlabel}
                    name={newlabel}
                    type="text"
                    placeholder="Enter label name"
                  />
                  <Button onClick={handeleChange} type="primary">
                    Add Label
                  </Button>
                  <Button onClick={cancelAddNewLabels} type="default">
                    Cancel
                  </Button>
                </Form>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default EamilNavbar;
