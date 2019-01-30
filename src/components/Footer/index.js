import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const footer = () => (
          <Container>
                    <Content>
                              <p>Feito com <FontAwesomeIcon icon={faHeart} color='#ff0000' /> por Gustavo Leste</p>
                              <Logos>
                                        <a href='https://github.com/gustavoleste' target='_blank' rel='external noopener noreferrer'><FontAwesomeIcon icon={faGithub} color='#fff' size='lg'/></a> <a href='https://www.linkedin.com/in/gustavoleste/' target='_blank' rel='external noopener noreferrer'><FontAwesomeIcon icon={faLinkedin} color='#fff' size='lg'/></a> 
                              </Logos>
                    </Content>
          </Container>
)

export default footer

const Container = styled.footer`
          background: #000;
`
const Content = styled.div`
          color: #fff;
          padding: 1rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          
          p{
                    margin-bottom: 0.5rem;
          }

          @media (min-width: 1024px){
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;

                    p{
                              margin:0;
                              font-size: 1.5rem;
                    }
          }
`
const Logos = styled.div`

          svg{
                    margin: 0 0.5rem;
          }          
`