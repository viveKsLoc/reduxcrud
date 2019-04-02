import React, { Component } from 'react';

// For reference: consider creating store as the fifth step in the redux integration process
import {connect} from 'react-redux';

class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            message,
            editing:false
        }
        
        console.log(data);
        
        this.props.dispatch({
            type:'ADD_POST',
            data
        });
        this.getTitle.value = '';
        this.getMessage.value = '';
    }
    render() {
        return (
            <div>
                <h1>Create Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        required
                        type="text"
                        ref={(input) => this.getTitle = input}
                        placeholder="Enter Post Title"
                    />
                    <br /><br />
                    <textarea
                        required
                        rows="5"
                        cols="28"
                        ref={(input) => this.getMessage = input}
                        placeholder="Enter Post"
                    />
                    <br /><br />
                    <button>Post</button>
                </form>
            </div>
        );
    }
}

// export default PostForm;
export default connect()(PostForm);