import React, { Component } from 'react';
import axios from 'axios';

export default class updateImage extends Component {

    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            profileImg: ''
            
        }
    }

    onFileChange(e) {
        this.setState({ profileImg: e.target.files[0] })
    }

    

        

    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        console.log(this.state.profileImg)
        formData.append('profileImg', this.state.profileImg)
        axios.post("http://localhost:4000/imageRouter/updateImage/"+ this.props.id, formData, {
        }).then(res => {
            console.log(res)
        }).catch(console.log("err"))
    }

    


    render() {
        return (
            <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="file" onChange={this.onFileChange} />
                        </div>
                        <div className="form-group">
                            <button class="btn btn-info mb-2" id="buttons"  type="submit" >Upload</button>
                        </div>
                    </form>
                    <br/>
                   
                </div>
                
            </div>
        )
    }
}