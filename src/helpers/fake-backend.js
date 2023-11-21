export { fakeBackend };

const { users, syllabi, syllabus_topics } = require('./data');


async function fakeBackend() {

    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            const serverResponseTime = 1150;
            setTimeout(handleRoute, serverResponseTime);

            function handleRoute() {
                switch (true) {
                    case url.endsWith('/login') && opts.method === 'POST':
                        return authenticate();
                    case url.endsWith('/users') && opts.method === 'GET':
                        return getUsers();
                    case url.endsWith('/syllabi') && opts.method === 'GET':
                        return getSyllabi();
                    case url.endsWith('/topics') && opts.method === 'POST':
                        return getTopics(opts.body);
                    case url.endsWith('/submit') && opts.method === 'POST':
                        return createQuestion(opts.body);
                    default:
                        // pass through any requests not handled above
                        return realFetch(url, opts)
                            .then(response => resolve(response))
                            .catch(error => reject(error));
                }
            }

            // route functions

            function authenticate() {
                const { email, password } = body();
                const user = users.find(x => x.email === email && x.password === password);

                if (!user) return error('email or password is incorrect');

                return ok({
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    token: 'fake-jwt-token'
                });
            }

            function getUsers() {
                if (!isAuthenticated()) return unauthorized();
                return ok(users);
            }

            function getSyllabi() {
                return ok(syllabi);
            }

            function getTopics(body) {
                const {subjectId, syllabusUpdatedYear} = JSON.parse(body);

                const topics = syllabus_topics.filter(syllabus_topic => syllabus_topic.subjectId === subjectId && syllabus_topic.syllabusUpdatedYear === syllabusUpdatedYear)[0].topics;
                
                return ok(topics);
            }

            function createQuestion(body) {
                return ok(body);
            }

            // helper functions

            function ok(body) {
                resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) })
            }

            function unauthorized() {
                resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorized' })) })
            }

            function error(message) {
                resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) })
            }

            function isAuthenticated() {
                return opts.headers['Authorization'] === 'Bearer fake-jwt-token';
            }

            function body() {
                return opts.body && JSON.parse(opts.body);
            }
        });
    }
}
