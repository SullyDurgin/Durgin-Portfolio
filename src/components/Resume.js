import React from 'react'
import { TerminalIcon } from '@heroicons/react/solid'
import { resume } from '../data'

export default function Resume() {
	return (
		<section id='resume'>
			<div className='resume-box text-center'>
				<TerminalIcon className='w-10 inline-block mb-4' />
				<h1 className='sm:text-4xl text-3xl font-medium title-font text-white mb-4'>
					Resumé
				</h1>
				<div className='resume-box flex m-4'>
					{resume.map((resume) => (
						<div className='inline-flex items-center'>
							<img
								alt='resume'
								src={resume.image}
								className=' resume-img object-cover object-center'
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
