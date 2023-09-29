import React from 'react';
import AccordionItem from './AccordionItem';

const Accordion = () => {
    const arrayOfQueAndAns = [
        {
          question: "What is the difference between Draft and a traditional bank account?",
          answer: ""
        },
        {
            question: "Who can open a Draft account?",
            answer: ""
          },
          {
            question: "What if I withdraw money abroad?",
            answer: ""
          },
          {
            question: "Can I cancel my subscription or switch to another plan anytime?",
            answer: ""
          },
          {
            question: "What happens if I withdraw more than $250?",
            answer: ""
          }
    ]
  return (
        <div>
            {arrayOfQueAndAns.map((e, i)=>{
                    return(
                     <AccordionItem object={e} key={i}/>
                    )
                })
            }    
        </div>
  )
}

export default Accordion