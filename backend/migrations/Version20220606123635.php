<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220606123635 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE commande DROP FOREIGN KEY FK_6EEAA67DF14FB54F');
        $this->addSql('DROP INDEX UNIQ_6EEAA67DF14FB54F ON commande');
        $this->addSql('ALTER TABLE commande DROP panier_alim_id, CHANGE livreur_id livreur_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE panier_alim ADD commande_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE panier_alim ADD CONSTRAINT FK_90C9954C82EA2E54 FOREIGN KEY (commande_id) REFERENCES commande (id)');
        $this->addSql('CREATE INDEX IDX_90C9954C82EA2E54 ON panier_alim (commande_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE commande ADD panier_alim_id INT NOT NULL, CHANGE livreur_id livreur_id INT NOT NULL');
        $this->addSql('ALTER TABLE commande ADD CONSTRAINT FK_6EEAA67DF14FB54F FOREIGN KEY (panier_alim_id) REFERENCES panier_alim (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_6EEAA67DF14FB54F ON commande (panier_alim_id)');
        $this->addSql('ALTER TABLE panier_alim DROP FOREIGN KEY FK_90C9954C82EA2E54');
        $this->addSql('DROP INDEX IDX_90C9954C82EA2E54 ON panier_alim');
        $this->addSql('ALTER TABLE panier_alim DROP commande_id');
    }
}
