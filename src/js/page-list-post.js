		$(document).ready(async () => {

			var url = new URL(window.location.href);
			var tagId = url.searchParams.get("tagid");
			var currId = "0";
			var isEmpty = false;
			// fetch
			await fetch(`http://vnseattle.com/vnsapp/GetPostsNewsFeed.php?crid=0&tagid=${tagId}`)
				.then(res => res.json())
				.then((out) => {
					out.forEach(elm => {
						$('#post-cover').append(Post(elm.Thumb, elm.Intro, elm.Id));
						currId = elm.Id;

					});
					console.log(out);

				});



			$("#view-more").click(() => {
				// fetch
				fetch(`http://vnseattle.com/vnsapp/GetPostsNewsFeed.php?crid=${currId}&tagid=${tagId}`)
					.then(res => res.json())
					.then((out) => {
						out.forEach(elm => {
							$('#post-cover').append(Post(elm.Thumb, elm.Intro, elm.Id));
							currId = elm.Id;
						});
						if (out.length === 0) {
							$("#view-more").fadeOut();
						}
					});
			})


		});

		const Post = (img, title, Id) => {

			return `<div class="blog-post">
							<a href="page-detail-search.html?id=${Id}" class="post-img">
								<img src="${img}" alt="">
							</a>
							<div class="post-content">
								<h3><a href="page-detail-search.html?id=${Id}">${title}</a></h3>

								<a href="page-detail-search.html?id=${Id}" class="read-more">Read More <i
										class="fa fa-angle-right"></i></a>
							</div>
						</div>`;
		}
