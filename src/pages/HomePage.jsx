import axios from 'axios';
import React from 'react';
import { API_URL } from '../helper';
import { productAction } from '../redux/actions/productAction';
// import { productReducer } from '../redux/reducers/productReducer';
import { connect } from 'react-redux';
import { Card, CardBody, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';





class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: []
        }
    }


    componentDidMount() {
        this.getProduct()
        // this.props.productAction()
    }

    getProduct = () => {
       axios.get(`${API_URL}`)
       .then((response) => {
        console.log("product", response.data)
        this.setState({productList: response.data})
       }).catch((error) => {
        console.log(error)
       })

    }

    printProduct = () => {
        return this.props.productList.products.map((value, index) => {
            return <div className='col-3 mt-1'>
                <Card className='shadow p-2 mb-3 bg-white' style={{ width: "96vw", marginLeft: 23 }}>
                    <Card className='shadow bg-white' style={{width: 420}}>
                        
                        <CardImg
                            src={value.thumbnail}
                            top width="30%"
                            alt={`${value.title}-${index}`}
                            style={{ width: 400 }}
                        />
                        
                    </Card>
                    <CardBody>
                        <div>
                            <p>{value.title}</p>
                            <p>{value.brand}</p>
                            <p>{value.price}</p>
                            <p>{value.discount}</p>
                        </div>
                    </CardBody>
                </Card>

            </div>
        })
    }

    render() {
        return (
            <div>
                <h1>HOME PAGE</h1>
                <div>
                    {this.printProduct()}
                </div>

            </div>
        );
    }
}

const mapToProps = ({ productReducer }) => {
    console.log("test", productReducer.productList)
    return {
        productList: productReducer.productList
    }
}

export default connect(mapToProps, { productAction })(HomePage);