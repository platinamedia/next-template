NAME ?= next-app
PORT ?= 3000

rebuild: build run

build:
	docker build -t $(NAME) .

run:
	docker rm -f $(NAME)
	docker run --restart unless-stopped -d -p $(PORT)\:3000 --name $(NAME) -i $(NAME)

start:
	docker start $(NAME)

stop:
	docker stop $(NAME)

dev:
	npm run dev

clean:
	docker rm -f $(NAME)
	docker rmi $(NAME)
