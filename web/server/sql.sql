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

4. If logged in and word already in love list, indicate that.
	How to enforce unique constraint?
	Okay to have multiple users upvote it. (Or even same person if not logged in)
	Allow user to un-love a word.

--DRY - don't store it in one table if it can be computed from another (?)
-- Most loved words:
select 
	w.word, 
	sum(p.primary_click) as love_cnt 
from
	words w,
	primary_submits p 
where 
	w.word_id = p.word_id
	and primary_click = 'love'
group by 
	p.word_id
order by love_cnt desc

-- Most hated words:
select 
	w.word, 
	sum(p.primary_click) as down_cnt 
from
	words w,
	primary_submits p 
where 
	primary_click = 'down'
order by down_cnt desc

-- Most loved words that are not hackneyed or highfalutin
select 
	w.word, 
	sum(p.primary_click) as love_cnt 
	sum(s.hackneyed) as hackneyed_cnt 
	sum(s.highfalutin) as highfalutin_cnt 
from
	words w,
	primary_submits p 
	secondary_submits s
where 
	primary_click = 'love'
	and secondary_submits = 'love'
group by 
	secondary_submits.word_id
order by love_cnt desc


insert into submits (word, user_id, date_submit, primary_click, actually_useful, hackneyed, highfalutin, connotes)
	values ()

create table words ( --w
	word_id serial primary key, -- NOT NULL not needed
	word text
	--date_entered text,
	--cnt_entered integer,
	--cnt_liked integer,
	--cnt_
)

create table submits ( --s
	submit_id serial primary key,
	word text REFERENCES words(word),
	user_id text REFERENCES users(email),
	date_submit text,
	primary_click text CHECK (primary_click in ('love','up','down'))	
	example text,
	freestyle_comment text,
	actually_useful boolean,
	hackneyed boolean,
	highfalutin boolean,
	connotes text CHECK (connotes in ('good','bad')),
	UNIQUE (user_id, word)
)
-- UNIQUE: word & user_id


create table defs ( --d
	def_id serial primary key,
	word_id integer REFERENCES words(word_id),
	definition text
)

create table users ( --u
	email text primary key,
	date_added text
)
/*
create table primary_submits ( --p
	submit_id serial primary key,
	word_id integer REFERENCES words(word_id),
	user_id text REFERENCES users(email),
	date_submit text,
	primary_click text CHECK (primary_click in ('love','up','down'))
)*/
update words
set likes = likes + 1
where word = '%word';

