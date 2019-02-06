#!/bin/bash

set -ex

cd /app

LOG=app.log

NODE_ENV=production forever start --id 'app' --killSignal=SIGTERM -o $LOG -e $LOG server.js

/etc/init.d/nginx start
