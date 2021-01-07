import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandlet from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                const fetchOrders = [];
                for (let key in res.data) {
                    fetchOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({ loading: false, orders: fetchOrders });
            })
            .catch(err => {
                this.setState({ loading: false });
            })
    }

    
    render() {
        return (
            <div>
                {this.state.orders.map(order => {
                    console.log(order);
                    return <Order key={order.id} ingredients={order.ingredients} price={parseFloat(order.price).toFixed(2)} />
                })}
            </div>
            
        )
    }
}

export default withErrorHandlet(Orders, axios);