import React from 'react';
import creditCard from '../../assets/credit-card.svg';
import chartCard from '../../assets/chart-card.svg';
import arrowRight from '../../assets/arrow-right.svg';
import profileImage from '../../assets/profile-images.svg';
import themeImg from '../../assets//Themes.svg';
import checkIcon from '../../assets/check-icon.svg';
import '../../compiled/main.css';
import CurvedPatch from '../CurvedPatch';
import AnimatedDialogue from './AnimatedDialogue';
import Button from '../Button';
import Accordion from './Accordion';

const MainContent = () => {
	const arrayOfBenefits = [
		"10 free local transfers",
		"Free ATM withdrawals in Dollar up to $250 per month",
		"Free payments to other Draft accounts",
		"Prepaid debit cards",
		"Virtual cards",
		"Priority 24/7 support",
		"Exchange 24 currencies",
		"Multi-user access"
	]
  return (
    // <!-- MAIN CONTENT -->
	<main className='main_container'>
		
		<section className='main_container__section_one'>
			<div className='main_container__section_one__one'>
				<h2>One card for all your payments</h2>
				<p>Get 3% back on everything you buy with the Draft card. Register today and enjoy every aspect of your business.</p>
			</div>
			<div className='main_container__section_one__two'>
			   <img src={creditCard} alt="Credit card" className='main_container__section_one__image'/>
			</div>
		</section>

	
		<section className='main_container__section_two'>
				
			<div className='main_container__section_two__inner_one'>
				 
				<div className='main_container__section_two__nextInner'>
					
					<CurvedPatch title="Balance" amount="$5,600"/>
					
					<CurvedPatch title="Last Transaction" amount="$230"/>
				</div>
				<div className='main_container__section_two__secondInner'>
				   <img src={chartCard} alt="Chart"/>
				</div>
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
            <div  className='main_container__section_three_inner_two'>
			<AnimatedDialogue />
			</div>
			{/* <!--  Second Inner container --> */}
		</section>

		{/* <!-- Flex container --- 4 --> */}
         <section className='main_container__section_four'>
			<div>
				<div className='main_container__section_four__one'> 
					<h3>
					   <span className='color_one_text'>An exceptional service,</span><span className='color_two_text'> at the right price</span>
					</h3>
			        <p>Start with our free plan and switch to premium as you grow. </p>
				</div>

			{/* <!-- Inner flex container --> */}
			<div  className='main_container__section_four__two'> 
				{/* <!-- sect-1 --> */}
				<div className='price_card'>
					<p>Free</p>
					<p>$0/m</p>
					<p>Manage your business with a simple and efficient account.</p>
					<button>
						{/* <!-- nude button --> */}
						Get Started
					</button>
					<div>
						<img src={creditCard} alt="credit card" className='price_card__main_img'/>
						<img src={themeImg} alt="theme" className='price_card__sub_img'/>
					</div>
					<div>
						{/* <!-- check and text list --> */}
						{arrayOfBenefits.map(e=>{
                          return(
							<div className='checkbox_list'>
								<img src={checkIcon} alt="check"/>
								<p>{e}</p>
						    </div>
						  )})}
								{/* <!-- disabled end --> */}
					</div>
					{/* </div> */}
				</div>

				{/* <!-- sect-2 --> */}
				<div className='price_card'>
					<p>Premium</p>
					<p>$8/m</p>
					<p>Priority support and multi-user access to maximize your productivity.</p>
					<button>
						{/* <!-- nude button --> */}
						Get Started
					</button>
					<div>
						<img src={creditCard} alt="credit card" className='price_card__main_img'/>
						<img src={themeImg} alt="theme" className='price_card__sub_img'/>
					</div>
					<div>
						{/* <!-- check and text list arrayOfBenefits--> */}
						{arrayOfBenefits.map(e=>{
                          return(
							<div className='checkbox_list'>
								<img src={checkIcon} alt="check"/>
								<p>{e}</p>
						    </div>
						  )})}
					</div>
				</div>
			</div>
		</div>
		 </section>

		 {/* <!-- Flex container --- 5 --> */}
		 <section className='main_container__section_five'>
			{/* <!-- background image here that extends to section 4 --> */}
			<div className='main_container__section_five__one'>
				<h3>
					<span className='color_one_text'>Frequently </span><span className='color_two_text'>asked questions</span>
				</h3>
				<p>If you are not sure whether Draft is suitable for you or not, do not worry. 
					We are here to explain everything you might want to know.
				</p>
			</div>

			{/* <!-- frequently asked section--> */}
			<Accordion />
		 </section>
	</main>
  )
}

export default MainContent