CREATE TABLE users (
	IdUtilisateur INT PRIMARY KEY NOT NULL,
	dateDeNaissance DATE NOT NULL,
	nom VARCHAR(100) NOT NULL,
	prenom VARCHAR(100) NOT NULL,
	genre VARCHAR(1),
	mail VARCHAR(255) NOT NULL,
   password VARCHAR(255) NOT NULL
);

CREATE TABLE maladie (
	IdMaladie INT PRIMARY KEY NOT NULL,
	NomMaladie VARCHAR(255) NOT NULL,
	InformationsMaladie VARCHAR(1000) NOT NULL
);

CREATE TABLE maladieVaccin (
	IdMaladieVaccin INT PRIMARY KEY NOT NULL,
	IdMaladie INT NOT NULL,
	IdVaccin INT NOT NULL
);

CREATE TABLE vaccin (
	IdVaccin INT PRIMARY KEY NOT NULL,
	Nom VARCHAR(100) NOT NULL,
	AgeMin INT NOT NULL,
	AgeMax INT,
	InformationsVaccin VARCHAR(1000),
	Commercialisé VARCHAR(100) NOT NULL
);

CREATE TABLE injectionUtilisateur (
	IdInjection	INT PRIMARY KEY NOT NULL,
	IdUtilisateur	INT NOT NULL,
	date DATE NOT NULL,
	numero_lot INT NOT NULL
);

CREATE TABLE injection (
	IdInjection INT PRIMARY KEY NOT NULL,
	IdVaccin INT NOT NULL,
	TempsMin INT,
	TempsMax INT,
	NbInjection INT NOT NULL,
	AgeMin INT,
	AgeMax INT,
	Curatif VARCHAR(100),
   Préventif VARCHAR(100) 
);

CREATE TABLE rappelInjection (
	IdRappelUser INT PRIMARY KEY NOT NULL,
	date DATE NOT NULL
)