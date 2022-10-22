import React,{useState,useEffect} from "react";
import { useSelector } from "react-redux";
import { Layout, Menu } from "antd";
import { NavLink,useNavigate } from "react-router-dom";
// import { rootReducer } from './redux/rootReducer';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  LogoutOutlined,
  HomeOutlined,
  CopyOutlined,
  UnorderedListOutlined,
  ShoppingCartOutlined
} from "@ant-design/icons";
import "../styles/DefaultLayout.css";





    
const { Header, Sider, Content } = Layout;

const  DefaultLayout = ({children})=> {
  const navigate = useNavigate();
  const {cartItems} = useSelector(state => state.rootReducer)
  const [collapsed,setCollapsed] = useState(false)

  // const dispatch =useDispatch();
  //change class based component to functional components
  // state = {
  //   collapsed: false,
  // };

  const toggle = () => {
    setCollapsed(
      !collapsed,
    );
  };

  //TO GET localstorage data

  useEffect(()=>{
      localStorage.setItem('cartItem',JSON.stringify(cartItems))
  },[cartItems])

    return (
      <Layout>

        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <h1 className="text-center text-light font-wight-bold mt-4">POS</h1>
          </div>
          <Menu theme="dark"  mode="inline"  defaultSelectedKeys={window.location.pathname}  >
                                      
            <Menu.Item key="/" icon={<HomeOutlined />}>
              <NavLink to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Item key="/bills" icon={<CopyOutlined />}>
              <NavLink to="/bills">Bills</NavLink>
            </Menu.Item>
            <Menu.Item key="/items" icon={<UnorderedListOutlined />}>
              <NavLink to="/items">Items</NavLink>
            </Menu.Item>
            <Menu.Item key="/customers" icon={<UserOutlined />}>
              <NavLink to="/customers">Cutomers</NavLink>
            </Menu.Item>
            <Menu.Item key="/logout" icon={<LogoutOutlined />}>
              Logout
            </Menu.Item>

            
          </Menu>
        </Sider>


        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle,
              }
            )}

            <div className="cart-item d-flex justify-content-space-between flex-row" onClick={()=>navigate('/cart')}>
              <p>{cartItems.length}</p>
              <ShoppingCartOutlined/>
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  
}



export default DefaultLayout