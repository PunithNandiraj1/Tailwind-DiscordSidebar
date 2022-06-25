import React from 'react'
import SideBar from './components/SideBar';
import ContentContainer from './components/ContentContainer';
import ChannelBar from './components/ChannelBar';

function App() {
  return (
   <div className='flex'>
    <SideBar/>
    <ChannelBar />
      <ContentContainer />
   </div>
  );
}

export default App;

