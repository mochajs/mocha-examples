class Server {
  #count = 0;

  #timer = setInterval(() => {
    this.#tick();
  }, 100);

  constructor() {
    this.#tick();
  }

  #tick() {
    globalThis.fixtureCount = this.#count += 1;
  }

  teardown() {
    clearInterval(this.#timer);
  }
}

let server;

exports.mochaGlobalSetup = () => {
  server = new Server();
};

exports.mochaGlobalTeardown = () => {
  server.teardown();
  server = undefined;
};
