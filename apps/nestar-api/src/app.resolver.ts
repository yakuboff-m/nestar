import {Query, Resolver} from '@nestjs/graphql';

@Resolver()
export class AppResolver {
    @Query(() => String)
    public healthCheck(): string {
        return 'GraphQL API Server';
    }
}