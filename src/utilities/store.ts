import {configureStore} from '@reduxjs/toolkit';

import postingsReducer from './postingsSlice';

export default configureStore(
{
    reducer: 
    {
      appState: postingsReducer
    }
})