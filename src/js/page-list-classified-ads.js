		$(document).ready(async () => {

			// fetch
			fetch(`http://vnseattle.com/vnsapp/GetClass.php?type=1`)
				.then(res => res.json())
				.then((out) => {
					out.forEach(elm => {
						$('#job-cover').append(Post(elm.Content, elm.Location, elm.Phone));

					});

				});

			// fetch
			fetch(`http://vnseattle.com/vnsapp/GetClass.php?type=2`)
				.then(res => res.json())
				.then((out) => {
					out.forEach(elm => {
						$('#rent-cover').append(Post(elm.Content, elm.Location, elm.Phone));

					});

				});

			// fetch
			fetch(`http://vnseattle.com/vnsapp/GetClass.php?type=3`)
				.then(res => res.json())
				.then((out) => {
					out.forEach(elm => {
						$('#other-cover').append(Post(elm.Content, elm.Location, elm.Phone));

					});

				});

		});

		const Post = (content, location, phone) => {

			return `<div style="text-align:left" class="category-small-box">
							<b>${location || "Washington"}</b><br/><span>${content}</span><div>${phone}</div>
						</div>`;
		}
