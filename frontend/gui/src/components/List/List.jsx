import React from 'react'
import { List, Card } from 'antd'



const Competition = (props) => {

    const data = [
        {
          title: 'Title 1',
        },
        {
          title: 'Title 2',
        },
        {
          title: 'Title 3',
        },
        {
          title: 'Title 4',
        },
      ];

    return (
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={data}
                renderItem={item => (
                <List.Item>
                    <Card title={item.title}>Card content</Card>
                </List.Item>
                )}
            />
    )
                }



class CompetitionList extends React.Component{
    render(){
        return (
            <Competition />
        )
    }
}


export default CompetitionList