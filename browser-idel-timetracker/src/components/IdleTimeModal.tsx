import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

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
  handleLogOut: () => void;   
  handleStaySignedIn: () => void;   
};

export default function IdleTimeModal({ open, handleLogOut, handleStaySignedIn }: IdleTimeModalProps) {
  const [timerValue, setTimerValue] = React.useState<number>(30);

  React.useEffect(() => {
    if (open) {
      let secondsCount = 0;
      const sessionTimer = setInterval(function () {
        secondsCount += 1;
        let timerLocalValue = timerValue - secondsCount;
        setTimerValue((timerValue) => timerValue - 1);
        if (!open || timerLocalValue === 0) { clearInterval(sessionTimer); handleLogOut(); setTimerValue(30); }
      }, 1000);
    }
  }, [open])

  const seconds = String(timerValue % 60).padStart(2, '0');
  const minutes = String(Math.floor(timerValue / 60)).padStart(2, '0');

  return (
    <div>
      <Modal
        open={open}
        onClose={handleLogOut}
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
          <Box sx={{ mt: 4 }}>
            <TextField
              id="outlined-read-only-input"
              label="Session Expiry Time"
              value={`${minutes}:${seconds}`}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', flexDirection: 'row-reverse' }}>
            <Button variant='contained' onClick={() => { handleStaySignedIn(); setTimerValue(30);}} sx={{ mt: 4 }}>Stay Signed In</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
