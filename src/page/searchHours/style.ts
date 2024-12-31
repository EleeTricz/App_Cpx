import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;  /* Ocupa a tela inteira */
    background-image: url('/backgroundCpx.png');
    background-size: cover;
    background-position: center;  /* Centraliza a imagem*/
    background-repeat: no-repeat;
    font-family: sans-serif;
`;

export const Box = styled.div`
    
    background-color: rgba(211, 211, 211, 0.6);  /* Cinza clarinho com 70% de opacidade */
    border: 1px solid #808080;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    width: 50%;
    justify-content: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  /* Sombra para dar profundidade */

    h1 {
        text-align: center;
        color: white;  /* Texto em branco */
    }

    button {
        font-size: large;
        color: white;  /* Texto do botão em branco */
        background-color: #007bff;  /* Cor de fundo do botão */
        border: none;
        border-radius: 5px;
        padding: 10px;
        cursor: pointer;

        &:hover {
            background-color: #0056b3;  /* Efeito ao passar o mouse */
        }
    }
`;

export const BoxSelect = styled.div`
    display: flex;
    align-items: center;

    span {
        margin-left: 10px;
        color: black;  /* Texto em branco */
    }
`;

export const TextArea = styled.textarea`
    background-color: rgba(255, 255, 255, 0.3);  /* Fundo bem transparente */
    color: white;  /* Texto branco */
    border: 1px solid #808080;
    border-radius: 5px;
    padding: 10px;
    resize: vertical;  /* Permite redimensionar verticalmente */

    &::placeholder {
        color: white;  /* Placeholder em branco */
    }
`;

export const FormItemLabel = styled.label`
    color: white;  /* Texto do label em branco */
    font-size: 1rem;  /* Ajuste o tamanho se necessário */
    margin-bottom: 8px;  /* Distância entre o label e o campo */
    text-align: center;
    display: block;
    width: 100%;
`;

export const Footer = styled.footer`
    position: relative;
    padding: 20px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%; 

`;


export const Watermark = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 14px;
    color: #f1f1f1;
    font-family: Verdana, sans-serif;
    font-style: italic;
    
`;
