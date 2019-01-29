import React, {Component} from 'react'
import styled from 'styled-components'
import Nav from './NavBar'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

class Header extends Component{
         
          state = {
                    show: false
          }

          showAndCloseSideBar= () => {
                    this.setState( prevState => (
                              {
                                        show: !prevState.show
                              }
                    ))
          }

          render(){
                    return(
                              <Container>
                                        <Content>
                                                  <Title>
                                                            <h1>Dev Jobs</h1>
                                                            <button onClick={this.showAndCloseSideBar}><FontAwesomeIcon icon={faBars} color='#fff' size='2x'/></button>
                                                  </Title>
                                                  <Nav show={this.state.show} close={this.showAndCloseSideBar}/>
                                        </Content>                                        
                              </Container>
                    )
          }
}

export default Header

const Container = styled.header`
          background: #262626;
          display: flex;
          align-items: center;
          justify-content: center;
          max-height: 69px;       
`
const Content = styled.div`
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: space-between;

          @media (min-width: 1024px){
                    max-width: 1024px;
          }
`
const Title = styled.div`
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #fff;
          padding: 1rem;

          button{
                    background: #262626;
                    outline: none;
          }

          @media (min-width: 1024px){
                    button{
                              display: none;
                    }
          }
`