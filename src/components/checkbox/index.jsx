import { Checked, UnChecked } from "../Icons"
import {CheckboxWrapper, HiddenCheckbox, StyledCheckbox} from "./styles"


export function  Checkbox ({ className, checked, ...props }) {
    return (
    <CheckboxWrapper className={className}>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked}>
        {checked ? <Checked /> : <UnChecked />}
        </StyledCheckbox>
    </CheckboxWrapper>
    ) 
  }
  
