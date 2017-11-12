const storeProvider = (Component) => {
	const WithStore = (props, { store }) =>
		<Component {...props} store={store} />;
		return WithStore
}

export default storeProvider