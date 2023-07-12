# Ticketing

* This is a ticketing application developed using node js with micro-services.
* The application is ran by kubernetes clusters
* Skaffold is used for local development.
* This application uses server side rendering through next js.
* I have added a common module as an npm package that I will use to provide some common functions like authentication for the application services: https://www.npmjs.com/package/@mt_tickets/common.
* To access the application go to: http://www.ticketing-app.com
    * I have deployed the application to digitalocean and assigned a domain name to it.
* When merging the code to master branch , Github workflows will get triggered.It will then build the project and deploy the changes to docker hub , finally digital ocean cluster will pull the latest changes that we just pushed and the application will be updated.  

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
# Payments

## Stripe

In order to test with stripe , you can create an account in stripe and use the test mode.
You will have a Publishable key and a secret key.

payments in test mode are all free , you can use one of the test credit cards in stripe docs here: https://stripe.com/docs/testing





