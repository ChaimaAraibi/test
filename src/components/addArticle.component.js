import React, { Component } from 'react';
import axios from 'axios';
import"../styling/css/addArticle.css"


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
        this.setState({title: event.target.value});
      }
      handleChangeBody(event) {
        this.setState({body: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();
        const newArticle = {
            title: this.state.title,
            body: this.state.body,
            profileImg: ""
        }
        axios.post("http://localhost:4000/articleRouter/addArticle/", newArticle)
        .then(res => {
            console.log("article added", res)
        })
        .catch(function (error) {
            console.log(error);
        })

      }


    render() {
        return (

            <div class="bg-contact2" id="background">
		        <div class="container-contact2">
			        <div class="wrap-contact2">
                    <div className="container">
                        <form class="contact2-form validate-form" onSubmit={this.handleSubmit}>
                            
                        <div class="wrap-input2 validate-input" data-validate="Title is required">
						    <input class="input2" type="text" name="title" value={this.state.title} onChange={this.handleChangeTitle}/>
						    <span class="focus-input2" data-placeholder="TITLE"></span>
					    </div>

                        <div class="wrap-input2 validate-input" data-validate = "Body is required">
						    <textarea class="input2" name="body" value={this.state.body} onChange={this.handleChangeBody}></textarea>
						    <span class="focus-input2" data-placeholder="BODY"></span>
					    </div>


                        <div class="container-contact2-form-btn">
						<div class="wrap-contact2-form-btn">
							<div class="contact2-form-bgbtn"></div>
							<button type="submit" value="Submit" class="contact2-form-btn">
								Publish Article
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