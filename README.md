# studeat Manuel de déploiement

Ce projet est constitué de deux répertoires, frontend et backend, tous deux possédant des sous-projets.


# Téléchargement du projet
Le répertoire github du projet est disponible à l'adresse https://github.com/antoineTsinga/studeat/. 
Vous pouvez télécharger le fichier zip du répertoire où le cloner à partir du terminal avec la commande *git clone https://github.com/antoineTsinga/studeat/*
Une fois le projet téléchargé sur votre machine rendez-vous dans le dossier correspondant.

# Frontend

Le frontend est réalisé en React.js, il faudra donc installer Node.js dans votre machine.
Une fois node installé il suffit de se rendre dans le répertoire du projet frontend à l'aide du terminale et exécuter la commande *npm install*  qui va telecharger
toutes les dépendances du projet. Une fois le téléchargement terminer lancer la commande *npm start* qui démarrera un serveur local (par défaut localhost:3000).
Pour voir le frontend du site il suffit de se rendre à l'aide d'un navigateur à l'adresse http://localhost:3000.
Votre frontend est prêt !

# backend

Le backend est réalisé en Symfony basé sur le language de programmation Php.
Il faudra installer quelques outils avant de lancer le serveur backend. \n
*Composer :* \n
à l'image de npm de node.js il va nous permettre de gérer les dépendances du projet.
Il faudra donc installer composer. https://getcomposer.org/ \n

*Php :* \n
Comme dit plus haut le backend est basé sur php, assurez-vous d'avoir Php installé.
https://www.php.net/downloads

*BDD*
Installez MySQL et gardez vos identifiants (username, password) et la version que vous avez sur votre machine

*Symfony CLI*
Pour finir il nous faut symfony CLI qui va démarer un server pour le backend
https://symfony.com/download

Il faut maitenant connecter un base de donnée au projet backend.
Rendez-vous dans le dossier backend du projet et ouvrez le fichier .env situé à la racine. Vous verrez entre les lignes 25 et 30

\# DATABASE_URL="mysql://db_user:db_password@127.0.0.1:3306/db_name?serverVersion=5.7&charset=utf8mb4" (il s'agit des infos à renseiger pour vous connecter à mysql server)
...
DATABASE_URL="mysql://root:root@127.0.0.1:3306/studeatbdd?serverVersion=8.0.29" *ligne à modifier*

Changez juste le nom d'utilisateur, le mot de passe et la version avec celles qui correspondent à votre configuration de MySql

Une fois tout cela fait, il faut installer les dépendances du projet backend en exécutant à l'aide du terminale (toujours dans le répertoire backend) la commande # composer install #
Crééons la base de données *studeatbdd* renseigner plus haut : exécutez
*php bin/console doctrine:database:create*
ensuite
*php bin/console doctrine:schema:create*


installer les certificats SSL du server avec *symfony server:ca:install*
Pour finir exécuter *symfony server:start* 

Le frontend et le backend tournent
