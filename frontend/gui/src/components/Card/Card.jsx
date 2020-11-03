import React from 'react';
import { Card, Avatar, Skeleton } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;


class CustomCard extends React.Component {

    

    render (){
        return (
            <Skeleton loading={this.props.loading} avatar active>
                <Card
                    hoverable
                    style={{ width: 300 }}
                    cover={
                    <img
                        alt="example"
                        src={this.props.img}
                    />
                    }
                    actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                    ]}
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