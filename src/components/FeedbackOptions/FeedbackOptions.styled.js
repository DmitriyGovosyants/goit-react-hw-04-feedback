import styled from "@emotion/styled";

export const Controls = styled.ul`
  display: flex;
`

export const ControlsItem = styled.li`
  background-color: ${p => p.theme.colors.btnBackground};
  border-radius: 10px;
  overflow: hidden;
  :not(:last-child) {
    margin-right: ${p => p.theme.spacing(3)};
  }
`

export const Button = styled.button`
  color: ${p => p.theme.colors.white};
  padding: ${p => p.theme.spacing(2)};
  text-transform: capitalize;
  
  :hover {
    background-color: ${p => p.theme.colors.accent};
  }
`

