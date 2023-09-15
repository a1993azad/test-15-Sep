const proxy = new Proxy(
  {},
  {
    get: (target, prop) => {
      return 404;
    },
  }
);
