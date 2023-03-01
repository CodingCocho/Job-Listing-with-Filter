import {Posting} from '../components/Posting';
import Postings from '../data/data.json';
import '../styles/app.css';

function App() 
{

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
        {Postings.map((posting) =>
          {
            return (
              <>

                {/* Hold the Posting component */}
                <Posting 
                company={posting.company}
                contract={posting.contract}
                id={posting.id}
                isFeatured={posting.featured}
                isNew={posting.new}
                languages={posting.languages}
                level={posting.level}
                location={posting.location}
                logo={posting.logo}
                position={posting.position}
                postedAt={posting.postedAt}
                role={posting.role}
                tools={posting.tools}
                />
              </>
            )
          }
        )}
      </div>
    </div>
  )
}

export default App;
