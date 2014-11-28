Actions:

1. Upvote a word
	subtle prompt to tag
2. Heart a word
	Heart automatically also Upvotes
	subtle prompt to tag
3. Tag-it:
	a. Example sentence
	b. Freestyle comment
	c. Actually useful
	d. Hackneyed
	e. Highfalutin / pretentious
	f. Connotes

3. Downvote a word
	subtle prompt to tag


create table words (
	word_id serial primary key, -- NOT NULL not needed
	word text,
	cnt_liked integer,
	cnt_entered integer,
	date_entered text,
	cnt_
)

create table defs (
	def_id serial primary key,
	word_id integer REFERENCES words(word_id),
	definition text
)

create table users (
	email text primary key,
	date_added text
)

create table likes (
	like_click_id serial primary key,
	word_id integer REFERENCES words(word_id),
	user_id text REFERENCES users(email),
	date text
)

create table form_submissions (
	form_submit_id serial primary key,
	word_id integer REFERENCES words(word_id),
	user_id text REFERENCES users(email),
	date text,
	example text,
	freestyle_comment text,
	actually_useful boolean,
	hackneyed boolean,
	highfalutin boolean,
	connotes text CHECK (connotes in ('good','bad'))
)


update words
set likes = likes + 1
where word = '%word';

