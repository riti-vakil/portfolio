import React from 'react'
import { Col } from 'react-bootstrap'
export const ProjectCard = ({imgUrl, title, description, gitHubUrl}) => {
  return (
    <Col sm={5} md={3}>
    <div className='proj-imgbx'>
        <img src={imgUrl}/>
       <div className='proj-txtx'> 
            <h4>{title}</h4>
            <span>{description}</span>
            <a href={gitHubUrl} target="_blank" rel="noopener noreferrer">
                    GitHub Link
            </a>
        </div> 
    </div>
    </Col>
  )
}
