import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import logo from './logo.png';
import { UserContext } from './Context';
import { useContext } from 'react';

function LoginRegister() {
  const { register, setRegister } = useContext(UserContext);

  const handleClick = (e) => {
    console.log(register);
    setRegister(true);  // Toggle the register state
    console.log(register);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950">
      <div className="w-full max-w-2xl bg-slate-600 p-8 rounded-lg shadow-inner transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-neutral-700">
        <div className="mb-6 flex flex-col items-center">
          <img src={logo} alt="Logo" className="w-40 h-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2 text-center">
            Join the Elite Community of NIT DGP
          </h1>
          <h2 className="text-lg text-white text-center">
            Boast of Being a Part of CSS
          </h2>
        </div>
        
       
          <div className="py-4 flex items-center justify-center">
            <Stack spacing={2} direction="row">
            <Button
                onClick={handleClick}
                variant="contained"
                  // Button should have type 'submit'
                style={{
                  color: 'white',
                  backgroundColor: 'black',
                  borderRadius: '0.375rem',
                }}
              >
                Register
              </Button>
            </Stack>
          </div>
      </div>
    </div>
  );
}

export { LoginRegister };
