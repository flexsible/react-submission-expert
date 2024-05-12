import React from 'react';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';

function ThreadDetail({
  title, body, createdAt, users, id,
}) {
  return (
    <section className="thread-detail">
      <header>
        <img src={users.avatar} alt={id} />
        <div className="thread-detail__user-info">
          <p className="thread-detail__user-name">{users.name}</p>
          <p className="thread-detail__user-id">
            @
            {users.id}
          </p>
        </div>
      </header>
      <article>
        <div className="thread-detail__title">{title}</div>
        <div className="thread-detail__body">{body}</div>
      </article>
      <footer>
        <p className="thread-detail__created-at">{postedAt(createdAt)}</p>
      </footer>
    </section>
  );
}

const userShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  users: PropTypes.shape(userShape).isRequired,
};

export default ThreadDetail;
