import React from 'react'

export default function About() {
	return (
		<section id='about'>
			<div className='container mx-auto flex px-10 py-20 md:flex-row flex-col items-center '>
				<div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
					<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-black'>
						Hi, I'm Kate.
						<br className='hidden lg:block' /> I'm a <span className='job-title'>Software Engineer</span> who <span className='love'>loves</span> puzzles & projects.
					</h1>
					<p className='mb-8 leading-relaxed'></p>
					<div className='flex justify-center'>
						<a
							href='#contact'
							className=' btn inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg'>
							Work With Me
						</a>
						<a
							href='#projects'
							className='btn ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-black rounded text-lg'>
							See What I have Built
						</a>
					</div>
				</div>
				<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
					<img
						className='profile-img object-cover object-center rounded'
						alt='hero'
						src='https://i.ibb.co/3vwMcr5/253244481-10224500599158624-4174137979953339453-n-removebg-preview.png'
					/>
				</div>
			</div>
		</section>
	)
}
