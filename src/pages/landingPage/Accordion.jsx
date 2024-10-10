import React, { useState } from 'react';
import AccordionItem from '../../components/AccordionItem';

const Accordion = () => {
  const [curOpen, setCurOpen] = useState(null);
    const arrayOfQueAndAns = [
        {
          question: "What is the difference between Draft and a traditional bank account?",
          answer: "Draft makes online transactions seamless. It also provides financial tools to manage your money well",
          id: 1
        },
        {
            question: "Who can open a Draft account?",
            answer: "Anyone can as long as you have to required documents to get your KYC done",
            id: 2
          },
          {
            question: "What if I withdraw money abroad?",
            answer: "It is allowed",
            id: 3
          },
          {
            question: "Can I cancel my subscription or switch to another plan anytime?",
            answer: "Yes, you can.",
            id: 4
          },
          {
            question: "What happens if I withdraw more than $250?",
            answer: "You will be charged 0.5% for any transactions above $250",
            id: 5
          }
    ]
  return (
        <div>
            {arrayOfQueAndAns.map((e)=>{
                    return(
                     <AccordionItem object={e} key={e.id} curOpen={curOpen} onOpen={setCurOpen}/>
                    )
                })
            }    
        </div>
  )
}

export default Accordion