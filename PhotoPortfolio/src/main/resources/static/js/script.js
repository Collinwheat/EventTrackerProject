window.addEventListener('load', function(e) {
	console.log('Script.js loaded')
	init();
});

function init() {
	loadAllPhotos()
	document.createPhotoForm.submit.addEventListener('click', function(e) {
		e.preventDefault();
		let photo = {
			description: createPhotoForm.description.value,
			location: createPhotoForm.location.value,
			dateTaken: createPhotoForm.dateTaken.value,
			camera: createPhotoForm.cameraused.value,
			imageUrl: createPhotoForm.url.value
		}
		createNewPhoto(photo);
		console.log(photo);
	})
}

function loadAllPhotos() {
	//XHR STUFF//
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/photographs');

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let photoList = JSON.parse(xhr.responseText);
				displayPhotoList(photoList);
			} else {
				console.error('Film Not Found');
			}
		}
	}
	xhr.send()
}


function displayPhotoList(photoList) {
	let tbody = document.getElementById('tableBody');
	tbody.textContent = " ";

	for (let i = 0; i < photoList.length; i++) {
		let tr = document.createElement("tr");
		tr.addEventListener('click', function(e) {
			updateDelete(photoList[i], photoList);
		});
		tbody.appendChild(tr);

		let description = document.createElement('td');
		description.textContent = photoList[i].description
		tr.appendChild(description);

		let location = document.createElement('td');
		location.textContent = photoList[i].location;
		tr.appendChild(location);

		let dateTaken = document.createElement('td');
		dateTaken.textContent = photoList[i].dateTaken;
		tr.appendChild(dateTaken);

		let camera = document.createElement('td');
		camera.textContent = photoList[i].camera;
		tr.appendChild(camera);

		let url = document.createElement('td');
		url.textContent = photoList[i].imageUrl;
		tr.appendChild(url);
	}

	console.log("Photo");

}

function createNewPhoto(newPhoto) {

	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/photographs/');

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.readyState === 201) {
				console.log('complete');
				alert("Photo Has Been Created")
				loadAllPhotos();
			}
			else {
				console.error('Error Creating Film ' + xhr.status);
			}
		}
	}
	xhr.setRequestHeader("Content-type", "application/json");
	let newFilmJson = JSON.stringify(newPhoto);
	console.log(newFilmJson);
	xhr.send(newFilmJson);
	loadAllPhotos();

}

function updateDelete(photo, photoList) {
	
	let photosByLocation = [];

	for(let i = 0; i < photoList.length; i++){
		if(photo.location === photoList[i].location && photo !== photoList[i])
		photosByLocation.push(photoList[i]);
		console.log(photosByLocation[i]);
	}
	
	let div = document.getElementById('updateDelete')
	div.textContent = " ";

	let description = document.createElement('h3');
	description.textContent = photo.description;
	div.appendChild(description);

	let location = document.createElement('h4');
	location.textContent = photo.location;
	div.appendChild(location);

	let date = document.createElement('h4');
	date.textContent = photo.date;
	div.appendChild(date);

	let camera = document.createElement('h4');
	camera.textContent = photo.camera;
	div.appendChild(camera);

	let image = document.createElement('h4');
	var img = new Image();
	img.src = photo.imageUrl;
	div.appendChild(image);
	
	let similarPhotos = document.createElement('ul');
	for(let i = 0; i < photosByLocation.length; i++){
		let li = document.createElement('li')
		li.textContent = photosByLocation[i].description + " " + photosByLocation[i].location + " " + photosByLocation[i].camera;
		similarPhotos.appendChild(li);
	}
	div.appendChild(similarPhotos);

	let update = document.createElement('input');
	update.addEventListener('click', function(e) {
		updatePhoto(photo);
	});
	update.id = "update";
	update.value = "update";
	update.type = "submit";
	div.appendChild(update);

	let deletePhoto = document.createElement('input');
	deletePhoto.addEventListener('click', function(e){
		deleteThisPhoto(photo);
	});
	deletePhoto.id = "delete";
	deletePhoto.value = "delete";
	deletePhoto.type = "submit";
	div.appendChild(deletePhoto);

}

function updatePhoto(photo) {

	let div = document.getElementById('updateDelete')

	let updatePhotoForm = document.createElement('form');
	updatePhotoForm.id = "updatePhotoForm";
	updatePhotoForm.name = "updatePhotoForm";

	let description = document.createElement('input')
	description.id = 'description';
	description.name = 'description';
	description.value = 'description';
	description.type = 'text';
	updatePhotoForm.appendChild(description);


	let location = document.createElement('input');
	location.id = 'location';
	location.name = 'location';
	location.value = 'location'
	location.type = 'text';
	updatePhotoForm.appendChild(location);


	let date = document.createElement('input');
	date.id = 'date';
	date.name = 'date';
	date.value = 'date'
	date.type = 'text';
	updatePhotoForm.appendChild(date);


	let camera = document.createElement('input');
	camera.id = 'camera';
	camera.name = 'camera';
	camera.type = 'text';
	camera.placeholder = 'camera';
	updatePhotoForm.appendChild(camera);


	let image = document.createElement('input');
	image.id = 'image';
	image.name = 'image';
	image.value = 'URL'
	image.type = 'text';
	updatePhotoForm.appendChild(image);


	let submit = document.createElement('input');
	submit.type = "submit";
	submit.id = "submit";
	submit.name = "submit";
	updatePhotoForm.appendChild(submit);

	div.appendChild(updatePhotoForm);


	document.updatePhotoForm.submit.addEventListener('click', function(e) {
		e.preventDefault();
		let updatedPhoto = {
			description: updatePhotoForm.description.value,
			location: updatePhotoForm.location.value,
			dateTaken: updatePhotoForm.date.value,
			camera: updatePhotoForm.camera.value,
			imageUrl: updatePhotoForm.image.value
		}

		console.log(JSON.stringify(updatedPhoto));

		let xhr = new XMLHttpRequest();
		xhr.open('POST', 'api/updatePhoto/' + photo.id);

		xhr.setRequestHeader("Content-type", "application/json");

		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					alert("Photo Has Been Updated")
					loadAllPhotos();
				} else {
					console.error('Film Not Found');
				}
			}
		}
		let updatedPhotoJson = JSON.stringify(updatedPhoto);
		xhr.send(updatedPhotoJson)

	});



}

function deleteThisPhoto(photo){
	
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/delete/' + photo.id);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || 204) {
				loadAllPhotos();
				alert("Photo Has Been Deleted")
			} else {
				console.error('Film Not Found');
			}
		}
	}
	xhr.send()
}





