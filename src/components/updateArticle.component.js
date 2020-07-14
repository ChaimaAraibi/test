
import React, { Component } from 'react';
import axios from 'axios';


export default class updateArticle extends Component {

    constructor(props) {
        super(props);
        this.state = {title: this.props.title,
                    body:this.props.body};
    
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeBody = this.handleChangeBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChangeTitle(event) {
        this.setState({title: event.target.value});
      }
      handleChangeBody(event) {
        this.setState({body: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();
        const articleUpdated = {
            title: this.state.title,
            body: this.state.body
        }
        axios.post('http://localhost:4000/articleRouter/update/'+this.props.id, articleUpdated)
        .then(res => {
            console.log("article updated",res)
        })
        .catch(function (error) {
            console.log(error);
        })
    }


    render() {
        return (
            <div class="bg-contact2" id="background1">
            <div class="container-contact2">
                <div class="wrap-contact2">
                <div className="container">
                    <form class="contact2-form validate-form" onSubmit={this.handleSubmit}>
                        
                    <div class="wrap-input2 validate-input" data-validate="Title is required">
                        <input class="input2" type="text" name="title" value={this.state.title} onChange={this.handleChangeTitle}/>
                    </div>

                    <div class="wrap-input2 validate-input" data-validate = "Body is required">
                        <textarea class="input2" name="body" value={this.state.body} onChange={this.handleChangeBody}></textarea>
                    </div>


                    <div class="container-contact2-form-btn">
                    <div class="wrap-contact2-form-btn">
                        <div class="contact2-form-bgbtn"></div>
                        <button onClick={() => window.location.reload(false)} type="submit" value="Submit" class="contact2-form-btn">
                            Update Article
                        </button>
                    </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>    


      
    </div>
            
        )
    }
}