import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft,faChevronRight} from '@fortawesome/free-solid-svg-icons'

const Pagination = (props) =>{
          const {prev, current, next, total} = props.pages
          const prevButton = prev > 0;
          const nextButton = next <= total;
          return(
                    <ContainerPag>
                              <PrevButton show={prevButton} onClick={props.prev}><FontAwesomeIcon icon={faChevronLeft} /></PrevButton>
                              <p>{current} de {total}</p>
                              <NextButton show={nextButton} onClick={props.next}><FontAwesomeIcon icon={faChevronRight} /></NextButton>
                    </ContainerPag>
          )
}

export default Pagination

const ContainerPag = styled.div`
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 2rem 0;

          button {
                    padding: 0.5rem 1rem;
                    background: #fff;
                    border: 1px solid #000;
                    border-radius: 5px;
          }

          p{
                    padding: 0 0.5rem;
          }
`
const PrevButton = styled.button`
          cursor: ${val => val.show ? 'pointer' : 'default'};
          opacity: ${val => val.show ? 1 : 0.2};
`

const NextButton = styled.button`
          cursor: ${val => val.show ? 'pointer' : 'default'};
          opacity: ${val => val.show ? 1 : 0.2};
`