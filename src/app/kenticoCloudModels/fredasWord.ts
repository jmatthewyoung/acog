import { ContentItem, Elements, ElementDecorators } from '@kentico/kontent-delivery';

export class FredasWord extends ContentItem {
    @ElementDecorators.codename('title')
    public title: Elements.TextElement;

    @ElementDecorators.codename('content')
    public content: Elements.RichTextElement;
}