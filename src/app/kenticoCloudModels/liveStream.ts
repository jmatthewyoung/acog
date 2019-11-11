import { ContentItem, Elements, ElementDecorators } from '@kentico/kontent-delivery';

export class LiveStream extends ContentItem {
    @ElementDecorators.codename('basic_info_snippet__title')
    public title: Elements.TextElement;

    @ElementDecorators.codename('basic_info_snippet__speaker')
    public speaker: Elements.TextElement;

    @ElementDecorators.codename('basic_info_snippet__am_or_pm_')
    public ampm: Elements.MultipleChoiceElement;

    @ElementDecorators.codename('basic_info_snippet__date_recorded')
    public dateRecorded: Elements.DateTimeElement;

    @ElementDecorators.codename('basic_info_snippet__description')
    public description: Elements.RichTextElement;

    @ElementDecorators.codename('video_id')
    public videoID: Elements.TextElement;
}