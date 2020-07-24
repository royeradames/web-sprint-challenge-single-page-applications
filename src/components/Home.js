import React from 'react'

export default function Home({ orderInSystem }) {
    // {id, first_name, last_name, pepperoni, hawaiian, meatlovers, sausageKale}
    return (
        <div className='orders-container'>
            <h1>Orders</h1>
            {
                orderInSystem.map(order => {
                    return (
                        <div className='order-container'>
                            
                            {<h2>{order.first_name && order.first_name + " " + order.last_name}</h2>}
                            {order.pepperoni && <p className='pepperoni'>pepperoni</p>}
                            {order.hawaiian && <p className='hawaiian'>hawaiian</p>}
                            {order.meatlovers && <p className='meatlovers'>meatlovers</p>}
                            {order.sausageKale && <p className='sausage-kale'>sausageKale</p>}

                        </div>
                    )
                })

            }
        </div>
    )
}