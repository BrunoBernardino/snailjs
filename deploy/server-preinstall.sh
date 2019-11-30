#!/bin/bash

set -ex

export PATH=$PATH:/usr/bin

apt-get -y update

curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh

bash nodesource_setup.sh

apt-get -y install gcc g++ make build-essential software-properties-common zlib1g-dev libssl-dev nodejs nginx logrotate

npm install -g forever

add-apt-repository -y ppa:certbot/certbot

apt-get -y update

apt-get -y install certbot python-certbot-nginx

apt -y autoremove

mkdir -p /app
