import {Featured} from './Featured';
import {Filter} from './Filter';
import {New} from './New';
import {PostingProps} from '../interfaces/PostingProps';
import '../styles/posting.css';

export const Posting = (props: PostingProps): JSX.Element =>
{

  const {company, contract, isFeatured, id, languages, level, location, logo, isNew, position, postedAt, role, show, tools} = props;

  return (
    <>
      {show &&
        <div 
        className="posting-container"
        id={id.toString()}
        >
          <img 
          alt="company" 
          className="logo"
          src={logo}
          />
          <div 
          className="job-details"
          >
            <div 
            className="flex-container-1"
            >
              <p 
              className="company-name"
              >
                {company}
              </p>
              {isNew && <New />}
              {isFeatured && <Featured />}
            </div>
            <p 
            className="job-title"
            >
              {position}
            </p>
            <div 
            className="job-posting-details"
            >
              {postedAt} • {contract} • {location}
            </div>
          </div>
          <hr 
          className="mobile-divider"
          />
          <div 
          className="filters"
          >
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