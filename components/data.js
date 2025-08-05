export const data = {
	categories: [
		{
			_id: '64f1b2c4e2d3a9b7f1234561',
			name: 'Mens',
			subcategories: ['shirts', 'T-shirts', 'Smart Watches', 'glases'],
		},
		{
			_id: '64f1b2c4e2d3a9b7f1234562',
			name: 'Womens',
			subcategories: ['saari', 'suits', 'Footwear', 'Accessories'],
		},
		{
			_id: '64f1b2c4e2d3a9b7f1234563',
			name: 'Kids',
			subcategories: ['caps', 'toys', 'shirts', 'skirts'],
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
			category: 'Mens',
			subcategory: 'shirts',
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
			category: 'Mens',
			subcategory: 'Smart Watches',
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
			category: 'Mens',
			subcategory: 'glases',
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
			category: 'Womens',
			subcategory: 'saari',
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
			category: 'Womens',
			subcategory: 'suits',
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
			category: 'Womens',
			subcategory: 'Footwear',
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
			category: 'Kids',
			subcategory: 'caps',
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
			category: 'Kids',
			subcategory: 'toys',
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
			category: 'Kids',
			subcategory: 'shirts',
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
			category: 'Kids',
			subcategory: 'skirts',
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
