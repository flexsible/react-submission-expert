import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ThreadDetail from '../components/ThreadDetail';
import ThreadItem from '../components/ThreadItem';
import CommentInput from '../components/CommentInput';
import { asyncReceiveDetailThread } from '../states/detailThread/action';
import { asyncAddComment } from '../states/comments/action';

function DetailPage() {
  const { id } = useParams();
  const {
    detailThread = null,
    comments = null,
    authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveDetailThread(id));
  }, [id, dispatch]);

  const onCommentThread = (content) => {
    dispatch(asyncAddComment({ id, content }));
  };

  if (!detailThread) {
    return null;
  }

  return (
    <section className="detail-page">
      {
        detailThread.parent && (
          <div className="detail-page__parent">
            <h3>Replying to</h3>
            <ThreadItem {...detailThread.parent} authUser={authUser.id} />
          </div>
        )
      }
      <ThreadDetail {...detailThread} authUser={authUser.id} />
      <CommentInput addComment={onCommentThread} authUser={authUser} comments={comments} />
    </section>
  );
}

export default DetailPage;
