#!/bin/bash

set -e

while ! nc -z $DB_HOST 3306; do
    sleep 1
done

if ! mysql -h $DB_HOST -u $DB_USERNAME -p$DB_PASSWORD -e "use $DB_DATABASE"; then
    mysql -h $DB_HOST -u $DB_USERNAME -p$DB_PASSWORD -e "CREATE DATABASE $DB_DATABASE CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
    composer install
    php artisan migrate --force
fi

exec "$@"
