import React from 'react'
import DefaultLayout from './../DefaultLayout';
import { useSelector } from "react-redux"
import {DeleteOutlined,PlusCircleOutlined,MinusCircleOutlined}  from '@ant-design/icons';
import { Table } from 'antd';

const CartPage = () => {
    const {cartItems} = useSelector(state => state.rootReducer)

    const columns = [
        
         { title: 'Name', dataIndex: 'name'},
         { title: 'Image', dataIndex: 'image',render:(image,record) => <img src={image} alt={record.name} height="60" width="60"/>},
         {title:'Price',dataIndex:'price'},
         {title:'Quantity', dataIndex:'_id',render:(id,record) => <div>
            <PlusCircleOutlined className='mx-3'/>
            <b>{record.quantity}</b>
            <MinusCircleOutlined className='mx-3'/>
         </div>},
         {title:'Action', dataIndex:"_id",render:(id,record)=> <DeleteOutlined/>}
  
      ];

  return (
    <DefaultLayout>
   <Table columns={columns} dataSource={cartItems} bordered/>
    </DefaultLayout>
  )
}

export default CartPage
