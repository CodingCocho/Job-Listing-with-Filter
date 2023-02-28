import {Posting} from '../components/Posting';
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
        <Posting
        />
      </div>
    </div>
  )
}

export default App;
