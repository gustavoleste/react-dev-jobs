import React, {Component} from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronCircleDown,faChevronCircleUp} from '@fortawesome/free-solid-svg-icons'
import MarkDown from 'react-markdown'

export default class JobCard extends Component{

          state = {
                    show: false
          }

          showHandle = () =>{
                    this.setState( prevState => (
                              {
                                        show: !prevState.show
                              }
                    ))
          }
          render(){
                    const {title,user,labels,body} = this.props.job
                    return(
                              <Container>
                                        <Title>{title}</Title>                                        
                                        <Labels>Labels: {labels.map(label => <Label color={label.color}>{label.name}</Label>)}</Labels>
                                        <User>Criado por: {user.login}</User>
                                        <MaisInfo show={this.state.show} onClick={this.showHandle}><FontAwesomeIcon icon={faChevronCircleDown} size='2x'/></MaisInfo>
                                        <Description show={this.state.show}>{body}</Description>
                                        <MenosInfo show={this.state.show} onClick={this.showHandle}><FontAwesomeIcon icon={faChevronCircleUp} size='2x'/></MenosInfo>                                                
                              </Container>
                    )
          }
}

const Container = styled.article`
          border: 1px solid #e6e6e6;          
          padding: 1rem 1.5rem;
          display:flex;
          flex-direction: column;
`
const Title = styled.p`
          font-size: 1rem;
          font-weight: bold;
          padding-bottom: 0.5rem;
          color: #333333;
          text-align: justify;

          @media (min-width: 700px){
                    font-size: 1.5rem;
          }
`

const User = styled.p`
          padding-bottom: 0.5rem;
          font-family: monospace;
          align-self: flex-start;

          @media (min-width: 700px){
                    font-size: 1.2rem;
          }
`

const Labels = styled.ul`
          display:flex;
          align-items: center;
          font-size: 1rem;
          margin-bottom: 0.5rem;

          @media (min-width: 700px){
                    font-size: 1.2rem;
          }
`
const Label = styled.li`
          margin-right: 0.5rem;                    
          padding: 0.3rem;
          border-radius: 5px;           
          background: ${val => `#${val.color}`};
          font-size: 0.8rem;
          font-family: sans-serif;
          font-weight: 500;
`
const Description = styled(MarkDown)`
          display: ${isShow => isShow.show ? `block` : `none`};
          padding-top: 0.7rem;
          text-align: left;

          *{
                    margin: 0.5rem 0;
          }  

          @media (min-width: 700px){
                    p,li{
                              font-size: 1.2rem;
                    }
          }        
`
const MaisInfo = styled.button`
          display: ${isShow => isShow.show ? `none` : `block`};
          margin-top: 0.5rem;
          border-radius: 100px;
          background: #fff;
`
const MenosInfo = styled(MaisInfo)`
          display: ${isShow => isShow.show ? `block` : `none`};
`
