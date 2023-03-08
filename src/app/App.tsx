import {ActiveFilter} from '../components/ActiveFilter';
import {Posting} from '../components/Posting';
import {PostingProps} from '../interfaces/PostingProps';
import {StoreInterface} from '../interfaces/StoreInterface';
import {useSelector} from 'react-redux';
import '../styles/app.css';


function App() 
{

  // Hold the active job postings from redux store
  const jobPostings = useSelector((state: StoreInterface) => state.appState.postings)

  // Hold the active filters from redux store
  const activeFilters: string[] = useSelector((state: StoreInterface) => state.appState.filters)

  return (
    
    // Hold the main application
    <div 
    className="App"
    >

      {/* Hold the header */}
      <div 
      className="header"
      >
      </div>

      {/* Hold the container with the active filters */}
      <div 
      className={activeFilters.length === 0 ? "filters-container" : "filters-container-active"}
      >

        {/* Map out active filters */}
        {
          activeFilters.map((filter: string) =>
          {
            return (
              <>

                {/* Hold the active filter component */}
                <ActiveFilter
                filter={filter}
                />
              </>
            )
          })
        }
      </div>

      {/* Map out the postings */}
      <div 
      className={activeFilters.length === 0 ? "postings" : "posting-filtered"}
      >

        {/* Map out the redux state */}
        {jobPostings.map((posting: PostingProps) =>
          {
            return (
              <>

                {/* Conditional render the posting component */}
                {posting.show && 
                  <Posting 
                  company={posting.company}
                  contract={posting.contract}
                  id={posting.id}
                  isFeatured={posting.isFeatured}
                  isNew={posting.isNew}
                  languages={posting.languages}
                  level={posting.level}
                  location={posting.location}
                  logo={posting.logo}
                  position={posting.position}
                  postedAt={posting.postedAt}
                  role={posting.role}
                  show={posting.show}
                  tools={posting.tools}
                  />
                }
              </>
            )
          }
        )}
      </div>
    </div>
  )
}

export default App;
