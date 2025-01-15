import React from 'react';

const CardBlog = ({ blog }) => {
	return (
		<div className='w-[400px] h-fit m-2 flex-shrink-0'>
			<div className='rounded-3xl overflow-hidden mb-4 relative h-[250px]'>
				<div className='absolute p-10 bg-black  text-justify'>
					<span className='text-wrap text-center text-xl'>
						{blog.description}
					</span>
				</div>
				<img src={blog.img} alt={blog.title} />
				<span className='absolute top-3 left-4 border border-purple-950 text-xs rounded-xl px-4 py-2 font-semibold capitalize bg-gray-800'>
					{blog.category}
				</span>

			</div>
			<div className='px-4 flex gap-4'>
				{/*<img
					src={blog.author}
					alt='Author'
					className='object-cover w-12 h-12 rounded-full'
				/>*/}
				<div className='flex flex-col gap-2 w-full'>
					<h3 className='text-lg font-bold text-slate-700 leading-7 whitespace-normal'>
						{blog.title}
					</h3>
					{/*<div className='flex gap-4'>
						<p className='text-sm text-gray-500 font-normal'>
							{blog.date}
						</p>
					</div>*/}
				</div>
			</div>
		</div>
	);
};
export default CardBlog;