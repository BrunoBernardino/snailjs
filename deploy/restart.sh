#!/bin/bash

set -ex

cd /app && ./stop.sh

cd /app && ./start.sh
