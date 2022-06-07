<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220607140031 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE profil_etudiant ADD panier_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE profil_etudiant ADD CONSTRAINT FK_6D97574EF77D927C FOREIGN KEY (panier_id) REFERENCES panier (id) ON DELETE CASCADE');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_6D97574EF77D927C ON profil_etudiant (panier_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE profil_etudiant DROP FOREIGN KEY FK_6D97574EF77D927C');
        $this->addSql('DROP INDEX UNIQ_6D97574EF77D927C ON profil_etudiant');
        $this->addSql('ALTER TABLE profil_etudiant DROP panier_id');
    }
}
