import { Stack, Chip } from '@mui/material'

const chipStyle = {
    backgroundColor: 'rgba(153,153,153,.2)',
    color: '#eff2f7',
  };

export const ECBO = () => {
    return(
        <Stack direction = 'row' spacing = {1} color= '#ffffff'>
            <Chip label = 'Azure' style={chipStyle}/>   
            <Chip label = 'DevOps' style={chipStyle}/>
            <Chip label = 'CI/CD' style={chipStyle}/>
            <Chip label = 'Arm Templates' style={chipStyle}/>

        </Stack>
    )
}

export const TDPEMH = () => {
    return(
        <Stack direction = 'row' spacing = {1}>
            <Chip label = 'Python' style={chipStyle}/>   
            <Chip label = 'Drools' style={chipStyle}/>
            <Chip label = 'Corticon' style={chipStyle}/>
        </Stack>
    )
}

export const EMH = () => {
    return(
        <Stack direction = 'row' spacing = {1}>
            <Chip label = 'Java' style={chipStyle}/>   
            <Chip label = 'Python' style={chipStyle}/>
            <Chip label = 'SQL' style={chipStyle}/>
            <Chip label = 'IBM MQ' style={chipStyle}/>
            <Chip label = 'Kibana' style={chipStyle}/>
            <Chip label = 'Rest' style={chipStyle}/>

        </Stack>
    )
}
