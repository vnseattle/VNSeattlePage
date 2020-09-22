
		var url = new URL(window.location.href);
		var id = url.searchParams.get("id");



		// fetch
		fetch(`http://vnseattle.com/vnsapp/GetBus.php?id=${id}`)
			.then(res => res.json())
			.then((out) => {
				console.log(out);
				out.forEach(obj => {
					console.log(obj);
					$("#intro").html(obj.Intro);
					$("#contact").html(Contact(obj.Email, obj.Phone));;
					$("#address").html(Address(obj.Address));
					$("#content").html(obj.Message);
					$("#gallery-cover").append(Gallery({ ImageLink: obj.Thumb, Caption: obj.Intro }));
					$("#gmap").html(GMap(obj.Address));
					$("#id").html(obj.Id);
				});
			});

		// fetch
		fetch(`http://vnseattle.com/vnsapp/GetImages.php?tb=2&id=${id}`)
			.then(res => res.json())
			.then((out) => {
				out.forEach(obj => {
					$("#gallery-cover").append(Gallery(obj));
				});
			});



		const Address = (address) => {
			return `<a href="https://www.google.com/maps/search/${address}" target="_blank" class="listing-address">
							<i class="fa fa-map-marker" ></i >
							${address || "Washington"}
					</a >`;
		}

		const Contact = (email, phone) => {
			return `<li><a href="tel:${phone} class="listing-links">
						<i class="fa fa-phone"></i>${phone}</a>
					</li>
					<li><a href="mailto:${email}" class="listing-links">
						<i class="fa fa-envelope-o"></i> ${email}</a>
					</li>
					`;
		}

		const Gallery = (img) => {
			return `<a href="${img.ImageLink}" class="item mfp-gallery" title="${img.Caption}">
						<img style='height:200px; padding:5px' src="${img.ImageLink}" />
					</a>`;

		}

		const GMap = (address) => {
			return `<div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas"
									src="https://maps.google.com/maps?q=${address || "Seattle"}&t=&z=13&ie=UTF8&iwloc=&output=embed"
									frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a
									href="https://www.embedgooglemap.org"></a>
							</div>`;
		}

