drop table if exists projects;
CREATE TABLE projects (
id SERIAL PRIMARY KEY,
number  VARCHAR(30) NOT NULL,
accessories VARCHAR(30) DEFAULT '_null',
background VARCHAR(30) DEFAULT '_null',
clothing VARCHAR(30) DEFAULT '_null',
earrings VARCHAR(30) DEFAULT '_null',
eyes VARCHAR(30) DEFAULT '_null',
fish VARCHAR(30) DEFAULT '_null',
headware VARCHAR(30) DEFAULT '_null',
tattoos VARCHAR(30) DEFAULT '_null',
image  VARCHAR(360) NOT NULL
);
INSERT INTO projects (image, number, background, fish, earrings, clothing, eyes, headware) VALUES ('https://lh3.googleusercontent.com/HmMK1WmrCMZu1hmk9Dbf4bZCX7thYJg-j7cfLWSiz89dJ91nQGhKJ7zMgdELTBHWudV-Ts642X7l4vB7mq-XLBfhvXJ3NG01szsJ8xY','_1','_teamseas','_sunrise','_starfish_diamond','_tshirt_bonefish','_hippie','_oc_snapback');
INSERT INTO projects (image, number, background, eyes, fish, clothing, headware) VALUES ('https://lh3.googleusercontent.com/zRLhiMalnDK0Ue0FNX4w4Q8k5z5vMQvPLItRGhWXN1scbFCD3S_xem6ObXmTAwZy3G6gFT3xzkPHcTeu2qYfKeKNYDthHeewPV-beA','_2','_teamseas','_surprised','_silver','_suspenders_seaweed','_pom_teamseas');
INSERT INTO projects (image, number, background, fish, clothing, eyes, headware) VALUES ('https://lh3.googleusercontent.com/qTIwEufntwLu7hHYArnJcVtmTZnSu0rm_LOoAZP5saw8eurUzKRQq8ogDxiyCHYmuRYzX9EoecYRro5EV61vNfLLEZ32ZLKc_wTRDA','_3','_teamseas','_green_striped','_tshirt_teamseas','_polarized','_octopus');
INSERT INTO projects (image, number, background, fish, clothing, eyes, headware, accessories) VALUES ('https://lh3.googleusercontent.com/elapFPqBESCnhBCS2pr-pj32ytbbc1cLTFR9cISGKRrhjDmuELsQoUIHLsqQVfttzljDJ-aac_1C8X7N7EO16h6-PjeTZ1Zc26d-4Q','_4','_teamseas','_sunrise','_coconut_bra_lei','_surprised','_flip_bill_gm','_bubble_gum');
INSERT INTO projects (image, number, background, fish, earrings, clothing, eyes, headware) VALUES ('https://lh3.googleusercontent.com/C-GaM4xMQSCbOGpEJSKWCwTZgsI3WtSPzHQcrH4lpUaJ_cxRdORSYM12y728ifmMoTjPeUmrjwwMqfEvhEm0He8GelUww74RZZ9JPA','_5','_teamseas','_mystique','_fishhook_silver','_jersey_red','_hollys','_pom_chicago');
