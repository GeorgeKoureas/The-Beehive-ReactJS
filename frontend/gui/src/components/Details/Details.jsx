import React from 'react'
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
            <CustomCard title={this.state.comp.name} ></CustomCard>
        )
    }
}


export default CompetitionDetails