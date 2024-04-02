FROM nginx:1.17-alpine
COPY coverage/lcov-report /usr/share/nginx/html/
COPY default.conf /etc/nginx/conf.d/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]