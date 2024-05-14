import React from 'react';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';

function ThreadDetail({
  title, body, createdAt, owner, category, comments,
}) {
  return (
    <section className="thread-detail">
      <header>
        <div className="thread-item__container">
          <div className="thread-item__container-wrapper">

            <div className="thread-item__user-photo">
              <img src={owner?.avatar} alt={owner?.name} />
            </div>
            <div className="thread-item__user-info">
              <h3 className="thread-item__user-name">{owner?.name}</h3>
              <p className="thread-item__user-id">
                @
                {owner?.id}
              </p>
            </div>
          </div>
          <div className="thread-item__container-wrapper2">
            <p className="thread-item__created-at">{postedAt(createdAt)}</p>
            <div className="thread-item__category">
              #
              {category}
            </div>
          </div>
        </div>
      </header>
      <article>
        <h3 className="thread-item__title">{title}</h3>
        <div className="thread-item__body">{body}</div>
        {comments.map((comment) => (
          <div className="comment-list" key={comment.id}>
            <div className="comment-list__container">
              <div className="comment-list__avatar">
                <img src={comment?.owner?.avatar} alt="" />
              </div>
              <div className="comment-list__creator">
                <h3>{comment?.owner?.name}</h3>
                <p>{comment?.createdAt}</p>
              </div>
            </div>
            <div className="comment-list__content">
              {comment?.content}
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
};

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  category: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
};

export default ThreadDetail;
