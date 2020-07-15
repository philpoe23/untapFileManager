import React, { useState } from 'react';
import { Row, Col, Input } from 'antd';
import { useSelector } from 'react-redux';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main, AutoCompleteWrapper } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { AutoComplete } from '../../components/autoComplete/autoComplete';

const { TextArea } = Input;
const AutoCompletess = () => {
  const searchData = useSelector(state => state.headerSearchData);

  const [state, setState] = useState({
    dataSource: [],
    notdata: searchData,
  });
  const { dataSource, notdata } = state;

  const onSearch = searchText => {
    let arrayData = [];
    const data = searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    if (data.length) {
      data.map(item => arrayData.push(item.title));
    } else {
      arrayData = ['Data Not Found!'];
    }
    setState({
      dataSource: !searchText ? [] : arrayData,
    });
  };

  const patternSearch = searchText => {
    const data = searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    setState({
      notdata: data,
    });
  };

  return (
    <>
      <PageHeader title="AutoComplete" />
      <Main>
        <AutoCompleteWrapper>
          <Row gutter={25}>
            <Col md={12} sm={24} xs={24}>
              <Cards title="Basic Usage">
                <div className="auto-complete-input">
                  <AutoComplete dataSource={dataSource} onSearch={onSearch} />
                  <AutoComplete dataSource={dataSource} onSearch={onSearch} />
                </div>
              </Cards>
              <Cards title="Customize Input Component">
                <div className="auto-complete-input">
                  <AutoComplete
                    customComponent={<TextArea placeholder="input here" className="custom" style={{ height: 50 }} />}
                    dataSource={dataSource}
                    onSearch={onSearch}
                  />
                </div>
              </Cards>
              <Cards title="Lookup-Patterns - Certain Category">
                <AutoComplete onSearch={patternSearch} dataSource={notdata} width="100%" patterns />
              </Cards>
            </Col>
            <Col md={12} sm={24} xs={24}>
              <div className="auto-complete-input">
                <Cards title="Customize">
                  <AutoComplete dataSource={dataSource} onSearch={onSearch} />
                </Cards>
              </div>

              <Cards title="Lookup-Patterns - Uncertain Category">
                <AutoComplete dataSource={notdata} onSearch={patternSearch} width="100%" patterns patternButtons />
              </Cards>
            </Col>
          </Row>
        </AutoCompleteWrapper>
      </Main>
    </>
  );
};

export default AutoCompletess;
