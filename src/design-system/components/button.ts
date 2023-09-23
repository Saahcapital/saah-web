const baseStyle = {
	':focus:not(:focus-visible)': {
		boxShadow: 'none',
	},
	fontWeight: 'medium',
};

const variants = {
	
	'primary': () => ({
		fontWeight: '500',
		color: 'white',
		bg: 'primary.900',
		_hover: {
			color: 'white',
			bg: 'primary.900',
			boxShadow: 'md',
			_disabled: {
				bg: 'primary.900',
			},
		},
		_dark: { color: 'white', boxShadow: 'dark-md' },
		_disabled: {
			color: 'white',
			bg: 'primary.900',
			_hover: {
				bg: 'primary.900',
				boxShadow: 'md',
			},
		},
	}),
	'primary-menu': () => ({
		fontWeight: '500',
		color: 'primary.900',
		_hover: {
			color: 'white',
			bg: 'primary.900',
			boxShadow: 'md',
			_disabled: {
				bg: 'cyan.700',
			},
		},
		_active: { bg: 'primary.900', boxShadow: 'md' },
		_activeLink: { color: 'white', bg: 'primary.900', boxShadow: 'md' },
		_dark: { color: 'white', boxShadow: 'dark-md' },
		_disabled: {
			color: 'white',
			bg: 'primary.900',
			_hover: {
				bg: 'primary.900',
				boxShadow: 'md',
			},
		},
	}),
		'transparent-icon': () => ({
		fontWeight: '500',
		color: 'primary.900',
		_hover: {
			color: 'white',
			bg: 'primary.900',
			boxShadow: 'md',
			_disabled: {
				bg: 'cyan.700',
			},
		},
		
	}),
	success: () => ({
		bg: 'green.400',
		color: 'white',
		_dark: {
			bg: 'green.500',
			color: 'white',
		},
		_hover: {
			color: 'white',
			bg: 'green.500',
			boxShadow: 'md',
			_disabled: {
				bg: 'green.500',
			},
		},
		_active: { bg: 'green.500', boxShadow: 'md' },
		_activeLink: { color: 'white', bg: 'green.500', boxShadow: 'md' },
		_disabled: {
			color: 'white',
			bg: 'green.500',
			_hover: {
				bg: 'green.500',
				boxShadow: 'md',
			},
		},
	}),
	alert: () => ({
		bg: 'red.500',
		color: 'white',
		_dark: {
			bg: 'red.500',
			color: 'black',
		},
		_hover: {
			color: 'white',
			bg: 'red.500',
			boxShadow: 'md',
			_disabled: {
				bg: 'red.500',
			},
		},
		_active: { bg: 'red.500', boxShadow: 'md' },
		_activeLink: { color: 'white', bg: 'red.500', boxShadow: 'md' },
		_disabled: {
			color: 'white',
			bg: 'red.500',
			_hover: {
				bg: 'red.500',
				boxShadow: 'md',
			},
		},
	}),
};

const styles = {
	baseStyle,
	variants,
  };

  
export default styles;