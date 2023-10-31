import React from 'react'

import './News.scss';
function News(props) {
 const hashTags = props.hashtags.split(",")
 
  return (
    <div className="News-main">
      <div className="left-part">
      <div className="headline">
        {props.headline}
        </div>
        <div className="hashtags">
      {
        hashTags?.map((tag)=>(
        <div className="tag">
           {tag}
        </div>
      ))

      }
        </div>
        <div className="source">
       {props.source}
        </div>
      </div>
      <div className="right-part">
        <div className="img-box">
            <img src={props.icon} alt="News Icon" />
        </div>
      </div>
    </div>
  )
}

export default News