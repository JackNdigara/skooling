import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faLinkedin,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Teachers.css";

const Teachers = () => {
	return (
		<div className='teachers mb-20'>
			<div className='team-area'>
				<div className='text-red-500 text-center text-3xl uppercase font-black mt-5 mb-8'>
					Our Instructors
					<p className='text-sm text-black px-6 pt-3'>
						You don't have to struggle alone, you've got our assistance and
						help.
					</p>
				</div>

				<div className='team-box mx-auto'>
					<div className='box pb-6'>
						<div className='teachers-box'>
							<img
								src='https://media.istockphoto.com/id/1372065700/photo/portrait-of-a-confident-young-businessman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=oPRp9aiGEb_00Y0Q_eR40MiOisM2eFfeP7lDf0IqJDw='
								alt=''
							/>
						</div>
						<div>
							<h2 className='mt-4'>Jack Ndigara</h2>
							<span>Senior Developer</span>
							<ul>
								<li>
									<a href='/#'>
										<FontAwesomeIcon
											className='text-gray-700 text-3xl mx-2'
											icon={faFacebook}
										/>
									</a>
								</li>
								<li>
									<a href='/#'>
										<FontAwesomeIcon
											className='text-gray-700 text-3xl mx-2'
											icon={faTwitter}
										/>
									</a>
								</li>
								<li>
									<a href='/#'>
										<FontAwesomeIcon
											className='text-gray-700 text-3xl mx-2'
											icon={faLinkedin}
										/>
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className='box pb-6'>
						<div className='teachers-box'>
							<img
								src='https://media.istockphoto.com/id/1347891278/photo/cropped-portrait-of-an-attractive-mature-businesswoman-standing-with-her-arms-crossed-in-the.jpg?s=612x612&w=0&k=20&c=J9Op0JHGQXnWZbn2YzFi0LtsqOWppybfDiCfgghe2j0='
								alt=''
							/>
						</div>
						<div>
							<h2 className='mt-4'>Kelly Franklin</h2>
							<span>Software Engineer</span>
							<ul>
								<li>
									<a href='/#'>
										<FontAwesomeIcon
											className='text-gray-700 text-3xl mx-2'
											icon={faFacebook}
										/>
									</a>
								</li>
								<li>
									<a href='/#'>
										<FontAwesomeIcon
											className='text-gray-700 text-3xl mx-2'
											icon={faTwitter}
										/>
									</a>
								</li>
								<li>
									<a href='/#'>
										<FontAwesomeIcon
											className='text-gray-700 text-3xl mx-2'
											icon={faLinkedin}
										/>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='box pb-6'>
						<div className='teachers-box'>
							<img
								src='https://media.istockphoto.com/id/1398313058/photo/portrait-of-a-joyful-black-bellhop-working-at-a-hotel-smiling-at-the-camera.jpg?s=612x612&w=0&k=20&c=PiAeIoGkGNPR4y-R7Zsi_P5Zx-SrLYdc62BGtdKPUbA='
								alt=''
							/>
						</div>
						<div>
							<h2 className='mt-4'>Josh Mathew</h2>
							<span>Web Developer</span>
							<ul>
								<li>
									<a href='/#'>
										<FontAwesomeIcon
											className='text-gray-700 text-3xl mx-2'
											icon={faFacebook}
										/>
									</a>
								</li>
								<li>
									<a href='/#'>
										<FontAwesomeIcon
											className='text-gray-700 text-3xl mx-2'
											icon={faTwitter}
										/>
									</a>
								</li>
								<li>
									<a href='/#'>
										<FontAwesomeIcon
											className='text-gray-700 text-3xl mx-2'
											icon={faLinkedin}
										/>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Teachers;
