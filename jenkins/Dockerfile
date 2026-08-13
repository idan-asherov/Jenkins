FROM jenkins/jenkins:lts-jdk17 (last pushed 4 months ago)

USER root 

RUN apt-get update &&\
    apt-get install -y docker \
    git \
    curl && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
curl -fsSL https://deb.nodesource.com/setup_20.x | bash - &&\
    apt-get install -y nodejs &&\
    apt-get clean && \
    rm -rf /var/lib/apt/lists/

USER jenkins

RUN *




