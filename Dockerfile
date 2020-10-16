FROM mhart/alpine-node:12

WORKDIR /src

COPY package.json /src
RUN npm install --production
ADD . .

RUN apk add --update tzdata
ENV TZ=America/Sao_Paulo
RUN rm -rf /var/cache/apk/*

EXPOSE 80

CMD ["npm", "start"]
