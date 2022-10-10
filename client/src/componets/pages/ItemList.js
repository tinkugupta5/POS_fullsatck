import React from 'react'
import { Button, Card } from 'antd';
import { useDispatch } from 'react-redux';



const ItemList = ({item}) => {
  const dispatch = useDispatch()
  //update cart handler 
  const handleAddToCart = () => {
    dispatch({
      type:'Add_TO_CART',
      payload:item,
    })

  }
  const { Meta } = Card;
  return (
    <div>
      <Card
    hoverable
    style={{ width: 240,marginBottom:10,marginTop:10 }}
    cover={<img alt="item.name" src={item.image} style={{height:250}} />}
    
  >
    <Meta title={item.name} description="" />
    <div class='item-button'>
    <Button onClick={() => handleAddToCart()} >Add to cart</Button>
    </div>
  </Card>
    </div>
  )
}

export default ItemList

