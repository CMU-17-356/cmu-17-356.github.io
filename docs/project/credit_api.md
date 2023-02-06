# CommerceFriend API

As a small startup, you don't have the time or resources to devote to securing your payment API, so instead you opt to use an existing payment platform, CommerceFriend. 
*hint: using the explorer (https://356-credit-api.fly.dev/explorer) can help you get to know the API.*

The process of using CommerceFriend is relatively easy (For ease of administration, authentication is disabled):

1. Create a `company` for your app.  This is essentially like your
   company's bank account.

2. When a user needs to pay for an order, your app should create a  new transaction, listing the amount to be paid.

3. You should then redirect the user to `https://356-credit-api.fly.dev/?transaction_id=<id>` where `<id>` is the transaction id.

4. The user will then be prompted to provide their credit card information, and the transaction will be updated based on the status of the payment.

The API itself is accessible at `https://356-credit-api.fly.dev/`.
