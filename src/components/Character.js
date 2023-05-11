// Write your Character component here
/** id:0
 * name:"Luke Skywalker"
 * birth_year: "19BBY"
   eye_color:"blue"
   gender:"male"
   hair_color:"blond"
   


[]
 */

import React from 'react';
import styled from 'styled-components';


const StyledDets = styled.div`

h2{
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-contents:center;
  
  color:${props =>props.theme.nameColor};
}
  .card-wrapper {
   display:flex;
   flex-direction:row;
   align-items:center;
   justify-items:center;
  

   }
   .cards{
    width:300px;
    border:10px solid black;
    padding:50px;
    margin:20px;
    display:flex;
    flex-wrap:wrap;
   }

 
p{
 
  font-weight:bolder;
}
`

const Character = props => {

return(
        <StyledDets className='characters'>
          <div className="cards">
          <div className="card-wrapper">
          <h2>{props.info.name}</h2>
          <p>{props.info.birth_year}</p>
          <p>{props.info.gender}</p>
           
            <p> Films: {props.info.films}</p>
          </div>
          </div>
        </StyledDets>
    )
};

export default Character;
