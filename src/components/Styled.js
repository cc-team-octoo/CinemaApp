import styled from 'styled-components';

export const StyledSeat = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 5px;
    background-color: ${props => props.checked ? 'black' : 'green'};
    margin: 3px 2px;
    display: inline-block;
    cursor: pointer;
    color: ${props => props.checked ? '#fafafa' : 'green'};
    font-size: 12px;
    line-height: 30px;
    text-align: center;
    user-select: none;
    transition: background-color .1s;

    &:hover {
        color: #fafafa;
        background-color: purple;
    }
`;

export const CheckboxContainer = styled.label`
  display: inline-block;
  vertical-align: middle;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledRow = styled.div`
  &::before, &::after  {
    content: '${props => props.rowName}';
    margin: 2px;
    font-size: 12px;
  }
`;

export const StyledRoom = styled.div`
  text-align: center;
  margin: 15px;
`;

export const StyledFormContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  max-width: 500px;
  margin: auto;
  padding: 1rem;
  border: 2px solid #2F4858;
  border-radius: 5px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-top: 10px;
`;

export const StyledInput = styled.input`
  border: 1px solid grey;
  border-radius: 5px;
  font-size: 1rem;
  padding: 8px;
  margin: 5px;

  &:focus {
    outline: none;
    box-shadow: 2px 4px 8px #87898a;
  };

  &::placeholder {
    color: #87898a;
  }
`;

export const StyledError = styled.p`
  font-size: .8rem;
  color: #D8000C;
  background-color: #FFBABA;
  text-align: center;
  padding: 2px;
  margin: 2px;
`;

export const StyledButton = styled.button`
  font-size: 1.2rem;
  color: #fafafa;
  padding: .5rem 1.2rem;
  border: none;
  border-radius: 5px;
  background-color: #2F4858;
  margin: 10px;
  cursor: pointer;

  &:disabled, &:disabled&:hover {
    background-color: rgba(47, 72, 88, .6);
    box-shadow: none;
  }

  &:focus, &:active, &:hover {
    outline: none;
    background-color: #005263;
    box-shadow: 2px 4px 8px #87898a;
  }
`;