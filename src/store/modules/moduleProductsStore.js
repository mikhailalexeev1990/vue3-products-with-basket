export default {
	actions: {},
	mutations: {},
	state: {
		productsList: [
			{
				id: 1,
				name: "Some clothes",
				description: "There is description",
				img: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNsb3RoZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
				price: 1000.50,
			},
			{
				id: 2,
				name: "T-shirt",
				description: "There is description and some description",
				img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
				price: 1599.00,
			},
			{
				id: 3,
				name: "3 T-shirts",
				description: "There is description",
				img: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb3RoZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
				price: 2250.00,
			},
			{
				id: 4,
				name: "Jacket",
				description: "There is description",
				img: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNsb3RoZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
				price: 270.80,
			},
			{
				id: 5,
				name: "Black suit",
				description: "There is description",
				img: "https://images.unsplash.com/photo-1497339100210-9e87df79c218?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGNsb3RoZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
				price: 3300.00,
			},
			{
				id: 6,
				name: "Blue T-shirt",
				description: "There is description",
				img: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGNsb3RoZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
				price: 1600.00,
			},
			{
				id: 7,
				name: "4 jeans",
				description: "There is description",
				img: "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNsb3RoZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
				price: 820.50,
			},
		],
	},
	getters: {
		getProductsList(state) {
			return state.productsList;
		},
	}
}
