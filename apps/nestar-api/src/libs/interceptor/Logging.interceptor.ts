import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
	private readonly logger: Logger = new Logger();

	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		const recordTime = Date.now(),
			requestType = context.getType<GqlContextType>();
		

        if(requestType === 'http') {
            // develop if needed
            return next.handle().pipe();
        } else if(requestType === 'graphql') {
            /** (1) Print Request **/
            const gqlContext = GqlExecutionContext.create(context);
            // console.log('gqlContext =>', gqlContext.getContext().req.body);
            this.logger.log(`${this.stringify(gqlContext.getContext().req.body)}`, 'REQUEST');

            /** (2) GraphQL handling Errors **/

            /** (3) If no Errors -> giving Response below **/
            return next.handle().pipe(
                tap((context) => {
                    const responseTIme = Date.now() - recordTime;
                    this.logger.log(`${this.stringify(context)} - ${responseTIme}ms \n\n`, 'RESPONSE');
                }),
            );
        }
	}

    private stringify(context: ExecutionContext): string {
        // console.log(typeof context);
        return JSON.stringify(context).slice(0, 75);
    }
}
