import * as React from 'react';
import { useIdleTimer } from 'react-idle-timer';
import Container from '@mui/material/Container';
import VideoThumbnails from './components/VideoThumbnails';
import Navigator from './components/Navigator';
import IdleTimeModal from './components/IdleTimeModal'

export default function App() {
  const [auth, setAuth] = React.useState(false);
  const [extendSession, setExtendSession] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [sessionIdle, setSessionIdle] = React.useState(false);

  const {
    start
  } = useIdleTimer({
    timeout: auth ? 30000 : 500000,
    onAction: () => { setSessionIdle(false); },
    debounce: 500,
    onIdle: () => { setSessionIdle(true); },
    stopOnIdle: true,
    startManually: true
  })

  React.useEffect(() => {
    if (sessionIdle) setOpen(true);
    else setOpen(false);
  }, [sessionIdle]);

  React.useEffect(() => {
    if (auth) start();
  }, [auth, extendSession]);

  const handleStaySignedIn = () => {
    setOpen(false); setAuth(true); setSessionIdle(false); setExtendSession(!extendSession);
  };

  const handleLogOut = () => {
    setOpen(false); setAuth(false);
  };

  return (
    <>
      <Navigator auth={auth} setAuth={setAuth} />
      <Container maxWidth={false} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', mt: 10 }} >
        <VideoThumbnails loading />
        <VideoThumbnails loading />
        <VideoThumbnails loading />
        <VideoThumbnails loading />
        <VideoThumbnails loading />
        <VideoThumbnails loading />
        <VideoThumbnails loading />
        <VideoThumbnails loading />
      </Container>
      <IdleTimeModal open={open} handleLogOut={handleLogOut} handleStaySignedIn={handleStaySignedIn} />
    </>
  );
}
