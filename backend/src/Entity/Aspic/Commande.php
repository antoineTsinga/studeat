<?php

namespace App\Entity\Aspic;

use App\Repository\Aspic\CommandeRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CommandeRepository::class)]
class Commande
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'boolean')]
    private $valide;

    #[ORM\Column(type: 'boolean')]
    private $modeDeLivraison;

    #[ORM\ManyToOne(targetEntity: ProfilEtudiant::class, inversedBy: 'commandes')]
    #[ORM\JoinColumn(nullable: false)]
    private $profilEtudiant;

    #[ORM\ManyToOne(targetEntity: Livreur::class, inversedBy: 'commandes')]
    #[ORM\JoinColumn(nullable: false)]
    private $livreur;

    #[ORM\OneToOne(inversedBy: 'commande', targetEntity: PanierAlim::class, cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private $panierAlim;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getValide(): ?bool
    {
        return $this->valide;
    }

    public function setValide(bool $valide): self
    {
        $this->valide = $valide;

        return $this;
    }

    public function getModeDeLivraison(): ?bool
    {
        return $this->modeDeLivraison;
    }

    public function setModeDeLivraison(bool $modeDeLivraison): self
    {
        $this->modeDeLivraison = $modeDeLivraison;

        return $this;
    }

    public function getProfilEtudiant(): ?ProfilEtudiant
    {
        return $this->profilEtudiant;
    }

    public function setProfilEtudiant(?ProfilEtudiant $profilEtudiant): self
    {
        $this->profilEtudiant = $profilEtudiant;

        return $this;
    }

    public function getLivreur(): ?Livreur
    {
        return $this->livreur;
    }

    public function setLivreur(?Livreur $livreur): self
    {
        $this->livreur = $livreur;

        return $this;
    }

    public function getPanierAlim(): ?PanierAlim
    {
        return $this->panierAlim;
    }

    public function setPanierAlim(PanierAlim $panierAlim): self
    {
        $this->panierAlim = $panierAlim;

        return $this;
    }
}
