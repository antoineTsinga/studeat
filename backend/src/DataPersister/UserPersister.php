<?php

namespace App\DataPersister;

use App\Entity\Commun\User;
use Doctrine\ORM\EntityManagerInterface;
use ApiPlatform\Core\DataPersister\DataPersisterInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;


class UserPersister implements DataPersisterInterface
{
    protected $em;
    protected $userPasswordHasher;

    public function __construct(EntityManagerInterface $em, UserPasswordHasherInterface $userPasswordHasher)
    {
        $this->em = $em;
        $this->userPasswordHasher = $userPasswordHasher;
    }

    public function supports($data): bool
    {
        return $data instanceof User;
    }

    public function persist($data)
    {

        $data->setPassword(
            $this->userPasswordHasher->hashPassword(
                $data,
                $data->getPassword()
            )
        );
        $this->em->persist($data);
        $this->em->flush();
    }

    public function remove($data)
    {
        $this->em->remove($data);
        $this->em->flush();
    }
}
