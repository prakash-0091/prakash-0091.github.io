import {Stack, Box} from './utils/mui/mui'

import {Navbar} from './components/componentsExports'


function App() {
  return (
    <div>
      <Navbar/>

      <Stack direction='row'>
        <Box flex={1}>
          side bar
        </Box>
        <Box flex={3} sx={{border:'2px solid red'}} >
          content
        </Box>

      </Stack>

    </div>
  );
}

export default App;
