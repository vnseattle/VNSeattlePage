		$(document).ready(function () {

			var url = new URL(window.location.href);
			var id = url.searchParams.get("id");
			console.log("Aaaaa", id);

			// fetch
			fetch(`http://vnseattle.com/vnsapp/GetAdsNewsFeed.php?catid=${id}`)
				.then(res => res.json())
				.then((out) => {
					out.sort(() => Math.random() - 0.5).forEach(elm => {
						console.log(elm);
						$('#post-cover').append(Post(elm.Thumb, elm.Intro, elm.Id));
					});
				})

		});

		const Post = (img, title, Id) => {

			return `<div class="blog-post">
							<a href="page-detail.html?id=${Id}" class="post-img">
								<img src="${img}" alt="">
							</a>
							<div class="post-content">
								<h3><a href="page-detail.html?id=${Id}">${title}</a></h3>

								<a href="page-detail.html?id=${Id}" class="read-more">Read More <i
										class="fa fa-angle-right"></i></a>
							</div>
						</div>`;
		}
