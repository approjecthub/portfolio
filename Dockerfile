FROM  node:14

RUN mkdir -p /home/app/3d_portfolio
COPY . .
RUN npm i
RUN npm run build
RUN npm i -g serve
EXPOSE 8282

CMD ["serve", "-s", "dist", "-l", "8282"]

