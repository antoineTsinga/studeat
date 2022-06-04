<?php

namespace App\Controller\Commun;

use App\Entity\Commun\User;
use App\Form\RegistrationFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Serializer\SerializerInterface;

class JsonRegisterController extends AbstractController
{
    #[Route('api/register', name: 'api_register')]
    public function register(Request $request, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $entityManager, SerializerInterface $serializer): Response
    {


        $userJson = $request->getContent();

        $user = $serializer->deserialize($userJson, User::class, "json");

        $valueMissing = array();

        if ($user->getEmail() === null) $valueMissing[] = "email";
        if ($user->getPassword() === null) $valueMissing[] = "password";
        if ($user->getName() === null) $valueMissing[] = "name";
        if ($user->getSurname() === null) $valueMissing[] = "surname";

        $len = count($valueMissing);

        if ($len !== 0) {
            return $this->json([
                'message' => 'Some value(s) missing to create an user',
                'missing_values' => $valueMissing
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }


        $email = $user->getEmail();

        $userRepo = $entityManager->getRepository(User::class);
        if ($userRepo->findOneBy(['email' => $email])) {
            return $this->json([
                'message' => 'This email is already use',
            ], Response::HTTP_CONFLICT);
        }

        // encode the plain password
        $user->setPassword(
            $userPasswordHasher->hashPassword(
                $user,
                $user->getPassword()
            )
        );

        $entityManager->persist($user);
        $entityManager->flush();
        // do anything else you need here, like send an email

        return $this->json([
            'message' => 'User created',
        ], Response::HTTP_CREATED);
    }
}