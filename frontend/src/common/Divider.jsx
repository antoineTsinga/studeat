import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";

const Divider = () => {
  const style = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem button>
              <ListItemText primary="Informations Personnelles" />
            </ListItem>
            <Divider />
            <ListItem button divider>
              <ListItemText primary="Historique des commandes" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Favoris" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="Messagerie" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="Faire un don" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="Regarder une vidéo publicitaire" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="Autres produits studeat" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="Déconnexion" />
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemText primary="Supprimer le compte" />
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
};

export default Divider;
