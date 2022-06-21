drop database if exists testbeddb;
drop user if exists testbed;

create user testbed with password 'test';
create database testbeddb with template=template0 owner=testbed;
\connect testbeddb;
alter default privileges grant all on tables to testbed;
alter default privileges grant all on sequences to testbed;

create table account(
	id integer primary key not null,
	fname varchar(20) not null,
	lname varchar(20) not null,
	email varchar(30) not null,
	password text not null
);

create table category(
	catid integer primary key not null,
	id integer not null,
	title varchar(20) not null,
	description varchar(50) not null
);
alter table category add constraint cat_account_fk
foreign key (id) references account(id);

create table task (
	taskid integer primary key not null,
	catid integer not null,
	id integer not null,
	amount numeric(10,2) not null,
	note varchar(50) not null,
	taskdate bigint not null
);
alter table task add constraint task_cat_fk
foreign key (catid) references category(catid);
alter table task add constraint task_account_fk
foreign key (id) references account(id);

create sequence accountseq increment 1 start 1;
create sequence catseq increment 1 start 1;
create sequence taskseq increment 1 start 1000;
