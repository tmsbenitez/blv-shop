const Services = () => {
	return (
		<div className="flex flex-col items-center md:flex-row justify-center gap-12 md:py-24 py-16">
			<div className="flex items-center gap-4">
				<div>
					<svg
						className="w-12 h-12"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
						></path>
					</svg>
				</div>
				<div>
					<h2 className="font-bold">We take care of the shipping</h2>
					<p>Shipping all over the country.</p>
				</div>
			</div>
			<div className="flex items-center gap-4">
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
							strokeWidth="2"
							d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
						></path>
					</svg>
				</div>
				<div>
					<h2 className="font-bold">Pay as you want</h2>
					<p>Credit cards and cash.</p>
				</div>
			</div>
			<div className="flex items-center gap-4">
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
							strokeWidth="2"
							d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
						></path>
					</svg>
				</div>
				<div>
					<h2 className="font-bold">Buy safely</h2>
					<p>Your data always protected.</p>
				</div>
			</div>
		</div>
	)
}

export default Services
