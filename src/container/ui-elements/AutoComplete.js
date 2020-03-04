import React, { Fragment } from 'react';
import PageHeader from '../../components/page-header/page-header';
import { Row, Col, Input } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';
import { connect } from 'react-redux';
import { AutoComplete } from '../../components/autoComplete/autoComplete';

const { TextArea } = Input;
const AutoCompletess = props => {
  const { searchData } = props;
  return (
    <Fragment>
      <PageHeader title="AutoComplete" />
      <Main>
        <Row gutter={15}>
          <Col md={12}>
            <Cards headless title="Basic" caption="The simplest use of AutoComplete">
              <AutoComplete searchData={searchData} />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Customize Components" caption="The simplest use of AutoComplete">
              <AutoComplete
                customComponent={<TextArea placeholder="input here" className="custom" style={{ height: 50 }} />}
                searchData={searchData}
              />
            </Cards>
          </Col>

          <Col md={12}>
            <Cards headless title="Lookup-Patterns" caption="The simplest use of AutoComplete">
              <AutoComplete width="50%" searchData={searchData} pattarns />
            </Cards>
          </Col>
          <Col md={12}>
            <Cards headless title="Lookup-Patterns with Icon" caption="The simplest use of AutoComplete">
              <AutoComplete width="50%" searchData={searchData} pattarns pattarnButtons />
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
