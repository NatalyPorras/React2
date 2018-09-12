import React, { Component } from 'react';;
import Header from '../header/header'
import Post from '../post/component/post'

class Content extends Component {
    render(){
        return (
            <div>
                <Header />
                <Post />
          </div>
        )
    }
}

export default Content;