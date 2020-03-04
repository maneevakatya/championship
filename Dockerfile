FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist /www/
Run  adduser --disabled-password -s /sbin/nologin www
EXPOSE 80

RUN ln -sf /dev/stdout /var/log/nginx/access.log
RUN ln -sf /dev/stderr /var/log/nginx/error.log

CMD ["nginx", "-g", "daemon off;"]
