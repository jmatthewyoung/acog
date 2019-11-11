import { ContentItem, Elements, ElementDecorators } from '@kentico/kontent-delivery';

export class Pictures extends ContentItem {
    @ElementDecorators.codename('slideshow')
    public title: Elements.AssetsElement;
}