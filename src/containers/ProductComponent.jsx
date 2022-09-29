import axios from 'axios'
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setProducts} from '../redux/actions/productActions'
import { Card, Icon, Image } from 'semantic-ui-react'
export default function ProductComponent() {
    const products = useSelector((state) => state.allProducts.products)
    const render = products.map((item,indx) => {
        const {id,title,image,price,category,description} = item
        return(
            <Card.Group>
                    <Card  key={indx}>
    <Image src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
       {price}
      </a>
    </Card.Content>
  </Card>
            </Card.Group>
        
        )
    })
    return (
        <Fragment>
            {render}
        </Fragment>
  )
}
