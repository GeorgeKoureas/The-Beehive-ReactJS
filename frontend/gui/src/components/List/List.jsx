import React from 'react'
import axios from 'axios'
import { List } from 'antd'
import CustomCard  from '../Card/Card'



class CompetitionList extends React.Component{


    state = {
      competitions: []
    }

    componentDidMount(){
      axios.get('http://127.0.01.:8000/api/')
        .then(res => {
          this.setState({
            competitions: res.data
          })
          console.log(res.data);
        })
    }

    //PASS THE API DATA TO THE CARD COMPONENT ITSELF (FOR NEXT TIME)

    render(){
        return (
          <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={this.state.competitions}
          renderItem={item => (
          <List.Item>
              <CustomCard title={this.state.competitions.name}></CustomCard>
          </List.Item>
          )}
      />
        )
    }
}


export default CompetitionList