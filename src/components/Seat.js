import styled from 'styled-components';

const Seat = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 5px;
    background-color: green;
    margin: 2px;
    display: inline-block;
    cursor: pointer;
    color: green;
    font-size: 10px;
    line-height: 20px;
    text-align: center;
    user-select: none;

    &:hover {
        color: #fafafa;
        background-color: purple;
    }
`;

export default Seat;