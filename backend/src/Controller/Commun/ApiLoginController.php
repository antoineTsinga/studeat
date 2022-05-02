<?php

namespace App\Controller\Commun;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ApiLoginController extends AbstractController
{
    #[Route('/api/login', name: 'api_login', methods: ["POST"])]
    public function login()
    {
        $user = $this->getUser();
        if (null === $user) {
            return $this->json([
                'message' => 'missing credentials',
            ], Response::HTTP_UNAUTHORIZED);
        }
        $token = "564805bsfv"; // somehow create an API token for $user

        return $this->json([
            'id' => $user->getId(),
            'email'  => $user->getUserIdentifier(),
            'name' => $user->getName(),
            'surname' => $user->getSurname(),
            'token' => $token,
        ], Response::HTTP_OK);
    }

    #[Route('/api/logout', name: 'api_logout', methods: ["POST"])]
    public function logout()
    {
    }
}
