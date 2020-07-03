import React, { useState, Fragment } from 'react';
import { Input, Icon } from 'antd';
/**
 * @todo package evaluation
 */
import { TweenOneGroup } from 'rc-tween-one';
import PropTypes from 'prop-types';
import { TagStyle } from './style';
const { CheckableTag } = TagStyle;

const Tag = props => {
  const [state, setState] = useState({
    checked: true,
    selectedTags: [],
  });

  const { closable, onClose, color, checked, onChange, data, hottags, animate } = props;
  const tagsFromServer = data;

  const log = e => {
    onClose(e);
  };

  const handleChange = checked => {
    setState({ ...state, checked });
    onChange && onChange(checked);
  };

  const handleChangeHot = (tag, checked) => {
    const { selectedTags } = state;
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
    // console.log('You are interested in: ', nextSelectedTags);
    setState({
      ...state,
      selectedTags: nextSelectedTags,
    });
    onChange && onChange(nextSelectedTags);
  };

  const { selectedTags } = state;

  return checked ? (
    <CheckableTag {...props} checked={state.checked} onChange={handleChange} />
  ) : hottags ? (
    <Fragment>
      <span style={{ marginRight: 8 }}>Categories:</span>
      {tagsFromServer.map(tag => (
        <CheckableTag
          key={tag}
          checked={selectedTags.indexOf(tag) > -1}
          onChange={checked => handleChangeHot(tag, checked)}
        >
          {tag}
        </CheckableTag>
      ))}
    </Fragment>
  ) : animate ? (
    <AnimatedTags data={data} onChange={onChange} />
  ) : (
    <TagStyle closable={closable} onClose={log} color={color}>
      {props.children}
    </TagStyle>
  );
};

Tag.propTypes = {
  data: PropTypes.array,
  closable: PropTypes.bool,
  onClose: PropTypes.func,
  color: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  hottags: PropTypes.bool,
  animate: PropTypes.bool,
};

const AnimatedTags = props => {
  const { data, onChange } = props;
  const [state, setState] = useState({ tags: data, inputVisible: false, inputValue: '' });

  const handleClose = removedTag => {
    const tags = state.tags.filter(tag => tag !== removedTag);
    // console.log(tags);
    setState({ tags });
    onChange && onChange(tags);
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

    onChange && onChange(tags);
    setState({
      ...state,
      tags,
      inputVisible: false,
      inputValue: '',
    });
  };

  const forMap = tag => {
    const tagElem = (
      <TagStyle
        closable
        onClose={e => {
          e.preventDefault();
          handleClose(tag);
        }}
      >
        {tag}
      </TagStyle>
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

      {inputVisible && (
        <Input
          autoFocus
          type="text"
          size="small"
          style={{ width: 78 }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}

      {!inputVisible && (
        <TagStyle onClick={showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
          <Icon type="plus" /> New Tag
        </TagStyle>
      )}
    </div>
  );
};

AnimatedTags.propTypes = {
  data: PropTypes.array,
  onChange: PropTypes.func,
};

export { Tag };
