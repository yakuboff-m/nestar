import { Module, forwardRef } from '@nestjs/common';
import FollowSchema from '../../schemas/Follow.model';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { ViewModule } from '../view/view.module';
import { LikeModule } from '../like/like.module';
import { FollowService } from './follow.service';
import { FollowResolver } from './follow.resolver';
import { MemberModule } from '../member/member.module';

@Module({
    imports: [
        MongooseModule.forFeature([{name: "Follow", schema: FollowSchema}]),
        AuthModule,
        MemberModule
    ],
    providers: [FollowService, FollowResolver],
    exports: [FollowService]
})
export class FollowModule {}
