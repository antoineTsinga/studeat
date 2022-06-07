<?php
namespace App\Controller\Lilas;

use App\Entity\Commun\User;
use App\Entity\Aspic\Livreur;

use Doctrine\ORM\EntityManagerInterface;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\SerializerInterface;

class LivreurProfileController extends AbstractController {
    #[Route('/api/livreurCreateProfile',name: 'api_livreur_create_profile')]
    public function registerAsLivreur(Request $request, EntityManagerInterface $entityManager, SerializerInterface $serializer,
        UserPasswordHasherInterface $userPasswordHasher): Response
    {
        $content = $request->getContent();
        $content = json_decode($content,true);
        
        $valueMissing = array();

        if (!array_key_exists("email",$content)) $valueMissing[] = "email";
        if (!array_key_exists("password",$content)) $valueMissing[] = "password";
        if (!array_key_exists("name",$content)) $valueMissing[] = "name";
        if (!array_key_exists("surname",$content)) $valueMissing[] = "surname";
        if (!array_key_exists("email",$content)) $valueMissing[] = "email";
        if (!array_key_exists("tel",$content)) $valueMissing[] = "tel";

        if (count($valueMissing) != 0) {
            return $this->json([
                "message" => "Some value(s) missing to create an livreur account",
                'missing_values' => $valueMissing
            ],Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $email = $content["email"];

        if (!$entityManager->getRepository(User::class)->findOneBy(['email' => $email])) {
            $livreur = new Livreur();
            $user = new User();

            $livreur->setName($content["name"])
                ->setSurname($content["surname"])
                ->setEmail($email)
                ->setTel($content["tel"]);

            $user->setPassword($content["password"]);

            $user->setEmail($email)
                ->setName($content["name"])
                ->setSurname($content["surname"])
                ->setPassword(
                    $userPasswordHasher->hashPassword(
                        $user,
                        $user->getPassword()
                    ));

            $user->addRole("Livreur");
            $livreur->setUser($user);
            $user->setLivreur($livreur);

            $entityManager->getRepository(Livreur::class)->add($livreur);
            $entityManager->getRepository(User::class)->add($user);

        
            return $this->json([
                'message' => 'Livreur created'
            ], Response::HTTP_CREATED);
        }
        return $this->json([
            'message' => 'Email already used'
        ], Response::HTTP_CONFLICT);
        
    }
    #[Route('/api/livreurEditProfile',name: 'api_livreur_edit_profile')]
    public function editLivreurProfile(Request $request, EntityManagerInterface $entityManager, SerializerInterface $serializer,
    UserPasswordHasherInterface $userPasswordHasher): Response
    {
        $content = $request->getContent();
        $content = json_decode($content,true);
        
        $valueMissing = array();

        if (!array_key_exists("email",$content)) $valueMissing[] = "email";
        if (!array_key_exists("password",$content)) $valueMissing[] = "password";
        if (!array_key_exists("name",$content)) $valueMissing[] = "name";
        if (!array_key_exists("surname",$content)) $valueMissing[] = "surname";
        if (!array_key_exists("email",$content)) $valueMissing[] = "email";
        if (!array_key_exists("tel",$content)) $valueMissing[] = "tel";

        if (count($valueMissing) != 0) {
            return $this->json([
                "message" => "Some value(s) missing to edit an livreur account",
                'missing_values' => $valueMissing
            ],Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        if (!$entityManager->getRepository(User::class)->findOneByEmail($content["email"])) {
            return $this->json([
                "message" => "Account to edit not found",
                'missing_values' => $valueMissing
            ],Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $user = $entityManager->getRepository(User::class)->findOneByEmail($content["email"]);
        $livreur = $user->getLivreur();
        if ($livreur == null) {
            $livreur = new Livreur();
        }
        $livreur->setName($content["name"])
            ->setSurname($content["surname"])
            ->setEmail($content["email"])
            ->setTel($content["tel"]);

        $user->setPassword($content["password"]);

        $user->setEmail($content["email"])
            ->setName($content["name"])
            ->setSurname($content["surname"])
            ->setPassword(
                $userPasswordHasher->hashPassword(
                    $user,
                    $user->getPassword()
                ));

        $user->addRole("Livreur");
        $livreur->setUser($user);
        $user->setLivreur($livreur);

        $entityManager->getRepository(Livreur::class)->add($livreur);
        $entityManager->getRepository(User::class)->add($user);

    
        return $this->json([
            'message' => 'Livreur edited'
        ], Response::HTTP_OK);
    }
}
?>
