/**
 * Run workspace tests for a specific package or all packages.
 * Usage:
 *   pnpm run test [core|react]
 *   pnpm run test:coverage [core|react]
 */
import { spawn } from 'node:child_process';
import { cwd as getCwd } from 'node:process';

const args = process.argv.slice(2);
const isCoverage = args.includes('--coverage');
const target = args.find((arg) => !arg.startsWith('--'));
const targetMap = {
  core: 'packages/core',
  react: 'packages/react'
};

/**
 * Run a command and return the exit code.
 * @param {string} command
 * @param {string[]} args
 * @param {string} workingDir
 * @returns {Promise<number>}
 */
const runCommand = (command, args, workingDir) => new Promise((resolve, reject) => {
  const child = spawn(command, args, {
    cwd: workingDir,
    stdio: 'inherit',
    shell: true
  });

  child.on('error', reject);
  child.on('close', (code) => resolve(code ?? 1));
});

const run = async () => {
  const targetPaths = target ? [targetMap[target]] : Object.values(targetMap);

  if (target && !targetMap[target]) {
    process.stderr.write('Usage: pnpm run test [core|react]\n');
    process.exit(1);
  }

  for (const targetPath of targetPaths) {
    if (!targetPath) {
      continue;
    }
    const commandArgs = isCoverage
      ? ['-C', targetPath, 'test:coverage', '--', '--run']
      : ['-C', targetPath, 'test', '--', '--run'];
    const code = await runCommand('pnpm', commandArgs, getCwd());
    if (code !== 0) {
      process.exit(code);
    }
  }

  process.exit(0);
};

run();
