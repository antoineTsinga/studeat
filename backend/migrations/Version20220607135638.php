<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220607135638 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE profil_etudiant DROP FOREIGN KEY FK_6D97574EA76ED395');
        $this->addSql('ALTER TABLE profil_etudiant ADD CONSTRAINT FK_6D97574EA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user ADD profil_etudiant_id INT DEFAULT NULL, ADD profil_admin_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D64987D4A8E3 FOREIGN KEY (profil_etudiant_id) REFERENCES profil_etudiant (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D64978C2F7BD FOREIGN KEY (profil_admin_id) REFERENCES profil_admin (id) ON DELETE CASCADE');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D64987D4A8E3 ON user (profil_etudiant_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D64978C2F7BD ON user (profil_admin_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE profil_etudiant DROP FOREIGN KEY FK_6D97574EA76ED395');
        $this->addSql('ALTER TABLE profil_etudiant ADD CONSTRAINT FK_6D97574EA76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D64987D4A8E3');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D64978C2F7BD');
        $this->addSql('DROP INDEX UNIQ_8D93D64987D4A8E3 ON user');
        $this->addSql('DROP INDEX UNIQ_8D93D64978C2F7BD ON user');
        $this->addSql('ALTER TABLE user DROP profil_etudiant_id, DROP profil_admin_id');
    }
}
