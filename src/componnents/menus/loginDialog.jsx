import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";
import { BASE_URL } from "../../utils/config";
import { useDispatch } from "react-redux";
import { updateCurrentUser } from "../../redux/users/usersSlice";
import { useState } from "react"


export function FormDialog() {

  //handle in Dom changes

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [userId, setUserId] = useState();
  const dispatch = useDispatch();

  //handl in changes login
  async function handlSubmit(e) {

    e.preventDefault();
    if (userId.length < 9) {
      //להוסיף הערה
    }
    else {
      try {
        //איך לשלוח את הפרמטר ID כדי שיתחבר ל
        // const response = await axios.get(`${BASE_URL}/user`, { userId });
        const response = await axios.get(`${BASE_URL}/Avrech/getById=${userId}`);

        const curertnUser = response.data
        //לשמור ברידאקס
        dispatch(updateCurrentUser(curertnUser))
        console.log(curertnUser)
        handleClose();
      }
      catch (e) {
        //להציג ללקוח הערה 
        console.log("לא קיים במערכת")
      }
    }
  }


  return <>
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        לפרופיל האישי
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handlSubmit,
        }}
      >
        <DialogTitle>התחברות</DialogTitle>
        <DialogContent>
          <DialogContentText>
            כדי לדווח שעות או לצפות בהסטוריית הדוחות שלך הכנס מספר זהות
          </DialogContentText>
          <TextField
            onChange={(e) => { console.log("change", e); setUserId(e.target.value) }}
            autoFocus
            required
            margin="dense"
            id="name"
            name="id"
            label="your identity"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ביטול</Button>
          <Button type="submit">התחבר</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  </>

}