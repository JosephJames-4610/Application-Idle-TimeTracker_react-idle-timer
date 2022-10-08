import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface IdleTimeModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;   
};

export default function IdleTimeModal({ open, setOpen }: IdleTimeModalProps) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Session kept idle more than allowed time
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: 18 }}>
            This session should not be kept idle for more than a 30 second after user logged in. If no action taken, session automatically gets signs out.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', flexDirection: 'row-reverse' }}>
            <Button variant='contained' onClick={handleOpen} sx={{ mt: 4 }}>Stay Signed In</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
