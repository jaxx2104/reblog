import styled from 'styled-components'

const gradient = 'linear-gradient(0deg, rgba(0,0,0,.75), rgba(1,1,1,.25) 50%)'

const Section = styled.section`
  padding: 2rem 0;
  position: relative;
  margin: 0 auto;
  text-align: ${props => (props.center ? 'center' : 'left')};
  color: ${props =>
    props.primary || props.dark ? 'white' : props.theme.accent};
  border-bottom: 1px solid ${props => props.theme.sub};

  background: ${props => {
    if (props.dark) return gradient
    if (props.primary) return props.theme.main
    return 'inherit'
  }};

  a {
    color: ${props =>
      props.primary || props.dark ? 'white' : props.theme.accent};
  }
`

export default Section