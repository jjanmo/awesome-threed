import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 234, 167, 0.8);
`
export const Title = styled.h1`
  margin: 2rem 0 4rem;
  font-size: 4rem;
`
export const GridContainer = styled.div`
  display: grid;
  gap: 5rem;
  grid-template-columns: repeat(3, 1fr);
`
export const Item = styled.div`
  width: 20rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2rem;
  border-radius: 1rem;
  background-color: #fdcb6e;
  color: white;
  cursor: pointer;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`
