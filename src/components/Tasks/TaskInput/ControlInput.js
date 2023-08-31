import styled from 'styled-components'

const ControlInput = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${({ isvalidinput }) => isvalidinput ? 'inherit' : '#FFC9C9'};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${({ isvalidinput }) => isvalidinput ? '#ccc' : '#FFC9C9'};
    background-color: ${({ isvalidinput }) => isvalidinput ? '#ccc' : '#FFC9C9'};
    font-style: ${({ isvalidinput }) => isvalidinput ? 'inherit' : 'italic'};
    color: ${({ isvalidinput }) => isvalidinput ? 'inherit' : 'red'};
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