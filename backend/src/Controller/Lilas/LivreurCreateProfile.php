<?php
namespace App\Controller\Lilas;

use App\Entity\Commun\User;
use App\Entity\Aspic\Livreur;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\SerializerInterface;

class LivreurCreateProfile extends AbstractController {
    #[Route('/api/livreurCreateProfile',name: 'api_livreur_create_profile')]
    public function registerAsLivreur(Request $request, EntityManagerInterface $entityManager, SerializerInterface $serializer): Response
    {
        $content = $request->getContent();
        $content = json_decode($content);

        $user_id = $content->user_id;
        $tel = $content->tel;
        $user = $entityManager->getRepository(User::class)->findOneById($user_id);

        if (!$entityManager->getRepository(Livreur::class)->findOneByUser($user)) {
            $livreur = new Livreur();
            $livreur->setName($user->getName());
            $livreur->setSurname($user->getSurname());
            $livreur->setEmail($user->getEmail());
            $livreur->setUser($user);
            $livreur->setTel($tel);

            $user->addRole("Livreur");

            $entityManager->getRepository(Livreur::class)->add($livreur);
            $entityManager->getRepository(User::class)->add($user);

        
            return $this->json([
                'message' => 'Livreur created',
                'livreur' => $livreur->getName()
            ], Response::HTTP_CREATED);
        }
        return $this->json([
            'message' => 'Livreur account for this user already exists',
        ], Response::HTTP_CONFLICT);     
    }
}
?>
