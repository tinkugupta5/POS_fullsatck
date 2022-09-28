import React from 'react'
import { Button, Card } from 'antd';



const ItemList = ({item}) => {
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
    <Button>Add to cart</Button>
    </div>
  </Card>
    </div>
  )
}

export default ItemList

