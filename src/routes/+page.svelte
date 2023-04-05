<script lang="ts">
</script>

<div class="banner">
	<div class="content">

	</div>
</div>

<style lang="scss" scoped>
    
	.banner {
		background-image: url(/images/hero_banner.jpg);
		background-size: cover;
		background-position: center;
		height: 100svh; /* Set the height of the banner */
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: #fff;

		z-index: 0;

		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.5);
		}

		.content {
            z-index: 1;
			.call-to-action {
				display: inline-block;
				background-color: #00707c;
				color: #fff;
				padding: 10px 20px;
				border-radius: 5px;
				font-size: 1.2rem;
				margin-top: 20px;
				text-decoration: none;
				transition: all 0.3s ease-in-out;
                cursor: pointer;

				&:hover {
					background-color: #005a64;
				}
			}
		}
	}
</style>
