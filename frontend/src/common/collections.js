import { useCallback } from "react";

import useCollection from "./useCollection";

export function useAliments() {
  const handlers = useCollection(
    "aliments",
    (m1, m2) => m1.estimatedPrice - m2.estimatedPrice
  );
  return handlers;
}

export function useLivrer() {
  const handlers = useCollection("orders", (o1, o2) =>
    o1.appointment.localeCompare(o2.appointment)
  );
  return handlers;
}

export function usePanierAlim() {
  const handlers = useCollection("fashion_collections", (o1, o2) => {
    return o1.creationAt.localeCompare(o2.creationAt);
  });
  return handlers;
}

export function useFaq() {
  const handlers = useCollection("faqs", (o1, o2) =>
    o1.creationAt.localeCompare(o2.creationAt)
  );
  return handlers;
}

export function useClients() {
  const handlers = useCollection("users", (o1, o2) =>
    o1.creation_date.localeCompare(o2.creation_date)
  );
  return handlers;
}

export function useProfilEtudiants() {
  const handlers = useCollection("profil_etudiants", (o1, o2) => 1);

  return handlers;
}

export function useProfilAdmins() {
  const handlers = useCollection("profil_admins", (o1, o2) => 1);

  return handlers;
}

export function useRestaurants() {
  const handlers = useCollection("restaurants", (o1, o2) =>
    o1.creationAt.localeCompare(o2.creationAt)
  );
  return handlers;
}
