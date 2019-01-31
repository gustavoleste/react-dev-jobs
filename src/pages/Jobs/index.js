import React, {Component} from 'react'
import styled from 'styled-components'
import JobList from '../../components/JobsList'
import api from '../../services/api'

export default class Jobs extends Component{          

          state = {
                    jobs:[],
                    isloading: false
          }
          
          componentDidMount(){
                    this.getJobs()
          }

          componentDidUpdate(prevProps){
                    if(this.props.match.params.id !== prevProps.match.params.id){
                              this.getJobs()
                    }
          }

          getJobs = async () => {
                    try{
                              this.setState({
                                        isloading: true
                              })
                              const repo = this.props.match.params.id
                              const jobList = await api.get(`${repo}/vagas/issues`)
                              this.setState({
                                        jobs: jobList.data,
                                        isloading: false
                              })
                    }catch(error){
                              console.log(error)
                              this.setState({
                                        isloading: false
                              })
                    }
          }

          render(){
                    const content = this.state.isloading ? <h1>Carregando...</h1> : <JobList jobs={this.state.jobs}/>;
                    return(
                              <Container>  
                                        {content}                                                                                         
                              </Container>
                    )
          }
}

const Container = styled.main`
          max-width: 1024px;
          margin: auto;

          h1{
                    text-align: center;
                    margin: 1rem;
          }
`

