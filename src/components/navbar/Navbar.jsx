import React from 'react'
import {Stack, Box,BasicMenu, BasicSelect, InputBase} from '../../utils/mui/mui'

export const Navbar = () => {

  const [locations,setLocations] = React.useState(['ktm','pkh','bkt'])
  const [categories,setCategories] = React.useState(['electronics','sports','accessories'])


  return (
    <Stack className='navbar' direction='row' justifyContent='space-between' >
    <Box>
      <Stack direction='row' alignItems='center'>
      <BasicMenu/> 
      <Box>
        nepsun
      </Box>
      </Stack>
    </Box>
    <Box>
      <Stack>
        <Box>
          Download the app
        </Box>
        <Box>
          <Stack direction='row'>
            <BasicSelect datas={locations} /> <BasicSelect datas={categories} /> <InputBase/>
          </Stack>
        </Box>
      </Stack>
    </Box>
    <Box>
      <Stack>
        <Box>
          language and notification
        </Box>
        <Box>
          user/login/register and post free ads
        </Box>
      </Stack>
    </Box>
  </Stack>
  )
}

