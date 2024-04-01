FROM nginx:1.17-alpine
COPY index.html /usr/share/nginx/html/index.html
COPY nginx.conf /etc/nginx/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]