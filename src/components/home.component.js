import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            articles:[]
        }
    }
    

    componentDidMount() {
        axios.get('http://localhost:4000/articleRouter',{ headers:{'Access-Control-Allow-Origin':"*"}})
            .then(res => {
                console.log(res)
                this.setState({ articles: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    deleteArticle(id){
            axios.delete('http://localhost:4000/articleRouter/delete/'+id)
            .then(res => {
                console.log("article deleted")
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    render() {
        return (
            <div className="container">
                    {this.state.articles.map(article => 
                        <div>
                            <h2>{article.title}</h2>
                            <p>{article.body}</p>
                            <img src={article.profileImg} width="50" height="50"/>
                            <br/> 
                            <button type="button" onClick={() => {
                                if(window.confirm('Delete the article?')) 
                                this.deleteArticle(article._id)}}>Delete
                            </button>
                            <button>update</button>
                            <br/><br/><br/>
                        </div>)}
                    <button>add a new article</button>
            </div>
        )
    }
}