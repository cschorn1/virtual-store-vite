import styled, { css } from "styled-components";

export const Formulario = styled.form`
    display: flex;
    width: min(100% - 2rem, 42rem);
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
    border-radius: 1rem;
    background-color: white;
    padding: 1.5rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
`;

const estilosCampo = css`
    border: 1px solid #cbd5e1;
    border-radius: 0.5rem;
    padding: 0.75rem 1rem;
    outline: none;
    transition: border-color 150ms, box-shadow 150ms;

    &:focus {
        border-color: #3b82f6;
        box-shadow: 0 0 0 2px #bfdbfe;
    }
`;

export const Campo = styled.input`
    ${estilosCampo}
`;

export const CampoTexto =styled.textarea`
    ${estilosCampo}
`;

export const BotaoCadastrar = styled.button`
    border: 0;
    border-radius: 0.5rem;
    padding: 0.75rem 1rem;
    font-weight: 600;
    color: white;
    background-color: #3b82f6;
    cursor: pointer;
    transition: background-color 150ms;

    &:hover {
        background-color: #2563eb;
    }
`;