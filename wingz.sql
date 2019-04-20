--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;



SET default_tablespace = '';

SET default_with_oids = false;


---
--- drop tables
---


DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS userLogin;
DROP TABLE IF EXISTS userdata;
DROP TABLE IF EXISTS usertexts
DROP TABLE IF EXISTS birds;
DROP TABLE IF EXISTS birdsightings;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE users (
    username character varying(25) NOT NULL,
    email_address character varying(45) NOT NULL,
    first_name character varying(30) NOT NULL,
    last_name chrarcter varying(30),
    description character varying(60)
);

--
-- Name: userlogin; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE userlogin (
    username character varying(25) NOT NULL,
    password character varying(40) NOT NULL
);


--
-- Name: userdata; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE userdata (
    username character varying(25) NOT NULL,
    currency decimal(9,2),
    birdwall integer
);

--
-- Name: usertexts; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE usertexts (
    sending_user character varying(25) NOT NULL,
    receiving_user character varying(25) NOT NULL,
    message character varying(90),
    contact_title character varying(30)
);


--
-- Name: birds; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE birds (
    bird_id serial PRIMARY KEY,
    common_name character varying(25) NOT NULL,
    scientific_name character varying(60) NOT NULL,
    bird_description character varying(90),
    bird_image character varying(120)
);


--
-- Name: birdsightings; Type: TABLE; Schema: public; Owner: -; Tablespace: 
--

CREATE TABLE birdsightings (
    sighting_number serial PRIMARY KEY,
    username character varying(25) NOT NULL,
    bird_id interger NOT NULL,
    sight_time character varying(90),
    location character varying(90) NOT NULL,
    bird_count integer
);


--
-- Data for Name: employees; Type: TABLE DATA; Schema: public; Owner: -
--
