import { Box, Button, CardActions, CardContent, Container, Grid, Stack, TextField, Typography } from "@mui/material"
import React from "react";

const Card = () => (
  <Box sx={{ border: '1px solid', m: 2 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        askjdsbvjdfvbhbn
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Box>
);

function App() {
  let a = new Array('', '', '', '', '', '', '', '')
  return (
    <>
      {/* <Button
        style={{
          borderRadius: '20px',
          backgroundColor: 'orange',
          color: 'black'
        }}
        onClick={() => console.log('this is mui!')}
        variant="contained"
      >Text</Button> */}
      {/* <Box
        // layout qurma qaldi (Grid, Stack (flex))
        // color -> theme
        // typography -> theme
        sx={{
          '&:hover': {
            color: 'red'
          }
        }}
      >bu bir div-dir</Box> */}

      {/* <Container maxWidth="md" sx={{ border: '1px solid', p: 5 }}>
        <Container maxWidth="xs">
          <TextField fullWidth />
        </Container>
      </Container> */}

      {/* <Container maxWidth="md">
        <Grid container >
          <Grid item xs={12} md={6}>
            First item
          </Grid>
          <Grid item xs={12} md={6}>
            Second item
          </Grid>
        </Grid>
      </Container> */}

      {/* that's why I'm in love with MUI :) */}
      {/* <Container maxWidth="lg">
        <Grid container>
          {
            a.map(() => (
              <>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Card />
                </Grid>
              </>
            ))
          }
        </Grid> 
      </Container>
        */}
      <Container>
        <Stack
          flexDirection={{ xs: 'column', md: "row" }}
          justifyContent={{ xs: 'center', md: "space-between" }}
          alignItems={{ xs: 'center' }}
        >
          <Box>1</Box>
          <Box>2</Box>
          <Box>3</Box>
          <Box>4</Box>
        </Stack>
      </Container>

    </>
  )
}

export default App
