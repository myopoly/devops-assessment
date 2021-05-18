#!/bin/sh
MAP_PATH="/devops-assessment"
docker run -v"$(pwd)":"${MAP_PATH}" -w"${MAP_PATH}" -it node /bin/sh