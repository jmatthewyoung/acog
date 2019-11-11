import { ContentItem, Elements, ElementDecorators } from '@kentico/kontent-delivery';

export class HomePage extends ContentItem {
    @ElementDecorators.codename('welcome_header')
    public welcome_header: Elements.TextElement;

    @ElementDecorators.codename('welcome_content')
    public welcome_content: Elements.RichTextElement;

    @ElementDecorators.codename('service_schedule')
    public service_schedule: Elements.RichTextElement;
}