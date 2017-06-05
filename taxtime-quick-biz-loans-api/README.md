# Hyperledger node js client.

This is an example of the node js api being used to connect to a running instance of Hyperledger Fabric with Smart Contracts (Business Network Definition) already deployed (see other two projects).

In order to get going, you need to run agains node v6.

Also run npm install and have gulp, and npm start.

This is a base project for adding more API level functionality.

If you have deployed the business network definition already and want to explore a simple REST defintition you can run the following to spin up a quick REST interface separate form this project:

composer-rest-server -n taxtime-quick-biz-loans -p defaultProfile -i WebAppAdmin -s DJY27pEnl16d -N never -P 3000

Managing separate participants is a crucial feature of this project. Currently id's and secrets hard coded in config/default.json. 


# Demo walkthrough testing permissioned business network definition:

To get started create a some participants, and issue identities:

POST localhost:8080/users

{
	"userId":"wp123",
    "firstName": "wajid",
    "lastName": "poernomo"
}

POST localhost:8080/users

{
	"userId":"gk123",
    "firstName": "garrison",
    "lastName": "keilor"
}

Now from the commandline (install compose cli first):

composer identity issue -n 'taxtime-quick-biz-loans' -i admin -s Xurw3yU9zI0l -u wpoernomo -a "net.gunungmerapi.taxTimeQuickBizLoansNetwork.User#wp123"

composer identity issue -n 'taxtime-quick-biz-loans' -i admin -s Xurw3yU9zI0l -u gkeilor -a "net.gunungmerapi.taxTimeQuickBizLoansNetwork.User#gk123"

Write down the the userID and userSecret for later.


Now create some banks, and issue identities using the cli:

POST localhost:8080/banks

{
	"bankId": "NAB123",
	"name": "NAB"
}

composer identity issue -n 'taxtime-quick-biz-loans' -i admin -s Xurw3yU9zI0l -u nab123 -a "net.gu
nungmerapi.taxTimeQuickBizLoansNetwork.Bank#NAB123"

and do the same for accountants:

POST localhost:8080/accountants

{
	"taxAccountantId" : "joelan22",
	"firstName" : "joey",
	"lastName":"lanister"
}

composer identity issue -n 'taxtime-quick-biz-loans' -i admin -s Xurw3yU9zI0l -u joelan222 -a "net.gu
nungmerapi.taxTimeQuickBizLoansNetwork.TaxAccountant#joelan22"

Write down the userID and userSecret for later.

Now, in the api project, got to config/default.json and change the participantId and participantPwd to the userID and userSecret for one of the user identities created earler. Run Gulp and npm start again.

Create a Chart of Accounts:

POST localhost:8080/customerData/accounts

{
	"chartOfAccountsId":"2", 
    "assetAccounts":"2000",  
    "liabilityAccounts":"2000",
    "equityAccounts":"2000",
    "revenueAccounts":"2000",
    "expenseAccounts":"2000",
    "ownerId":"gk123"
}

Now repeat the same process, using the other userID and userSecret generated earlier.

Try:

GET localhost:8080/users

GET localhost:8080/customerData/accounts

Notice you will only be able to see the users and data for the current participant in config/default.json.
