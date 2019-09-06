import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

interface HelloWorldOptions {
  name: string;
}

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function helloWorld(_options: HelloWorldOptions): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const logger = _context.logger;

    logger.debug('This is a debug message');
    logger.info('This is a debug message');
    logger.warn('This is a debug message');
    logger.error('This is a debug message');

    return tree.create('index.html', `Hi, ${_options.name}`);
  };
}
