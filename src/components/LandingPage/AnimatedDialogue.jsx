import React from 'react';
import maleImg from '../../assets/man-img.svg';
import femaleImg from '../../assets/female-img.svg';

const AnimatedDialogue = () => {
  return (
           <div>
				{/* <!-- this section will be having animations for the chat -->
				<!-- 1-flex innermost container --> */}
				<div>
					<img src={femaleImg} alt="female"/>
					<div>
						<p>Hi Mike. How can I help you?</p>
						<p>Claire, 12:35</p>
					</div>
				</div>
	           
				{/* <!-- 2-flex innermost container --> */}
				<div>
					<img src={maleImg} alt="male"/>
					<div>
						<p>My credit card is stolen ...</p>
						<p>Mike, 12:36</p>
					</div>
				</div>

				{/* <!-- 3-flex innermost container --> */}
				<div>
					<img src={femaleImg} alt="female"/>
					<div>
						<p>Ok. No problem. We will take care of this.</p>
						<p>Claire, 12:35</p>
					</div>
				</div>
			</div>
  )
}

export default AnimatedDialogue;