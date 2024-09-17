import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  passwordHash: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ default: false })
  isVerified: boolean;

  @Prop({ default: [] })
  subscribedCategories: string[];

  @Prop({ type: Object, default: {} })
  preferences: {
    emailNotifications: boolean;
    theme: 'light' | 'dark';
    language: string;
  };

  @Prop({ default: 'user' })
  role: 'user' | 'admin';

  @Prop()
  lastLogin: Date;

  @Prop({ type: Object, default: {} })
  metadata: Record<string, any>;
}

export const UserSchema = SchemaFactory.createForClass(User);

// Index for email (for faster lookups)
UserSchema.index({ email: 1 });
