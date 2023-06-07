import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import './Articles.scss';
import { getPosts } from '../../core/services/postService/getPosts/actions';
import { GetPostsState } from '../../core/services/postService/getPosts/types';
import { IStore } from '../../core/utilities/reducers';
import currency from '../../assets/images/image-currency.jpg';
import restaurant from '../../assets/images/image-restaurant.jpg';
import plane from '../../assets/images/image-plane.jpg';
import confetti from '../../assets/images/image-confetti.jpg';

interface IProps {
  getPostsState: GetPostsState;
  getPosts: () => void;
}

function Articles(props: IProps) {
  useEffect(() => {
    props.getPosts();
  }, []);

  const renderPosts = () => {
    return props.getPostsState.data.map((post, index) => (
      <div className='article-card' key={post.id}>
        <h5 className="author">By {post.author}</h5>
        <h3 className="title">{post.title}</h3>
        <p className="text">{post.text}</p>
        <div className="image-container">
          {index === 0 && (
            <img className="image" src={currency} alt="Currency" />
          )}
          {index === 1 && (
            <img className="image" src={restaurant} alt="Restaurant" />
          )}
          {index === 2 && (
            <img className="image" src={plane} alt="Plane" />
          )}
          {index === 3 && (
            <img className="image" src={confetti} alt="Confetti" />
          )}
        </div>
      </div>
    ));
  };

  return (
    <section className='articles'>
      <h1>Latest Articles</h1>
      <div className='article-wrapper'>
        <div className='articles'>{renderPosts()}</div>
      </div>
    </section>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      getPosts,
    },
    dispatch
  );
};

const mapStateToProps = (store: IStore) => {
  return {
    getPostsState: store.getPosts,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
