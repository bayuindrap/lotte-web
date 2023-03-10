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
        this.props.productAction()
    }


    printProduct = () => {
        return this?.props?.productList?.products?.map((value, index) => {
            return <div className='col-3 mt-1' key={value.id}>
                <Card className='shadow p-2 mb-3 bg-white' style={{ width: "96vw", marginLeft: 23 }}>
                    <div className='row'>
                        <Card className='shadow bg-white col-2' style={{ width: 420, marginLeft: 20 }} >
                            <Link to={`/product-detail/${value.id}`} style={{ textDecoration: "none", color: "black", fontWeight: "bolder" }}>
                                <CardImg
                                    src={value.thumbnail}
                                    top width="20%"
                                    alt={`${value.title}-${index}`}
                                    style={{ width: 400, marginTop: 2, paddingRight: 6 }}
                                />
                            </Link>
                        </Card>
                        <CardBody className='col-2' style={{marginLeft: 25}}>
                            <div style={{ textAlign: "left" }}>
                                <h3>{value.title}</h3>
           
                                <h3>{value.price}</h3>
                                <div className='row ' style={{display: "flex", marginTop: 80}}>
                                    <h3 className='col'>{value.rating}</h3>
                                    <h3 className='col'>{value.discountPercentage}</h3>
                                </div>
                            </div>
                        </CardBody>
                    </div>
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