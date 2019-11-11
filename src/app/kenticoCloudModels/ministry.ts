import { ContentItem, Elements, ElementDecorators } from '@kentico/kontent-delivery';

export class Ministry extends ContentItem {
    @ElementDecorators.codename('name')
    public name: Elements.TextElement;

    @ElementDecorators.codename('information')
    public information: Elements.TextElement;
}