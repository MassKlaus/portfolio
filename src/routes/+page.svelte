<script lang="ts">
    let showSurprise = false;
</script>

<div class="banner">
	<div class="content">
        <h2>HI SYA! HOW WAS SLEEP?!</h2>
		<div class="call-to-action" on:click={() => showSurprise = true}>Click to kiss metty</div>
        <div>
            <p>Metty was kissed successfully.</p>
            <p>Now, the funny part, I don't know that you actually clicked this, I didn't wanna code some weird thing that would tell me. Too much work</p>
            <p>So you can either tell me or not. Now of course you just thought "never" and that just makes you cute.</p>
            <p>Also, why the fuck did you wanna kiss me anyways? so much for hating me.</p>
        </div>
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

				&:hover {
					background-color: #005a64;
				}
			}
		}
	}
</style>
