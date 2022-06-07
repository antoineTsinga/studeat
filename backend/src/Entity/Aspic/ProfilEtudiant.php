<?php

namespace App\Entity\Aspic;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Entity\Commun\User;
use App\Repository\Aspic\ProfilEtudiantRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProfilEtudiantRepository::class)]
#[ApiResource()]
class ProfilEtudiant
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $adress;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $tel;

    #[ORM\OneToOne(inversedBy: 'profilEtudiant', targetEntity: User::class, cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false, onDelete: "CASCADE")]
    private $user;

    #[ORM\OneToMany(mappedBy: 'profilEtudiant', targetEntity: PanierAlim::class)]
    #[ORM\JoinColumn(nullable: true, onDelete: "CASCADE")]
    private $panierAlims;

    #[ORM\OneToMany(mappedBy: 'profilEtudiant', targetEntity: Commande::class)]
    #[ORM\JoinColumn(nullable: true, onDelete: "CASCADE")]
    private $commandes;

    #[ORM\OneToOne(mappedBy: 'owner', targetEntity: Panier::class, cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: true, onDelete: "CASCADE")]
    private $panier;

    public function __construct()
    {
        $this->panierAlims = new ArrayCollection();
        $this->commandes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }
    public function getAdress(): ?string
    {
        return $this->adress;
    }

    public function setAdress(string $adress): self
    {
        $this->adress = $adress;

        return $this;
    }

    public function getTel(): ?string
    {
        return $this->tel;
    }

    public function setTel(string $tel): self
    {
        $this->tel = $tel;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(User $user): self
    {
        $this->user = $user;

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
            $panierAlim->setProfilEtudiant($this);
        }

        return $this;
    }

    public function removePanierAlim(PanierAlim $panierAlim): self
    {
        if ($this->panierAlims->removeElement($panierAlim)) {
            // set the owning side to null (unless already changed)
            if ($panierAlim->getProfilEtudiant() === $this) {
                $panierAlim->setProfilEtudiant(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Commande>
     */
    public function getCommandes(): Collection
    {
        return $this->commandes;
    }

    public function addCommande(Commande $commande): self
    {
        if (!$this->commandes->contains($commande)) {
            $this->commandes[] = $commande;
            $commande->setProfilEtudiant($this);
        }

        return $this;
    }

    public function removeCommande(Commande $commande): self
    {
        if ($this->commandes->removeElement($commande)) {
            // set the owning side to null (unless already changed)
            if ($commande->getProfilEtudiant() === $this) {
                $commande->setProfilEtudiant(null);
            }
        }

        return $this;
    }

    public function getPanier(): ?Panier
    {
        return $this->panier;
    }

    public function setPanier(Panier $panier): self
    {
        // set the owning side of the relation if necessary
        if ($panier->getOwner() !== $this) {
            $panier->setOwner($this);
        }

        $this->panier = $panier;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->user->getEmail();
    }



    public function getName(): ?string
    {
        return $this->user->getName();
    }



    public function getSurname(): ?string
    {
        return $this->user->getSurname();
    }
    public function getUserId(): ?string
    {
        return $this->user->getId();
    }
}