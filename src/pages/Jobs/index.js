import React, {Component, Fragment} from 'react'
import styled from 'styled-components'
import JobList from '../../components/JobsList'
import api from '../../services/api'
import Pagination from '../../components/Pagination'

export default class Jobs extends Component{          

          state = {
                    jobs:[],
                    isloading: false,
                    pages:{}
          }
          
          componentDidMount(){
                    this.getRepoJobs()
          }

          componentDidUpdate(prevProps, prevState){
                    
                    if(this.props.match.params.id !== prevProps.match.params.id){
                              this.getRepoJobs()
                    }

                    if(this.state.pages.current !== prevState.pages.current){
                              this.changePage()
                    }
          }

          getRepoJobs = async () => {
                    try{
                              this.setState({
                                        isloading: true
                              })
                              const repo = this.props.match.params.id
                              const jobList = await api.get(`${repo}/vagas/issues`)
                              const pagesNumber = this.totalPages(jobList.headers.link)
                              const pages = {
                                        prev: 0,
                                        current: 1,
                                        next: 2,
                                        total: pagesNumber
                              }
                              this.setState({
                                        jobs: jobList.data,
                                        pages,
                                        isloading: false
                              })
                    }catch(error){
                              console.log(error)
                              this.setState({
                                        isloading: false
                              })
                    }
          }

          changePage = async () =>{
                    try{
                              this.setState({
                                        isloading: true
                              })
                              const repo = this.props.match.params.id
                              const page = this.state.pages.current
                              const jobList = await api.get(`${repo}/vagas/issues?page=${page}`)
                              this.setState({
                                        jobs: jobList.data,
                                        isloading: false
                              })
                    }catch(error){
                              console.log(error)
                    }
          }

          nextPage = () =>{
                    const {current,next,total} = this.state.pages
                    const pages = {
                              prev: current,
                              current: next,
                              next: next+1,
                              total
                    }
                    this.setState({
                              pages
                    })
          }

          prevPage = () =>{
                    const {prev,current,total} = this.state.pages
                    const pages = {
                              prev: prev-1,
                              current: prev,
                              next: current,
                              total
                    }
                    this.setState({
                              pages
                    })

          }          

          totalPages = link => {
                    const indexOne = link.lastIndexOf('e=')
                    const indexTwo = link.lastIndexOf('>')
                    const pageNumber = Number(link.slice(indexOne+2,indexTwo))
                    return pageNumber
          }

          render(){
                    console.log(this.state.pages)
                    const content = this.state.isloading ? <h1>Carregando...</h1> : <Fragment>
                                                                                          <JobList jobs={this.state.jobs}/>
                                                                                          <Pagination pages={this.state.pages}
                                                                                                    next={this.nextPage}
                                                                                                    prev={this.prevPage}
                                                                                          />
                                                                                </Fragment>;
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


