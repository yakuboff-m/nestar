import { Catch, Logger } from '@nestjs/common';
import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql';

@Catch()
export class GqlGlobalExceptionFilter implements GqlExceptionFilter {
  private readonly logger = new Logger('GraphQL');

  catch(exception: any, host: any) {
    const gqlHost = GqlArgumentsHost.create(host);
    const info = gqlHost.getInfo();

    this.logger.error(
      `Resolver: ${info.parentType.name}.${info.fieldName}`,
      exception?.stack || exception,
    );

    return exception;
  }
}
