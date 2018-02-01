import React,{ Component } from 'react';
import { connect }         from 'react-redux';
import fetchDataWithRedux  from '../fetchData'
import Post                from './Post'
import * as actions        from '../action'


class App extends Component {
    componentDidMount(){
        this.props.fetchDataWithRedux('posts', {
            dataRequest : actions.postsDataRequest,
            dataSuccess : actions.postsDataSuccess,
            dataError   : actions.postsDataError
        });
        this.props.fetchDataWithRedux('users',{
            dataRequest : actions.usersDataRequest,
            dataSuccess : actions.usersDataSuccess,
            dataError   : actions.usersDataError
        });
        this.props.fetchDataWithRedux('comments',{
            dataRequest : actions.commentsDataRequest,
            dataSuccess : actions.commentsDataSuccess,
            dataError   : actions.commentsDataError
        });
	};
	render(){
        const { posts,users,comments } = this.props;
        if(!posts['posts'] || !users['users'] || !comments['comments']) return <p>Loading...</p>;
        const postsList = posts['posts'].map((post) => {
            const user = users['users'].filter( (user)=> user.id === post.userId);
            const commentList = comments['comments'].filter((comment) => comment.postId === post.id);
            if(post){
                return <Post key={post.id} post={post} user={user} comments={commentList}/>
            }
        });
		return (
	        <div id='wrapper'>
	        	{ postsList }
	        </div>
    	)
	}
}
export default connect((state) => ({
    posts: state.posts,
    users: state.users,
    comments: state.comments
}), {fetchDataWithRedux})(App)
