import ReactModal from 'react-modal';
import React, { Component } from 'react';
import axios from 'axios';
import UpdateArticle from "./updateArticle.component"
import UpdateImage from "./updateImage.component"
import Popup from "reactjs-popup";



import "../styling/css/home.css"


export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            articles:[],
            showPopup:false,
            modalIsOpen: false,
        }
        this.closeModal=this.closeModal.bind(this)
        this.openModal=this.openModal.bind(this)

    }

    
     
     closeModal(){
        this.state.modalIsOpen=false;
      }

      openModal(){
        this.setState({modalIsOpen:true});
      }

    togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
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
                <div >
                    <div >
        
                        
                        {this.state.articles.map(article => 
                                <div id="border">
                                <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
                                <link href="css/blog-home.css" rel="stylesheet"/>
                                <div class="container">
                                <div class="row">
                                    <div class="col-md-8">
                                    
                                    <h1 class="my-4">{article.title}</h1>
                                    
                                    <div class="card mb-4">
                                        <img class="card-img-top" src={article.profileImg} alt="Card image cap"/>
                                        <div class="card-body">
                                            <p class="card-text">{article.body}</p>
                                        </div>
                                    </div>
                                    </div>
                                    <script src="./yourscript.js"></script>
                                    <div class="col-md-4" id="edit">
                                    <div class="card my-4" >
                                        <h3 class="card-header">Edit this article</h3>
                                        <div class="card-body">
                                        
                                        <button class="btn btn-info mb-2" id="buttons" type="button" onClick={ () => {
                                            if(window.confirm('Delete the article?')) 
                                            this.deleteArticle(article._id);window.location.reload(false)}}>Delete
                                        </button>

                                        <button class="btn btn-info mb-2" id="buttons" onClick={this.openModal}>update</button>
                                        <ReactModal
                                            shouldCloseOnEsc 
                                            isOpen={this.state.modalIsOpen}
                                            onRequestClose={this.closeModal}
                                            >
                                            <UpdateArticle  id={article._id} title={article.title} body={article.body} />
                                        </ReactModal>
                                        <Popup  contentStyle={{width: "300px", height:"100px"}}  trigger={<button class="btn btn-info mb-2" id="buttons" > Add an image</button>} >
                                                <UpdateImage id={article._id} />
                                            </Popup>
                                        </div>
                                    </div>
                                    
                                    </div>
                                    
                                </div>
                                
                                </div>
                                
                                <script src="vendor/jquery/jquery.min.js"></script>
                                <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                        </div>)}
                    </div>      
                    
            </div>
        )
    }
}