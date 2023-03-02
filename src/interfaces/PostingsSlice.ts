import { PostingProps } from './PostingProps';

export interface PostingsSliceState 
{
  postings: PostingProps[];
  filters: string[]
}