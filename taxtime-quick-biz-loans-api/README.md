# Hyperledger node js client.

This is an example of the node js api being used to connect to a running instance of Hyperledger Fabric with Smart Contracts (Business Network Definition) already deployed (see other two projects).

In order to get going, you need to run agains node v6.

Also run npm install and have gulp, and npm start.

This is a base project for adding more API level functionality.

If you have deployed the business network definition already and want to explore a simple REST defintition you can run the following to spin up a quick REST interface separate form this project:

composer-rest-server -n taxtime-quick-biz-loans -p defaultProfile -i WebAppAdmin -s DJY27pEnl16d -N never -P 3000

Managing separate participants is a crucial feature of this project. Currently id's and secrets hard coded in config/default.json. For more info see the project page.