import {Posting} from '../components/Posting';
import {PostingProps} from '../interfaces/PostingProps';
import {StoreInterface} from '../interfaces/StoreInterface';
import {useSelector} from 'react-redux';
import '../styles/app.css';


function App() 
{

  const jobPostings = useSelector((state: StoreInterface) => state.postings.postings)

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

      {/* Hold the container with Post */}
      <div 
      className="filters-container"
      >
        {/* Map out active filters */}
      </div>

      {/* Map out the postings */}
      <div 
      className="postings"
      >

        {/* Map out the json data */}
        {jobPostings.map((posting: PostingProps) =>
          {
            return (
              <>

                {/* Hold the Posting component */}
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
