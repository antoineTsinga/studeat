<?php

namespace App\EventSubscriber\Commun;


use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Http\Event\LogoutEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;


class ApiLogoutSubscriber implements EventSubscriberInterface
{
    public function onLogoutEvent(LogoutEvent $event)
    {
        $event->getRequest();

        if (in_array('application/json', $event->getRequest()->getAcceptableContentTypes())) {
            $response = new JsonResponse(null, Response::HTTP_NO_CONTENT);
            // $response->headers->clearCookie('my_old_cookie');
            $event->setResponse($response);
        }
    }

    public static function getSubscribedEvents()
    {
        return [
            LogoutEvent::class => 'onLogoutEvent',
        ];
    }
}
