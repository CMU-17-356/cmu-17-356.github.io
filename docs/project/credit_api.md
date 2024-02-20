# CommerceFriend API

As a small startup, you don't have the time or resources to devote to securing
your payment API, so instead you opt to use an existing payment platform,
[CommerceFriend](https://credits-api.onrender.com/). **This is not a friendly
platform, but it's all you've got**.

*hint: using the [explorer](https://credits-api.onrender.com/explorer) can help you get to know the API.*

The process of using CommerceFriend flows like this (for ease of administration, authentication is disabled):

1. Create a `company` for your app. This is essentially like your company's bank account. It s a `PUT` and can be overriden.
2. When a user needs to pay for an order, your app should create a new transaction, listing the amount to be paid.
3. You should then redirect the user to `https://credits-api.onrender.com/explorer/?transaction_id=<id>` where `<id>` is the transaction id.
4. The user will then be prompted to provide their credit card information, and the transaction will be updated based on the status of the payment.

The API itself is accessible at [`https://credits-api.onrender.com/`](https://credits-api.onrender.com/).

Here's a video walkthrough explaining the API:

<video controls>
  <source src="https://github.com/CMU-17-356/cmu-17-356.github.io/raw/main/resources/videos/2024/credit_api_walkthrough.mov" type="video/mp4">
</video>

The status of both the CommerceFriend and DroneTech API servers can be found on this [status page](https://z1nxzx66.status.cron-job.org/).
