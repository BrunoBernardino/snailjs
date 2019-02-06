#!/bin/bash

set -ex

cat /root/logrotate.txt > /etc/logrotate.conf

chmod +x /app/start.sh

chmod +x /app/stop.sh

chmod +x /app/restart.sh

chmod +x /app/install.sh

/app/install.sh
