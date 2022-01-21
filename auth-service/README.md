# Bingo Auth Service

docker build -f Dockerfile.dev -t pmofrancisco/bingo-auth-service .
docker run -p 3000:3000 pmofrancisco/bingo-auth-service

docker build -t pmofrancisco/bingo-auth-service .
docker push pmofrancisco/bingo-auth-service
