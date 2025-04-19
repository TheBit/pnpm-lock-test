import { helloFromDep } from '@thebit/test-dep';

export function helloFromLib() {
  return `Hello from test-lib v1.0.0 and ${helloFromDep()}`;
}
