# Simple Dockerfile to serve static portfolio
# Based on lightweight nginx image

FROM nginx:alpine

# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy current directory contents into nginx www folder
COPY . /usr/share/nginx/html

# Expose default HTTP port
EXPOSE 80

# Use default command from nginx image
