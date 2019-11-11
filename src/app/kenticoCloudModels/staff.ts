import { ContentItem, Elements, ElementDecorators } from '@kentico/kontent-delivery';

export class Staff extends ContentItem {
    @ElementDecorators.codename('title')
    public title: Elements.TextElement;

    @ElementDecorators.codename('name')
    public name: Elements.TextElement;

    @ElementDecorators.codename('bio')
    public bio: Elements.RichTextElement;

    @ElementDecorators.codename('picture')
    public picture: Elements.AssetsElement;
}