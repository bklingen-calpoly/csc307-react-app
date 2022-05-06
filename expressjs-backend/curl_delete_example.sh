# deletes the object with id 'zap555'
curl --request DELETE localhost:5000/users/zap555

# assuming unique ids, this should result in 404 status
curl --request DELETE localhost:5000/users/zap555