import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Follower, Following } from '../../libs/dto/follow/follow';
import { AuthService } from '../auth/auth.service';
import { ViewService } from '../view/view.service';
import { LikeService } from '../like/like.service';
import { MemberService } from '../member/member.service';

@Injectable()
export class FollowService {
    constructor(
		@InjectModel('Follow') private readonly followModel: Model<Follower | Following>,
		private authService: AuthService,
		private memberService: MemberService,
		private viewService: ViewService,
	) {}
}
