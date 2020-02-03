import React, { useState, Fragment } from 'react';
import { Tag, Input, Icon } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import PropTypes from 'prop-types';
const { CheckableTag } = Tag;

const CheckedTag = props => {
  const [state, setState] = useState({ checked: true });
  const handleChange = checked => {
    setState({ checked });
  };
  return <CheckableTag {...props} checked={state.checked} onChange={handleChange} />;
};

const HotTag = props => {
  const { data } = props;
  const tagsFromServer = data;
  const [state, setState] = useState({ selectedTags: [] });
  const handleChange = (tag, checked) => {
    const { selectedTags } = state;
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
    // console.log('You are interested in: ', nextSelectedTags);
    setState({ selectedTags: nextSelectedTags });
  };
  const { selectedTags } = state;

  return (
    <Fragment>
      <span style={{ marginRight: 8 }}>Categories:</span>
      {tagsFromServer.map(tag => (
        <CheckableTag key={tag} checked={selectedTags.indexOf(tag) > -1} onChange={checked => handleChange(tag, checked)}>
          {tag}
        </CheckableTag>
      ))}
    </Fragment>
  );
};

const AnimatedTags = props => {
  const { data } = props;
  const [state, setState] = useState({ tags: data, inputVisible: false, inputValue: '' });

  const handleClose = removedTag => {
    const tags = state.tags.filter(tag => tag !== removedTag);
    // console.log(tags);
    setState({ tags });
  };

  const showInput = () => {
    setState({ ...state, inputVisible: true });
  };

  const handleInputChange = e => {
    setState({ ...state, inputValue: e.target.value });
  };

  const handleInputConfirm = () => {
    const { inputValue } = state;
    let { tags } = state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    setState({
      ...state,
      tags,
      inputVisible: false,
      inputValue: '',
    });
  };

  const forMap = tag => {
    const tagElem = (
      <Tag
        closable
        onClose={e => {
          e.preventDefault();
          handleClose(tag);
        }}
      >
        {tag}
      </Tag>
    );
    return (
      <span key={tag} style={{ display: 'inline-block' }}>
        {tagElem}
      </span>
    );
  };

  const { tags, inputVisible, inputValue } = state;
  const tagChild = tags.map(forMap);

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <TweenOneGroup
          enter={{
            scale: 0.8,
            opacity: 0,
            type: 'from',
            duration: 100,
            onComplete: e => {
              e.target.style = '';
            },
          }}
          leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
          appear={false}
        >
          {tagChild}
        </TweenOneGroup>
      </div>
      {inputVisible && <Input autoFocus type="text" size="small" style={{ width: 78 }} value={inputValue} onChange={handleInputChange} onBlur={handleInputConfirm} onPressEnter={handleInputConfirm} />}
      {!inputVisible && (
        <Tag onClick={showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
          <Icon type="plus" /> New Tag
        </Tag>
      )}
    </div>
  );
};
HotTag.propTypes = {
  data: PropTypes.array.isRequired,
};
AnimatedTags.propTypes = {
  data: PropTypes.array,
};
export { CheckedTag, HotTag, AnimatedTags };
