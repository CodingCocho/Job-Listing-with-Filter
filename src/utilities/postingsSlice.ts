import {createSlice} from '@reduxjs/toolkit';
import {PostingProps} from '../interfaces/PostingProps';
import {PostingsSliceState} from '../interfaces/PostingsSlice';
import jobPostings from '../data/data.json'


const initialState: PostingsSliceState = 
{
  postings: jobPostings,
  filters: []
}

const filterPostings = (postings: PostingProps[], filters: string[], fromAddFilter: boolean): void =>
{
  for(let counter: number = 0; counter < filters.length; counter++)
  {
    for(let counter2: number = 0; counter2 < postings.length; counter2++)
    {
      if(!postings[counter2].show && fromAddFilter)
      {
        continue;
      }
      else if(postings[counter2].role === filters[counter] || postings[counter2].level === filters[counter])
      {
        postings[counter2].show = true;
      }
      else if(postings[counter2].languages.indexOf(filters[counter]) !== -1)
      {
        postings[counter2].show = true;
      }
      else if(postings[counter2].tools.indexOf(filters[counter]) !== -1)
      {
        postings[counter2].show = true;
      }
      else 
      {
        postings[counter2].show = false;
      }
    }
  }
}

const postingsSlice = createSlice(
{
    name: 'postings',
    initialState,
    reducers: {
        addFilter(state, action) 
        {
          state.filters.push(action.payload);
          filterPostings(state.postings, state.filters, true);
        },
        unfilter(state, action)
        {
          const index: number = state.filters.indexOf(action.payload);
          state.filters.splice(index, 1);
          filterPostings(state.postings, state.filters, false);
        }
    }
})

export const {addFilter, unfilter} = postingsSlice.actions;

export default postingsSlice.reducer;