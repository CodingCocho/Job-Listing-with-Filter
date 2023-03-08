import {FilterProp} from '../interfaces/FilterProp';
import {useDispatch} from 'react-redux';
import {addFilter} from '../utilities/postingsSlice';
import '../styles/filter.css';

export const Filter = (props: FilterProp): JSX.Element =>
{
  
  // Hold the filter prop
  const {filter} = props;

  // Hold the useDispatch hook
  const dispatch = useDispatch();

  /*
  * Handle the filter by calling a redux state funciton
  * @param none
  * @ return void
  */
  const handleFilter = (): void =>
  {

    // Dispatch the redux filter function
    dispatch(addFilter(filter));
  }

  return (
    <>

      {/* Hold the container for the filter */}
      <div 
      className="filter-container"
      onClick={handleFilter}
      >
        {filter}
      </div>
    </>
  )
}