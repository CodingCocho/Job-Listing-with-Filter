import {createSlice} from '@reduxjs/toolkit';
import {PostingProps} from '../interfaces/PostingProps';
import {PostingsSliceState} from '../interfaces/PostingsSlice';
import jobPostings from '../data/data.json'

// Hold the initial state 
const initialState: PostingsSliceState = 
{
  postings: jobPostings,
  filters: []
}

/*
* Handle the addition of a filter
* @param posting the postings from state
* filter the filter added
* @return void
*/
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

/*
* Handle the remove of a filter
* @param posting the postings from state
* filters the active filters
* @return void
*/
const handleRemove = (postings: PostingProps[], filters: string[]): void =>
{
  
   // Loop through the JobPostings
   for(let counter1: number = 0; counter1 < postings.length; counter1++)
   {

    // Check if there is no filters
    if(!filters.length)
    {
      postings[counter1].show = true;
    }

    // Check if the post is hidden
    else if(!postings[counter1].show)
    {
      
      // Loop through filters
      for(let counter2: number = 0; counter2 < filters.length; counter2++)
      {

        // Check if the filter is not found
        if(postings[counter1].role !== filters[counter2] && postings[counter1].level !== filters[counter2] && 
          !postings[counter1].languages.includes(filters[counter2]) && !postings[counter1].tools.includes(filters[counter2]))
        {

          // Hide the posting
          postings[counter1].show = false; 
          break;
        }

        // Temporarly show the posting
        else
        {
          postings[counter1].show = true; 
        }
      }
    }
   }
}

// Hold the posting slice for the app state
const postingsSlice = createSlice(
{
  name: 'postings',
  initialState,
  reducers: 
  {

    // Handles adding a filter to the app state 
    addFilter(state, action) 
    {
      if(!state.filters.includes(action.payload)) 
      {
        state.filters.push(action.payload);
        handleAdd(state.postings, action.payload);
      }
    },

    // Handles removing a filter from the app state
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