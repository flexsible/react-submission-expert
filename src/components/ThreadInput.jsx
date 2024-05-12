import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ThreadInput({ addThread }) {
  const [text, setText] = useState('');

  function addthread() {
    if (text.trim()) {
      addThread(text);
      setText('');
    }
  }

  function handleTextChange({ target }) {
    if (target.value.length <= 300) {
      setText(target.value);
    }
  }

  return (
    <>
      <div className="thread-input">
        <div className="thread-input__title-container">
          <textarea type="text" className="thread-input__title input-alt" placeholder="Title" />
        </div>
        <textarea rows={4} cols={50} className="thread-input__textarea textarea-alt" type="text" placeholder="What are you thinking?" value={text} onChange={handleTextChange} />
        <span className="thread-input__textarea-border textarea-border-alt" />
      </div>
      <div className="thread-input__footer">
        <p className="thread-input__char-left">
          <strong>{text.length}</strong>
          /300
        </p>
        <button type="submit" onClick={addthread}>Make Thread</button>
      </div>
    </>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
