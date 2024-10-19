import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import logo from './logo.png';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function Info() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    rollNumber: '',
    github: '',
    linkedin: '',
    performanceType: '',
    add_link1: '',
    add_link2:''
  });

  const [submitted, setSubmitted] = useState(false);
  const [click, setClick] = useState(false);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);


           setClick(true)
           toast.info("wait till we submit your form")
    
    axios.post("https://css-audition.onrender.com/api/v1/user/submit", formData)
      .then((res) => {
        setSubmitted(true); localStorage.setItem('isRegistered', false)
      })
      .catch((err) => {
        toast.error('Form not submitted because this email is already in use');
        console.log(err);
      });
  }

  return (
    <div className='min-h-screen flex-col flex items-center justify-center bg-gradient-to-r from-slate-950 to-slate-600 '>
      
   
      {!submitted?(<div className='w-full max-w-5xl p-8 bg-slate-400 shadow-2xl rounded-lg my-3'>

        <div className="bg-slate-500 text-center text-3xl font-bold text-black h-16 flex items-center justify-center w-full rounded-md shadow-xl py-2 my-10">
          CSS AUDITION FORM
        </div>

        <div className="w-full p-8 bg-slate-800 shadow-lg rounded-lg">
           <img src={logo} alt="Logo" className="h-auto" />
        </div>

        <div className="bg-emerald-200 h-32 rounded-md text-center text-2xl font-extrabold flex items-center justify-center p-4 my-16">
          <p>Ready to become the next sensation? Fill out the form and let's see!</p>
        </div>


        <form onSubmit={handleSubmit} className='space-y-8'>
          <Box
            sx={{ '& > :not(style)': { my: 5, width: '100%' } }}
            noValidate
            autoComplete="off"
            >
            {/* Name */}
            <div className="my-6">
              <TextField
                id="name"
                label="NAME  *"
                variant="filled"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                sx={{
                  padding: '2px',
                  borderRadius: '4px',
                  backgroundColor: formData.name ? 'white' : '',
                  
                }}
                />
            </div>

            {/* Email */}
                  {!!formData.name && (
                    <div className="my-6">
    <TextField
      id="email"
      label="EMAIL(COLLEGE EMAIL ID)  *"
      variant="filled"
      name="email"
      type="email"
      value={formData.email}
      onChange={handleChange}
      fullWidth
      error={
        // Check if the email is not matching the pattern and is not empty
        !/^[a-z]+[a-z]+[a-z]*\.\d{2}[a-z]\d{5}@btech\.nitdgp\.ac\.in$/.test(formData.email) && formData.email !== ""
      }
      helperText={
        // Provide error message if email format is incorrect
        !/^[a-z]+[a-z]+[a-z]*\.\d{2}[a-z]\d{5}@btech\.nitdgp\.ac\.in$/.test(formData.email) && formData.email !== ""
        ? "Email format is incorrect must provide college email address"
        : ""
      }
      sx={{
        padding: '2px',
        borderRadius: '4px',
        backgroundColor: formData.email ? 'white' : '', 
      }}
      />
  </div>
)}




            {/* Phone */}

                    {!!formData.email && (
                      <div className="my-6">
            <TextField
              id="phone"
              label="PHONE NUMBER  *"
              variant="filled"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              error={!/^[6-9]\d{9}$/.test(formData.phone) && formData.phone !== ""}
              helperText={!/^[6-9]\d{9}$/.test(formData.phone) && formData.phone !== "" ? "Please enter a valid 10-digit Indian phone number" : ""}
              sx={{
                padding: '2px',
                borderRadius: '4px',
                backgroundColor: formData.phone ? 'white' : '',
              }}
              />
          </div>
        )}


            {/* Roll Number */}
                            {!!formData.phone && (
                              <div className="my-6">
            <TextField
              id="rollNumber"
              label="ROLL NUMBER  *"
              variant="filled"
              name="rollNumber"
              type="text"
              value={formData.rollNumber}
              onChange={handleChange}
              fullWidth
              error={!/^\d{2}[a-zA-Z]{2}\d{4}$/.test(formData.rollNumber) && formData.rollNumber !== ""}
              helperText={!/^\d{2}[a-zA-Z]{2}\d{4}$/.test(formData.rollNumber) && formData.rollNumber !== "" ? "Roll number should be in format 22CS8043 or 22cs8043 in this format" : ""}
              sx={{
                padding: '2px',
                borderRadius: '4px',
                backgroundColor: formData.rollNumber ? 'white' : '',
              }}
              />
          </div>
        )}



            {/* Domain Type */}
            {!!formData.rollNumber && (
              <div className="my-6">
                <FormControl fullWidth variant="filled">
                  <InputLabel id="performance-type-label">
                    DOMAIN  *
                  </InputLabel>
                  <Select
                    labelId="performance-type-label"
                    id="performanceType"
                    name="performanceType"
                    value={formData.performanceType}
                    onChange={handleChange}
                    label="performanceType"
                    sx={{ 
                      backgroundColor: formData.performanceType ? 'white' : ''
                    }}
                    >
                    <MenuItem value="Content Writing ">Content Writing</MenuItem>
                    <MenuItem value="Graphic Designing">Graphic Designing/Video Editing </MenuItem>
                    <MenuItem value="Web Developer">Web Developer</MenuItem>
                    <MenuItem value="App Developer">App Developer</MenuItem>
                    <MenuItem value="Event Management">Event Management</MenuItem>
                  </Select>
                </FormControl>
              </div>
            )}

            {/* GitHub */}
            {!!formData.performanceType &&
              (formData.performanceType === "Web Developer"||formData.performanceType==="App Developer") && (
                <div className="my-6">
                  <TextField
                    id="github"
                    label=" GITHUB URL  *"
                    variant="filled"
                    name="github"
                    type="url"
                    value={formData.github}
                    onChange={handleChange}
                    fullWidth
                    sx={{
                      padding: '2px',
                      borderRadius: '4px',
                      backgroundColor: formData.github ? 'white' : '',
                      
                    }}
                    />
                </div>
              )}

            {/* LinkedIn */}

            {!!formData.performanceType && (
              <div className="my-6">
                <TextField
                  id="linkedin"
                  label="LINKEDIN PROFILE URL  *"
                  variant="filled"
                  name="linkedin"
                  type="url"
                  value={formData.linkedin}
                  onChange={handleChange}
                  fullWidth
                  sx={{
                    padding: '2px',
                    borderRadius: '4px',
                    backgroundColor: formData.linkedin ? 'white' : '',
                    
                  }}
                  />
              </div>
            )}

            {!!formData.performanceType && (
              <div className="my-6">
                <TextField
                  id="add_link1"
                  label="additional links(like your cp profile etc.)"
                  variant="filled"
                  name="add_link1"
                  type="url"
                  value={formData.add_link1}
                  onChange={handleChange}
                  fullWidth
                  sx={{
                    padding: '2px',
                    borderRadius: '4px',
                    backgroundColor: formData.linkedin ? 'white' : '',
                    
                  }}
                  />
              </div>
            )}
            {!!formData.performanceType && (
              <div className="my-6">
                <TextField
                  id="add_link1"
                  label="additional links"
                  variant="filled"
                  name="add_link2"
                  type="url"
                  value={formData.add_link2}
                  onChange={handleChange}
                  fullWidth
                  sx={{
                    padding: '2px',
                    borderRadius: '4px',
                    backgroundColor: formData.linkedin ? 'white' : '',
                    
                  }}
                  />
              </div>
            )}
            <div className="flex flex-col items-center justify-center ">
              <div className="my-3 text-xl font-bold">Contacts</div>
              <div className="mx-2 py-1">
                <h2>Priyanshu : <a href="tel:91 7301038000">(+91 7301038000)</a></h2>
              </div>
              <div className="mx-2">
                <h2>Likhita : <a href="tel:91 8617868717">(+91 8617868717)</a></h2>
              </div>
            </div>

            {/* Submit Button */}
            {!!formData.linkedin &&!click&& (
              <div className="mt-4">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  >
                  Submit Audition Form
                </Button>
              </div>
            )}
          </Box>
        </form>
 

      </div>):null}
     {!!submitted && (
       <div className="flex items-center justify-center w-full min-h-screen bg-gradient-to-r from-black to-slate-500">
    <div className="bg-slate-400 text-center text-black p-8 rounded-lg shadow-lg border border-gray-300 max-w-md mx-auto">
      <div className="text-2xl font-bold mb-4">
        Thank You!
      </div>
      <div className="text-lg font-bold">
        We appreciate you submitting the audition form. We hope to see you at the audition!
      </div>
    </div>
  </div>
)}

    </div>
  );
}

export { Info };
