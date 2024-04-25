// WARNING: For GET requests, body is set to null by browsers.

function getData() {
	var xhr = new XMLHttpRequest();
	//xhr.withCredentials = true;

	xhr.open("GET", "https://api.arable.cloud/api/v2/devices");
	xhr.setRequestHeader("Authorization", "Apikey 90f0d44a-f41c-4b20-b831-5f4b2d431c7f");

	xhr.send();
}