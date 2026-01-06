import { Field,  ObjectType } from '@nestjs/graphql';
import { ObjectId } from 'mongoose';
import { ViewGroup } from '../../enums/view.enum';
import { IsNotEmpty } from 'class-validator';

@ObjectType()
export class ViewInput {
    @IsNotEmpty()
	@Field(() => String)
	memberId: ObjectId;

    @IsNotEmpty()
	@Field(() => String)
	viewRefId: ObjectId;

    @IsNotEmpty()
	@Field(() => ViewGroup)
	viewGroup: ViewGroup; 
}
