import { configureFonts } from "react-native-paper";

const fonts = configureFonts({
    config:{
        default: {
            fontFamily: 'Nunito-Regular',
            fontWeight: '400',
            fontSize:20,
            letterSpacing:0,
            lineHeight:24
        },
        titleLarge:{
            fontFamily: 'Nunito-Bold',
            fontWeight: '500',
            fontSize:30,
            letterSpacing:0,
            lineHeight:34
        },
        titleMedium:{
            fontFamily: 'Nunito-Bold',
            fontWeight: '500',
            fontSize:24,
            letterSpacing:0,
            lineHeight:28
        },
        titleSmall:{
            fontFamily: 'Nunito-Bold',
            fontWeight: '500',
            fontSize:20,
            letterSpacing:0,
            lineHeight:24
        },
        bodyMedium:{
            fontFamily: 'Nunito-SemiBold',
            fontWeight: '500',
            fontSize:16,
            letterSpacing:0,
            lineHeight:20
        },
        labelMedium:{
            fontFamily: 'Nunito-Medium',
            fontWeight: '400',
            fontSize:20,
            letterSpacing:0,
            lineHeight:24
        },
        labelSmall:{
            fontFamily: 'Nunito-Medium',
            fontWeight: '400',
            fontSize:16,
            letterSpacing:0,
            lineHeight:20
        },
    }
})

export default fonts;