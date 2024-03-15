export { fakeBackend };

const { users, syllabi, syllabus_topics } = require("./data");

async function fakeBackend() {
  let realFetch = window.fetch;
  window.fetch = function (url, opts) {
    return new Promise((resolve, reject) => {
      const serverResponseTime = 1150;
      setTimeout(handleRoute, serverResponseTime);

      function handleRoute() {
        switch (true) {
          case url.endsWith("/login") && opts.method === "POST":
            return authenticate();
          case url.endsWith("/users") && opts.method === "GET":
            return getUsers();
          case url.endsWith("/subjectyears") && opts.method === "GET":
            return getSyllabi();
          case /\/topics(\?.*)?$/.test(url) && opts.method === "GET":
            return getTopics(url);
          case url.endsWith("/submit") && opts.method === "POST":
            return createQuestion(opts.body);
          case url.endsWith("/profile") && opts.method === "GET":
            return getUserProfile(opts.body);
          default:
            // pass through any requests not handled above
            return realFetch(url, opts)
              .then((response) => resolve(response))
              .catch((error) => reject(error));
        }
      }

      // route functions

      function authenticate() {
        const { email, password } = body();
        const user = users.find(
          (x) => x.email === email && x.password === password
        );

        if (!user) return error("email or password is incorrect");

        return ok({
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          token: user.token,
          avatar: user.avatar,
        });
      }

      // This service should return only relavant fields of users
      function getUsers() {
        if (!isAuthenticated()) return unauthorized();
        return ok(users);
      }

      function getSyllabi() {
        // simulate error
        // return error("Syllabus not found!");

        return ok(syllabi);
      }

      function getTopics(url) {
        let params = new URLSearchParams(url.split("?")[1]);
        const subjectId = params.get("subjectId");
        const syllabusUpdatedYear = Number(params.get("syllabusUpdatedYear"));

        const topics = syllabus_topics.filter(
          (syllabus_topic) =>
            syllabus_topic.subjectId === subjectId &&
            syllabus_topic.syllabusUpdatedYear === syllabusUpdatedYear
        )[0];

        // simulate error
        // return error("Topics not found!");

        return ok(topics);
      }

      function createQuestion(body) {
        // simulate error
        // return error("Api not found!");

        return ok(body);
      }

      function getUserProfile() {
        const { token } = body();

        const user = users.find((x) => x.token === token);
        delete user.password;
        return ok(user);

        // simulate error
        // return error("User not found!");
      }

      // helper functions

      function ok(body) {
        resolve({
          ok: true,
          text: () => Promise.resolve(JSON.stringify(body)),
        });
      }

      function unauthorized() {
        resolve({
          status: 401,
          text: () =>
            Promise.resolve(JSON.stringify({ message: "Unauthorized" })),
        });
      }

      function error(message) {
        resolve({
          status: 400,
          text: () => Promise.resolve(JSON.stringify({ message })),
        });
      }

      function isAuthenticated() {
        return opts.headers["Authorization"] === "Bearer fake-jwt-token";
      }

      function body() {
        return opts.body && JSON.parse(opts.body);
      }
    });
  };
}
