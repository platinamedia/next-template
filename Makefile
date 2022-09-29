project_name = next-app
port = 3000

build:
	docker build -t $(project_name) .

run:
	docker rm -f $(project_name)
	docker run -d -p $(port)\:3000 --name $(project_name) -i $(project_name)

start:
	docker start $(project_name)

stop:
	docker stop $(project_name)

clean:
	docker rm -f $(project_name)
	docker rmi $(project_name)

rebuild: build run
