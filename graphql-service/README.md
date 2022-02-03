# Bingo GraphQL Service

docker build -f Dockerfile.dev -t pmofrancisco/bingo-graphql-service .
docker run -p 3000:3000 pmofrancisco/bingo-graphql-service

docker build -t pmofrancisco/bingo-graphql-service .
docker push pmofrancisco/bingo-graphql-service
