import styled from 'styled-components';

// Estilização do checkbox
export const CheckboxWrapper = styled.label`
  display: inline-block;
  cursor: pointer;
  height: 25px;

`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 25px;
`;

export const StyledCheckbox = styled.div`
    background: transparent;
    border: none;
    transition: all 150ms;
    height: 25px;


  &:hover {
    scale: 1.2;
}
${HiddenCheckbox}:checked + & {
    background: transparent;
    border: none;
    height: 25px;
    scale: 1.2;
  }
`;