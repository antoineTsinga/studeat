<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220607000741 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE panier (id INT AUTO_INCREMENT NOT NULL, owner_id INT NOT NULL, UNIQUE INDEX UNIQ_24CC0DF27E3C61F9 (owner_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE panier ADD CONSTRAINT FK_24CC0DF27E3C61F9 FOREIGN KEY (owner_id) REFERENCES profil_etudiant (id)');
        $this->addSql('ALTER TABLE panier_alim ADD panier_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE panier_alim ADD CONSTRAINT FK_90C9954CF77D927C FOREIGN KEY (panier_id) REFERENCES panier (id)');
        $this->addSql('CREATE INDEX IDX_90C9954CF77D927C ON panier_alim (panier_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE panier_alim DROP FOREIGN KEY FK_90C9954CF77D927C');
        $this->addSql('DROP TABLE panier');
        $this->addSql('DROP INDEX IDX_90C9954CF77D927C ON panier_alim');
        $this->addSql('ALTER TABLE panier_alim DROP panier_id');
    }
}
