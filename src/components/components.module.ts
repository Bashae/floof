import { NgModule } from '@angular/core';
import { PostComponent } from './post/post';
import { AppHeaderComponent } from './app-header/app-header';
import { CommentsComponent } from './comments/comments';
import { CommentComponent } from './comment/comment';
@NgModule({
	declarations: [PostComponent,
    AppHeaderComponent,
    CommentsComponent,
    CommentComponent],
	imports: [],
	exports: [PostComponent,
    AppHeaderComponent,
    CommentsComponent,
    CommentComponent]
})
export class ComponentsModule {}
