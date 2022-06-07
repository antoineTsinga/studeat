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

        if ($user == null) return $user;
        // return $user;

        if ($user == null) return $user;

        $isAdmin = in_array('ROLE_ADMIN', $user->getRoles());

        return $this->json([
            'id' => $user->getId(),
            'email'  => $user->getUserIdentifier(),
            'name' => $user->getName(),
            'surname' => $user->getSurname(),
            'etudiant' => $user->getProfilEtudiant(),
            'admin' => $user->getProfilAdmin(),
            'isAdmin' => $isAdmin

        ], Response::HTTP_OK);
    }
}