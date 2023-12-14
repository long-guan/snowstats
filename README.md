# Stevens Pass iMap

### Project Description

Single page application to transform a noninteractive PDF of a ski map of Stevens Pass Ski Resort to an interactive ski map. Users are able to view, like, and post videos for individual ski trail. Users are also able to add reviews of the snow condition for individual ski trails.

- Frontend: React + Tailwind CSS (deployed on GitHub pages)
- Backend: Django + PostgreSQL (deployed on AWS)
- [View live app](https://long-guan.github.io/snowstats/)
  ![Stevens Pass iMap](/readme/stevens_pass_imap.png "Stevens Pass iMap")

---

### Installation

To run this application locally using Docker:

1. Fork this repo and clone to local computer.
2. Build the volume with the name postgres-snowstat-data using the command $docker volume create postgres-snowstat-data
3. Build container with the command $docker-compose build
4. Run the container with $docker-compose up

- Access the frontend through http://localhost:3000/snowstats/
- Access the backend through http://localhost:8000/

---

### Features

- Users are able to create an account
- Users can view, post, and like videos
- Users can post reviews of the ski trails
- Search
- REST API
- SSL certificate for backend and frontend domain

---

### Libraries Used

- react-img-mapper: used to create image maps for clicking on each trail
- Reactjs-popup: used to show popups for each trail when hovering or clicking
- djangorestframework-simplejwt: used for authentication and authorization
- djangorestframework: used for authentication and authorization

---

### Challenges

- 10/26/23: To toggle on and off the tooltip (popup) to display each runs name, a booleans has to be set. Instead of creating a bunch of useState boolean variables for each area, I'm going to store all the boolean variables in an array and associate corresponding index of the array to the area.name

---

### Future Additions

- Make the app responsive and usable on a mobile device
- Add a location to add reviews on the road conditions
- Add a location to add reviews on the general snow conditions
- Allow users without accounts to comment on road conditions or general snow conditions
