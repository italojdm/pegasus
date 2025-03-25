#Sistema Operacional:

Ubuntu Server 24.04

#Configurações de Hardware Recomendadas:

4VCPU
8GB DE RAM 
140GB DE ARMAZENAMENTO

#Tecnologias Utilizadas:
Html
Css
JavaScript
Php
Ruby
Postgres 16


#Credenciais do Sistema Operacional:

user root: pegasus
password: pegasus

#Instalação do Postgres:

sudo su
apt update && apt upgrade -y
apt install net-tools -y
apt install postgresql postgresql-contrib -y
systemctl status postgresql
systemctl restart postgresql

#Configuração do Banco de Dados:

sudo -i -u postgres
su - pegasus
sudo su
sudo passwd postgres
sudo -i -u postgres
psql
CREATE DATABASE pegasus_db;
ALTER USER postgres WITH PASSWORD 'postgres';
\q
su - pegasus
sudo su
vi /etc/postgresql/16/main/postgresql.conf
listen_addresses = '*'
vi /etc/postgresql/16/main/pg_hba.conf
host    all             all             0.0.0.0/0            md5
systemctl restart postgresql
systemctl status postgresql

#Credenciais e Configurações do Banco de dados:

ip: localhost
port: 5432
banco do dados: postgres_db
user banco: postgres
password: postgres

#Instalação do Ruby:

sudo su
apt update && apt upgrade -y
apt install ruby-full -y
apt install ruby-bundler -y
apt install libpq-dev -y
apt install libyaml-dev -y
apt install build-essential patch ruby-dev zlib1g-dev liblzma-dev libxml2-dev libxslt1-dev -y
gem install pg
gem install rainbow
gem install psych

#Instalação do php:

sudo su
apt update && apt upgrade -y
apt install php -y
apt install php-pgsql -y

#Instalação do Apache:

sudo su
apt update && apt upgrade -y
apt install apache2 -y
sudo systemctl enable apache2
sudo systemctl start apache2
sudo systemctl status apache2

#Instalação do git e Criação da pasta do Projeto:

apt install git
git config --global user.name "username"
git config --global user.email "e-mail"
git config --list
cd /
git clone https://github.com/repo

#Execução do programa - Donwload da Base de dados, Extração e Importação para o Banco de dados:
cd /extractor/banco-cnpj-main/
mkdir files
bundle install
ruby main.rb