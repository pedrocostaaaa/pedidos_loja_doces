create database pedidos_loja_doces;

use pedidos_loja_doces;

create table cadastro_clientes (
 id_cliente int primary key auto_increment,
 nome_cliente varchar (200) not null,
 endereco_cliente varchar (320) not null
);

insert into cadastro_clientes (nome_cliente) values
("José Joaquim"), ("José José"), ("José Armando");
 
select * from cadastro_clientes;

create table cadastro_pedidos (
	id_pedido int primary key auto_increment,
    descrição_pedido varchar (120) not null,
    valor_total decimal not null,
    id_cliente int not null,
    foreign key (id_cliente) references cadastro_clientes(id_cliente)
);

insert into cadastro_pedidos (id_pedido,descrição_pedido,valor_total) values
(9,"1"),
(10,"bolo sem lactose"),
(11,"12,89");

select * from doces;



