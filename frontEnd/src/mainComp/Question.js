import React from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

const Question = ({open, setOpen, question , answer}) => {
  
  return (
    <div className='col-lg-10 mb-2'>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {question}
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {answer}
           : Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
    </div>
  )
}

export default Question