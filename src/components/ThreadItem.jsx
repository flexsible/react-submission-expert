import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { postedAt } from '../utils';

function ThreadItem({
  id, title, body, createdAt, user, totalComments, category,
}) {
  const navigate = useNavigate();
  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  const onThreadPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      navigate(`/threads/${id}`);
    }
  };

  return (
    <div role="button" tabIndex={0} className="thread-item" onClick={onThreadClick} onKeyDown={onThreadPress}>
      <div className="thread-item__container">
        <div className="thread-item__container-wrapper">

          <div className="thread-item__user-photo">
            <img src={user?.avatar} alt={user?.name} />
          </div>
          <div className="thread-item__user-info">
            <h3 className="thread-item__user-name">{user?.name}</h3>
            <p className="thread-item__user-id">
              @
              {user?.id}
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
      <div className="thread-item__detail">
        <article>
          <h3 className="thread-item__title">{title}</h3>
          <div className="thread-item__body">{body}</div>
        </article>
      </div>
      <div className="thread-item__total-comments">
        Comments(
        {totalComments}
        )
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  user: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
};
export { threadItemShape };

export default ThreadItem;
