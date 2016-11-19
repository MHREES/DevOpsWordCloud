# Big Data Devops Training Application


A simple Big Data application which stores tweets in a graph and visualises top tags as a word cloud. Contains multiple components on which DevOps principles can be applied.

## Usage

You will need to authenticate with Twitter to use this application. To do
so, sign up for developer credentials and create a Twitter app here:

	https://dev.twitter.com/apps/new

You can then create a bearer token by running:
`curl -XPOST -u consumer_key:consumer_secret 'https://api.twitter.com/oauth2/token?grant_type=client_credentials'`

Copy `env.template` to `env` and populate with these details.

Run `make` in `db`, then in `analytics`, then in `web`.

------------------------------------------------------------------------
