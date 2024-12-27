import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-image: url('https://www.transparenttextures.com/patterns/brushed-alum.png');
`

export const Box = styled.div`
    background-color: #fff;
    border: 1px solid #808080;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    h1 {
        text-align: center;
    }
    width: 50%;
    button {
       font-size: large;
    }
    justify-content: center;
`

export const BoxSelect = styled.div`
    display: flex;
    align-items: center;
    span {
        margin-left: 10px;
    }
`