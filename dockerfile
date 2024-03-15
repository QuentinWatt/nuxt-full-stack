FROM node:18.14.2

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install
RUN pnpx prisma generate

COPY . .

EXPOSE 3000

RUN pnpm run build

CMD ["pnpm", "run", "start"]
