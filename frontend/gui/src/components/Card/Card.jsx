import React from 'react';
import styles from "./Card.module.css"
import { Card, Avatar, Skeleton } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;


class CustomCard extends React.Component {

    

    render (){
        return (
            <Skeleton loading={this.props.loading} avatar active>

                    <Card
                        hoverable
                        bordered={true}
                        style={{ width: 300, borderRadius: 12, borderColor: `#d3d3d3` }}
                        cover={
                        <img
                            style={{ padding: 7, borderRadius: 12 }}
                            alt="example"
                            src={this.props.img}
                        />
                        }
                        // actions={[
                        // <SettingOutlined key="setting" />,
                        // <EditOutlined key="edit" />,
                        // <EllipsisOutlined key="ellipsis" />,
                        // ]}
                    >
                            <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title = {this.props.title}
                            description={this.props.description}
                            />
                    </Card>
            </Skeleton>
        )
    }
}


export default CustomCard