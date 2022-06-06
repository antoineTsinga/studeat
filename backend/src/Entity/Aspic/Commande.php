<?php

namespace App\Entity\Aspic;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\Aspic\CommandeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CommandeRepository::class)]
#[ApiResource()]
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
    #[ORM\JoinColumn(nullable: true)]
    private $livreur;

    #[ORM\OneToMany(mappedBy: 'restaurant', targetEntity: PanierAlim::class)]
    #[ORM\JoinColumn(nullable: false)]
    private $panierAlims;

    public function __construct()
    {
        $this->panierAlims = new ArrayCollection();
    }

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

    /**
     * @return Collection<int, PanierAlim>
     */
    public function getPanierAlims(): Collection
    {
        return $this->panierAlims;
    }

    public function addPanierAlim(PanierAlim $panierAlim): self
    {
        if (!$this->panierAlims->contains($panierAlim)) {
            $this->panierAlims[] = $panierAlim;
            $panierAlim->setCommande($this);
        }

        return $this;
    }

    public function removePanierAlim(PanierAlim $panierAlim): self
    {
        if ($this->panierAlims->removeElement($panierAlim)) {
            // set the owning side to null (unless already changed)
            if ($panierAlim->getCommande() === $this) {
                $panierAlim->setCommande(null);
            }
        }

        return $this;
    }
}