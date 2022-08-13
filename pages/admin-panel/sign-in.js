import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import {useRouter} from "next/router";
import {useEffect} from "react";

const theme = createTheme();

export default function SignIn() {
  const router = useRouter();
  const [isLogin, setIsLogin] = React.useState(false)


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const loginData = {
      email: data.get('email'),
      password: data.get('password'),
    }
   if (loginData.email === 'admin@gmail.com' && loginData.password === "admin") {
     localStorage.setItem('login', JSON.stringify(loginData))
     router.push('/admin-panel')
   } else {
     alert('You entered incorrect data!')
   }
  };

  useEffect(() => {
    const loginData = JSON.parse(localStorage.getItem('login'))
    if (loginData) {
      setIsLogin(true)
      router.push('/admin-panel')
    }
  }, [])

  return (
    <>
      {
        !isLogin &&
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                <LockOutlinedIcon/>
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{mt: 3, mb: 2}}
                >
                  Sign In
                </Button>

              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      }
    </>
  );
}