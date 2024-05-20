import styled from "styled-components"

const firstBreakpoint = '700px'
const secondBreakpoint = '530px'
const thirdBreakpoint = '380px'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 0 0.5rem;
`

export const Main = styled.main`
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Footer = styled.footer`
    width: 100%;
    height: 100px;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h1`
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
    text-align: center;

    @media (max-width: ${firstBreakpoint}) {
        font-size: 3rem;
    }

    @media (max-width: ${secondBreakpoint}) {
        font-size: 2.5rem;
    }

    @media (max-width: ${thirdBreakpoint}) {
        font-size: 2rem;
    }
`

export const Description = styled.p`
    line-height: 1.5;
    font-size: 1.5rem;
    text-align: center;

    @media (max-width: ${firstBreakpoint}) {
        font-size: 1.25rem;
    }

    @media (max-width: ${secondBreakpoint}) {
        font-size: 1rem;
    }

    @media (max-width: ${thirdBreakpoint}) {
        font-size: 0.875rem;
    }
`
