import { ContentItem, Elements, ElementDecorators } from '@kentico/kontent-delivery';

export class Beliefs extends ContentItem {
    @ElementDecorators.codename('content')
    public content: Elements.RichTextElement;
}