FROM postgres:latest

ENV POSTGRES_DB sz_dev_db_v1
ENV POSTGRES_USER sz_dev_user
ENV POSTGRES_PASSWORD  rer9Ohdpdb

COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 5433:5432
