import  {useRef, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


export default function BasicTable(props) {
const userkey = useRef();
const name = useRef();
const email = useRef();


    const [open, setOpen] = useState(false);
    const handleOpen = (key) => {
        setOpen(true);
        setUser(props.users[key]);
       

    };
    const handleClose = () => setOpen(false);
    const [user, setUser] = useState({});

    const handlesubmit = (e) => {
        e.preventDefault();
        props.onsubmit({name: name.current.value
            ,userkey:userkey.current.value ,
         email:email.current.value
          });
       // console.log(user);
        handleClose();
    }
    
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell >Title</TableCell>
            <TableCell >status</TableCell>
            <TableCell >Role</TableCell>
            <TableCell ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.users.map((row, key ) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
               <Box sx={{display:'flex'}}>

              
               <Avatar alt={row.name} src={row.image}/>
                <Box sx={{
                    marginLeft:2,
                }}>
                    {row.name} <bold>{row.id}</bold>  <br/>
                    {row.email}
                </Box>
                </Box>
             
            
              </TableCell>
              <TableCell > <span> {row.title} </span>  <br /><span style={{color:'grey'}}>{row.country}</span></TableCell>
              <TableCell ><span style={{
                borderRadius: '10px',
                backgroundColor:'#b3ffcc',
                padding:'5px',
                color:'black'
              }}>active</span></TableCell>
              <TableCell >admin</TableCell>
              <TableCell > <span style={{
                color:'blue',
                cursor:'pointer'
              }} onClick={()=>handleOpen(key)}>edit</span>



               </TableCell>
  
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
<div>
<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <form onSubmit={handlesubmit} style={{
             padding:'20px'
            }}>
                <input type='hidden' value={user.id} ref={userkey} /> 
            <input type="text"  placeholder={user.name}  ref={name}
             style={{
              width:'90%',
             
              height:'40px',
              margin:'10px',

            }}
            /> <br />
            <input type="email" placeholder={user.email} ref={email} 
            
            style={{
              width:'90%',
              height:'40px',
              margin:'10px',

            }}
            /> <br />

            <Button variant="contained" color="primary" type='submit'>Submit</Button>
            </form>

        </Box>

  
      </Modal>
</div>
</>

  );
}
