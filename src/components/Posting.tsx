import {Featured} from './Featured';
import {Filter} from './Filter';
import {New} from './New';
import {PostingProps} from '../interfaces/PostingProps';
import '../styles/posting.css';

export const Posting = (props: PostingProps): JSX.Element =>
{

  // Hold the posting props
  const {company, contract, isFeatured, id, languages, level, location, logo, isNew, position, postedAt, role, show, tools} = props;

  return (
    <>

      {/* Conditional render the posting */}
      {show &&
        
        // Hold the posting container
        <div 
        className={isNew ? "posting-container-new" : "posting-container"}
        id={id.toString()}
        >
        
        {/* Flex container for desktop */}
        <div 
        className="desktop-flex-container"
        >
          {/* Hold the logo image */}
          <img 
          alt="company" 
          className="logo"
          src={logo}
          />

          {/* Hold the job details */}
          <div 
          className="job-details"
          >

            {/* Flex contaienr for the job details */}
            <div 
            className="flex-container-1"
            >

              {/* Hold the company name */}
              <p 
              className="company-name"
              >
                {company}
              </p>

              {/* Conditional render New */}
              {isNew && <New />}

              {/* Conditional render Featured */}
              {isFeatured && <Featured />}
            </div>
            
            {/* Hold the job title */}
            <p 
            className="job-title"
            >
              {position}
            </p>

            {/* Hold the contracting information */}
            <div 
            className="job-posting-details"
            >
              {postedAt} • {contract} • {location}
            </div>
          </div>
        </div>
          
          {/* Hold the divider for the posting */}
          <hr 
          className="mobile-divider"
          />

          {/* Hold the postings filters */}
          <div 
          className="filters"
          >

            {/* Render the Filter components */}
            <Filter 
            filter={role}
            />
            <Filter 
            filter={level}
            />
            {languages.map((language) =>
              {
                return (
                  <>
                    <Filter 
                    filter={language}
                    />
                  </>
                )
              }
            )}
            {tools.map((tool) =>
              {
                return (
                  <>
                    <Filter 
                    filter={tool}
                    />
                  </>
                )
              }
            )}
          </div>
        </div>
      }
    </>
  )
}