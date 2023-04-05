module.exports = () => {
	return {
	  plugins: [
		require('postcss-preset-env')({
		  stage: 1,
		}),
	  ],
	};
  };
  