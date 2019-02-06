#!/bin/bash

set -ex

/etc/init.d/nginx stop || true

forever stop app || true
