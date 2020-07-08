import React, { Component } from 'react';
import axios from 'axios';

export default class AddArticle extends Component {

    constructor() {
        super();

        this.onChange = this.onChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            body: ''
        }
    }

   

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    handleChange(e){
        this.setState({title: e.target.title, body: e.target.body})
    }
       

    onSubmit(e) {
        e.preventDefault()
        const myArticle = {
            title : this.state.title,
            body : this.state.body
        }
        axios.post("http://localhost:4000/articleRouter/addArticle", myArticle, {
        }).then(res => {
            console.log(res)
        })
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <form>
                        <label htmlFor ="title"></label>
                        <textarea type ="text" 
                                class = "form-control" 
                                id = "title" name = "title" 
                                value = {this.state.title} 
                                onchange={this.handleChange}/>
                        <label htmlFor ="body"></label>
                        <textea type ="text" 
                                class = "form-control" 
                                id = "body" name = "body" 
                                value = {this.state.body} 
                                onchange={this.handleChange}/>
                        <button className="btn btn-primary" type="submit" onClick={this.onSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}