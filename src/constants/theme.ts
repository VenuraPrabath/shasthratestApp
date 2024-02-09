import { ThemeProp } from "react-native-paper/lib/typescript/types"
import fonts from "./fonts"
import color from "./color"

const theme:ThemeProp = {
    fonts,
    colors:{
        primary: color.PRIMARY,
        onPrimary: color.ACCENT,
        background: color.SECONDARY,
        onSurface: color.ACCENT,
        onSurfaceVariant: color.BORDER,
        outline: color.BORDER,
        "primaryContainer": "#abc123",
        "onPrimaryContainer": "rgb(42, 23, 0)",
        "secondary": "rgb(0, 104, 116)",
        "onSecondary": "rgb(255, 255, 255)",
        "secondaryContainer": "rgb(151, 240, 255)",
        "onSecondaryContainer": "rgb(0, 31, 36)",
        "tertiary": "rgb(25, 96, 165)",
        "onTertiary": "rgb(255, 255, 255)",
        "tertiaryContainer": "rgb(211, 227, 255)",
        "onTertiaryContainer": "rgb(0, 28, 57)",
        "error": "rgb(186, 26, 26)",
        "onError": "rgb(255, 255, 255)",
        "errorContainer": "rgb(255, 218, 214)",
        "onErrorContainer": "rgb(65, 0, 2)",
        "onBackground": "rgb(31, 27, 22)",
        "surface": "rgb(255, 251, 255)",
        "surfaceVariant": "rgb(240, 224, 208)",
        "outlineVariant": "rgb(212, 196, 181)",
        "shadow": "rgb(0, 0, 0)",
        "scrim": "rgb(0, 0, 0)",
        "inverseSurface": "rgb(53, 47, 42)",
        "inverseOnSurface": "rgb(249, 239, 231)",
        "inversePrimary": "rgb(255, 185, 92)",
        "elevation": {
            "level0": "transparent",
            "level1": "rgb(249, 243, 242)",
            "level2": "rgb(245, 238, 235)",
            "level3": "rgb(242, 233, 227)",
            "level4": "rgb(240, 231, 224)",
            "level5": "rgb(238, 228, 219)"
        },
        "surfaceDisabled": "rgba(31, 27, 22, 0.12)",
        "onSurfaceDisabled": "rgba(31, 27, 22, 0.38)",
        "backdrop": "rgba(56, 47, 36, 0.4)",
    }
}

export default theme