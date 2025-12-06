/**
 * - Debug URL in Dev tool source tab:    http://localhost:8000
 * - Coverage report file location:       coverage/Icov-report/
 */
import { jasmineTestRunnerConfig } from 'web-test-runner-jasmine';

export default {
  ...jasmineTestRunnerConfig(),
  concurrency: 10,
  nodeResolve: true,
  coverage: true,
  rootDir: 'src',
  files: '**/*.spec.js',
  // watch: true,
};