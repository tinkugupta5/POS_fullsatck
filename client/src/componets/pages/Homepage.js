import React,{useState,useEffect} from 'react'
import DefaultLayout from './../DefaultLayout';
import axios from 'axios'
import { Col, Row } from 'antd';
import ItemList from './ItemList';

const Homepage = () => {
  // define state 
  const [itemsData,setItemData] = useState([])


  // call api by using use effect
  useEffect(()=>{
    const getAllItems = async() => {
      try {
        const {data} = await axios.get('/api/items/get-item')
        setItemData(data);
        console.log(data);
      } 
      catch (error) {
        console.log(error)
      }
    }

    getAllItems();

  },[])

  return (
    <DefaultLayout>
      <Row>
        {
          itemsData.map(item =>(
            <Col xs={24} lg={6} md={12} sm={6}>
            <ItemList item={item}/>
            </Col>
          ))
        }
      </Row>
    </DefaultLayout>
  ) 
}

export default Homepage
