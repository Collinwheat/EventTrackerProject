# EventTrackerProject

## Description
This project is the beginnings of an event tracker. It connects to a database in which I have populated several Photo objects. In conjunction with this code, the user can utilize Postman to:

<ul>
	<li>List all of the Photos within the database</li>
	<li>Search for one of the Photos using the Photo's assigned ID</li>
	<li>Create a new Photo in the database</li>
	<li>Update a Photo in the database to change it's current information</li>
	<li>Delete a Photo from the database</li>
</ul>

## Technologies Used

<ul>
	<li> Spring Boot </li>
	<li> REST API </li>
	<li> Java </li>
	<li> Spring Tool Suite </li>
	<li> MySQL Workbench</li>
	<li> Postman </li>
	<li> Sublime </li>
	<li> MAMP </li>


## Lessons Learned
This project was the first application in which I utilized Repositories. The use of them definitely helped me understand their nature and potential. I also learned the importance of being thorough, especially when dealing with many different parts of an application.



| HTTP Verb | URI                    | Request Body | Response Body |
|-----------|------------------------|--------------|---------------|
| GET       | `/api/`      |         | Collection of representations of all photo resources |collection** endpoint |
| GET       | `/api/photographs/7`   |              | Representation of photo 7     |
| POST      | `/api/photographs`     | Representation of a new _tacostand_ resource | Description of the result of the operation | **
| POST      | `/api/updatePhoto/7`   | Representation of a new version of _tacostand_ 7 |
| DELETE    | `/api/delete/7`   |    | 


