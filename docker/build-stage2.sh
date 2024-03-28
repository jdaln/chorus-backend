#!/bin/bash

set -e

docker build --pull -f dockerfiles/stage2.dockerfile -t registry.dip-dev.thehip.app/ds-cicd-template-backend:${IMAGE_TAG} --secret id=PYPI_USERNAME,env=PYPI_USERNAME --secret id=PYPI_PASSWORD,env=PYPI_PASSWORD ..
docker tag registry.dip-dev.thehip.app/ds-cicd-template-backend:${IMAGE_TAG} registry.dip-dev.thehip.app/ds-cicd-template-backend:latest
docker push registry.dip-dev.thehip.app/ds-cicd-template-backend:${IMAGE_TAG}
docker push registry.dip-dev.thehip.app/ds-cicd-template-backend:latest