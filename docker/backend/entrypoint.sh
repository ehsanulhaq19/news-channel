#!/bin/bash

set -e

while ! nc -z $DB_HOST 3306; do
    sleep 1
done

if ! mysql --skip-ssl -h $DB_HOST -u $DB_USERNAME -p$DB_PASSWORD -e "use $DB_DATABASE"; then
    mysql --skip-ssl -h $DB_HOST -u $DB_USERNAME -p$DB_PASSWORD -e "CREATE DATABASE $DB_DATABASE CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
    php artisan migrate --force
fi

php artisan vendor:publish --provider="L5Swagger\L5SwaggerServiceProvider" --no-interaction || true

chown -R www-data:www-data storage bootstrap/cache
chmod -R 775 storage bootstrap/cache

php artisan migrate --force

#fetch articles data
php artisan fetch:articles

exec "$@"
