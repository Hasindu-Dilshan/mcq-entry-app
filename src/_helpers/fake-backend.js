export { fakeBackend };

function fakeBackend() {
    // let users = [{ id: 1, email: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];

    let users = {
        users: [
            {_id: 1, name: 'David Jones', email: 'davidjones13@gmail.com', password: 'david123', role: 'admin'},
            {_id: 2, name: 'Jach Priboi', email: 'pribio10@gmail.com', password: '123', role: 'user'},
            {_id: 3, name: 'Rebecca Anya', email: 'anya10@gmail.com', password: '123', role: 'user'},
        ]
    };

    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(handleRoute, 500);

            function handleRoute() {
                switch (true) {
                    case url.endsWith('/login') && opts.method === 'POST':
                        return authenticate();
                    case url.endsWith('/users') && opts.method === 'GET':
                        return getUsers();
                    default:
                        // pass through any requests not handled above
                        return realFetch(url, opts)
                            .then(response => resolve(response))
                            .catch(error => reject(error));
                }
            }

            // route functions

            function authenticate() {
                const { username, password } = body();
                const user = users['users'].find(x => x.username === username && x.password === password);

                if (!user) return error('Username or password is incorrect');

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
