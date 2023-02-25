import {PostingProps} from '../interfaces/PostingProps';

export const Posting = (props: PostingProps): JSX.Element =>
{

  let object =  {
    "id": 1,
    "company": "Photosnap",
    "logo": "./images/photosnap.svg",
    "new": true,
    "featured": true,
    "position": "Senior Frontend Developer",
    "role": "Frontend",
    "level": "Senior",
    "postedAt": "1d ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["HTML", "CSS", "JavaScript"],
    "tools": []
  }
  return (
    <>
      <div 
      className="posting-container"
      >
        <div 
        className="image-container"
        >

        </div>
        
      </div>
    </>
  )
}