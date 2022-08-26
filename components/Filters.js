const Filters = () => {
	return (
		<aside className="m-14 py-8 pl-6 pr-12 absolute bg-white border border-zinc-300 rounded shadow-lg">
			<div className="pb-6">
				<h1 className="font-bold text-xl font-serif">Categories</h1>
				<ul className="py-3 px-4 flex flex-col gap-2">
					<li className="font-bold text-md">Shoes</li>
					<div>
						<li>
							<input type="checkbox" className="mr-2" />
							Shoes
						</li>
					</div>
					<li className="font-bold text-md">Clothing</li>
					<div>
						<li>
							<input type="checkbox" className="mr-2" />
							T-Shirt
						</li>
						<li>
							<input type="checkbox" className="mr-2" />
							Sweatshirt
						</li>
						<li>
							<input type="checkbox" className="mr-2" />
							Hoodie
						</li>
						<li>
							<input type="checkbox" className="mr-2" />
							Jogging
						</li>
					</div>
					<li className="font-bold text-md">Accessories</li>
					<div>
						<li>
							<input type="checkbox" className="mr-2" />
							Accessories
						</li>
					</div>
				</ul>
			</div>
			<div className="pb-6">
				<h1 className="font-bold text-xl font-serif">Filter by</h1>
				<div className="py-3 px-4 flex flex-col gap-2">
					<h2 className="font-bold text-md">Color</h2>
					<ul>
						<li>
							<input type="checkbox" className="mr-2" />
							White
						</li>
						<li>
							<input type="checkbox" className="mr-2" />
							Black
						</li>
						<li>
							<input type="checkbox" className="mr-2" />
							Saddlebrown
						</li>
						<li>
							<input type="checkbox" className="mr-2" />
							Beige
						</li>
						<li>
							<input type="checkbox" className="mr-2" />
							Green
						</li>
						<li>
							<input type="checkbox" className="mr-2" />
							Olivedrab
						</li>
						<li>
							<input type="checkbox" className="mr-2" />
							Pink
						</li>
						<li>
							<input type="checkbox" className="mr-2" />
							Plum
						</li>
						<li>
							<input type="checkbox" className="mr-2" />
							Indigo
						</li>
					</ul>
				</div>
				<div className="py-3 px-4 flex flex-col gap-2">
					<h2 className="font-bold text-md">Size</h2>
					<ul>
						<li>
							<input type="checkbox" className="mr-2" />S
						</li>
						<li>
							<input type="checkbox" className="mr-2" />M
						</li>
						<li>
							<input type="checkbox" className="mr-2" />L
						</li>
						<li>
							<input type="checkbox" className="mr-2" />
							XL
						</li>
						<li>
							<input type="checkbox" className="mr-2" />
							XXL
						</li>
					</ul>
				</div>
			</div>
		</aside>
	)
}

export default Filters
