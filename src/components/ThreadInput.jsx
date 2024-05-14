import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function ThreadInput({ addThread }) {
  const [title, setTitle] = useInput('');
  const [body, setBody] = useInput('');
  const [category, setCategoty] = useInput('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addThread({ title, body, category });
  };

  return (
    <>
      <div className="thread-input">
        <div className="thread-input__title-container">
          <textarea type="text" className="thread-input__title input-alt" placeholder="Title" value={title} onChange={setTitle} />
        </div>
        <div className="thread-input__title-container">
          <textarea type="text" className="thread-input__title input-alt" placeholder="Category" value={category} onChange={setCategoty} />
        </div>
        <textarea rows={4} cols={50} className="thread-input__textarea textarea-alt" type="text" placeholder="What are you thinking?" onChange={setBody} value={body} />
        <span className="thread-input__textarea-border textarea-border-alt" />
      </div>
      <div className="thread-input__footer">
        <button type="submit" onClick={onSubmitHandler}>Make Thread</button>
      </div>
    </>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
