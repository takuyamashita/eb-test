FROM php:8.2-fpm

RUN apt update -y
RUN apt install -y libfcgi0ldbl curl git unzip wget vim

RUN useradd -m -s /bin/sh -u 1000 nginx

COPY ./www.conf /usr/local/etc/php-fpm.d/zzz-www.conf

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

USER nginx

WORKDIR /var/www

VOLUME [ "/var/run/php-fpm" ]
