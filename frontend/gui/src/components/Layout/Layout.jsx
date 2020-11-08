import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';        
import styles from "./Layout.module.css"
import cx from "classnames"
import { Link } from 'react-router-dom'
const { Header, Content, Footer } = Layout;


class CustomLayout extends React.Component{
    render() {
        return (
            <Layout className="layout">
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal">
                    <Menu.Item key='1'>nav 1<Link to='/' /></Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px', marginTop: 84 }}>
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <div className={cx(styles.sitelayoutcontent)}>{this.props.children}</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        )
    }
}


export default CustomLayout