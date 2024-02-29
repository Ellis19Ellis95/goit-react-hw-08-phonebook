import styled from '@emotion/styled';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const FormLabel = styled.label`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const FormInput = styled.input`
    width: 100%;
    height: 35px;
    outline: transparent;
    border-radius: 5px;
    border: 1px solid #000;
    transition: border-color 0.3s linear;
    box-sizing: border-box;
    font-size: 20px;
    padding: 0 15px;

    &:is(:hover, :focus) {
        border-color: black;
    }
`;

export const FormButton = styled.button`
    height: 35px;
    background-color: #3e2361;
    border-radius: 5px;
    border: transparent;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 700;
    color: #fff;
`;