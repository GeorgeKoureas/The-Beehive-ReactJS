import React from 'react'
import { Row, Col } from 'antd';
import axios from 'axios'
import CustomCard  from '../Card/Card'




class CompetitionDetails extends React.Component{
    constructor(){
      super()
      this.state = {
        comp: {},
      }
    }

    componentDidMount(){
        const competitionID = this.props.match.params.competitionID
        axios.get(`http://127.0.01.:8000/api/${competitionID}`)
        .then(res => {
            this.setState({
            comp: res.data,   //FIX THE LOADING ANIMATION TO CUT AFTER DATA IS FETCHED
            })
            console.log(res.data);
        })
    }

    render(){
        // const competitions = this.state.competitions.map(competition => <CustomCard key={competition.id} title={competition.name} description={competition.description_small} img={competition.cover_image}/>)
        return (
            <Row>
                <Col span={16}></Col>
                <Col span={8}><CustomCard title={this.state.comp.name} description={this.state.comp.description_large} img={this.state.comp.cover_image} ></CustomCard></Col>
            </Row>
            // <CustomCard title={this.state.comp.name} description={this.state.comp.description_large} img={this.state.comp.cover_image} ></CustomCard>
        )
    }
}


export default CompetitionDetails