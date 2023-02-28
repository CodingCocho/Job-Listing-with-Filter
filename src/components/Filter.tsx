import {FilterProp} from '../interfaces/FilterProp';
import '../styles/filter.css';

export const Filter = (props: FilterProp): JSX.Element =>
{
  
  const {filter} = props;

  return (
    <>
      <div 
      className="container"
      >
        {filter}
      </div>
    </>
  )
}