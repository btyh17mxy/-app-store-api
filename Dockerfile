FROM node:lts

ENV PORT 20000
EXPOSE 20000

ADD ./ /app
WORKDIR /app
ADD ./entrypoint /app/entrypoint
RUN npm install

ENTRYPOINT ["/app/entrypoint"]

