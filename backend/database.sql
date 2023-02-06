DROP TABLE IF EXISTS `event_card`;

CREATE TABLE `event_card` (
  `id` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `origin` varchar(255) NOT NULL,
  `image_source` varchar(255) NOT NULL,
  `button_text` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `go_to` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `event_card` WRITE;

INSERT INTO `event_card` VALUES 
('ec001','game over','1-2','PC-Burn.png','Retour page d’accueil','Ça la chatouille et dans son geste elle vous broie. Vous êtes supprimé. L’appli est crashée. GAME OVER','Home'),
('ec002','turn back','3-3','event-02.png','Retour au code source','Votre pied s’enfonce encore plus dans la mélasse et vous vous étalez de tout votre long ! Retour case départ','sc002'),
('ec003','turn back','4-1','event-03.png','Retour au code source','Ça n’a aucun effet sur elle, elle vous bloque le passage et vous êtes obligé de rebrousser chemin.','sc002'),
('ec004','game over','5-1','PC-Burn.png','Retour page d’accueil','Ils url de colère et vous ra-get toutes vos possessions. Dépouillé.e, vous ne pouvez plus rien faire et votre mission s’arrête ici. L’appli est crashée. GAME OVER','Home'),
('ec005','transition','5-2','event-05.jpg','Suite','Judicieuse décision, leur traffic est stable et vous ne voulez pas les déranger.','sc007'),
('ec006','transition','3-1','event-06.png','Suite','Le charabia y est sensible ! Fini le combat, vous vous étreignez et allez à la ligne suivante','sc006'),
('ec007','turn back','6-2','event-07.jpeg','Retour au code source','Quelle erreur ! Vous venez de séparer 2 amoureux secrets ! Tout le code s’écroule et il va falloir tout refaire… Retour case départ.','sc002'),
('ec008','game over','7-2','PC-Burn.png','Retour page d’accueil','Quelle grossièreté ! Votre mauvaise humeur ne vous amènera nulle part. Vous êtes exclu.e de la mission. GAME OVER','Home'),
('ec009','transition','4-2','event-09.png','Suite','Bravo ! La variable est domptée et prête à être votre alliée. Poursuivez votre aventure.','ec014'),
('ec010','transition','6-1','event-10.png','Suite','Vous avez tout compris ! Vous avez eu l’oeil en voyant gravé en bas du tableau « XML » : car oui ! X aime L, Xavier est amoureux de Lisa et il s’avère qu’elle aussi mais ces 2 nigauds ne se parlent pas. Rien qu’un gros câlin ne puisse régler.','sc008'),
('ec011','turn back','8-2','event-11.png','Retour au code source','Hook vous arrête et vous crash à la figure. Tout le code s’écroule et vous êtes obligé de repartir du début','sc002'),
('ec012','transition','8-1','event-12.png','Suite','Bravo ! Hook se calme et se met à l’écoute de son état intérieur. Stabilisé, il vous guide vers la suite.','ec014'),
('ec013','transition','10-1','event-13.png','Suite','Bravo ! Vous avez stabilisé le code ! Il ne vous reste plus qu’à le déployer à la place de l’autre, toujours bloqué par la dévastatrice code-erreur.','sc011'),
('ec014','transition','10-2','event-14.png','Suite','Bien joué, vous avez trouvé comment régler ces problèmes là, mais avez-vous bien fait le tour de TOUS les problèmes ?','sc002'),
(
      "ec015",
      "game over",
      "10-3",
      "PC-Burn.png",
      "Retour page d’accueil",
      "Malheureux.se ! Vous venez d'écraser tous vos collègues de la git push force qui se battent vaillamment contre l’abominable code-erreur ! GAME OVER",
      "Home"
    );

UNLOCK TABLES;

DROP TABLE IF EXISTS `scenario_card`;

CREATE TABLE `scenario_card` (
  `id` varchar(100) NOT NULL,
  `image_source` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `choices` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `scenario_card` WRITE;

INSERT INTO `scenario_card` VALUES 
('sc001','scene_LaboFigma.png','Initialisation','Grâce au réducteur-reducer, vous êtes numérisé et injecté dans le code vérolé à sauver. Vous atterrissez sur la landing page mais une immense code-erreur terrifiante se dresse devant vous et vous menace. No need to panick ! Juste to react…','%5B%7B%22id%22%3A%22ch001%22%2C%22type%22%3A%22scenarioCard%22%2C%22text%22%3A%22Vous%20clonez%20le%20code%22%2C%22goTo%22%3A%22sc002%22%7D%2C%7B%22id%22%3A%22ch002%22%2C%22type%22%3A%22eventCard%22%2C%22text%22%3A%22Vous%20lui%20envoyez%20ctrl%2Balt%2Bsuppr%20dans%20son%20immense%20gueule%20dent%C3%A9e%22%2C%22goTo%22%3A%22ec001%22%7D%5D'),
('sc002','carte-02.jpg','Code Source','Vous venez de dupliquer le code sur votre machine. Beau réflexe. Vous pouvez maintenant arpenter tranquillement le code-source','%5B%7B%22id%22%3A%22ch003%22%2C%22type%22%3A%22scenarioCard%22%2C%22text%22%3A%22Vous%20allez%20dans%20app.jsx%22%2C%22goTo%22%3A%22sc003%22%7D%2C%7B%22id%22%3A%22ch004%22%2C%22type%22%3A%22scenarioCard%22%2C%22text%22%3A%22Vous%20allez%20dans%20style.css%22%2C%22goTo%22%3A%22sc004%22%7D%2C%7B%22id%22%3A%22ch005%22%2C%22type%22%3A%22scenarioCard%22%2C%22text%22%3A%22Vous%20vous%20empressez%20d%E2%80%99aller%20voir%20express%22%2C%22goTo%22%3A%22sc005%22%7D%5D'),
('sc003','carte-03.jpeg','Jurassic Park','Vous atterrissez devant un T-Regex pas possible qui vous emprisonne telle une mélasse javascriptée. Faites vite !','%5B%7B%22id%22%3A%22ch006%22%2C%22type%22%3A%22eventCard%22%2C%22text%22%3A%22Vous%20lui%20faites%20une%20accolade%20et%20lui%20transmettez%20plein%20d%E2%80%99amour%22%2C%22goTo%22%3A%22ec006%22%7D%2C%7B%22id%22%3A%22ch007%22%2C%22type%22%3A%22popUp%22%2C%22text%22%3A%22Vous%20lui%20offrez%20un%20string%22%2C%22popUpText%22%3A%22M%C3%AAme%20si%20le%20charabia%20est%20touch%C3%A9%20par%20l%E2%80%99attention%2C%20cela%20ne%20suffit%20pas%2C%20il%20faut%20essayer%20autre%20chose.%22%7D%2C%7B%22id%22%3A%22ch008%22%2C%22type%22%3A%22eventCard%22%2C%22text%22%3A%22Vous%20lui%20bottez%20l%E2%80%99array%22%2C%22goTo%22%3A%22ec002%22%7D%5D'),
('sc004','carte-04.png','The Thing','Une monstrueuse variable borderline sans style de niveau 3 vous saute dessus.','%5B%7B%22id%22%3A%22ch009%22%2C%22type%22%3A%22eventCard%22%2C%22text%22%3A%22Vous%20lui%20mettez%202%20points%20dans%20la%20tronche%22%2C%22goTo%22%3A%22ec003%22%7D%2C%7B%22id%22%3A%22ch010%22%2C%22type%22%3A%22eventCard%22%2C%22text%22%3A%22Vous%20tirez%20tirez%22%2C%22goTo%22%3A%22ec009%22%7D%5D'),
('sc005','carte-05.png','Go fast','Vous avez pris la voie express ! Ici des dealeurs gèrent un important traffic de code.','%5B%7B%22id%22%3A%22ch011%22%2C%22type%22%3A%22eventCard%22%2C%22text%22%3A%22Vous%20leur%20collez%20votre%20plus%20beau%20end-poingt%20dans%20les%20API%22%2C%22goTo%22%3A%22ec004%22%7D%2C%7B%22id%22%3A%22ch012%22%2C%22type%22%3A%22eventCard%22%2C%22text%22%3A%22Vous%20changez%20de%20route%22%2C%22goTo%22%3A%22ec005%22%7D%5D'),
('sc006','carte-06.png','09/11/1989','Devant vous il y a un tableau dont les 2 personnages animés se boudent violemment l’un l’autre. Vous discutez avec eux et apprenez qu’ils s’appellent Xavier et Lisa. Quelque chose jette un froid entre eux…','%5B%7B%22id%22%3A%22ch013%22%2C%22type%22%3A%22eventCard%22%2C%22text%22%3A%22Vous%20leur%20demandez%20de%20se%20faire%20un%20c%C3%A2lin%22%2C%22goTo%22%3A%22ec010%22%7D%2C%7B%22id%22%3A%22ch014%22%2C%22type%22%3A%22eventCard%22%2C%22text%22%3A%22Vous%20divisez%20le%20tableau%20en%202%22%2C%22goTo%22%3A%22ec007%22%7D%5D'),
('sc007','carte-07.jpeg','Timbré','Vous tombez sur un facteur en panne de véhicule qui vous demande de l’aide.','%5B%7B%22id%22%3A%22ch015%22%2C%22type%22%3A%22eventCard%22%2C%22text%22%3A%22Vous%20acceptez%20le%20POST%20%C3%A0%20sa%20place%22%2C%22goTo%22%3A%22ec014%22%7D%2C%7B%22id%22%3A%22ch016%22%2C%22type%22%3A%22eventCard%22%2C%22text%22%3A%22Vous%20lui%20r%C3%A9pondez%20un%20truc%20du%20genre%20%C2%AB%C2%A0Vous%20fetchiez%20j%E2%80%99ai%20des%20choses%20plus%20graves%20%C3%A0%20r%C3%A9gler%C2%A0%C2%BB%22%2C%22goTo%22%3A%22ec008%22%7D%5D'),
('sc008','carte-08.png','Peter Pan','Vous tombez sur un capitaine hook en pleine forme ! Rempli de joie, il vous crie à la figure qu’il veut partir visiter les states et faire le tour du pays ! Puis d’un seul coup il déprime, usé jusqu’à la moelle. Eh non ! À nouveau euphorique ! Puis re déprimé… Il faut que ces sautes d’humeur permanentes cessent !','%5B%7B%22id%22%3A%22ch017%22%2C%22type%22%3A%22eventCard%22%2C%22text%22%3A%22Vous%20l%E2%80%99initiez%20au%20yoga%22%2C%22goTo%22%3A%22ec012%22%7D%2C%7B%22id%22%3A%22ch018%22%2C%22type%22%3A%22eventCard%22%2C%22text%22%3A%22Vous%20lui%20mettez%20une%20grande%20tarte%20dans%20sa%20gueule%20et%20lui%20demandez%20un%20peu%20de%20SILENCE%20!%22%2C%22goTo%22%3A%22ec011%22%7D%5D'),
('sc011','carte-11.png','Get Git or Die','Pour déployer votre code :','%5B%7B%22id%22%3A%22ch019%22%2C%22type%22%3A%22popUp%22%2C%22text%22%3A%22Push%22%2C%22popUpText%22%3A%22Tu%20ne%20respectes%20pas%20le%20workflow%20de%20la%20Git%20Push%20Force%22%2C%22goTo%22%3A%22ec015%22%7D%2C%7B%22id%22%3A%22ch020%22%2C%22type%22%3A%22popUp%22%2C%22text%22%3A%22Pull%22%2C%22popUpText%22%3A%22Excellent%20!%20Vous%20avez%20r%C3%A9cup%C3%A9r%C3%A9%20le%20travail%20accompli%20en%20parall%C3%A8le%20de%20votre%20mission%20par%20vos%20vaillant.e.s%20coll%C3%A8gues%20de%20la%20git%20push%20force%20!%20Vous%20%C3%AAtes%20d%C3%A9sormais%20serein%20pour%20la%20suite%20de%20vos%20actions.%22%7D%2C%7B%22id%22%3A%22ch021%22%2C%22type%22%3A%22popUp%22%2C%22text%22%3A%22Fetch%22%2C%22popUpText%22%3A%22Bien%20vu%20!%20Il%20faut%20savoir%20o%C3%B9%20en%20sont%20les%20avanc%C3%A9es%20de%20vos%20coll%C3%A8gues%20de%20la%20Git%20Push%20Force%20dans%20les%20combats%20sur%20le%20terrain%20principal%20!%22%7D%2C%7B%22id%22%3A%22ch022%22%2C%22type%22%3A%22popUp%22%2C%22text%22%3A%22Merge%22%2C%22popUpText%22%3A%22Excellent%20!%20Vous%20avez%20pris%20en%20compte%20les%20progr%C3%A8s%20de%20vos%20vaillant.e.s%20coll%C3%A8gues%20et%20les%20avez%20int%C3%A9gr%C3%A9s%20%C3%A0%20votre%20travail%20%C3%A0%20vous.%22%7D%5D');

UNLOCK TABLES;