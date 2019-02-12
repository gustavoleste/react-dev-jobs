import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes, faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const nav = props => (
          <Container show={props.show}>
                    <Header>
                              <button onClick={props.close}><FontAwesomeIcon icon={faTimes} color='#404040' size='2x'/></button>
                    </Header>
                    <LinksMenu>                              
                              <LinksJobs>
                                        <h2>Vagas</h2>
                                        <ul>
                                                  <li onClick={props.close}><Link to='/vagas/frontendbr'>Front-End</Link></li>
                                                  <li onClick={props.close}><Link to='/vagas/react-brasil'>React</Link></li>
                                                  <li onClick={props.close}><Link to='/vagas/backend-br'>Back-End</Link></li>
                                        </ul>
                              </LinksJobs>                              
                              <h2><a href='https://github.com/gustavoleste/vagas-dev' target='_blank' rel='external noopener noreferrer'>GitHub <FontAwesomeIcon icon={faExternalLinkAlt} size='xs'/></a></h2>                              
                    </LinksMenu>
          </Container>
)

export default nav

const Container = styled.nav`
          background: #fff;
          width: 250px;
          height: 100%;
          position: fixed;
          right: 0;
          top:0;
          border-left: 10px;
          box-shadow: 2px 10px 8px #ccc;
          display: ${props => props.show ? 'block' : 'none'};
          overflow-x: hidden;
          z-index: 1;

          @media (min-width: 1024px){
                    display: flex;
                    width: 400px;
                    height: 100%;
                    background: #000;
                    border-left: 0;
                    box-shadow: 0 0 0;
                    z-index: 0;
                    color: #fff;
                    position: static;
          }
`
const Header = styled.div`
          padding: 0.5rem 1rem;
          border-bottom: 1px solid #ccc;
          display: flex;
          justify-content: flex-end;

          button{
                    background: #fff;
          }

          @media (min-width: 1024px){
                    display: none;
          }
`

const LinksMenu = styled.div`
          padding-top: 1rem;
          margin: 0 1.5rem;       

          a{
                    text-decoration: none;
                    color: #000;                    
          }          

          @media (min-width: 1024px){ 
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;
                    padding: 0;
                    margin: 0;
                   
                    svg{
                              color: #fff;
                    }

                    a{
                              color: #fff;
                    }                    
          }
`

const LinksJobs = styled.div`         

         ul{
                    border-bottom: 1px solid #ccc;
                    margin-bottom: 1rem;
                    padding: 1rem 0;
          }

          ul a{
                    font-family: monospace;
          }

          li{
                    padding: 0.5rem 0;
          } 
          
          @media (min-width: 1024px){

                    h2{                              
                              padding: 1.3rem;
                              cursor: pointer;
                    }                    

                    :hover ul {
                              display: flex;
                              flex-direction: column;
                              position: absolute;
                    }

                    ul{
                              border: 0;
                              background: #000;
                              display: none;
                              border-radius: 0 0 5px 5px;
                              z-index: 1;
                    }

                    a{                              
                              padding: 1rem;
                              color: #fff;
                    }

                    a:hover{
                              color: #00bfff;
                              font-weight: bold;
                    }
          }
`