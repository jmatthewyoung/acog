import { ContentItem, Elements, ElementDecorators } from '@kentico/kontent-delivery';

export class ChurchHistory extends ContentItem {
    @ElementDecorators.codename('content')
    public content: Elements.RichTextElement;
}