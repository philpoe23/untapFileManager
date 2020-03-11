import React, { Fragment, useState } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Input } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { connect } from 'react-redux';
import { AutoComplete } from '../../components/autoComplete/autoComplete';

const { TextArea } = Input;
const AutoCompletess = props => {
  const { searchData } = props;
  const [state, setState] = useState({
    dataSource: [],
    notdata: searchData,
  });
  const { dataSource, notdata } = state;

  const onSearch = searchText => {
    let arrayData = [];
    const data = searchData.filter(item => item.title.toUpperCase().startsWith(searchText.toUpperCase()));
    data.length ? data.map(item => arrayData.push(item.title)) : (arrayData = ['Data Not Found!']);
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
    <Fragment>
      <PageHeader title="AutoComplete" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards headless title="Basic" caption="The simplest use of AutoComplete">
              <AutoComplete dataSource={dataSource} onSearch={onSearch} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Customize Components" caption="The simplest use of AutoComplete">
              <AutoComplete
                customComponent={<TextArea placeholder="input here" className="custom" style={{ height: 50 }} />}
                dataSource={dataSource}
                onSearch={onSearch}
              />
            </Cards>
          </Col>

          <Col md={12}>
            <Cards headless title="Lookup-Patterns" caption="The simplest use of AutoComplete">
              <AutoComplete onSearch={patternSearch} dataSource={notdata} width="50%" patterns />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Lookup-Patterns with Icon" caption="The simplest use of AutoComplete">
              <AutoComplete dataSource={notdata} onSearch={patternSearch} width="50%" patterns patternButtons />
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    searchData: state.headerSearchData,
  };
};
export default connect(mapStateToProps)(AutoCompletess);
