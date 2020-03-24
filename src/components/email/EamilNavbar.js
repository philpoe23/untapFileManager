import React, { useState } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Title from '../heading/heading';
import { Input, Form } from 'antd';
import { Button } from '../buttons/buttons';

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
    setState({
      ...state,
      addNewDisplay: false,
    });
  };

  const handeleChange = e => {
    e.preventDefault();
    setState({
      ...state,
      labels: [...labels, newlabel],
    });
  };

  const onLabelChange = e => {
    setState({
      ...state,
      newlabel: e.target.value,
    });
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/email/inbox">Inbox</NavLink>
        </li>
        <li>
          <NavLink to="/email/starred">Starred</NavLink>
        </li>
        <li>
          <NavLink to="/email/sent">Sent</NavLink>
        </li>
        <li>
          <NavLink to="/email/drafts">Drafts</NavLink>
        </li>
        <li>
          <NavLink to="/email/spam">Spam</NavLink>
        </li>
        <li>
          <NavLink to="/email/trash">Trash</NavLink>
        </li>
      </ul>
      <p>Labels</p>
      <ul>
        {labels.map((label, index) => {
          return (
            <li key={index + 1}>
              <NavLink to={`/email/${label}`}>{label}</NavLink>
            </li>
          );
        })}

        <li onClick={addNewLabels}>
          <NavLink onClick={addNewLabels} to="/email/newLabels">
            Add New Labels
          </NavLink>
          {addNewDisplay && (
            <div>
              <Form onSubmit={handeleChange}>
                <Title label={3}>Add New Label</Title>
                <Input onChange={onLabelChange} name={newlabel} type="text" placeholder="Enter label name" />
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
  );
};

export default EamilNavbar;
