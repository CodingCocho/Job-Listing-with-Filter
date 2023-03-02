import {createSlice} from '@reduxjs/toolkit';
import {PostingProps} from '../interfaces/PostingProps';
import {PostingsSliceState} from '../interfaces/PostingsSlice';
import jobPostings from '../data/data.json'


const initialState: PostingsSliceState = 
{
  postings: jobPostings,
  filters: []
}

const filterPostings = (postings: PostingProps[], filters: string[]): void =>
{
  for(let counter: number = 0; counter < filters.length; counter++)
  {
    for(let counter2: number = 0; counter2 < postings.length; counter2++)
    {
      if(postings[counter2].role !== filters[counter] || postings[counter2].level !== filters[counter])
      {
        postings[counter2].show = false;
      }
      else if(postings[counter2].languages.indexOf(filters[counter]) === -1)
      {
        postings[counter2].show = false;
      }
      else if(postings[counter2].tools.indexOf(filters[counter]) === -1)
      {
        postings[counter2].show = false;
      }
      else 
      {
        postings[counter2].show = true;
      }
    }
  }
}

const postingsSlice = createSlice(
{
    name: 'postings',
    initialState,
    reducers: {
        filter(state, action) 
        {
          state.filters.push(action.payload);
          filterPostings(state.postings, state.filters);
        },
        unfilter(state, action)
        {
          const index: number = state.filters.indexOf(action.payload);
          state.filters.splice(index, 1);
          filterPostings(state.postings, state.filters);
        }
    }
})

export const {filter, unfilter} = postingsSlice.actions;

export default postingsSlice.reducer;