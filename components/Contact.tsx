import React, { useState } from "react";
import Image from "next/image";
import { delay, motion } from "framer-motion";
import ConnectText from "@/public/ConnectText";

const Contact = () => {
	//useState Hooks
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleNameChange = (e: any) => {
		setName(e.target.value);
	};

	const handleEmailChange = (e: any) => {
		setEmail(e.target.value);
	};

	const handleMessageChange = (e: any) => {
		setMessage(e.target.value);
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();

		// Perform form submission logic here, e.g., send the data to a server

		// Clear form fields
		setName("");
		setEmail("");
		setMessage("");
	};

	//animation logic
	const animation = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 1,
				delay: 1,
			},
		},
	};

	//component
	return (
		<motion.div
			variants={animation}
			initial="initial"
			animate="animate"
			className="grid md:grid-cols-2 grid-cols-1 bg-[#003865]"
			id="Contact"
		>
			<div className="top-0 left-0 relative">
				<Image
					priority
					src={"/contact.svg"}
					alt="contact"
					width={50}
					height={50}
					className="w-full h-screen hidden md:flex"
				/>
				<div className="md:absolute md:top-1/3 md:left-1/3 mx-20 md:mx-0 xl:w-96 w-80 ">
					<ConnectText />
				</div>
			</div>

			<div>
				<Image
					src={"/contact2.svg"}
					alt="line and cross"
					width={20}
					height={100}
					className="mx-auto"
				/>
				<form
					action="https://formsubmit.co/codingoffroading@gmail.com"
					method="POST"
				>
					<div className="mx-10">
						<label htmlFor="email"></label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Enter College Mail"
							className="text-sans w-full mx-auto rounded-full p-3 my-5"
							required
						/>
					</div>
					<div className="mx-10">
						<label htmlFor="name"></label>
						<input
							type="text"
							id="name"
							name="name"
							value={name}
							onChange={handleNameChange}
							placeholder="Enter Your Name"
							className="text-sans w-full mx-auto rounded-full p-3 my-5"
							required
						/>
					</div>
					<input
						type="hidden"
						name="_subject"
						value="Someone Want's To Contact"
					/>
					<input type="hidden" name="_cc" value="feedboxclub@ietdavv.edu.in" />
					<input
						type="hidden"
						name="_blacklist"
						value="0% ,Access now, Bargain ,0% risk ,Access for free, Believe me 777 ,Act now, Big bucks 99% ,Act immediately, Billing 99.9% ,Action required, Billing address 100% ,Additional income, Billionaire 100% more ,Affordable deal, Billion dollars 100% satisfied ,Apply online, Best offer, Fantastic deal ,Get it now, Hidden charges, Fantastic offer ,Get out of debt, Hidden costs
            ,Fast cash ,Get paid, Hidden fees
            ,Financial freedom ,Gift certificate, High score
            For instant access ,Great deal, Home employment
            For just $ (amount) ,Great offer, Home-based business
            For only ,Guaranteed, Huge discount
            ,Free access ,Guaranteed deposit, Hurry up
            ,Free bonus ,Guaranteed income,
            Free trial ,Guaranteed payment, Important information ,Join millions,
            Important notification ,Junk,
            In accordance with laws ,
            Increase sales , Increase traffic , Increase your chances , Incredible deal , Info you requested , Instant earnings , Initial investment ,Offer ,Please read, Quote
            Offer expires ,Potential earnings,
            Once in a lifetime ,Pre-approved,
            One hundred percent ,Price protection,
            Online biz opportunity ,Print form signature,
            Only ,Problem,
            Only $ ,Prize,
            Order now ,Promise you,
            Order status ,Purchase now,
            Outstanding values ,Pure profit,Rate ,Sale, Take action now
            Real thing ,Sample, Talks about prizes
            Refinance ,Satisfaction guaranteed, The best rates
            Refund ,Save $, This isn’t a scam
            Removal ,Save money, This isn’t junk
            Removal instructions ,Save big money, This isn’t spam
            Request now ,Save up to, This won’t last
            Requires investment ,Sent in compliance, Time limited
            Reserves the right ,Sign up free today, Traffic
            Risk-free ,Special promotion, Trial, You have been chosen, Zero percent
            ,You have been selected, Zero risk
            ,Your chance,
            ,Your income,
            ,Your status"
					/>
					<input type="hidden" name="_captcha" value="false" />
					<input
						type="hidden"
						name="_autoresponse"
						value={`
          Dear ${name},

          Thank you for reaching out to Feedbox Club. We are delighted to receive your message and greatly appreciate your interest in our organization.
          
          Your inquiry is important to us, and we assure you that we will respond as promptly as possible. Our dedicated team is working diligently to address all inquiries and provide the information you are seeking.
          
          While we aim to respond quickly, please allow us up to 1 week to thoroughly address your concerns or questions. If your matter requires urgent attention, please indicate it in your message, and we will prioritize your request accordingly.
          
          In the meantime, you can explore our website www.clubfeedbox.vercel.app for additional information about our programs, services, and initiatives. If you have any other questions or need further assistance, feel free to let us know, and we will be more than happy to assist you.
          
          Once again, thank you for contacting Feedbox Club. We value your engagement and look forward to serving you in the best possible way.
          
          Best regards,
          
          Feedbox Club
          `}
					/>
					<input
						type="hidden"
						name="_next"
						value="https://clubfeedbox.vercel.app/"
					/>
					<div className="mx-10">
						<label htmlFor="message"></label>
						<textarea
							id="message"
							value={message}
							name="message"
							onChange={handleMessageChange}
							placeholder="Why do you want to open our club in your college?"
							className="text-sans w-full mx-auto rounded-xl h-56 p-3 my-5"
							required
						/>
					</div>
					<div className="mx-10">
						<button
							type="submit"
							className="w-full border border-white text-white py-4 my-5 hover:bg-gradient-to-r from-primary to-secondary hover:text-black rounded-full"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</motion.div>
	);
};

export default Contact;
