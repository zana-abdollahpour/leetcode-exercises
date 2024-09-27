function partial(fn: (...args: unknown[]) => {}, ...fixedArgs: unknown[]) {
  return (...moreArgs: unknown[]) => {
    return fn(...fixedArgs, ...moreArgs);
  };
}
