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
  font-family: Roboto, sans-serif;
  text-align: center;
  margin: 15px;
`;