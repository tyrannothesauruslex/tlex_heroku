create table words (
	word_id serial primary key,
	word text,
	likes integer
)

create table defs (
	def_id serial primary key,
	word_id integer foreign key (words.word_id),
	definition text
)

update words
set likes = likes + 1
where word = '%word';
