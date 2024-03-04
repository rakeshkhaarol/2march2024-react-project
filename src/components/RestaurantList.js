//1. import area
import React from 'react'
import { Table } from 'react-bootstrap'

//2. definetion area
function RestaurantList() {
    //hooks area

    //function definetion area
    fetch('http://localhost:1337/api/restaurants')
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
    })
    .catch(err=>console.log(err))


    //return statments
    return (
        <>
            <h1 className='text-center text-bg-danger'>Restaurant List</h1>
            <Table striped bordered hover>
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
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    
                </tbody>
            </Table>
        </>
    )
}

//3. export area
export default RestaurantList