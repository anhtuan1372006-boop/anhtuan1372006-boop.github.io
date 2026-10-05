FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
COPY scripts ./scripts
COPY public ./public
RUN npm ci
COPY src ./src
COPY vite.config.mjs jsconfig.json components.json ./
RUN npm run build

FROM node:24-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production HOST=0.0.0.0 PORT=4173 DATA_DIR=/var/lib/boxanh
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts && npm cache clean --force
COPY server.mjs ./
COPY licenses ./licenses
COPY --from=build /app/dist ./dist
COPY --from=build /app/public ./public
RUN mkdir -p /var/lib/boxanh && chown -R node:node /app /var/lib/boxanh
USER node
VOLUME /var/lib/boxanh
EXPOSE 4173
CMD ["node", "server.mjs"]
