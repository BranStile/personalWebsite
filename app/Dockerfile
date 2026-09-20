# Stage 1: install dependencies
FROM node:20-alpine AS deps
WORKDIR /usr/src/app
COPY package*.json ./
COPY prisma ./prisma
RUN npm install
RUN npx prisma generate

# Stage 2: build the app
FROM node:20-alpine AS builder
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 3: run the production server
FROM node:20-alpine AS runner
WORKDIR /usr/src/app
ENV NODE_ENV=production
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json ./package.json
COPY --from=builder /usr/src/app/prisma ./prisma
EXPOSE 3000
CMD ["npm", "start"]