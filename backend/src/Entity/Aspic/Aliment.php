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
    private $foodtype;


    #[ORM\Column(type: 'integer', length: 255)]
    private $quantity;

    #[ORM\Column(type: 'string', length: 255)]
    private $unity;

    #[ORM\Column(type: 'date', length: 255)]
    private $dlc;

    #[ORM\Column(type: 'string', length: 255)]
    private $remark;


    #[ORM\ManyToOne(targetEntity: PanierAlim::class, inversedBy: 'aliment')]
    #[ORM\JoinColumn(nullable: true)]
    private $panierAlim;

    public function getId(): ?int
    {
        return $this->id;
    }


    public function getPanierAlim(): ?PanierAlim
    {
        return $this->panierAlim;
    }

    public function setPanierAlim(?PanierAlim $panierAlim): self
    {
        $this->panierAlim = $panierAlim;

        return $this;
    }

    /**
     * Get the value of remark
     */
    public function getRemark()
    {
        return $this->remark;
    }

    /**
     * Set the value of remark
     *
     * @return  self
     */
    public function setRemark($remark)
    {
        $this->remark = $remark;

        return $this;
    }

    /**
     * Get the value of dlc
     */
    public function getDlc()
    {
        return $this->dlc;
    }

    /**
     * Set the value of dlc
     *
     * @return  self
     */
    public function setDlc($dlc)
    {
        $this->dlc = $dlc;

        return $this;
    }

    /**
     * Get the value of unity
     */
    public function getUnity()
    {
        return $this->unity;
    }

    /**
     * Set the value of unity
     *
     * @return  self
     */
    public function setUnity($unity)
    {
        $this->unity = $unity;

        return $this;
    }

    /**
     * Get the value of quantity
     */
    public function getQuantity()
    {
        return $this->quantity;
    }

    /**
     * Set the value of quantity
     *
     * @return  self
     */
    public function setQuantity($quantity)
    {
        $this->quantity = $quantity;

        return $this;
    }

    /**
     * Get the value of foodtype
     */
    public function getFoodtype()
    {
        return $this->foodtype;
    }

    /**
     * Set the value of foodtype
     *
     * @return  self
     */
    public function setFoodtype($foodtype)
    {
        $this->foodtype = $foodtype;

        return $this;
    }
}