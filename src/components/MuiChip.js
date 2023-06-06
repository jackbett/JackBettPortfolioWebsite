import { Stack, Chip } from '@mui/material'

export const ECBO = () => {
    return(
        <Stack direction = 'row' spacing = {1}>
            <Chip label = 'Azure' />   
            <Chip label = 'DevOps' />
            <Chip label = 'CI/CD' />
            <Chip label = 'Arm Templates' />

        </Stack>
    )
}

export const TDPEMH = () => {
    return(
        <Stack direction = 'row' spacing = {1}>
            <Chip label = 'Python' />   
            <Chip label = 'Drools' />
            <Chip label = 'Corticon' />
        </Stack>
    )
}

export const EMH = () => {
    return(
        <Stack direction = 'row' spacing = {1}>
            <Chip label = 'Java' />   
            <Chip label = 'Python' />
            <Chip label = 'SQL' />
            <Chip label = 'IBM MQ' />
            <Chip label = 'Kibana' />
            <Chip label = 'Rest' />

        </Stack>
    )
}
