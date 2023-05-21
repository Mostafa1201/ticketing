# Ticketing

* This is a ticketing application developed using node js with micro-services.
* The application is ran by kubernetes clusters
* Skaffold is used for local development.
* This application uses server side rendering through next js.

# Installation

## Linux

Linux has some problems with kubernetes , So we are going to use minikube
It is a local library for kubernetes focusing on making it easy to learn and develop for Kubernetes

Start by installing minikube , check their docs here: https://minikube.sigs.k8s.io/docs/start/
After installing minikube you need to start the service and evaluate the env variables in the shell by using the command below:

```bash
minikube start
eval (minikube docker-env)
```





