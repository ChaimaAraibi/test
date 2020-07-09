import React, { Component } from 'react';
import axios from 'axios';

export default class AddArticle extends Component {

    constructor(props) {
        super(props);
        this.state = {title: '',
                    body: ''};
    
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeBody = this.handleChangeBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChangeTitle(event) {
        this.setState({value: event.target.title});
      }
      handleChangeBody(event) {
        this.setState({value: event.target.body});
      }
    
      handleSubmit(event) {
        event.preventDefault();
        const newArticle = {
            title: this.state.title,
            body: this.state.body
        }
        axios.post("http://localhost:4000/articleRouter/addArticle/", newArticle)
        .then(res => {
            console.log("article added")
        })
        .catch(function (error) {
            console.log(error);
        })

      }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title
                        <input type="text" title={this.state.title} onChange={this.handleChangeTitle} />
                    </label>
                    <label>
                        Body
                        <input type="text" body={this.state.body} onChange={this.handleChangeBody} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
        </div>
            
        )
    }
}