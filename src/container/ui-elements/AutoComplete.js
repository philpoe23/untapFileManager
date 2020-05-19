import React, { Fragment, useState } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Input } from 'antd';
import { Main , AutoCompleteWrapper } from '../styled';
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
            <Cards title="Basic Usage">
              <AutoCompleteWrapper>
                <AutoComplete dataSource={dataSource} onSearch={onSearch} />
                <AutoComplete dataSource={dataSource} onSearch={onSearch} />
              </AutoCompleteWrapper>
            </Cards>
            <Cards title="Customize Input Component">
              <AutoComplete
                customComponent={<TextArea placeholder="input here" className="custom" style={{ height: 50 }} />}
                dataSource={dataSource}
                onSearch={onSearch}
              />
            </Cards>
            <Cards title="Lookup-Patterns - Certain Category">
              <AutoComplete onSearch={patternSearch} dataSource={notdata} width="35%" patterns />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Customize">
              <AutoCompleteWrapper>
                <AutoComplete dataSource={dataSource} onSearch={onSearch} />
              </AutoCompleteWrapper>
            </Cards>
            <Cards title="Lookup-Patterns - Uncertain Category">
              <AutoComplete dataSource={notdata} onSearch={patternSearch} width="35%" patterns patternButtons />
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
