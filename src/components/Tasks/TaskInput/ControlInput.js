import styled from 'styled-components'

const ControlInput = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => props.onInvalid ? 'inherit' : '#FFC9C9'};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => props.onInvalid ? '#ccc' : '#FFC9C9'};
    background-color: ${props => props.onInvalid ? '#ccc' : '#FFC9C9'};
    font-style: ${props => props.onInvalid ? 'inherit' : 'italic'};
    color: ${props => props.onInvalid ? 'inherit' : 'red'};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #c8e1e4;
    border-color: #00358b;
  }
`

export default ControlInput