import React from 'react';

export default function MainContent() {
	const fontSize = 30;
	return (
		<div className='h-full grow'>
			<p className="text-center">Main Content</p>
			<p className="text-center" style={{ fontSize: `${fontSize}px`}} >ٱلسَّلَامُ عَلَيْكُمْ</p>
			<p className="text-center">{getHijriDate('en')}</p>
		</div>
	);
}


