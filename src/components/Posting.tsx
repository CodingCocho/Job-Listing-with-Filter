import {Featured} from './Featured';
import {Filter} from './Filter';
import {New} from './New';
import {PostingProps} from '../interfaces/PostingProps';
import '../styles/posting.css';

export const Posting = (): JSX.Element =>
{

  return (
    <>
      <div 
      className="posting-container"
      id="1"
      >
        <img 
        alt="company" 
        className="logo"
        src="/images/photosnap.svg" 
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
              Photosnap
            </p>
            <New />
            <Featured />
          </div>
          <p 
          className="job-title"
          >
            Senior Frontend Developer
          </p>
          <div 
          className="job-posting-details"
          >
            1d ago • Full Time • USA only
          </div>
        </div>
        <hr 
        className="mobile-divider"
        />
        <div 
        className="filters"
        >
          <Filter 
          filter="Frontend"
          />
        </div>
      </div>
    </>
  )
}