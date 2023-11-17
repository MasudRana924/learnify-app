import { Button, TextField } from '@mui/material';
import React from 'react';

const Register = () => {
    return (
        <div className=" flex flex-col items-center justify-center mt-12 lg:mt-52">
            <form action="" className="space-y-6 py-6 mt-6" >

                <TextField id="outlined-basic" label="Email" variant="outlined" className="w-full py-3 px-6" />
                <TextField id="outlined-basic" label="Password" variant="outlined" className="w-full py-3 px-6" />
                <Button variant="contained" className="w-full py-3 px-6 h-12" >Register</Button>

            </form>
        </div>
    );
};

export default Register;