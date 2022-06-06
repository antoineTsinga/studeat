<?php

namespace App\Repository\Aspic;

use App\Entity\Aspic\ProfilEtudiant;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ProfilEtudiant>
 *
 * @method ProfilEtudiant|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProfilEtudiant|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProfilEtudiant[]    findAll()
 * @method ProfilEtudiant[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProfilEtudiantRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ProfilEtudiant::class);
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function add(ProfilEtudiant $entity, bool $flush = true): void
    {
        $this->_em->persist($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function remove(ProfilEtudiant $entity, bool $flush = true): void
    {
        $this->_em->remove($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    // /**
    //  * @return ProfilEtudiant[] Returns an array of ProfilEtudiant objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ProfilEtudiant
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
