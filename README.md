# Bingo

FEED A CONFIG TO KUBECTL
kubectl apply -f <filename>

PRINT THE STATUS OF ALL RUNNING OBJECTS
kubectl get deployments
kubectl get pods
kubectl get services

SHOW DETAILS OF A POD
kubectl describe pod <podname>

REMOVE AN OBJECT
kubectl delete -f <configfile>

SHOW DEPLOYMENT LOGS
kubectl logs <deploymentname>

SHOW PERSISTENT VOLUMES
kubectl get pv

CREATE AN ENCODED SECRET
kubectl create secret generic <secretname> --from-literal <key>=<value>
kubectl get secrets

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.1.1/deploy/static/provider/cloud/deploy.yaml
