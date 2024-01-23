# DroneTech API

The [DroneTech API](https://drone-api-jgxf.onrender.com/) allows you to control
a fleet of drones and send them to locations. **This is not a friendly
platform, but that's life**.

1. Your company has ownership of a fleet of drones controlled by
  the DroneTech API, called an `airbase`.  You can get the status of this
  airbase using the `/airbase/{company_name}` endpoint, which
  will list all of the drones available to you.

  Any company name will return drone data. For example, if you `curl` or `GET`
  `https://drone-api-jgxf.onrender.com/api/airbases/thedronecompany`, it will
  return:

  ```json
  {
    "id": "thedronecompany",
    "location": {
      "lat": 40.44394444,
      "lng": -79.94444444
    },
    "drones": [
       29,
       30,
       31,
       32
    ]
  }
  ```

  **Make sure you run this API call first**.

2. You can get the status of a drone using the `/drones/{id}` endpoint. It will
include information about battery capacity, location, and delivery status.

3. You can send drones out on delivery using the `/drones/{id}/send`
   `PUT` endpoint.

The DroneAPI is accessible at [https://drone-api-jgxf.onrender.com/](https://drone-api-jgxf.onrender.com/).
The API explorer is accessible at [https://drone-api-jgxf.onrender.com/explorer/](https://drone-api-jgxf.onrender.com/explorer/).

The status of both the CommerceFriend and DroneTech API servers can be found on this [status page](https://z1nxzx66.status.cron-job.org/).
