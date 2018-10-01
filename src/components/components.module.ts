import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PostComponent } from './post/post';
import { CommentsComponent } from './comments/comments';
import { CommentComponent } from './comment/comment';
import { CommonModule } from '@angular/common';
@NgModule({
	declarations: [PostComponent,
    CommentsComponent,
    CommentComponent],
	imports: [CommonModule],
	exports: [PostComponent,
    CommentsComponent,
    CommentComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
