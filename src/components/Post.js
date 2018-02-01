import React, { Component } from 'react';
import Comment              from './Comment';
import User                 from './User';
import Collapsible          from 'react-collapsible';

class Post extends Component {
	render(){
        const { post, user, comments } = this.props;
        const commentByPost = comments.map((comment)=> <Comment key={comment.id} comment={comment} />);
         return (
            <div className='accordion' title={post.title}>
                <Collapsible trigger={post.body} className='panel' >
                    <div className='user-info'>
                        <h3>User by post</h3>
                        <User userInfo={user} />
                    </div>
                    <div className='comments'>
                        <h4>Comments by post</h4>
                        { commentByPost }
                    </div>
                </Collapsible>
            </div>
        )
    }
}
export default Post;
