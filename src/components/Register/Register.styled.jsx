import styled from "@emotion/styled";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 360px;
    border: 3px solid #666bad;
    border-radius: 5px;
    padding: 10px;
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Input = styled.input`
    height: 30px;
    border-radius: 5px;
    outline: transparent;
    border: 3px solid #666bad;
    padding: 0px 20px;
`

export const Button = styled.button`
    height: 40px;
    font-size: 14px;
    text-transform: uppercase;
    border-radius: 8px;
    border: 3px solid #666bad;
    cursor: pointer;
`