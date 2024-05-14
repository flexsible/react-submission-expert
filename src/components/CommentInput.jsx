import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function CommentInput({ addComment }) {
  const [comment, setComment] = useInput('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addComment(comment);
    setComment('');
  };

  return (
    <div className="comment-list__input">
      <textarea type="text" placeholder="Comments" value={comment} onChange={setComment} />
      <button type="submit" onClick={onSubmitHandler}>Reply</button>
    </div>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default CommentInput;
