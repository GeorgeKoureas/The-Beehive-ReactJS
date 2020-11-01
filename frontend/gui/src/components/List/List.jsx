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

        // const competitions = this.state.competitions.map(competition => <CustomCard key={competition.id} title={competition.name} description={competition.description_small} img={competition.cover_image}/>)

        return (
          <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={this.state.competitions}
          renderItem={item => (
          <List.Item>
            <CustomCard title={item.name} description={item.description_small} img={item.cover_image}></CustomCard>
          </List.Item>
          )}
      />
        )
    }
}


export default CompetitionList