import styled from "styled-components"

export const StyledButton = styled.button`
    border: 2px solid #1F5EFF;
    background-color: ${props => props.variant === 'outline' ? 'transparent' : '#1F5EFF'};
    color: ${props => props.variant === 'outline' ? '#1F5EFF' : 'white'};
    padding: 10px 32px;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.5s ease-in-out; 
    &:hover {
        background-color: ${props => props.variant !== 'outline' ? 'transparent' : '#1F5EFF'};
        color: ${props => props.variant !== 'outline' ? '#1F5EFF' : 'white'};
    }
    `

    export const SecondaryButton = styled(StyledButton)`
        background: #78787a;
        border: #78787a;
    `

    export const FancyButton = styled(StyledButton)`
        background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
        border: none;
    ` 

    export const DarkButton = styled(StyledButton)`
        border: 2px solid ${props => props.theme.dark.primary};
        background-color: ${props => props.theme.dark.primary};
        color: ${props => props.theme.dark.text};
    `

   