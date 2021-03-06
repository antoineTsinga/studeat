<?php

namespace App\Entity\Aspic;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\Aspic\PanierAlimRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PanierAlimRepository::class)]
#[ApiResource()]
class PanierAlim
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\OneToMany(mappedBy: 'panierAlim', targetEntity: Aliment::class)]
    private $aliment;

    #[ORM\ManyToOne(targetEntity: Restaurant::class, inversedBy: 'panierAlims')]
    #[ORM\JoinColumn(nullable: false)]
    private $restaurant;

    #[ORM\ManyToOne(targetEntity: ProfilEtudiant::class, inversedBy: 'panierAlims')]
    #[ORM\JoinColumn(nullable: true)]
    private $profilEtudiant;

    #[ORM\ManyToOne(targetEntity: Commande::class, inversedBy: 'panierAlims')]
    #[ORM\JoinColumn(nullable: true)]
    private $commande;

    #[ORM\ManyToOne(targetEntity: Panier::class, inversedBy: 'panierAlims')]
    private $panier;

    public function __construct()
    {
        $this->aliment = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection<int, Aliment>
     */
    public function getAliment(): Collection
    {
        return $this->aliment;
    }

    public function addAliment(Aliment $aliment): self
    {
        if (!$this->aliment->contains($aliment)) {
            $this->aliment[] = $aliment;
            $aliment->setPanierAlim($this);
        }

        return $this;
    }

    public function removeAliment(Aliment $aliment): self
    {
        if ($this->aliment->removeElement($aliment)) {
            // set the owning side to null (unless already changed)
            if ($aliment->getPanierAlim() === $this) {
                $aliment->setPanierAlim(null);
            }
        }

        return $this;
    }

    public function getRestaurant(): ?Restaurant
    {
        return $this->restaurant;
    }

    public function setRestaurant(?Restaurant $restaurant): self
    {
        $this->restaurant = $restaurant;

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

    public function getCommande(): ?Commande
    {
        return $this->commande;
    }

    public function setCommande(?Commande $commande): self
    {

        $this->commande = $commande;

        return $this;
    }

    public function getPanier(): ?Panier
    {
        return $this->panier;
    }

    public function setPanier(?Panier $panier): self
    {
        $this->panier = $panier;

        return $this;
    }
}
