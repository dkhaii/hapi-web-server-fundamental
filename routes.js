const routes = [
  //homepage
  {
    method: "GET",
    path: "/",
    /**
     * @param request: merupakan objek yang menampung detail dari permintaan client, seperti path dan query parameters, payload, headers, dan sebagainya.
     * @param h: (huruf inisial Hapi). Parameter ini merupakan response toolkit di mana ia adalah objek yang menampung banyak sekali method yang digunakan untuk menanggapi sebuah permintaan client.
     */
    handler: (request, h) => {
      return "Homepage";
    },
  },
  {
    method: "*",
    path: "/",
    /**
     * @param request: merupakan objek yang menampung detail dari permintaan client, seperti path dan query parameters, payload, headers, dan sebagainya.
     * @param h: (huruf inisial Hapi). Parameter ini merupakan response toolkit di mana ia adalah objek yang menampung banyak sekali method yang digunakan untuk menanggapi sebuah permintaan client.
     */
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method tersebut";
    },
  },

  //about page
  {
    method: "GET",
    path: "/about",
    /**
     * @param request: merupakan objek yang menampung detail dari permintaan client, seperti path dan query parameters, payload, headers, dan sebagainya.
     * @param h: (huruf inisial Hapi). Parameter ini merupakan response toolkit di mana ia adalah objek yang menampung banyak sekali method yang digunakan untuk menanggapi sebuah permintaan client.
     */
    handler: (request, h) => {
      return "About page";
    },
  },
  {
    method: "*",
    path: "/about",
    /**
     * @param request: merupakan objek yang menampung detail dari permintaan client, seperti path dan query parameters, payload, headers, dan sebagainya.
     * @param h: (huruf inisial Hapi). Parameter ini merupakan response toolkit di mana ia adalah objek yang menampung banyak sekali method yang digunakan untuk menanggapi sebuah permintaan client.
     */
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method tersebut";
    },
  },

  //routing dengan parameter dan query parameter
  {
    method: "GET",
    path: "/users/{username?}",
    /**
     * @param request: merupakan objek yang menampung detail dari permintaan client, seperti path dan query parameters, payload, headers, dan sebagainya.
     * @param h: (huruf inisial Hapi). Parameter ini merupakan response toolkit di mana ia adalah objek yang menampung banyak sekali method yang digunakan untuk menanggapi sebuah permintaan client.
     */
    handler: (request, h) => {
      const { username = "Guest" } = request.params;
      const { lang } = request.query;

      if (lang === "id") {
        return `Hai, ${username}`;
      }

      return `Hello, ${username}`;
    },
  },

  //routing dengan body/payload request
  {
    method: "POST",
    path: "/login",
    /**
     * @param request: merupakan objek yang menampung detail dari permintaan client, seperti path dan query parameters, payload, headers, dan sebagainya.
     * @param h: (huruf inisial Hapi). Parameter ini merupakan response toolkit di mana ia adalah objek yang menampung banyak sekali method yang digunakan untuk menanggapi sebuah permintaan client.
     */
    handler: (request, h) => {
      const { username, password } = request.payload;
      return `Welcome ${username}`;
    },
  },

  //detailed notation
  {
    method: "POST",
    path: "/contact",
    handler: (request, h) => {
      return h.response("created").code(201);
    },
  },

  //selain dari itu
  {
    method: "*",
    path: "/{any*}",
    /**
     * @param request: merupakan objek yang menampung detail dari permintaan client, seperti path dan query parameters, payload, headers, dan sebagainya.
     * @param h: (huruf inisial Hapi). Parameter ini merupakan response toolkit di mana ia adalah objek yang menampung banyak sekali method yang digunakan untuk menanggapi sebuah permintaan client.
     */
    handler: (request, h) => {
      return "Halaman tidak ditemukan";
    },
  },
];

module.exports = routes;
