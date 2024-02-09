import color from "constants/color";
import { useState } from "react"
import DropDownPicker, { DropDownPickerProps, ValueType } from "react-native-dropdown-picker"

export const SingleSelectDropdown = (props: DropDownPickerProps<ValueType>) => {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <DropDownPicker {...props} open onOpen={()=>setOpen(true)} onClose={()=>setOpen(false)} theme="LIGHT" style={{borderColor:open?color.PRIMARY:color.BORDER_LIGHT}} />
    )
}

