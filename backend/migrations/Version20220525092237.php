<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220525092237 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE commande (id INT AUTO_INCREMENT NOT NULL, profil_etudiant_id INT NOT NULL, livreur_id INT NOT NULL, panier_alim_id INT NOT NULL, valide TINYINT(1) NOT NULL, mode_de_livraison TINYINT(1) NOT NULL, INDEX IDX_6EEAA67D87D4A8E3 (profil_etudiant_id), INDEX IDX_6EEAA67DF8646701 (livreur_id), UNIQUE INDEX UNIQ_6EEAA67DF14FB54F (panier_alim_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE faq (id INT AUTO_INCREMENT NOT NULL, question VARCHAR(255) NOT NULL, response VARCHAR(255) NOT NULL, status TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE livreur (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE panier_alim (id INT AUTO_INCREMENT NOT NULL, restaurant_id INT NOT NULL, profil_etudiant_id INT NOT NULL, INDEX IDX_90C9954CB1E7706E (restaurant_id), INDEX IDX_90C9954C87D4A8E3 (profil_etudiant_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE profil_admin (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, name VARCHAR(255) NOT NULL, surname VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, tel VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_C602D632A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE profil_etudiant (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, name VARCHAR(255) NOT NULL, surname VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, adress VARCHAR(255) NOT NULL, tel VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_6D97574EA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE restaurant (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, description VARCHAR(255) NOT NULL, image VARCHAR(255) NOT NULL, adress VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE commande ADD CONSTRAINT FK_6EEAA67D87D4A8E3 FOREIGN KEY (profil_etudiant_id) REFERENCES profil_etudiant (id)');
        $this->addSql('ALTER TABLE commande ADD CONSTRAINT FK_6EEAA67DF8646701 FOREIGN KEY (livreur_id) REFERENCES livreur (id)');
        $this->addSql('ALTER TABLE commande ADD CONSTRAINT FK_6EEAA67DF14FB54F FOREIGN KEY (panier_alim_id) REFERENCES panier_alim (id)');
        $this->addSql('ALTER TABLE panier_alim ADD CONSTRAINT FK_90C9954CB1E7706E FOREIGN KEY (restaurant_id) REFERENCES restaurant (id)');
        $this->addSql('ALTER TABLE panier_alim ADD CONSTRAINT FK_90C9954C87D4A8E3 FOREIGN KEY (profil_etudiant_id) REFERENCES profil_etudiant (id)');
        $this->addSql('ALTER TABLE profil_admin ADD CONSTRAINT FK_C602D632A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE profil_etudiant ADD CONSTRAINT FK_6D97574EA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE aliment ADD panier_alim_id INT NOT NULL');
        $this->addSql('ALTER TABLE aliment ADD CONSTRAINT FK_70FF972BF14FB54F FOREIGN KEY (panier_alim_id) REFERENCES panier_alim (id)');
        $this->addSql('CREATE INDEX IDX_70FF972BF14FB54F ON aliment (panier_alim_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE commande DROP FOREIGN KEY FK_6EEAA67DF8646701');
        $this->addSql('ALTER TABLE aliment DROP FOREIGN KEY FK_70FF972BF14FB54F');
        $this->addSql('ALTER TABLE commande DROP FOREIGN KEY FK_6EEAA67DF14FB54F');
        $this->addSql('ALTER TABLE commande DROP FOREIGN KEY FK_6EEAA67D87D4A8E3');
        $this->addSql('ALTER TABLE panier_alim DROP FOREIGN KEY FK_90C9954C87D4A8E3');
        $this->addSql('ALTER TABLE panier_alim DROP FOREIGN KEY FK_90C9954CB1E7706E');
        $this->addSql('DROP TABLE commande');
        $this->addSql('DROP TABLE faq');
        $this->addSql('DROP TABLE livreur');
        $this->addSql('DROP TABLE panier_alim');
        $this->addSql('DROP TABLE profil_admin');
        $this->addSql('DROP TABLE profil_etudiant');
        $this->addSql('DROP TABLE restaurant');
        $this->addSql('DROP INDEX IDX_70FF972BF14FB54F ON aliment');
        $this->addSql('ALTER TABLE aliment DROP panier_alim_id');
    }
}
