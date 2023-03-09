import axios from 'axios';
import React from 'react';
import { Card, CardImg, CardBody } from 'reactstrap';
import { API_URL } from '../helper';
import { useParams } from 'react-router-dom';


function withParams(Component) {
 return props => <Component {...props} params={useParams()}/>
}

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: {}
        }
    }

    componentDidMount () {
        let {id} = this.props.params
        console.log(id)
        axios.get(`${API_URL}/${id}`)
        .then((res) => {
            console.log(res.data)
            this.setState({ detail: res.data})
        }).catch((err) => {
            console.log(err)
        })
    }

    
    printDetail = () => {
        return (
        <div>
             <div className='row'>
                        <Card className='shadow bg-white col-2' style={{ width: 420, marginLeft: 20 }} >
                                <CardImg
                                    src={this.state.detail.thumbnail}
                                    top width="20%"
                                    alt={`${this.state.detail.title}`}
                                    style={{ width: 400, marginTop: 7, paddingRight: 6 }}
                                />
                        </Card>
                        <CardBody className='col-2' style={{marginLeft: 25}}>
                            <div style={{ textAlign: "left" }}>
                                <h3>{this.state.detail.title}</h3>
           
                                <h3>{this.state.detail.price}</h3>
                                <div className='row ' style={{display: "flex", marginTop: 80}}>
                                    <h3 className='col'>{this.state.detail.rating}</h3>
                                    <h3 className='col'>{this.state.detail.discountPercentage}</h3>
                                </div>
                            </div>
                        </CardBody>
                    </div>
                    <div style={{padding: 6, marginTop: 50}}>
                        <Card className='shadow bg-white'>
                            <h3>{this.state.detail.description}</h3>
                        </Card>
                    </div>
        </div>
        )
    }


    render() {
        return (
            <div>
             <h2>PRODUCT DETAIL {this.state.detail.title}</h2>
                <div>
                    {this.printDetail()}
                </div>
            </div>
        );
    }
}

export default withParams (ProductDetail);
