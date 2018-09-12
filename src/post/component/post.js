import React, { Component } from 'react';

class Post extends Component {
    render(){
        return (
            <div className="form-group" id="publicPost">
            <img alt="" className="profile-photo-md" id="img-profile" />
            <textarea name="texts" id="textarea-post" cols="30" rows="1" className="form-control" placeholder="Write an education post"></textarea>
          </div>
        )
    }
}

export default Post;