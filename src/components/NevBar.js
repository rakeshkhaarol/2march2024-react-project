import React from 'react'
import { Link } from 'react-router-dom'

export const NevBar = () => {
  return (
    <>
        <nav>
            <Link to={'/'}>Home page</Link>
            <ul>
                <li>
                    <Link to={'/create'}>RestaurantCreate</Link>
                </li>
                <li>
                    <Link to={'/update'}>RestaurantUpdate</Link>
                </li>
                <li>
                    <Link to={'/detail'}>RestaurantDetail</Link>
                </li>
                <li>
                    <Link to={'/list'}>RestaurantList</Link>
                </li>
                <li>
                    <Link to={'/search'}>RestaurantSearch</Link>
                </li>
               
            </ul>
        </nav>
    </>
  )
}
