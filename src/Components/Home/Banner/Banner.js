import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperCore, { EffectFade, Pagination, Autoplay } from "swiper";
import { Link } from "react-router-dom";
SwiperCore.use([Autoplay, EffectFade, Pagination]);

const bgStyle = { top: "20%" };

const Banner = () => {
	return (
		<>
			<Swiper
				spaceBetween={30}
				loop='true'
				effect={"fade"}
				pagination={{ clickable: true }}
				autoplay={{ delay: 3000, disableOnInteraction: false }}>
				<SwiperSlide>
					<img
						className='w-full'
						src='https://media.istockphoto.com/id/1339432131/photo/positive-african-american-teen-student-with-backpack-tablet-pc-and-headphones-studying-online.jpg?b=1&s=170667a&w=0&k=20&c=R725ZxSgxEPnmc3PNv9A-i4Nm8zUVjEfYdZLQ6LBFew='
						alt='SliderImage'
					/>
					<div
						className='slider-text text-left absolute left-1/4'
						style={bgStyle}>
						<p className='text-red-500 font-bold text-xl tracking-wider mb-3'>
							Learn & Achieve
						</p>
						<h1 className='lg:text-5xl md:text-3xl sm:text-xl mb-4 text-white uppercase font-bold'>
							Find The Right Online
						</h1>
						<h3 className='lg:text-3xl md:text-xl sm:hidden md:block lg:block mb-6 text-white uppercase font-bold'>
							Tutor For You
						</h3>
						<p className='mb-8 text-gray-300 text-lg sm:hidden lg:block description'>
							Better Education For A Better World. Best Industry Leaders And
							Learn Courses Online <br /> “Learning to code has the inadvertent
							effect of teaching you how to think,” says Adrian Degus. <br />
							Better Education For A Better World. Best Industry Leaders And
							Learn Courses Online.
						</p>
						<Link to='/Courses'>
							<button className='border-2 border-red-500 bg-red-500 hover:bg-transparent duration-300 text-white font-bold py-3 px-6 rounded-lg tracking-wider'>
								Get Started
							</button>
						</Link>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className='w-full'
						src='https://media.istockphoto.com/id/1334063560/photo/african-americans-college-students-e-leaning-with-their-teacher-during-a-class.jpg?b=1&s=170667a&w=0&k=20&c=dm6esL66UGFbj9bkeGAewyRS8Ht5JB-6QGBC_5eOmWM='
						alt='SliderImage'
					/>
					<div
						className='slider-text text-left absolute left-1/4'
						style={bgStyle}>
						<p className='text-red-500 font-bold text-xl tracking-wider mb-3'>
							Learn & Achieve
						</p>
						<h1 className='lg:text-5xl md:text-3xl sm:text-xl mb-4 text-white uppercase font-bold'>
							Become A Developer
						</h1>
						<h3 className='lg:text-3xl md:text-xl sm:hidden md:block lg:block mb-6 text-white uppercase font-bold'>
							With skooling
						</h3>
						<p className='mb-8 text-gray-300 text-lg sm:hidden lg:block description'>
							Better Education For A Better World. Best Industry Leaders And
							Learn Courses Online <br /> “Learning to code has the inadvertent
							effect of teaching you how to think,” says Adrian Degus. <br />
							Better Education For A Better World. Best Industry Leaders And
							Learn Courses Online.
						</p>
						<Link to='/Courses'>
							<button className='border-2 border-red-500 bg-red-500 hover:bg-transparent duration-300 text-white font-bold py-3 px-6 rounded-lg tracking-wider'>
								Get Started
							</button>
						</Link>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className='w-full'
						src='https://media.istockphoto.com/id/511652302/photo/students-life.jpg?s=612x612&w=0&k=20&c=zqfRtCIoO3Q1e81_vC-JFQ7iyEwcp5UrDbxXi8JbWpM='
						alt='SliderImage'
					/>
					<div
						className='slider-text text-left absolute left-1/4'
						style={bgStyle}>
						<p className='text-red-500 font-bold text-xl tracking-wider mb-3'>
							Learn & Achieve
						</p>
						<h1 className='lg:text-5xl md:text-3xl sm:text-xl mb-4 text-white uppercase font-bold'>
							Explore A Different Way
						</h1>
						<h3 className='lg:text-3xl md:text-xl sm:hidden md:block lg:block mb-6 text-white uppercase font-bold'>
							To Learn Coding
						</h3>
						<p className='mb-8 text-gray-300 text-lg sm:hidden lg:block description'>
							Better Education For A Better World. Best Industry Leaders And
							Learn Courses Online <br /> “Learning to code has the inadvertent
							effect of teaching you how to think,” says Adrian Degus. <br />
							Better Education For A Better World. Best Industry Leaders And
							Learn Courses Online.
						</p>
						<Link to='/Courses'>
							<button className='border-2 border-red-500 bg-red-500 hover:bg-transparent duration-300 text-white font-bold py-3 px-6 rounded-lg tracking-wider'>
								Get Started
							</button>
						</Link>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default Banner;
