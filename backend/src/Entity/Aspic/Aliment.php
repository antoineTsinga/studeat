<?php

namespace App\Entity\Aspic;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\Aspic\AlimentRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AlimentRepository::class)]
#[ApiResource()]
class Aliment
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $name;

    #[ORM\Column(type: 'string', length: 255)]
    private $alergene;

    #[ORM\ManyToOne(targetEntity: Categorie::class, inversedBy: 'aliments')]
    private $categorie;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getAlergene(): ?string
    {
        return $this->alergene;
    }

    public function setAlergene(string $alergene): self
    {
        $this->alergene = $alergene;

        return $this;
    }

    public function getCategorie(): ?Categorie
    {
        return $this->categorie;
    }

    public function setCategorie(?Categorie $categorie): self
    {
        $this->categorie = $categorie;

        return $this;
    }
}
