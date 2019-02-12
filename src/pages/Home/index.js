import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDesktop} from '@fortawesome/free-solid-svg-icons'

const home = () => (
          <Container>
                    <Header>
                              <FontAwesomeIcon icon={faDesktop} size='5x' color='#fff'/>                              
                              <h1>DevJobs</h1>
                              <p>As vagas dos três maiores repositórios para desenvolvedores do Brasil em um só lugar.</p>
                    </Header>
                    <Repos>
                              <h2>Repositórios:</h2>
                              <Logos>
                                        <ReactBrasil>
                                                <img src='https://avatars2.githubusercontent.com/u/16929016?s=400&u=60f7754f634a169adc2027c05a359114d92c4a24&v=4' alt='logo React-Brasil'/>
                                                  <p>react-brasil</p>                                        
                                        </ReactBrasil>
                                        <FrontEndBrasil>
                                                  <img src='https://raw.githubusercontent.com/frontendbr/brand/master/src/png/logo-600px--horizontal--color.png' alt='logo Front-End Brasil'/>                                        
                                        </FrontEndBrasil>
                                        <BackEndBrasil>
                                                  <img src='https://avatars3.githubusercontent.com/u/30732658?v=4&s=200.jpg' alt='Logo Backend Brasil'/>                                        
                                        </BackEndBrasil>
                              </Logos>                                                            
                    </Repos>
          </Container>
)

export default home

const Container = styled.main`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    background: #404040;                   
`
const Header = styled.section`          
          color: #fff;
          text-align: center;
          padding: 2rem 1rem;

          h1{
                    margin: 1rem 0;
                    font-size: 4rem;
                    font-family: sans-serif;
          }

          p{
                    font-size: 1.5rem;
                    font-style: italic;
                    font-family: monospace;
                    line-height: 1.5;
          }
`

const Repos = styled.section`          
          text-align: center;
          padding: 2rem 1rem;
          background: #fff;
          width: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          
          @media (min-width: 1024px){
                    h2{
                              font-size: 3rem;
                              margin-bottom: 3rem;
                    }
          }
`
const Logos = styled.div`
          @media (min-width: 1024px){
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    max-width: 1024px;
          }
`
const ReactBrasil = styled.div`
          margin: 2rem 0;
          
          p{
                    font-size: 2rem;
                    color: #00D8FF;
                    margin-bottom: 1rem;
          }

          img{
                    width: 20rem;
          }

          @media (min-width: 1024px){
                    padding: 3rem;
                    margin:0;
          }
`
const FrontEndBrasil = styled.div`           
          img{
                    width: 20rem;
          }

          @media (min-width: 1024px){
                    padding: 3rem;
          }
`
const BackEndBrasil = styled.div`          
          img{
                    width: 20rem;
          }
`