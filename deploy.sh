#!/bin/bash

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# Stop current container
printf "\nStopping current portfolio's container ...\n"

dockerid=$(docker ps | grep portfolio | cut -b 12)
if [ -z $dockerid ]
then
        printf "\n${RED}❌${NC} There is no running container !\n"
else
        printf "\n Stopping and removing portfolio's container ... \n(ID:$dockerid) \n"
        docker stop $dockerid
        docker rm $dockerid
        printf "\n${GREEN}✅${NC} Portfolio's container has successfuly been closed and removed\n"
fi

# Update repository
printf "\nUpdating to last version ...\n"

git clean -f
git fetch

printf "\nBuilding project ...\n"

npm run dockerprod

printf "\nStarting updated portfolio's container ...\n"

containerID=$(docker run -d -p 8002:80 portfolio)

printf "${GREEN}✅ ${NC} Docker container successfully started !\n(Container's ID: {$containerID})\n"

printf "\n${GREEN}✅ ${NC} Portfolio is now up to date !\n"
