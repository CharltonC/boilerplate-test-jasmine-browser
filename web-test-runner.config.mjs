/**
 * - Debug URL in Dev tool source tab:    http://localhost:8000
 * - Coverage report file location:       coverage/Icov-report/
 */
import { jasmineTestRunnerConfig } from 'web-test-runner-jasmine';
import { playwrightLauncher } from '@web/test-runner-playwright';

export default {
  // 1. Inject Jasmine setup
  ...jasmineTestRunnerConfig(),

  // 2. Define test files
  rootDir: 'src',
  files: '**/*.spec.js',

  // 3. Configure Coverage
  coverage: true,
  coverageConfig: {
    report: true,
    reportDir: 'coverage-report',
    reporters: ['text-summary', 'html'],
    threshold: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },

  // 4. Browser environment
  nodeResolve: true,
  browsers: [playwrightLauncher({ product: 'chromium' })],
};
