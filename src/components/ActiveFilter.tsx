import {FilterProp} from '../interfaces/FilterProp';
import {useDispatch} from 'react-redux';
import {unfilter} from '../utilities/postingsSlice';
import '../styles/active.css'

export const ActiveFilter = (props: FilterProp): JSX.Element =>
{
  
  // Hold the filter prop
  const {filter} = props;

  // Hold the useDispatch hook
  const dispatch = useDispatch();

  /*
  * Handle the unfilter by calling a redux state function
  * @param none
  * @ return void
  */
  const handleUnfilter = (): void =>
  {

    // Dispatch the redux unfilter function
    dispatch(unfilter(filter))
  }

  return (
    <>

    {/* Hold the active filter container */}
      <div 
      className="active-filter-container"
      >

        {/* Hold the active filter */}
        <p
        className="active-filter"
        >
          {filter}
        </p>

        {/* Hold the unfilter button */}
        <div 
        className="close"
        onClick={handleUnfilter}
        >
          X
        </div>
      </div>
    </>
  )
}