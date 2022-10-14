const services = [
	{
		title: 'We take care of the shipping',
		text: 'Shipping all over the country.',
		d: 'M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0',
	},
	{
		title: 'Pay as you want',
		text: 'Credit cards and cash.',
		d: 'M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z',
	},
	{
		title: 'Buy safely',
		text: 'Your data always protected.',
		d: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
	},
]

const Services = () => {
	return (
		<div className="flex flex-wrap items-center justify-center gap-12 md:py-24 py-16">
			{services.map(({ title, d, text }) => (
				<div className="flex gap-4" key={title}>
					<div>
						<svg
							className="w-12 h-12"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
								d={d}
							></path>
						</svg>
					</div>
					<div>
						<h2 className="font-bold">{title}</h2>
						<p>{text}</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default Services
