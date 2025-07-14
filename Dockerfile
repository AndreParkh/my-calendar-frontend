# Stage 1: Build
# Используем базовый образ Node.js версии 22.17.0
FROM node:22-slim
LABEL authors="Andrey"

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем файлы package.json и package-lock.json в контейнер
COPY  package*.json ./

# Устанавиливаем зависимости, указанные в package.json
RUN npm install

# Копируем оставшиеся файлы проекта в рабочую директорию контейнера
COPY . .

# Выполняем сборку проекта
RUN npm run build

EXPOSE 5003
CMD ["node", "src/server-dev.js"]