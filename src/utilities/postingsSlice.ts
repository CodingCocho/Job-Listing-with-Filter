import {createSlice} from '@reduxjs/toolkit';
import {PostingProps} from '../interfaces/PostingProps';
import {PostingsSliceState} from '../interfaces/PostingsSlice';
import jobPostings from '../data/data.json'

const initialState: PostingsSliceState = 
{
  postings: jobPostings,
  filters: []
}

const handleAdd = (postings: PostingProps[], filter: string): void =>
{
  // Loop through the JobPostings
  for(let counter: number = 0; counter < postings.length; counter++)
  {
    
    // Check if it is showing and none of the data fields match
    if(postings[counter].show && (postings[counter].role !== filter && postings[counter].level !== filter && 
      !postings[counter].languages.includes(filter) && !postings[counter].tools.includes(filter)))
    {

      // Remove posting from view
      postings[counter].show = false;
    }    
  }
}

const handleRemove = (postings: PostingProps[], filters: string[]): void =>
{
  
  
}

const postingsSlice = createSlice(
{
  name: 'postings',
  initialState,
  reducers: 
  {
    addFilter(state, action) 
    {
      if(!state.filters.includes(action.payload)) 
      {
        state.filters.push(action.payload);
        handleAdd(state.postings, action.payload);
      }
    },
    unfilter(state, action)
    {
      const index: number = state.filters.indexOf(action.payload);
      state.filters.splice(index, 1);
      handleRemove(state.postings, state.filters);
    }
  }
})

export const {addFilter, unfilter} = postingsSlice.actions;

export default postingsSlice.reducer;