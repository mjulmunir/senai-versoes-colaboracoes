function mediaContent() {
	const media = document.getElementById("media");
	const mediaFolder = "img/media";
	const mediaList = [
		["playing.jpg", "https://www.facebook.com/"],
		["console.jpg", "https://www.instagram.com/"],
		["setup.jpg", "https://www.facebook.com/"],
	];

	return {
		media,
		mediaFolder,
		mediaList,
	};
}

const media_content = mediaContent();

export { media_content, mediaContent as default };
