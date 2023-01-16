# DroneTech API

The DroneTech API allows you to control a fleet of drones
with relative ease:

* Your company has ownership of a fleet of drones controlled by
  the DroneTech API, called an `airbase`.  You can get the status of this
  airbase using the `/airbase/{company_name}` endpoint, which
  will list all of the drones available to you.

* You can get the status of a drone using the `/drones/{id}` endpoint. It will
include information about battery capacity, location, and delivery status.

* You can send drones out on delivery using the `/drones/{id}/send` endpoint.

The DroneAPI is accessible at `https://drone-api-cmu-17-356-s23.herokuapp.com`.
