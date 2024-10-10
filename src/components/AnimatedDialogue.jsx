import React from 'react';
import maleImg from '../assets/man-img.svg';
import femaleImg from '../assets/female-img.svg';
import '../compiled/animateddialogue.css';

const AnimatedDialogue = () => {
  return (
           <div className='animateddialogue'>
				{/* <!-- this section will be having animations for the chat -->
				<!-- 1-flex innermost container --> */}
				<div className='display one'>
					<img src={femaleImg} alt="female"/>
					<div className='display_inner'>
						<div className='representative'>
							<p>Hi Mike. How can I help you?</p>
						</div>
						<p>Claire, 12:35</p>
					</div>
				</div>
	           
				{/* <!-- 2-flex innermost container --> */}
				<div className='reverse_display two'>
					<img src={maleImg} alt="male"/>
					<div className='display_inner'>
						<div className='customer'>
							<p>My credit card is stolen ...</p>
						</div>
						<p>Mike, 12:36</p>
					</div>
				</div>

				{/* <!-- 3-flex innermost container --> */}
				<div className='display three'>
					<img src={femaleImg} alt="female"/>
					<div className='display_inner'>
						<div className='representative'>
							<p>Ok. No problem. We will take care of this.</p>
						</div>
						<p>Claire, 12:37</p>
					</div>
				</div>
			</div>
  )
}

export default AnimatedDialogue;