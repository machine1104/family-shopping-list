from node:latest as node
workdir /app
copy . .
run npm install
run npm run build --prod
from nginx:alpine
copy --from=node /app/dist/family-shopping-list /usr/share/nginx/html