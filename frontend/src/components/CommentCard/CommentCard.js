import React from 'react';
import { CommentWrapper, CommenterWrapper,
Content } from './CommentCard.styles';

const CommentCard = ({content, user_pic, commenter, posted}) => {

  return (
    <CommentWrapper>
        <CommenterWrapper>
          <img className='commenter-pic' src={`http://localhost:8001${user_pic}`} />
          <div className='commenter-info'>
            <h4>{commenter}</h4>
            <p style={{color: 'gray', marginTop: '.5em'}}>Posted: {posted.substring(0, 10)}</p>
          </div>
        </CommenterWrapper> 
        <Content style={{color: 'black'}}>{content}</Content>
    </CommentWrapper>
  )
}

export default CommentCard