import styled from 'styled-components'


const StyledCard = styled.div`
    width: 350px;
    height: 400px;
    position: absolute;
	top:0;
	bottom: 0;
	left: 0;
	right: 0;
    margin: auto;
    background: linear-gradient(170deg, hsl(213, 19%, 18%) 0%, hsl(216, 12%, 8%) 100%);
    border-radius: 15px;
    padding: 25px;

    .hide{
        display: none;
    }
`


export default StyledCard 

