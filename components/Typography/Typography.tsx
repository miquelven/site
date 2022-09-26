import { SxProps, Typography as MuiTypography } from "@mui/material"
import { Theme } from "@mui/system"

export interface TypographyProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2'
    children?: React.ReactNode
    color?: 'primary' | 'contrast' | 'transparent' | 'feature' | 'green' | 'gradient_green' | 'gradient_red'
    bigger?: boolean
    smaller?: boolean
}

const Typography: React.FC<TypographyProps> = ({bigger, color = 'primary', children, smaller, variant = 'body1'}:TypographyProps) => {
    

    const getHeaderColor = (color: 'primary' | 'contrast' | 'transparent' | 'feature' | 'green'| 'gradient_green' | 'gradient_red'): SxProps<Theme> => {
        if (color === 'contrast') return { color: 'white' }
        else if (color === 'feature') return { color: '#e63462' }
        else if (color === 'green') return { color: '#04FFB4' }
        else if (color === 'gradient_green') return {
            background: 'linear-gradient(225.5deg, #04FFB4 9.38%, #57ACFF 95.68%)', 
            backgroundClip: 'text', 
            color: 'transparent'
        }
        else if (color === 'gradient_red') return {
            background: 'linear-gradient(233.62deg, #C4C4C4 27.61%, #E63462 27.62%, #1E90FF 100%)', 
            backgroundClip: 'text', 
            color: 'transparent'
        }
        else if (color === 'transparent') return {
            color: 'rgba(33,34,54,.2)',
            textAlign: 'center'
        }
        return { color: '#212236' }
    }

    const fontModifier = (size: number, bigger?: boolean, smaller?: boolean): number => {
        if (bigger) return size + 2
        else if (smaller) return size - 2
        return size
    }

    const getFontFormat = (variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2', bigger?: boolean, smaller?: boolean): SxProps<Theme> => {
        if (variant === 'h1' || variant === 'h2') return {
            fontFamily: "'Inter', sans-serif;",
            fontWeight: '800',
            fontStyle: 'normal',
            fontSize: `${fontModifier(68, bigger, smaller)}px`,
            lineHeight: '100%'
        }
        else if (variant === 'h3') return {
            fontFamily: "'Inter', sans-serif;",
            fontWeight: '700',
            fontStyle: 'normal',
            fontSize: `${fontModifier(48, bigger, smaller)}px`,
            lineHeight: '100%',
        }
        else if (variant === 'h4') return {
            fontFamily: "'Inter', sans-serif;",
            fontWeight: '700',
            fontStyle: 'normal',
            fontSize: `${fontModifier(20, bigger, smaller)}px`,
            lineHeight: '100%',
        }
        else if (variant === 'h5' || variant === 'h6') return {
            fontFamily: "'Inter', sans-serif;",
            fontWeight: '700',
            fontStyle: 'normal',
            fontSize: `${fontModifier(16, bigger, smaller)}px`,
            lineHeight: '100%'
        }
        else if (variant === 'body1') return {
            fontFamily: "'Roboto', sans-serif;",
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: `${fontModifier(16, bigger, smaller)}px`,
            lineHeight: '160%',
        }
        return { fontFamily:'inherit', fontSize: 'inherit', fontWeight: 'inherit', lineHeight: 'inherit', letterSpacing: 'inherit'}
    }

    const sx:SxProps<Theme> = Object.assign({}, getHeaderColor(color), getFontFormat(variant, bigger, smaller))

    return <MuiTypography variantMapping={{body2: 'span'}} variant={variant} sx={sx}>{children}</MuiTypography>
}

export default Typography