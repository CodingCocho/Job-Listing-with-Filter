import {FilterProp} from '../interfaces/FilterProp';
import {useDispatch} from 'react-redux';
import {unfilter} from '../utilities/postingsSlice';
import '../styles/active.css'


export const ActiveFilter = (props: FilterProp): JSX.Element =>
{
  
  const {filter} = props;

  const dispatch = useDispatch();

  const handleUnfilter = (): void =>
  {
    dispatch(unfilter(filter))
  }

  return (
    <>
      <div 
      className="active-filter-container"
      >
        <p
        className="active-filter"
        >
          {filter}
        </p>
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