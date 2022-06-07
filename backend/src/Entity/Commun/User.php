<?php

namespace App\Entity\Commun;

use ApiPlatform\Core\Action\NotFoundAction;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Controller\Commun\MeController;
use App\Entity\Aspic\ProfilAdmin;
use App\Entity\Aspic\ProfilEtudiant;
use App\Repository\Commun\UserRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['read:user:collection']],
    collectionOperations: [
        "get" => ["security" => "is_granted('ROLE_ADMIN')"],
        "post" => [
            "security" => "is_granted('ROLE_ADMIN') or object == user"
        ],
        'me' => [
            'pagination_enabled' => false,
            'path' => 'users/current',
            'method' => 'get',
            'controller' => MeController::class,
            'read' => false
        ]

    ],

)]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['read:user:collection'])]
    private $id;

    #[Groups(['read:user:collection'])]
    #[ORM\Column(type: 'string', length: 180, unique: true)]
    private $email;

    #[Groups(['read:user:collection'])]
    #[ORM\Column(type: 'string', length: 180)]
    private $name;

    #[Groups(['read:user:collection'])]
    #[ORM\Column(type: 'string', length: 180)]
    private $surname;

    #[ORM\Column(type: 'json')]
    private $roles = [];

    #[ORM\Column(type: 'string')]
    private $password;

    #[ORM\OneToOne(mappedBy: 'user', targetEntity: ProfilEtudiant::class, cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: true, onDelete: "CASCADE")]
    private $profilEtudiant;

    #[ORM\OneToOne(mappedBy: 'user', targetEntity: ProfilAdmin::class, cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: true, onDelete: "CASCADE")]
    private $profilAdmin;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
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

    public function getSurname(): ?string
    {
        return $this->surname;
    }

    public function setSurname(string $surname): self
    {
        $this->surname = $surname;

        return $this;
    }



    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getProfilEtudiant(): ?ProfilEtudiant
    {
        return $this->profilEtudiant;
    }

    public function setProfilEtudiant(ProfilEtudiant $profilEtudiant): self
    {
        // set the owning side of the relation if necessary
        if ($profilEtudiant->getUser() !== $this) {
            $profilEtudiant->setUser($this);
        }

        $this->profilEtudiant = $profilEtudiant;

        return $this;
    }

    public function getProfilAdmin(): ?ProfilAdmin
    {
        return $this->profilAdmin;
    }

    public function setProfilAdmin(ProfilAdmin $profilAdmin): self
    {
        // set the owning side of the relation if necessary
        if ($profilAdmin->getUser() !== $this) {
            $profilAdmin->setUser($this);
        }

        $this->profilAdmin = $profilAdmin;

        return $this;
    }
}