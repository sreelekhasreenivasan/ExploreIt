import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document; 

@Schema()
export class User {

  @Prop({ required: true, unique: true, lowercase:true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: 'user' })
  userType: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
