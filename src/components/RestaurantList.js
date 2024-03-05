//1. import area
import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Table } from 'react-bootstrap'

//2. definetion area
function RestaurantList() {
    //hooks area
    const [restaurants, setRestaurants] = useState([]);

    //function definetion area
    // fetch('http://localhost:1337/api/restaurants')
    // .then((res)=>{
    //     return res.json()
    // })
    // .then((data)=>{
    //     console.log(data)
    // })
    // .catch(err=>console.log(err))
    useEffect(() => {

        fetch(`http://localhost:1337/api/restaurants`, {
            method: "GET"
        })
            .then((res) => {
                return (res.json())
            })
            .then((data) => {
                console.log('Restaurants --->>>>>', data.data);
                setRestaurants(data.data)
                console.log(restaurants)

                //set/ the hook varaible 
            })
            .catch(() => {

            });
    }, [])

    //return statments
    return (
        <>
            <div className='text-center text-bg-danger'>Restaurant List</div>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={idx}>
                        {
                        restaurants.slice(0).map((cv, idx, arr) => {
                            return <Card key={idx}>
                            <Card.Img variant="top" src="holder.js/100px160" >{cv.attributes.image}</Card.Img>
                            <Card.Body>
                                <Card.Title>{cv.attributes.name}</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        })
                    }
                        
                    </Col>
                ))}
            </Row>
            {/* <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        restaurants.slice(0).map((cv, idx, arr) => {
                            return <tr key={idx}>
                                <td>{cv.id}</td>
                                <td>{cv.attributes.name}</td>
                                <td>{cv.attributes.address}</td>
                                <td>{cv.attributes.Email}</td>
                                <td>{cv.attributes.Rating}</td>
                            </tr>
                        })
                    }
                </tbody>
            </Table> */}
        </>
    )
}

//3. export area
export default RestaurantList