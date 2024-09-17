import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContentDocument = Content & Document;

@Schema({ timestamps: true })
export class Content {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  imageUrl: string;

  @Prop({ default: [] })
  tags: string[];

  @Prop({ default: 0 })
  views: number;

  @Prop({ default: false })
  isPublished: boolean;

  @Prop()
  publishDate: Date;

  @Prop({ type: Object, default: {} })
  metadata: Record<string, any>;
}

export const ContentSchema = SchemaFactory.createForClass(Content);
