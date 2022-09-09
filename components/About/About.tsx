import { Box, Typography } from "@mui/material"
import Image from "next/image"

const About: React.FC = () => {
    const defaultWidth = '1345px'
    return <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <Box sx={{display: 'flex', width: defaultWidth, alignItems: 'center', justifyContent: 'space-around', height: '453px'}}>
            <Image alt="" src="/images/About.svg" width="451px" height="277px" />
            <Box sx={{display: 'flex', width: '546px', flexDirection: 'column', gap: '24px'}}>
                <Typography variant="h3">Sobre o DEVPIRA</Typography>
                <Typography>
                Turpis fusce et, nisl, bibendum viverra pretium duis nulla euismod. 
                Ac felis velit scelerisque consectetur in morbi odio. Egestas sit ultrices mi nulla consectetur egestas ac vivamus tortor. Enim nibh ut vitae tristique. 
                Nam vulputate lectus massa consequat tristique et suspendisse lorem. Tempor accumsan pellentesque cursus at cum nunc dolor. 
                Lacus mattis ultricies ut turpis lectus tortor elit tellus. Risus, in a dui platea sed a. Bibendum mauris vel, magna congue.
                </Typography>
            </Box>
        </Box>
    </Box>
}

export default About