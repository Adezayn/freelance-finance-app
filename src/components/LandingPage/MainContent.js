import React from 'react';
import creditCard from '../../assets/credit-card.svg';
import chartCard from '../../assets/chart-card.svg';
import arrowRight from '../../assets/arrow-right.svg';
import profileImage from '../../assets/profile-images.svg';
import themeImg from '../../assets//Themes.svg';
import checkIcon from '../../assets/check-icon.svg';
import plusIcon from '../../assets/plus-icon.svg';
import '../../compiled/main.css';
import CurvedPatch from '../CurvedPatch';
import AnimatedDialogue from './AnimatedDialogue';
import Button from '../Button';

const MainContent = () => {
  return (
    // <!-- MAIN CONTENT -->
	<main className='main_container'>
		
		<section className='main_container__section_one'>
			<div className='main_container__section_one__one'>
				<h2>One card for all your payments</h2>
				<p>Get 3% back on everything you buy with the Draft card. Register today and enjoy every aspect of your business.</p>
			</div>
			<div>
			   <img src={creditCard} alt="Credit card" className='main_container__section_one__image'/>
			</div>
		</section>

	
		<section className='main_container__section_two'>
				
			<div className='main_container__section_two__inner_one'>
				 
				<div className='main_container__section_two__nextInner'>
					
					<CurvedPatch title="Balance" amount="$5,600"/>
					
					<CurvedPatch title="Last Transaction" amount="$230"/>
				</div>
				{/* <div className='main_container__section_two__inner_one__img'> */}
				   <img src={chartCard} alt="Chart"/>
				{/* </div> */}
			</div>
				
			<div className='main_container__section_two__inner_two'>
				<h2>Manage your finances like a pro in no time </h2>
				<p>With Draft, book keeping, banking, and invoices are all in one place. You will always know where you stand.</p>
				<Button color="blue" optionalStyle="style">
				     Learn More
                     <img src={arrowRight} alt="arrow-right"/>
                </Button>
					{/* <button>
					{/* <!-- background image here --> 
					Learn More <img src={arrowRight} alt="arrow right icon"/>
				</button>*/}
			</div>
		</section>

		{/* <!-- Flex container --- 3 --> */}
		<section className='main_container__section_three'>
			{/* <!-- Two background images here in the section tag, top-right and bottom-left --> */}
			<div className='main_container__section_three_inner_one'>
				<h2>We support you in 5 different languages</h2>
				<p>Our support team is here to help you in 5 languages – English, French, Spanish, Polish, and German.</p>
                <div className='main_container__section_three_inner_one-container'>
					{/* <!-- flex container --> */}
					<img src={profileImage} alt="profile images"/>
					<p>+20</p>
				</div>
			</div>

			{/* <!--  Second Inner container --> */}
		    <AnimatedDialogue />
		</section>

		{/* <!-- Flex container --- 4 --> */}
         <section className='main_container__section_four'>
			<h3>
				<span>An exceptional service,</span><span> at the right price</span>
			</h3>
			<p>Start with our free plan and switch to premium as you grow. </p>

			{/* <!-- Inner flex container --> */}
			<div>
				{/* <!-- sect-1 --> */}
				<div>
					<p>Free</p>
					<p>$0/m</p>
					<p>Manage your business with a simple and efficient account.</p>
					<button>
						{/* <!-- nude button --> */}
						Get Started
					</button>
					<div>
						<img src={creditCard} alt="credit card"/>
						<img src={themeImg} alt="theme"/>
					</div>
					<div>
						{/* <!-- check and text list --> */}
						<div>
							<img src={checkIcon} alt="check"/>
							<p>10 free local transfers</p>
						</div>
						<div>
							<img src={checkIcon} alt="check"/>
							<p>Free ATM withdrawals in Dollar up to $250 per month</p>
						</div>
						<div>
							<img src={checkIcon} alt="check"/>
							<p>Free payments to other Draft accounts</p>
						</div>
						<div>
							<img src={checkIcon} alt="check"/>
							<p>Prepaid debit cards</p>
						</div>
						<div>
							<img src={checkIcon} alt="check"/>
							<p>Virtual cards</p>
						</div>
						{/* <!-- disabled start --> */}
						<div>
							<img src={checkIcon} alt="check"/>
							<p>Priority 24/7 support</p>
						</div>
						<div>
							<img src={checkIcon} alt="check"/>
							<p>Exchange 24 currencies</p>
						</div>
						<div>
							<img src={checkIcon} alt="check"/>
							<p>Multi-user access</p>
						</div>
								{/* <!-- disabled end --> */}
					</div>
				</div>

				{/* <!-- sect-2 --> */}
				<div>
					<p>Premium</p>
					<p>$8/m</p>
					<p>Priority support and multi-user access to maximize your productivity.</p>
					<button>
						{/* <!-- nude button --> */}
						Get Started
					</button>
					<div>
						<img src={creditCard} alt="credit card"/>
						<img src={themeImg} alt="theme"/>
					</div>
					<div>
						{/* <!-- check and text list --> */}
						<div>
							<img src={checkIcon} alt="check"/>
							<p>10 free local transfers</p>
						</div>
						<div>
							<img src={checkIcon} alt="check"/>
							<p>Free ATM withdrawals in Dollar up to $250 per month</p>
						</div>
						<div>
							<img src={checkIcon} alt="check"/>
							<p>Free payments to other Draft accounts</p>
						</div>
						<div>
							<img src={checkIcon} alt="check"/>
							<p>Prepaid debit cards</p>
						</div>
						<div>
							<img src={checkIcon} alt="check"/>
							<p>Virtual cards</p>
						</div>
						<div>
							<img src={checkIcon} alt="check"/>
							<p>Priority 24/7 support</p>
						</div>
						<div>
							<img src={checkIcon} alt="check"/>
							<p>Exchange 24 currencies</p>
						</div>
						<div>
							<img src={checkIcon} alt="check"/>
							<p>Multi-user access</p>
						</div>
					</div>
				</div>
			</div>
		 </section>

		 {/* <!-- Flex container --- 5 --> */}
		 <section className='main_container__section_five'>
			{/* <!-- background image here that extends to section 4 --> */}
			<h3>
				<span>Frequently </span><span>asked questions</span>
			</h3>
			<p>If you are not sure whether Draft is suitable for you or not, do not worry. 
				We are here to explain everything you might want to know.
			</p>

			{/* <!-- frequently asked section--> */}
			<div>
               <div>
				<p>What is the difference between Draft and a traditional bank account?</p>
				<img src={plusIcon} alt="plus icon"/>
			   </div>

	
				<div>
				 <p>Who can open a Draft account?</p>
				 <img src={plusIcon} alt="plus icon"/>
			   </div>

			    <div>
				 <p>What if I withdraw money abroad?</p>
				 <img src={plusIcon} alt="plus icon"/>
			   </div>

				<div>
					<p>Can I cancel my subscription or switch to another plan anytime?</p>
					<img src={plusIcon} alt="plus icon"/>
				</div>

				<div>
					<p>What happens if I withdraw more than $250?</p>
					<img src={plusIcon} alt="plus icon"/>
			   </div>
			</div>
		 </section>
	</main>
  )
}

export default MainContent