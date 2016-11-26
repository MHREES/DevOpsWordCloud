# Big Data Devops Training Application


A simple Big Data application which stores tweets in a graph and visualises top tags as a word cloud. Contains multiple components on which DevOps principles can be applied.

## Usage

You will need to authenticate with Twitter to use this application. To do
so, sign up for developer credentials and create a Twitter app here:

	https://dev.twitter.com/apps/

You can then create a bearer token by running:
`curl -XPOST -u consumer_key:consumer_secret 'https://api.twitter.com/oauth2/token?grant_type=client_credentials'`

Copy `env.template` to `env` and populate with these details.

### EC2
* I would recommend running a `t2.medium` machine.
* Terminate machines when you are finished.
* Do not create any public machines. (machines should be created on the private subnet and ssh into through the bastion)

### Port Forwarding
* to acces the services through your web browser you will need to forward the ports, namely `7474` and `3000`.
* to forward ports in putty you will need to navigat to `Tunnels` on the menu on the right.

	* Connection
		* SSH
			* Tunnels

* `Source port` is the port on your local computer the remote port will be mapped to e.g. `7474`
* `Destination` is where the remote port is `<remotIpAddress>:<port>`, e.g. `10.0.1.255:7474`

### Install Docker
* Update installed packages: `sudo yum update -y`
* Install docker: `sudo yum install -y docker`
* Start the docker service: `sudo service docker start`
* Check you can run docker commands without sudo e.g. `docker images`
* If you get th following error, `Cannot connect to the Docker daemon. Is the docker daemon running on this host?` then you need
to add your user to the docker group by running the following:
`sudo usermod -a -G docker ec2-user`(note you will have to log out then back in for this to take effect)

### Run `make` in `db`
* `cd devops-training-sample-project\db`
* `make`
* go to http://localhost:7474 and set default password (username:neo4j,password:neo4j is the default which you change after logging in)

### Run `make` in `analytics`
* `cd devops-training-sample-project\analytics`
* install py2neo python package: `sudo pip install py2neo`
* `make`

### Install Nodejs and NPM
#### Install Nodejs
* `sudo yum install gcc-c++ make`
* `sudo yum install openssl-devel`
* `sudo yum install git`
* `git clone git://github.com/nodejs/node.git`
* `cd node`
* `./configure`
* `make`
* `sudo make install`
#### Install NPM
* `git clone https://github.com/isaacs/npm.git`
* `cd npm`
* `sudo make install`

### Run `Make` in `web`
* `cd devops-training-sample-project\analytics`
* `make`

#### Visit http://localhost:3000

------------------------------------------------------------------------
