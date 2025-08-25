export const data = {
	categories: [
		{
			_id: '64f1b2c4e2d3a9b7f1234561',
			name: 'Men Accessories',
			image: 'https://picsum.photos/seed/cat1/150',
			subcategories: [
				{
					name: 'Watches',
					image: 'https://picsum.photos/seed/sub1/150',
				},
				{
					name: 'Wallets',
					image: 'https://picsum.photos/seed/sub2/150',
				},
				{
					name: 'Belts',
					image: 'https://picsum.photos/seed/sub3/150',
				},
				{
					name: 'Sunglasses',
					image: 'https://picsum.photos/seed/sub4/150',
				}, // Maps to Stylish Men’s Glasses
				{
					name: 'Perfumes',
					image: 'https://picsum.photos/seed/sub5/150',
				},
				{
					name: 'Cap',
					image: 'https://picsum.photos/seed/sub6/150',
				}, // Maps to Kid's Cotton Cap
			],
		},
		{
			_id: '64f1b2c4e2d3a9b7f1234562',
			name: "Men's Clothes",
			image: 'https://picsum.photos/seed/cat2/150',
			subcategories: [
				{
					name: 'Shirts',
					image: 'https://picsum.photos/seed/sub7/150',
				}, // Maps to Men's Cotton Shirt
				{
					name: 'Pant',
					image: 'https://picsum.photos/seed/sub8/150',
				},
				{
					name: 'Kurtas',
					image: 'https://picsum.photos/seed/sub9/150',
				},
				{
					name: 'Jackets',
					image: 'https://picsum.photos/seed/sub10/150',
				},
				{
					name: 'T-Shirts',
					image: 'https://picsum.photos/seed/sub11/150',
				},
				{
					name: 'Suits',
					image: 'https://picsum.photos/seed/sub12/150',
				}, // Maps to Formal Women’s Suit (assumed typo)
			],
		},
		{
			_id: '64f1b2c4e2d3a9b7f1234563',
			name: "Kids' Clothes",
			image: 'https://picsum.photos/seed/cat3/150',
			subcategories: [
				{
					name: "Boys' Clothing",
					image: 'https://picsum.photos/seed/sub13/150',
				}, // Maps to Kids Printed Shirt
				{
					name: "Girls' Clothing",
					image: 'https://picsum.photos/seed/sub14/150',
				}, // Maps to Girls Fancy Skirt
				{
					name: 'Baby Clothing',
					image: 'https://picsum.photos/seed/sub15/150',
				},
				{
					name: "Kids' Accessories",
					image: 'https://picsum.photos/seed/sub16/150',
				}, // Maps to Soft Toys for Kids
				{
					name: 'School Uniforms',
					image: 'https://picsum.photos/seed/sub17/150',
				},
				{
					name: "Kids' Jackets",
					image: 'https://picsum.photos/seed/sub18/150',
				},
			],
		},
		{
			_id: '64f1b2c4e2d3a9b7f1234564',
			name: "Women's Clothes",
			image: 'https://picsum.photos/seed/cat4/150',
			subcategories: [
				{
					name: 'Lehenga',
					image: 'https://picsum.photos/seed/sub19/150',
				},
				{
					name: 'Kurti',
					image: 'https://picsum.photos/seed/sub20/150',
				},
				{
					name: 'Saree',
					image: 'https://picsum.photos/seed/sub21/150',
				}, // Maps to Designer Women’s Saari
				{
					name: 'Anarkali',
					image: 'https://picsum.photos/seed/sub22/150',
				},
				{
					name: 'Western Dresses',
					image: 'https://picsum.photos/seed/sub23/150',
				},
				{
					name: 'Blouses',
					image: 'https://picsum.photos/seed/sub24/150',
				}, // Maps to Women’s Fancy Footwear
			],
		},
	],
	products: [
		{
			_id: 'A1B2C3D4',
			title: "Men's Cotton Shirt",
			description: `
      <h2>Product Overview</h2>
      <p><b>High-quality</b> cotton shirt designed for <i>maximum comfort</i>.</p>
      <h3>Features</h3>
      <ul>
        <li><u>100% Cotton</u> material</li>
        <li>Breathable and lightweight</li>
        <li>Available in multiple sizes</li>
      </ul>
      <h3>Size Chart</h3>
      <table border="1">
        <tr><th>Size</th><th>Chest</th><th>Length</th></tr>
        <tr><td>M</td><td>38"</td><td>28"</td></tr>
        <tr><td>L</td><td>40"</td><td>29"</td></tr>
        <tr><td>XL</td><td>42"</td><td>30"</td></tr>
      </table>
      <h3>How to Style</h3>
      <ol>
        <li>Pair with jeans</li>
        <li>Add sunglasses</li>
        <li>Wear sneakers</li>
      </ol>
    `,
			category: "Men's Clothes",
			subcategory: 'Shirts',
			tag: 'New Arrival',
			oldPrice: '999',
			currentPrice: '749',
			sizes: ['M', 'L', 'XL'],
			inStock: true,

			images: {
				main: ['https://picsum.photos/seed/p1m/400'],
				green: ['https://picsum.photos/seed/p1g/400'],
				capitalred: ['https://picsum.photos/seed/p1r/400'],
			},
		},
		{
			_id: 'E5F6A7B8',
			title: "Men's Smart Watch",
			description: `
      <h2>Premium Smartwatch</h2>
      <p>Stay <b>connected</b> and <i>healthy</i> on the go.</p>
      <ul>
        <li>Heart-rate monitor</li>
        <li>GPS Tracking</li>
        <li><u>Water Resistant</u></li>
      </ul>
      <h3>What’s Included</h3>
      <ol>
        <li>1x Smartwatch</li>
        <li>1x Magnetic Charger</li>
        <li>1x User Manual</li>
      </ol>
    `,
			category: 'Men Accessories',
			subcategory: 'Watches',
			tag: 'Featured',
			oldPrice: '2999',
			currentPrice: '2499',
			sizes: ['M', 'L'],
			inStock: true,
			images: {
				main: ['https://picsum.photos/seed/p2m/400'],
				green: ['https://picsum.photos/seed/p2g/400'],
				capitalred: ['https://picsum.photos/seed/p2r/400'],
			},
		},
		{
			_id: 'C9D0E1F2',
			title: 'Stylish Men’s Glasses',
			description: `
      <h2>Protect Your Eyes</h2>
      <p><b>UV 400 protection</b> with <i>polarized lenses</i>.</p>
      <ul>
        <li>Scratch-resistant</li>
        <li>Lightweight frame</li>
        <li><u>Unisex design</u></li>
      </ul>
      <h3>Why Choose Us?</h3>
      <ol>
        <li>Affordable</li>
        <li>Trendy looks</li>
        <li>Free case included</li>
      </ol>
    `,
			category: 'Men Accessories',
			subcategory: 'Sunglasses',
			tag: 'Popular',
			oldPrice: '699',
			currentPrice: '499',
			sizes: ['M'],
			inStock: true,

			images: {
				main: ['https://picsum.photos/seed/p3m/400'],
				green: ['https://picsum.photos/seed/p3g/400'],
				capitalred: ['https://picsum.photos/seed/p3r/400'],
			},
		},
		{
			_id: 'A3B4C5D6',
			title: 'Designer Women’s Saari',
			description: `
      <h2>Elegant Traditional Wear</h2>
      <p><b>Premium fabric</b> with <i>embroidered border</i>.</p>
      <ul>
        <li>Comes with matching blouse piece</li>
        <li>Ideal for festivals and weddings</li>
      </ul>
      <h3>Fabric Details</h3>
      <table border="1">
        <tr><th>Material</th><td>Silk Blend</td></tr>
        <tr><th>Length</th><td>6.3m</td></tr>
      </table>
    `,
			category: "Women's Clothes",
			subcategory: 'Saree',
			tag: 'New Arrival',
			oldPrice: '2999',
			currentPrice: '2299',
			sizes: ['XL', '2XL'],
			inStock: true,

			images: {
				main: ['https://picsum.photos/seed/p4m/400'],
				green: ['https://picsum.photos/seed/p4g/400'],
				capitalred: ['https://picsum.photos/seed/p4r/400'],
			},
		},
		{
			_id: 'E7F8A9B0',
			title: 'Formal Women’s Suit',
			description: `
      <h2>Power Dressing</h2>
      <p>Designed for <b>professional women</b> with a <u>modern twist</u>.</p>
      <ul>
        <li>Blazer + Trousers combo</li>
        <li>Machine washable</li>
        <li>Wrinkle-resistant</li>
      </ul>
    `,
			category: "Women's Clothes",
			subcategory: 'Suits',
			tag: 'Featured',
			oldPrice: '2499',
			currentPrice: '1799',
			sizes: ['L', 'XL', '2XL'],
			inStock: true,
			images: {
				main: ['https://picsum.photos/seed/p5m/400'],
				green: ['https://picsum.photos/seed/p5g/400'],
				capitalred: ['https://picsum.photos/seed/p5r/400'],
			},
		},
		{
			_id: 'C1D2E3F4',
			title: 'Women’s Fancy Footwear',
			description: `
      <h2>Walk with Confidence</h2>
      <ul>
        <li><i>Anti-slip sole</i></li>
        <li>Premium synthetic leather</li>
        <li>Elegant design</li>
      </ul>
      <h3>Sizes Available</h3>
      <ol>
        <li>M</li>
        <li>L</li>
        <li>XL</li>
      </ol>
    `,
			category: "Women's Clothes",
			subcategory: 'Blouses',
			tag: 'Popular',
			oldPrice: '1499',
			currentPrice: '1199',
			sizes: ['M', 'L', 'XL'],
			inStock: true,

			images: {
				main: ['https://picsum.photos/seed/p6m/400'],
				green: ['https://picsum.photos/seed/p6g/400'],
				capitalred: ['https://picsum.photos/seed/p6r/400'],
			},
		},
		{
			_id: 'A5B6C7D8',
			title: "Kid's Cotton Cap",
			description: `
      <h2>Sun Protection for Kids</h2>
      <p><b>Breathable fabric</b> with cute prints.</p>
      <ul>
        <li>Adjustable strap</li>
        <li>Soft inner lining</li>
      </ul>
    `,
			category: "Kids' Clothes",
			subcategory: "Kids' Accessories",
			tag: 'None',
			oldPrice: '399',
			currentPrice: '299',
			sizes: ['M', 'L'],
			inStock: true,

			images: {
				main: ['https://picsum.photos/seed/p7m/400'],
				green: ['https://picsum.photos/seed/p7g/400'],
				capitalred: ['https://picsum.photos/seed/p7r/400'],
			},
		},
		{
			_id: 'E9F0A1B2',
			title: 'Soft Toys for Kids',
			description: `
      <h2>Snuggly and Safe</h2>
      <ul>
        <li><i>Non-toxic</i> material</li>
        <li>Perfect gift for toddlers</li>
      </ul>
    `,
			category: "Kids' Clothes",
			subcategory: "Kids' Accessories",
			tag: 'Featured',
			oldPrice: '499',
			currentPrice: '349',
			sizes: ['L', 'XL'],
			inStock: true,

			images: {
				main: ['https://picsum.photos/seed/p8m/400'],
				green: ['https://picsum.photos/seed/p8g/400'],
				capitalred: ['https://picsum.photos/seed/p8r/400'],
			},
		},
		{
			_id: 'C3D4E5F6',
			title: 'Kids Printed Shirt',
			description: `
      <h2>Trendy and Comfortable</h2>
      <ul>
        <li><b>Cotton blend</b> for sensitive skin</li>
        <li>Colorful cartoon prints</li>
      </ul>
    `,
			category: "Kids' Clothes",
			subcategory: "Boys' Clothing",
			tag: 'New Arrival',
			oldPrice: '699',
			currentPrice: '499',
			sizes: ['M', 'L'],
			inStock: true,

			images: {
				main: ['https://picsum.photos/seed/p9m/400'],
				green: ['https://picsum.photos/seed/p9g/400'],
				capitalred: ['https://picsum.photos/seed/p9r/400'],
			},
		},
		{
			_id: 'A7B8C9D0',
			title: 'Girls Fancy Skirt',
			description: `
      <h2>For Your Little Diva</h2>
      <ul>
        <li>Elastic waist</li>
        <li>Bright colors</li>
        <li><i>Soft cotton lining</i></li>
      </ul>
    `,
			category: "Kids' Clothes",
			subcategory: "Girls' Clothing",
			tag: 'Popular',
			oldPrice: '899',
			currentPrice: '649',
			sizes: ['M', 'L', 'XL'],
			inStock: true,

			images: {
				main: ['https://picsum.photos/seed/p10m/400'],
				green: ['https://picsum.photos/seed/p10g/400'],
				capitalred: ['https://picsum.photos/seed/p10r/400'],
			},
		},
	],
	user: {
		username: 'john_doe',
		email: 'john.doe@example.com',
		password: 'hashedPassword123', // In practice, this should be hashed
		phone: '9876543210',
		isAdmin: false,
		address: {
			houseNumber: '123',
			street: 'Main Street',
			landmark: 'Near Central Park',
			district: 'North District',
			state: 'Delhi',
			country: 'india',
			pincode: '110001',
		},
		cart: [
			{
				productId: 'A1B2C3D4', // Men's Cotton Shirt
				quantity: 2,
			},
			{
				productId: 'C1D2E3F4', // Women’s Fancy Footwear
				quantity: 1,
			},
		],
		Orders: [], // No orders for this sample user
		affilator: {
			isLoggedIn: false,
			isActive: false,
			balance: 0,
			image: '',
			id: '',
			sales: [],
			clicks: [],
			team: [],
			links: [],
		},
		createdAt: new Date('2025-08-03T10:59:00.000Z'),
		updatedAt: new Date('2025-08-03T10:59:00.000Z'),
	},
};

