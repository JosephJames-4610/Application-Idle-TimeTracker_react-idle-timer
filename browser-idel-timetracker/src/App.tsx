import * as React from 'react';
import Container from '@mui/material/Container';
import VideoThumbnails from './components/VideoThumbnails';
import Navigator from './components/Navigator';
import IdleTimeModal from './components/IdleTimeModal'

export default function Facebook() {
  const [auth, setAuth] = React.useState(true);
  const [open, setOpen] = React.useState(false);
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
      <IdleTimeModal open={open} setOpen={setOpen} />
    </>
  );
}
