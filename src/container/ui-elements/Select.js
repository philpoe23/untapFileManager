import React, { Fragment, useState } from 'react';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Row, Col, Select } from 'antd';
import { Main } from '../styled';
import { Cards } from '../../components/cards/frame/cards-frame';

const { Option, OptGroup } = Select;
const Selects = () => {
  const [state, setState] = useState({ selectedItems: [] });

  const handleChange = selectedItems => {
    setState({ selectedItems });
  };

  const { selectedItems } = state;
  const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];
  const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));

  return (
    <Fragment>
      <PageHeader title="Select" />
      <Main>
        <Row gutter={25}>
          <Col md={12}>
            <Cards title="Basic" caption="The simplest use of Select">
              <Select defaultValue="lucy" style={{ width: 120, marginRight: "10px" }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
              <Select defaultValue="lucy" style={{ width: 120, marginRight: "10px" }} disabled>
                <Option value="lucy">Lucy</Option>
              </Select>
              <Select defaultValue="lucy" style={{ width: 120 }} loading>
                <Option value="lucy">Lucy</Option>
              </Select>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Search and select" caption="The simplest use of Select">
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Multiple select" caption="The simplest use of Select">
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Please select"
                defaultValue={['jack', 'tom']}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Tags select" caption="The simplest use of Select">
              <Select mode="tags" style={{ width: '100%' }} placeholder="Please select">
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Custom" caption="The simplest use of Select">
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="select one country"
                defaultValue={['china']}
                optionLabelProp="label"
              >
                <Option value="china" label="China">
                  <span role="img" aria-label="China">
                    🇨🇳
                  </span>
                  China
                </Option>
                <Option value="usa" label="USA">
                  <span role="img" aria-label="USA">
                    🇺🇸
                  </span>
                  USA
                </Option>
                <Option value="japan" label="Japan">
                  <span role="img" aria-label="Japan">
                    🇯🇵
                  </span>
                  Japan
                </Option>
                <Option value="korea" label="Korea">
                  <span role="img" aria-label="Korea">
                    🇰🇷
                  </span>
                  Korea
                </Option>
              </Select>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Custom" caption="The simplest use of Select">
              <Select defaultValue="lucy" style={{ width: 200 }}>
                <OptGroup label="Manager">
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                </OptGroup>
                <OptGroup label="Engineer">
                  <Option value="Yiminghe">yiminghe</Option>
                </OptGroup>
              </Select>
            </Cards>
          </Col>
          <Col md={12}>
            <Cards title="Hide Already Selected" caption="The simplest use of Select">
              <Select
                mode="multiple"
                placeholder="Inserted are removed"
                value={selectedItems}
                onChange={handleChange}
                style={{ width: '100%' }}
              >
                {filteredOptions.map(item => (
                  <Select.Option key={item} value={item}>
                    {item}
                  </Select.Option>
                ))}
              </Select>
            </Cards>
          </Col>
        </Row>
      </Main>
    </Fragment>
  );
};

export default Selects;
