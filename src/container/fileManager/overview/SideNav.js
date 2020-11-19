import React from 'react';
import PropTypes from 'prop-types';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { Progress } from 'antd';
import { useSelector } from 'react-redux';
import { Cards } from '../../../components/cards/frame/cards-frame';
import { Dropdown } from '../../../components/dropdown/dropdown';
import { Button } from '../../../components/buttons/buttons';

const SideNav = props => {
  const { FileManager } = useSelector(state => {
    return {
      FileManager: state.FileManager.data,
    };
  });

  const testing = [
    {
      arr: [
        {
          arr: [
            {
              arr: [],
            },
          ],
        },
      ],
    },
    {
      arr: [],
    },
  ];

  const test2 = abc => {
    abc.map(a => console.log(a));
  };
  const test1 = abc => {
    abc.map(a => {
      console.log(a);
      return a.arr && test2(a.arr);
    });
  };

  testing.map(item => {
    return item.arr.length && test1(item.arr);
  });

  return (
    <Cards headless>
      <Dropdown
        content={
          <>
            <Link to="#">
              <FeatherIcon icon="folder" /> Create Folder
            </Link>
            <Link to="#">
              <FeatherIcon icon="file" /> Create File
            </Link>
            <Link to="#">
              <FeatherIcon icon="paperclip" /> File upload
            </Link>
            <Link to="#">
              <FeatherIcon icon="folder" /> Folder upload
            </Link>
          </>
        }
        action={['click']}
      >
        <Button size="large" shape="round" type="info">
          <FeatherIcon icon="plus" />
          Add Files
        </Button>
      </Dropdown>
      <h3>Files</h3>
      <ul>
        <li>
          <FeatherIcon icon="chevron-down" size={14} />
          <FeatherIcon icon="file" size={14} />
          My files
          <ul>
            {FileManager.map(item => {
              return (
                <li key={item.id}>
                  <FeatherIcon icon="chevron-right" size={14} />
                  <FeatherIcon icon="folder" size={14} />
                  {item.name}
                  {item.folder.length ? (
                    <ul className="common-ul">
                      {item.folder.map(item => {
                        return (
                          <li key={item.id}>
                            <FeatherIcon icon="chevron-right" size={14} />
                            <FeatherIcon icon="folder" size={14} />
                            {item.name}
                            {item.folder.length ? (
                              <ul className="common-ul">
                                {item.folder.map(item => {
                                  return (
                                    <li key={item.id}>
                                      <FeatherIcon icon="chevron-right" size={14} />
                                      <FeatherIcon icon="folder" size={14} />
                                      {item.name}
                                    </li>
                                  );
                                })}
                              </ul>
                            ) : null}
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </li>
        <li>
          <FeatherIcon icon="file" size={14} />
          My Computer
        </li>
      </ul>

      <h2>STORAGE</h2>
      <Progress percent={80} className="progress-success" />
      <p>9.5 GB of 15 GB Used</p>
    </Cards>
  );
};

SideNav.propTypes = {};

export default SideNav;
