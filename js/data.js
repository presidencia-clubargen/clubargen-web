/* =========================================================
   DATOS DE LA WEB — se actualiza acá (no tocar el diseño).
   Resultados: verificar SIEMPRE en la liga antes de cargar.
   ========================================================= */
window.CLUB = {
  whatsapp: "https://wa.me/56952236974",
  mail: "presidencia@clubargen.com",
  instagram: "https://www.instagram.com/clubargen/",
  tienda: "https://www.tdeportes.com/clubes-td/",
  liga: "https://ligachicureonorte.cl/",
  sumateEndpoint: "", // URL del Apps Script que guarda el formulario. Vacío = se manda por WhatsApp.
  aviso: { texto: "Fiesta de fin de año · Sábado 12/12 · Centro Parque", link: "index.html#fiesta" },

  /* Próxima fecha: fecha ISO con hora de Chile (-03:00). Si no hay datos, dejar fecha: "" */
  proxima: {
    fecha: "",
    numero: 9,
    partidos: {
      "Senior": { rival: "", hora: "", cancha: "" },
      "Súper Senior": { rival: "", hora: "", cancha: "" },
      "Dorada": { rival: "", hora: "", cancha: "" }
    }
  },

  /* Clausura 2026. local / visita: usar "Argentino" para nosotros. gl/gv vacíos = postergado */
  partidos: {
    "Senior": [
      {f:1, local:"Argentino", visita:"Protagonistas", gl:4, gv:1},
      {f:2, local:"Kanayas", visita:"Argentino", gl:3, gv:0},
      {f:3, local:"Tiburón", visita:"Argentino", gl:0, gv:1},
      {f:4, local:"La Viña", visita:"Argentino", post:true},
      {f:5, local:"Amandinos", visita:"Argentino", gl:0, gv:1},
      {f:6, local:"Viña San Pedro", visita:"Argentino", gl:3, gv:5},
      {f:7, local:"Pugas", visita:"Argentino", gl:2, gv:3},
      {f:8, local:"Argentino", visita:"Gusanos", gl:1, gv:3}
    ],
    "Súper Senior": [
      {f:1, local:"Diabólica", visita:"Argentino", gl:1, gv:1},
      {f:2, local:"Liverpool SS", visita:"Argentino", gl:2, gv:3},
      {f:3, local:"La Gloria SS", visita:"Argentino", gl:6, gv:2},
      {f:4, local:"Chilcano", visita:"Argentino", post:true},
      {f:5, local:"St. Withords", visita:"Argentino", gl:4, gv:4},
      {f:6, local:"Dako", visita:"Argentino", gl:1, gv:2},
      {f:7, local:"Argentino", visita:"Halcones", gl:3, gv:4},
      {f:8, local:"Argentino", visita:"Wallala", gl:0, gv:2}
    ],
    "Dorada": [
      {f:1, local:"Argentino", visita:"Chilcano", gl:2, gv:2},
      {f:2, local:"Argentino", visita:"Liverpool D", gl:1, gv:5},
      {f:3, local:"Wallala", visita:"Argentino", gl:0, gv:4},
      {f:4, local:"Quiltros", visita:"Argentino", post:true},
      {f:5, local:"La Gloria D", visita:"Argentino", gl:11, gv:0},
      {f:6, local:"Academia", visita:"Argentino", gl:2, gv:5},
      {f:7, local:"Argentino", visita:"Palestino", gl:1, gv:10},
      {f:8, local:"Chilcano", visita:"Argentino", gl:2, gv:0}
    ]
  },

  equipos: {
    "Senior": { modalidad: "Fútbol 11", capitanes: ["Ramiro Corbascio","Ariel Páez","Facundo Sosa"],
      plantel: ["Agustín Alberio","Ángel Guzmán","Ariel Páez Bergel","Carlos Otárola (Titi)","César Jorquera","Cristian Gálvez","David Andersen","Diego Moya","Ezequiel Penido","Facundo Sosa","Federico Jelen","Gonzalo Vargas","Javier Cornejo Gómez","Jehison Vargas","Joaquín Caro Norambuena","Jorge Páez Bergel","Juan Carrasco","Juan Fuente Alba","Juan Pablo Meza","Leandro Brito Ponce","Lucas Hervás","Mauricio Araya Abello","Mauro Contreras (Pancito)","Pablo Cortés","Patricio Fuentes","Ramiro Corbascio"] },
    "Súper Senior": { modalidad: "Fútbol 8", capitanes: ["Gonzalo de los Santos","Gustavo Sosa"],
      plantel: ["Agustín Lago","Carlos Montoya","Carlos Tapia Zapata","Demian Agostinelli","Diego Alliende","Eduardo Zaikoski","Fidel Di Tomaso","Francisco Ruiz-Esquide","Fuad Kattan","Gerson Morales","Gonzalo de los Santos","Gustavo Sosa","Ignacio Nattero","Jonatan Miranda","Juan Pablo Belderrain","Manuel Manquemilla","Mario Carriza","Maximiliano Zárate"] },
    "Dorada": { modalidad: "Fútbol 8", capitanes: ["Javier Sued","Diego Taborda","Víctor Paredes"],
      plantel: ["Ángel Guzmán","Camilo Rosales","Carlos Castillo","César Díaz","Cristian Véliz","Daniel Rodríguez","Diego Child","Diego Taborda","Edgardo Díaz Larenas","Fernando Rey","Gaspar Moreno","Gerardo Ottenheimer","Hernán Islas","Javier Montero","Javier Sued","Juan Pablo Díaz","Lautaro Salinas","Mario Fuentes","Sebastián Clementi","Sergio Pereira","Víctor Paredes"] }
  },

  /* Noticias: las que ya salieron en Instagram con ok de Fidel. La primera es la destacada. */
  noticias: [
    { k:"El Club", t:"Nuestro rincón, ahora en la cancha", p:"Los planteles estrenaron la bandera con Pizzería Popular, nuestro sponsor principal.", img:"img/bandera-grupo.jpg", link:"https://www.instagram.com/clubargen/" },
    { k:"Eventos", t:"Fiesta de fin de año: esta vez, en diciembre", img:"img/fiesta-anuncio.jpg", link:"https://www.instagram.com/clubargen/p/DfZp9HDFruE/" },
    { k:"Socios", t:"Nuestro rincón, otra vez", p:"Volvió el 30% en Pizzería Popular para los socios del Club.", img:"img/socio-cupon2.jpg", link:"https://www.instagram.com/clubargen/p/DfYG7FIFtCH/" },
    { k:"Comunidad", t:"10 años y el che siempre vigente", img:"img/che10.jpg", link:"https://www.instagram.com/clubargen/p/DffVcoqh_1_/" },
    { k:"Club", t:"Camiseta 2026, presentada en sociedad", img:"img/dsc07779.jpg", link:"https://www.instagram.com/clubargen/" }
  ]
};
