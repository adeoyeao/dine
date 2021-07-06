import React, {ReactElement} from "react"
import { SmallLogo, LargeLogo, LogoProps } from "./Logo.styles"


const Logo = (props: LogoProps): ReactElement => {
    const LogoOptions = {
        small: <SmallLogo />,
        large: <LargeLogo />
    }

    return (
        LogoOptions[props.logoSize]
    )
}

export default Logo

