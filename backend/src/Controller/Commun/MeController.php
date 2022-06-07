<?php

namespace App\Controller\Commun;

use Symfony\Component\Security\Core\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class MeController extends AbstractController
{
    public function __construct(public Security $security)
    {
    }
    public function __invoke()
    {
        $user = $this->security->getUser();
        // return $user;

        return $this->json([
            'id' => $user->getId(),
            'email'  => $user->getUserIdentifier(),
            'name' => $user->getName(),
            'surname' => $user->getSurname(),
            'etudiant' => $user->getProfilEtudiant(),

        ], Response::HTTP_OK);
    }
}