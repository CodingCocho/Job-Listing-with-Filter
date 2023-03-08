import {configureStore} from '@reduxjs/toolkit';
import postingsReducer from './postingsSlice';

// Export the redux store with the posting slice
export default configureStore(
{

    // Hold the app state using the posting slice
    reducer: 
    {
      appState: postingsReducer
    }
})