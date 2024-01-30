
import * as React from 'react';
import './App.css';
import {Skeleton} from '@mui/material';
import Navigation from './Navigation';
import AddIcon from '@mui/icons-material/Add';
import CameraSharpIcon from '@mui/icons-material/CameraSharp';

export default function App() {
  const [page, setPage] = React.useState(0);

  return <div className='App'>
      <header className='App-header'>
        <CameraSharpIcon class="app-logo"/>
        <h3>Welcome user,</h3>
        <div className='app-link'>Click <AddIcon className='add-icon' onClick={(event, newValue) => {
            setPage(newValue);
          }}/> to start a project </div>
      </header>
    </div>
}
