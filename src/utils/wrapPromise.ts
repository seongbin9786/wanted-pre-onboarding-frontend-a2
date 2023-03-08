enum PromiseStatus {
  PENDING = 'pending',
  SUCCESS = 'success',
  ERROR = 'error',
}

// Suspense integrations like Relay implement
// a contract like this to integrate with React.
// Real implementations can be significantly more complex.
// Don't copy-paste this into your project!
export function wrapPromise<T>(promise: Promise<T>) {
  let status = PromiseStatus.PENDING;
  let result: T;
  let error: Error;
  const suspender = promise.then(
    (r) => {
      status = PromiseStatus.SUCCESS;
      result = r;
    },
    (e) => {
      status = PromiseStatus.ERROR;
      error = e;
    }
  );

  // 그냥 반환하려고 하면, promise가 생성된 직후로만 인식이 됨.
  // 호출 시점이 있어야 됨. 물론 그 땐 promise가 생성된 시점이겠지만.
  return {
    read() {
      if (status === PromiseStatus.PENDING) {
        throw suspender;
      }
      if (status === PromiseStatus.ERROR) {
        throw error;
      }
      if (!result) {
        throw new Error('undefined behavior');
      }
      return result;
    },
  };
}
