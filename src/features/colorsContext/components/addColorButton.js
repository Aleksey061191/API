import React, { useContext, useRef } from 'react';
import { WordContext } from '../contexts/colorContext';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';




export const  AddWord = () => {
  const [open, setOpen] = React.useState(false);
  const {addWord} = useContext(WordContext);
  const input = useRef();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  const handleClick = () => {
      setOpen(false);
      const value = input.current.value;
      const word = {
          words: value,
          id: Math.floor(Math.random() * 100),
          isDone: false,
      }
      return addWord(word) 
       
  }
  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Word
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Word</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ADD Word
          </DialogContentText>
          <input style={{padding: 7}} ref={input} type="text" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClick} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}