		$(document).ready(async () => {

			var url = new URL(window.location.href);
			var q = url.searchParams.get("q");

			$("#search-key").text(q);
			// fetch
			await fetch(`http://vnseattle.com/vnsapp/SearchNewsFeed.php?keyword=${q}`)
				.then(res => res.json())
				.then((out) => {
					out.forEach(elm => {
						$('#post-cover').append(Post(elm.Thumb, elm.Intro, elm.Id));
					});
				});


			// fetch
			await fetch(`http://vnseattle.com/vnsapp/SearchAdsNewsFeed.php?keyword=${q}&limit=50`)
				.then(res => res.json())
				.then((out) => {
					out.forEach(elm => {
						$('#post-cover').append(Ads(elm.Thumb, elm.Intro, elm.Id));

					});
				});





		});

		const Post = (img, title, Id) => {

			return `<div class="blog-post" >
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

		const Ads = (img, title, Id) => {

			return `<div class="blog-post" >
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
