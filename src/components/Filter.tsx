import {FilterProp} from '../interfaces/FilterProp';
import {useDispatch} from 'react-redux';
import {addFilter} from '../utilities/postingsSlice';
import '../styles/filter.css';

export const Filter = (props: FilterProp): JSX.Element =>
{
  
  const {filter} = props;

  const dispatch = useDispatch();

  const handleFilter = (): void =>
  {
    dispatch(addFilter(filter));
  }

  return (
    <>
      <div 
      className="filter-container"
      onClick={handleFilter}
      >
        {filter}
      </div>
    </>
  )
}