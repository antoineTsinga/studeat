<?php

namespace App\Entity\Aspic;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\OrderFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use App\Entity\Commun\User;
use App\Repository\Aspic\RestaurantRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RestaurantRepository::class)]
#[ApiResource(
    paginationItemsPerPage: 20,
    paginationMaximumItemsPerPage: 20,
    paginationClientEnabled: true,
    paginationClientItemsPerPage: 20,
)]

#[ApiFilter(SearchFilter::class, properties: ['restaurant' => "partial", /*'alimType' => 'partial'*/])]
#[ApiFilter(OrderFilter::class, properties: ['restaurant' => 'asc'])]
class Restaurant
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $firstname;

    #[ORM\Column(type: 'string', length: 255)]
    #[ORM\JoinColumn(nullable: true)]
    private $restaurant;

    #[ORM\Column(type: 'integer', length: 255)]
    private $siret;

    #[ORM\Column(type: 'string', length: 255)]
    private $tel;

    #[ORM\OneToOne(inversedBy: 'profilEtudiant', targetEntity: User::class, cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: true)]
    private $user;

    #[ORM\Column(type: 'string', length: 255)]
    private $description;

    #[ORM\Column(type: 'string', length: 255)]
    private $image;

    #[ORM\Column(type: 'string', length: 255)]
    private $adress;

    #[ORM\OneToMany(mappedBy: 'restaurant', targetEntity: PanierAlim::class)]
    private $panierAlims;

    #[ORM\Column(type: 'json')]
    private $alimTypes = [];

    public function __construct()
    {
        $this->panierAlims = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }


    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): self
    {
        $this->image = $image;

        return $this;
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
    public function getRestaurant()
    {
        return $this->restaurant;
    }

    public function setRestaurant($restaurant): self
    {
        $this->restaurant = $restaurant;

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
            $panierAlim->setRestaurant($this);
        }

        return $this;
    }

    public function removePanierAlim(PanierAlim $panierAlim): self
    {
        if ($this->panierAlims->removeElement($panierAlim)) {
            // set the owning side to null (unless already changed)
            if ($panierAlim->getRestaurant() === $this) {
                $panierAlim->setRestaurant(null);
            }
        }

        return $this;
    }

    /**
     * Get the value of firstname
     */
    public function getFirstname()
    {
        return $this->firstname;
    }

    /**
     * Set the value of firstname
     *
     * @return  self
     */
    public function setFirstname($firstname)
    {
        $this->firstname = $firstname;

        return $this;
    }

    /**
     * Get the value of user
     */
    public function getUser(): ?User
    {
        return $this->user;
    }



    /**
     * Set the value of user
     *
     * @return  self
     */
    public function setUser(User $user): self
    {
        $this->user = $user;

        return $this;
    }



    /**
     * Get the value of siret
     */
    public function getSiret()
    {
        return $this->siret;
    }

    /**
     * Set the value of siret
     *
     * @return  self
     */
    public function setSiret($siret)
    {
        $this->siret = $siret;

        return $this;
    }

    /**
     * Get the value of alimTypes
     */
    public function getAlimTypes(): array
    {
        return $this->alimTypes;
    }


    public function setAlimTypes($alimTypes): self
    {
        $this->alimTypes = $alimTypes;

        return $this;
    }
}