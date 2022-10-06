NAME ?= next-app
PORT ?= 3000

rebuild: build run

build:
	docker build -t $(NAME) .

run:
	docker rm -f $(NAME)
	docker run -d -p $(PORT)\:3000 --name $(NAME) -i $(NAME)

start:
	docker start $(NAME)

stop:
	docker stop $(NAME)

clean:
	docker rm -f $(NAME)
	docker rmi $(NAME)
