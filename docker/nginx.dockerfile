FROM nginx:alpine
COPY web/build /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
