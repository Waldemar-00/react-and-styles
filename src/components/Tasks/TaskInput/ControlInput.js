import styled from 'styled-components'

const ControlInput = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #c8e1e4;
    border-color: #00358b;
  }
  &.invalid input {
    background-color: #FFC9C9;
    border-color: #FFC9C9;
    font-style: italic;
    color: red;
  }
  &.invalid label {
    color: #FFC9C9;
  }
`

export default ControlInput