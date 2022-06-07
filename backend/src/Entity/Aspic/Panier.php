<?php

namespace App\Entity\Aspic;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\Aspic\PanierRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PanierRepository::class)]
#[ApiResource()]
class Panier
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\OneToOne(inversedBy: 'panier', targetEntity: ProfilEtudiant::class, cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private $owner;

    #[ORM\OneToMany(mappedBy: 'panier', targetEntity: PanierAlim::class)]
    private $panierAlims;

    public function __construct()
    {
        $this->panierAlims = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getOwner(): ?ProfilEtudiant
    {
        return $this->owner;
    }

    public function setOwner(ProfilEtudiant $owner): self
    {
        $this->owner = $owner;

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
            $panierAlim->setPanier($this);
        }

        return $this;
    }

    public function removePanierAlim(PanierAlim $panierAlim): self
    {
        if ($this->panierAlims->removeElement($panierAlim)) {
            // set the owning side to null (unless already changed)
            if ($panierAlim->getPanier() === $this) {
                $panierAlim->setPanier(null);
            }
        }

        return $this;
    }
}